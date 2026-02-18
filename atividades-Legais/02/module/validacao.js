/**************************************************************************
 *  Objetivo: verificaçao e tratamento
 *  Data:     14/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/

// função principal de validacao ela que sera a responsavel por chamar as outras
function validar(n1,operacao,n2){
    let num1  = n1
    let opcao = operacao
    let num2  = n2
    // chamas as funcoes de validacao
    let vVazio      = validarVazio(num1,opcao,num2)
    let vNumero     = validarNumero(num1,num2)
    let vOperador   = validaOperacao(opcao)
    let vCsDecimal  = casasDecimais(num1,num2)
    let retorno 


    if(vVazio && vNumero && vOperador && vCsDecimal){
        retorno = true
    }else{
        retorno = false
    }
    return retorno
}


// função pra verificar se os campos estao vazios 
function validarVazio(n1,operacao,n2){
    let retorno

    if (n1 == "" || n2 == "" || operacao == ""){
        retorno = false
    }
    else{
        retorno = true
    }
    return retorno
}

// valida se os numeros digitado sao numeros mesmo 
function validarNumero(n1,n2){
    let num1 = n1
    let num2 = n2
    let retorno 

    if(isNaN(num1) || isNaN(num2)){
        retorno = false
    }else{
        retorno = true
    }

    return retorno
}

// valida se o operador é valido
function validaOperacao(operador){
    let = operadConvertido = operador
    let retorno 

    if (operadConvertido == "soma" || operadConvertido == "subtracao" || operadConvertido == "multiplicacao" || operadConvertido == "divisao"){
        retorno = true
    }else{
        retorno = false
    }

    return retorno
}

function casasDecimais(num1,num2){
    // conta quantos pontos tem em cada variavel
    let contagem1 = num1.split(".").length -1
    let contagem2 = num2.split(".").length -1
    let retorno 

    if(contagem1 <= 1 || contagem2 <= 2){
        retorno = true
    }else{
        retorno = false
    }
    return retorno
}


module.exports = {
    validar,


}