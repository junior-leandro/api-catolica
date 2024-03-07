const express = require('express');
const userRoute = require('./src/routes/user.route')
const app = express();

app.use("/soma", userRoute)

app.listen(3000);





// ROTA
// Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
// GET - Pega Info
// POST - Cria uma info
// PUT - Altera toda a info
// PATCH Altera Parte da Info
// DELETE - Apaga uma info

// Name - Um iddentificado da rota

// Function (Callback) - Responsavel por executar algum comando

/* app.get("/soma", (req, res) => {
    const soma = 1 + 1;

    res.send({soma: soma})
});
*/
