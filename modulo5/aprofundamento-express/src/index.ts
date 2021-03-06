import express from 'express';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => console.log('Server rodando na porta 3003'));

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
});
