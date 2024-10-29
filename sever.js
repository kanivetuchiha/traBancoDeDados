import express from 'express';
import pg from 'pg';
import cors from 'cors';

const app = express();
const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    password: "998449598",
    database: "projetoDB",
    host: "localhost",
    port: '5000',
});

app.use(cors()); 

app.get('/api/pessoas', async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM pessoas');
        res.json(result.rows);
    } catch (error) {
        console.error('Erro na consulta:', error);
        res.status(500).send('Erro ao acessar o banco de dados.');
    } finally {
        client.release();
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
