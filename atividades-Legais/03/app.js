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




// Função para coletar dados
function coleta() {
    return new Promise((resolve) => { // Encapsulando a função callback dentro do Promise
        entradaDeDados.question("Digite: ", (dado) => {
            resolve(dado); // Resolva a Promise com o dado coletado
        });
    });
}



console.log("digite um nome")
const teste1 = await coleta()
console.log("digite a idade")
const teste2 = await coleta()
console.log("nome "+ teste1+ "    idade :" +teste2)





function CalculoFatorial(numero){
    let num = Number(numero)
    let resultado = 1

    for(let cont = num; cont>0;cont--){

        resultado *=cont
    }
    
    return resultado
}


