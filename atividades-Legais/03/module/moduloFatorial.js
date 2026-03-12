/**************************************************************************
 *  Objetivo: Calculo fatorial 
 *  Data:     25/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/
//tratar vazio, caracter invalido e barrar 0 e 1 


function CalculoFatorial(numero){
    let num = Number(numero)
    let resultado = 1
    let sequencia = ""
    for(let cont = num; cont > 0; cont--){
        //onde faz o calculo
        //aqui o resultado recebe cont multiplicado o
        resultado *= cont
        //parte estica onde sera guardado o cont e no if adicionado o x
        sequencia += cont

        // aqui so estetica pra aperecer a sequencia do numero com um x
        if(cont > 1){
            sequencia += "x"
        }
    }
    return `Fatorial de ${num} é ${sequencia} = ${resultado}`
}

module.exports = {
    CalculoFatorial
}