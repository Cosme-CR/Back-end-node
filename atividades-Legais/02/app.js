/**************************************************************************
 *  Objetivo: calculadora 
 *  Data:     14/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/

// importe da biblioteca
const readline = require('readline');
const { soma } = require('./module/calculo');

// cria objeto de entrada de dados 
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// coleta do valor 1 
entradaDeDados.question("Digite o primeiro valor : ", function (numero1) {
    // muda virgula pra ponto
    let valor1 = numero1.replace(',', '.')
    
    //coleta a operacao matematico 
    entradaDeDados.question("Digite a operação : ", function(opcao){
        let operacao = opcao.toLowerCase()

        // coleta o valor 2
        entradaDeDados.question("Digite o segundo valor : ", function(numero2){
            //muda virgula pra ponto 
            let valor2 = numero2.replace(',', '.')


            // importando o modulo de validação
            const valida = require("./module/validacao")
            let validar = valida.validar(valor1,operacao,valor2)

    
            if ( validar){
                // importa o modulo do calculo e manda as informacoes e ja printa o resultado 
                const calculadora = require("./module/calculo")
                console.log(calculadora.calculo(valor1, operacao,valor2))

            }else{
                console.log("ERRO: entrada de dados invalida")
            }


        })
    })
})








