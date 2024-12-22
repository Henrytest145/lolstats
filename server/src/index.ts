import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { Request, Response } from "express";
import apiRoutes from "./routes/api";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
const app = express();
app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json

app.use("/api", apiRoutes);

if (process.env.NODE_ENV !== "development") {
	app.use(express.static(path.join(__dirname, "/client/dist")));
	app.get("*", (_:Request, res:Response) => {
		res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});