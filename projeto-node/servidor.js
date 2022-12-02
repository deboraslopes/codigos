
const http = require('http')

http.createServer((req, res) => {
    res.end("Olá, Mundo!");
}).listen (8080)


//Para rodar o projeto digite no terminal: node servidor.js
//Abrir o navegador e acessar: http://localhost:8080/