const express = require('express');
const fs = require('fs');
const app = express();

const advicesData = fs.readFileSync('./src/database/db.json');
const advices = JSON.parse(advicesData);

// Rota para obter um conselho aleatório
app.get('/', (req, res) => {
    // Escolha um conselho aleatório
    const randomAdvice = advices[Math.floor(Math.random() * advices.length)];

    // Retorne o conselho como JSON
    res.json({ id: randomAdvice.id, texto: randomAdvice.texto, versiculo: randomAdvice.versiculo });
});

// Porta em que o servidor será executado
const port = 3000;

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor está executando em http://localhost:${port}`);
});







/*
const express = require('express');
const app = express();
const conectDatabase = require("./src/database/db")

const userRoute = require('./src/routes/user.route');

const port = 3000;

conectDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port} `));

*/



// ROTA
// Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
// GET - Pega Info
// POST - Cria uma info
// PUT - Altera toda a info
// PATCH Altera Parte da Info
// DELETE - Apaga uma info

// Name - Um iddentificado da rota

// Function (Callback) - Responsavel por executar algum comando

