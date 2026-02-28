/**************************************************************************
 *  Objetivo: Contem todas as funcoes de validacao 
 *  Data:     26/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/
//tratar vazio, caracter invalido e barrar 0 e 1 

function validaFatorial(numero){
    let num = numero
    let retorno
    // valida se é um numero, maior que 1 e se nao esta vazio
    if(!isNaN(num) && num > 1 && num != ""){
        console.log("numero")
        retorno = true
    }else{
        retorno false
    }
    
    
    return retorno
}

function validaIMC(pes,altu){
    let peso = pes
    let altura = altu
    let retorno
    
    // valida se o peso e a altura é numero e se estao vazio
    if(!isNaN(peso) && !isNaN(altura) && peso != "" && altura != "" ){
        retorno = true
    }else{
        retorno false
    }
    
    return true
}



