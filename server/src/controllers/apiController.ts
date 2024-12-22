import { Request, Response } from "express";

export const getUser = (req:Request,res:Response) => {
    try {
        const { username } = req.params;
        const {tagName} = req.params;
        console.log(username,'+', tagName);
        res.status(200).json({message:`Respuesta exitosa: ${username} + ${tagName}`});
    } catch (error:unknown) {
        if (error instanceof Error) {
            console.log('Error en el getUser controller: ', error.message);
            res.status(500).json({message:"Error en el servidor"});
            
        } else {
            console.log('Error en el getUser controller: ', error);
            res.status(500).json({message:"Error desconocido en el servidor"});
        }
    }
}