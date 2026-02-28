/**************************************************************************
 *  Objetivo: programa principal 
 *  Data:     27/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/
//tratar vazio, caracter invalido e barrar 0 e 1 





// importe da biblioteca
const readline = require('readline');

// cria objeto de entrada de dados 
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function coleta(){

    let teste
    entradaDeDados.question("Digite o nome do cliente : ", function (nomecliente){
        let nomeCliente = nomecliente;
        teste = nomeCliente
    )}
    return tes
}








function CalculoFatorial(numero){
    let num = Number(numero)
    let resultado = 1

    for(let cont = num; cont>0;cont--){

        resultado *=cont
    }
    
    return resultado
}

console.log(CalculoFatorial(5))

