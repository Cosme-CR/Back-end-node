/**************************************************************************
 *  Objetivo: operacoes matematicas 
 *  Data:     18/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


// função responsavel por chamar a função de acordo com a opcao 
function calculo (n1, opcao, n2){
    let resultado

    switch (opcao) {
    case "soma":
        resultado = soma(n1,n2)                       
        break;
    case "subtracao":
        resultado = subtracao(n1,n2)
        break
    case "muiltiplicacao":
        resultado = muiltiplicacao(n1,n2)                       
        break;
    case "divisao":
        resultado = divisao(n1,n2)
        break
    default:
        break;
    }

    if(isNaN(resultado)){
        resultado = resultado
    }
    else{
        resultado = resultado.toFixed(2)
    }
    return resultado


}



function soma(numero1, numero2){
    let num1 = Number(numero1)
    let num2 = Number(numero2)
    let resultado

    resultado = num1 + num2

    return resultado
}

function subtracao(numero1, numero2){
    let num1 = Number(numero1)
    let num2 = Number(numero2)
    let resultado

    resultado = num1 - num2

    return resultado
}

function muiltiplicacao(numero1, numero2){
    let num1 = Number(numero1)
    let num2 = Number(numero2)
    let resultado

    resultado = num1 * num2

    return resultado
}

function divisao(numero1, numero2){
    let num1 = Number(numero1)
    let num2 = Number(numero2)
    let resultado
    
    if (num2 == 0) {
        resultado = "erro " 
    }else{
        resultado = num1 / num2
    }

    return resultado
}
 
module.exports = {
    calculo,
}

