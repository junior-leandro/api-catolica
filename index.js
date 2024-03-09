const express = require('express');
const app = express();
const conectDatabase = require("./src/database/db")

const userRoute = require('./src/routes/user.route');

const port = 3000;

conectDatabase()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port} `));





// ROTA
// Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
// GET - Pega Info
// POST - Cria uma info
// PUT - Altera toda a info
// PATCH Altera Parte da Info
// DELETE - Apaga uma info

// Name - Um iddentificado da rota

// Function (Callback) - Responsavel por executar algum comando

