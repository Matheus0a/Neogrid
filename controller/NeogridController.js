const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 4000;

// Configuração do banco de dados MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'Neogrid',
};

// Middleware para análise de corpos de requisição no formato JSON
app.use(express.json());

// Criação da conexão com o banco de dados MySQL
const connection = mysql.createConnection(dbConfig);

// Conexão com o banco de dados MySQL
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados MySQL:', err);
    } else {
        console.log('Conexão bem-sucedida ao banco de dados MySQL');
    }
});

// Rota para listar todos os produtos
app.get('/api/produtos', (req, res) => {
    const query = 'SELECT * FROM produtos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar produtos:', err);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        } else {
            res.json(results);
        }
    });
});

// Rota para adicionar um produto
app.post('/api/produtos', (req, res) => {
    const { id, name, description, price, available_to_buy } = req.body;
    const query = 'INSERT INTO produtos (id, name, description, price, available_to_buy) VALUES (?, ?, ?, ?, ?)';
    const values = [id, name, description, price, available_to_buy];
    connection.query(query, values, (err) => {
        if (err) {
            console.error('Erro ao adicionar produto:', err);
            res.status(500).json({ error: 'Erro ao adicionar produto' });
        } else {
            res.status(201).json({ message: 'Produto adicionado com sucesso' });
        }
    });
});

// Rota para editar um produto
app.put('/api/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, available_to_buy } = req.body;
    const query = 'UPDATE produtos SET name = ?, description = ?, price = ?, available_to_buy = ? WHERE id = ?';
    const values = [name, description, price, available_to_buy, id];
    connection.query(query, values, (err) => {
        if (err) {
            console.error('Erro ao atualizar produto:', err);
            res.status(500).json({ error: 'Erro ao atualizar produto' });
        } else {
            res.json({ message: 'Produto atualizado com sucesso' });
        }
    });
});

// Rota para remover um produto
app.delete('/api/produtos/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM produtos WHERE id = ?';
    connection.query(query, id, (err) => {
        if (err) {
            console.error('Erro ao remover produto:', err);
            res.status(500).json({ error: 'Erro ao remover produto' });
        } else {
            res.json({ message: 'Produto removido com sucesso' });
        }
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
module.exports = app;