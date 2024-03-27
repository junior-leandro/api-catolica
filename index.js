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
