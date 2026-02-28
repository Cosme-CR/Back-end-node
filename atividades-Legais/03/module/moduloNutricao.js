/**************************************************************************
 *  Objetivo: Calculo e classificação de IMC 
 *  Data:     25/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


// funcao pra calcular o imc
function calculoIMC(pes,altu){
    // recebe os dados por parametro e converte em numero
    let peso = Number(pes)
    let altura = Number(altu)
    let resultado
    // realiza o calculo 
    resultado = (peso / (altura * altura))

    return resultado
} 

//  classifica o imc 
function clasificacaoIMC(valor){
    let imc = Number(valor)
    let resultado

    switch(true){
        case (imc < 18.5):
            resultado = "Abaixo do peso"
            break;
        case (imc >= 18.5 && imc <= 24.9):
            resultado = "Peso normal"
            break;
        case (imc >= 25 && imc <= 29.9):
            resultado = "Acima do peso (sobrepeso)"
            break;
        case (imc >= 30 && imc <= 34.9):
            resultado = "Obesidade I"
            break;
        case (imc >= 35 && imc <= 39.9):
            resultado = "Obesidade II"
            break;
        case (imc >= 40):
            resultado = "Obesidade III"
            break;
        default:

    }


    return resultado

}


module.exports ={
    calculoIMC,
    clasificacaoIMC,

}





