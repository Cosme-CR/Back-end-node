/**************************************************************************
 *  Objetivo: programa principal 
 *  Data:     27/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


// importe da biblioteca
const readline       = require('readline');
const valida         = require("./module/validação.js")
const calculaimc     = require("./module/moduloNutricao.js")
const calculoT       = require("./module/moduloTabuada.js")
const calculoF       = require("./module/moduloFatorial.js")
const imparP         = require("./module/moduleIparPar.js")
const calcNota       = require("./module/moduloUnivrsidade.js")   


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


// usar o await precisa estar dentro de uma função async
async function main(){

    console.log("|--------------------------------------------|")
    console.log("|*************Escolha uma Opção**************|")
    console.log("|1 - IMC                                     |")
    console.log("|2 - MEDIA ESCOLAR                           |")
    console.log("|3 - TABUADA                                 |")
    console.log("|4 - FATORIAL                                |")
    console.log("|5 - IMPAR ou PAR                            |")
    console.log("|6 - LIMPAR TELA                             |")
    console.log("|7 - SAIR                                    |")
    console.log("|--------------------------------------------|")




    let opcao = await coleta();

    switch (opcao){

        case "1":
            console.log("|--------------------------------------------|")
            console.log("|                                            |")
            console.log("|*****************CALCULO IMC****************|")
            console.log("|                                            |")
            console.log("|--------------------------------------------|")
            console.log("")
            console.log("digite sua altura: ")
            let altura = await coleta()
            console.log("digite seu peso: ")
            let peso   = await coleta()
            let validar1 = valida.validaIMC(peso,altura)
            if(validar1){
                console.log("cauy")
                let imc = calculaimc.calculoIMC(peso,altura)
                console.log("seu IMC é :", imc.toFixed(2))   
                console.log("e vc esta ",calculaimc.clasificacaoIMC(imc))
            }else{console.log("erro dado invalido")}
             main()
            //codigo
            break;
        case "2":
            console.log("|--------------------------------------------|")
            console.log("|                                            |")
            console.log("|*************CALCULO DE NOTAS***************|")
            console.log("|                                            |")
            console.log("|--------------------------------------------|")
            console.log("")
            console.log("digite o nome do professor")
            let nomeProf = await  coleta()

            console.log("digite o nome do aluno")
            let nomeAlu  = await coleta()

            console.log("digite o sexo do professor")
            console.log("masculino ou feminino")
            let sexProf = await coleta()

            console.log("digite o sexo do aluno")
            console.log("masculino ou feminino")
            let sexAlun = await coleta()
            
            console.log("digite o nome do Curso")
            let nomCurso = await coleta()

            console.log("digite a materia ")
            let materia = await coleta()

            console.log("digite a nota 1 ")
            let n1 = await coleta()

            console.log("digite a nota 2 ")
            let n2 = await coleta()

            console.log("digite a nota 3 ")
            let n3 = await coleta()

            console.log("digite a nota 4 ")
            let n4 = await coleta()

            let valida2 = valida.validaUniversidade(nomeProf,nomeAlu,sexAlun,sexProf,nomCurso,materia,n1,n2,n3,n4)
            if (valida2) {
                
                let exame
                let medi = calcNota.calculoMedia(n1,n2,n3,n4)
                if(medi >= 50 && medi <= 69){
                    console.log("ficou de exame digite a noita do exame")
                    exame = await coleta()
                }

                calcNota.geral(exame, medi,nomeProf,nomeAlu,sexProf,sexAlun,nomCurso,materia,n1,n2,n3,n4)            
            }else{console.log("erro")}
            main()
        
            break;
        case "3":
            console.log("|--------------------------------------------|")
            console.log("|                                            |")
            console.log("|**************CALCULO TABUADA***************|")
            console.log("|                                            |")
            console.log("|--------------------------------------------|")
            console.log("")
            console.log("Digite a Tabuada de Inicio: de 2 a 100")
            let tInicio = await coleta()
            console.log("Digite a Tabuada de Fim: maior que a inicial e de 2 a 100")
            let tfim = await coleta()
            console.log("Digite o numero de Inicio: de 1 a 50")
            let nComeco = await coleta()
            console.log("Digite o numero de Termino: de 1 a 50")
            let Nfim = await coleta()

            let validar3 = valida.validaTabuada(tInicio,tfim,nComeco,Nfim)

            if (validar3) {
                calculoT.calculoTabuada(tInicio,tfim,nComeco,Nfim)
                
            }else{console.log("Erro Problema com os valores de entrada")}
             main()
            break;
        case "4":
            console.log("|--------------------------------------------|")
            console.log("|                                            |")
            console.log("|**************CALCULO FATORIAL**************|")
            console.log("|                                            |")
            console.log("|--------------------------------------------|")
            console.log("")
            console.log("Digite o Numero ")
            let fatorial = await coleta()
            let valida4 = valida.validaFatorial(fatorial)
            if(valida4){
                console.log(calculoF.CalculoFatorial(fatorial))
               
            }else(console.log("entrada invalida"))
             main()
            //codigo 

            break;
        case "5":
            console.log("|--------------------------------------------|")
            console.log("|                                            |")
            console.log("|******************IMPAR PAR*****************|")
            console.log("|                                            |")
            console.log("|--------------------------------------------|")
            console.log("")
            console.log("digite o numero inicial de 0 a 500")
            let numI = await coleta()
            console.log("digite o numero final maior que o anterior 100 a 1000")
            let numF = await coleta()
            console.log("1 Numeros PAR \n2 Numeros IMPAR")
            let op = await coleta()
            let valida5 = valida.validaImparPar(numI,numF,op)
            if (valida5) {
                imparP.imparPar(numI,numF,op)
                
            }else{console.log("entrada invalida")}
             main()

            break;
        case "6":
            //codigo 
            console.clear()
            main()
            break;
        case "7":
            console.log("|--------------------------------------------|")
            console.log("|                                            |")
            console.log("|***********PROGRAMA FINALIZADO**************|")
            console.log("|                                            |")
            console.log("|--------------------------------------------|")

            entradaDeDados.close()
            break;
        default:
            console.log("|--------------------------------------------|")
            console.log("|                                            |")
            console.log("|*******a opção : "+opcao+" é invalida**************|")
            console.log("|                                            |")
            console.log("|--------------------------------------------|")
            main()

    }

}

main();
