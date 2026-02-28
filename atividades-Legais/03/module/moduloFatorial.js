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

    for(let cont = num; cont>0;cont--){

        resultado *=cont
    }
    
    return resultado
}


