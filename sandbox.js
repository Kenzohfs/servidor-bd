// Este é um arquivo de testes;
const crud = require("./crud");

// async function salvarDado() {
//     const savedData = await crud.save("Pessoas", "7U36ftZW8febuTVhP2Fi",
//         { nome: "Kenzo", sobrenome: "Sato", idade: 17 });
//     console.log(savedData);
// }

// salvarDado();

//também é possível fazer isso sem o const daí
// .then(resultado => {
//     console.log(resultado);
// })

// async function buscarDados() {
//     const dados = await crud.get("Pessoas");
//     console.log(dados);
// }

// buscarDados();

async function buscarDadoId() {
    const dados = await crud.getById("Pessoas", "3jJdriJs1449GtfWbcEY")
    console.log(dados);
}

async function deletar() {
    const dados = await crud.remove("Pessoas", "3jJdriJs1449GtfWbcEY");
    console.log(dados);
}

deletar();