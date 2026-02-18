/**************************************************************************
 *  Objetivo: 
 *  Data:     29/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


/**
 * meses ou em anos,
 * A fórmula para calcular o montante final M com juros compostos é:

M = C*(1+i)elevado a n

Onde:
C é o capital inicial.
i é a taxa de juros.
n é o tempo para pagamento que sempre deverá ser em meses.
 */

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

    //coleta nome do produto
    entradaDeDados.question("Digite o nome do Produto : ", function (produto) {
        let nomeProduto = produto;

        entradaDeDados.question("Digite o valor da Compra : ", function(compra){
            let valor = compra
        
            //taxa de juros
            entradaDeDados.question("Digite a taxa de juros : ", function (taxa) {
                let taxaJuros = taxa;
                let meses
                // seleão de meses ou anos
                console.log("O Parcelamento sera em meses ou anos  ")
                console.log("Digite 1 para anos ")
                console.log("Digite 2 meses ")
                entradaDeDados.question("selecione uma opção : ", function(selecao){
                    let select = selecao

                    //coleta de tempo
                    entradaDeDados.question("Digite em quantas vezes sera o pagamento : ", function(temp){
                        let tempo = temp
                        //tratamento verifica se esta vazio
                        if(nomeProduto == "" || nomeCliente == "" || taxaJuros == ""|| select == "" || tempo == ""){
                            console.log("ERRO: contem campo vazio ")
                        }else if(isNaN(nomeCliente) || isNaN(nomeProduto) || !isNaN(taxaJuros) || !isNaN(selecao) ||!isNaN(tempo) || !isNaN(valor)){
                            console.log("ERRO: caracter invalido no campo acima")
                        }
                        switch (select) {
                            case 1:

                                calcular();
                                
                                break;
                            case 2:

                                break;
                            default:
                                break;
                        }

                    })

                })
                    
            });
        })    
    });

});

function calcular(capital,taxa,meses) {
    let M
    M = ( capital*(1+taxa)**meses)
    return M;

}
