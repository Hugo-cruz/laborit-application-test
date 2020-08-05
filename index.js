const express = require('express');
const server = express();

server.listen(3000);

server.get('/teste_inicial', () => {
    console.log("Node inicializado com sucesso");
})