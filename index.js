// Jest -> Biblioteca para testes automatizados (no package.json foi trocado o conteúdo do comando test para jest)

/*Sobre as importações:
    Primeiro é importado os arquivos do node_modules
    Segundo é importado os arquivos internos da nossa aplicação
    Terceiro é colocado nossa lógica
*/
const express = require("express");

const router = require("./router");

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(8080, () => {
    console.log("App listening on http://localhost:8080");
})