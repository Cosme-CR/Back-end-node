/**************************************************************************
 *  Objetivo: Calculo de numeros pares e impares  
 *  Data:     07/03/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


function imparPar(numeroComeco,NumeroFim,opcao){
    let numComeco = Number(numeroComeco)
    let numFim    = Number(NumeroFim)
    let op        = Number(opcao)
    let resultado

    //inicializando as variavel pra evitar erro na hora do ++
    let quantidade = 0

    //laço que vai contar do numero inicial ate o ultimo
    for(numComeco; numComeco <= numFim; numComeco++){
       
        // responsavel por pegar o resto dda divisao se for 1 é impar e se for zero é par 
        resultado = numComeco%2

        //caso 1 imprime os par e o caso 2 os impares
        switch(op){
            case 1 :
                if(resultado == 0){
                    console.log(numComeco)
                    quantidade++
                }
                break;
            case 2 :
                if(resultado == 1){
                    console.log(numComeco)
                    quantidade++
                }
                break;
        }
    }
    console.log("quantidade: "+quantidade)
} 



module.exports = {
    imparPar
}
