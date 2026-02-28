/**************************************************************************
 *  Objetivo: entrada de todos os dados
 *  Data:     27/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/



// importe da biblioteca
const readline = require('readline');

// cria objeto de entrada de dados 
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// coleta nome do cliente
entradaDeDados.question("Digite o nome do cliente : ", function (nomecliente) {
    let nomeCliente = nomecliente;


)}



///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////IMC//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////FATORIAL////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function coletaFatorial(){
    let numero

    console.log("Calculo Fatorial")
    entradaDeDados.question("Digite o Numero: ", function(num){
        numero= num
    })
    return numero

}
