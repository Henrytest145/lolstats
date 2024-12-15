import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_, res) => {
    console.log('ping');
    res.send('sdadasdasd');
    
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
    
})