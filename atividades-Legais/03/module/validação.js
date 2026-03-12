/**************************************************************************
 *  Objetivo: Contem todas as funcoes de validacao 
 *  Data:     26/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


 
////////////////////////////////////////////////////////////////////////////////////////
//valida osnumero pares

function validaImparPar (inicio,fim,opcao){

    let validaVazio = validaVazioImparPar(inicio,fim,opcao)
    let validaNum   = ValidaNumeroImparPar(inicio,fim,opcao)
    let validaRange = validaRangeImpaPar(inicio,fim, opcao)
    let retorno
    
    if(validaVazio && validaNum && validaRange){
        retorno = true
    }else{retorno = false}
    return retorno 
}


function validaVazioImparPar(n1,n2,n3){
    let retorno

    if(n1 != "" && n2 != "" && n3 != ""){
        retorno = true

    }else{
        retorno = false
    }

    return retorno
}

function ValidaNumeroImparPar(n1,n2,n3){
    
    let retorno

    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3)){
        retorno = true
    }else{
        retorno =false
    }
    return retorno
} 

function validaRangeImpaPar(inicio,fim,op){
    let numInicio = Number(inicio)
    let numFim    = Number(fim)
    let opcao     = Number(op)
    let retorno

    //  valida se o numero inicial é menor que o numero final
    if(numInicio < numFim ){
        // valida o range da tabuada 
        if(numInicio >= 0 && numInicio <=500 && numFim >= 100 && numFim <=1000 && opcao>=1 && opcao <= 2){
            retorno = true   
        }else{retorno = false}
    }else{ retorno = false}
    
    return retorno
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VALIDAÇÂO TABUADA


function validaTabuada(tComeco, tFim, nComeco, nFim){
    
    let validaVazio  = ValidaVazioTabuada(tComeco,tFim,nComeco,nFim)
    let validaNumero = ValidaNumTabuada(tComeco,tFim,nComeco,nFim)
    let validaRange  = VRangeTabuada(tComeco, tFim, nComeco, nFim)
    let retorno


    if(validaVazio && validaNumero && validaRange){
        retorno = true
    }else{
        retorno = false
    }
    
    return retorno

}

 

function ValidaVazioTabuada(n1,n2,n3,n4){
    let retorno

    if(n1 !="" && n2 !="" && n3 !="" && n4 !=""){
        retorno = true
    }else{
        retorno =false
    }
    return retorno

}


function ValidaNumTabuada(n1,n2,n3,n4){
    
    let retorno

    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)){
        retorno = true
    }else{
        retorno =false
    }
    return retorno
}   
  


function VRangeTabuada(Tinicio,Tfim,NComeco,NFim){
    let TabuadaInicio = Number(Tinicio)
    let TabuadaFim    = Number(Tfim)
    let NumComeco     = Number(NComeco)
    let NumFim        = Number(NFim)
    let retorno

    //  valida se o numero inicial é menor que o numero final
    if(TabuadaInicio < TabuadaFim && NumComeco < NFim){
        
        // valida o range da tabuada 
        if(TabuadaInicio >= 2 && TabuadaInicio <=100 && TabuadaFim >= 2 && TabuadaFim <=100){
            
            //valida o range do numero do calculo
            if(NumComeco >= 1 && NumComeco <=50 && NumFim >=1 && NumFim <=50 ){
                retorno = true

            }else{retorno =false}
        }else{ retorno = false}
    }else{retorno = false}
    
    return retorno

}







///////////////////////////////////////////////////////////////////////////////////////////////validação da universidade
//VALIDA UNIVERSIDADE 


function validaUniversidade(nomProfe,nomAluno,sexoProf,sexoAlun,nomCurso,materia,n1,n2,n3,n4){

    let valiCampVazio = validaVazioUniverdade(nomProfe,nomAluno,sexoProf,sexoAlun,nomCurso,materia,n1,n2,n3,n4)
    let valiSexo      = validaSexoUniverside(sexoAlun,sexoProf)
    let valiNum       = validaNumUniversidade(n1,n2,n3,n4)
    let valiRangeNota = validaRange(n1,n2,n3,n4)
    
    let retorno

    if (valiCampVazio && valiSexo && valiNum && valiRangeNota) {
        retorno = true
    }else{
        retorno = false
    }
    return retorno


}


function validaVazioUniverdade(nomProfe,nomAluno,sexoProf, sexoAlun,nomCurso, materia,n1,n2,n3,n4){
    let retorno

    if(nomProfe !="" && nomAluno !="" && sexoProf !="" &&  sexoAlun !="" && nomCurso !="" && materia !="" && n1 !="" && n2 !="" && n3 !="" && n4 !=""  ){
        retorno = true
    }else{
        retorno = false
        console.log("caiu no vazio")
    }
    return retorno
}
    
function validaSexoUniverside(sexoAlun,sexoProf){
    let sexoAluno     = sexoAlun
    let sexoProfessor = sexoProf
    let retorno
    
    if(sexoAluno == "f" || sexoAluno == "m" && sexoProfessor == "f" || sexoProfessor == "m"){
        retorno = true
    }else{
        retorno =false
        console.log("caiu no sexo")

    }
    return retorno
}

function validaNumUniversidade(n1,n2,n3,n4){

    if(
        !isNaN(Number(n1)) &&
        !isNaN(Number(n2)) &&
        !isNaN(Number(n3)) &&
        !isNaN(Number(n4))
    ){
        return true
    }else{
        console.log("Notas precisam ser números")
        console.log(n1,n2,n3,n4)
        return false
    }

}
function validaRange(n1,n2,n3,n4){

    let retorno
    
    if (n1>=0 && n1<=100 && n2>=0 && n2<=100 && n3>=0 && n3<=100 && n4>=0 && n4<=100) {
        retorno=true
    }else{
        retorno = false
        console.log("caiu no range")
    }
    return retorno
}



/////////////////////////////////////////////////////////////////////////////////////////////validação fatorial
//VALIDA FATORIAL
//tratar vazio, caracter invalido e barrar 0 e 1 
function validaFatorial(numero){
    let num = numero
    let retorno
    // valida se é um numero, maior que 1 e se nao esta vazio
    if(!isNaN(num) && num > 1 && num != ""){
        console.log("numero")
        retorno = true
    }else{
        retorno =false
    }
    
    
    return retorno
}
////////////////////////////////////////////////////////////////////////////////////////////
//
//vslidação IMC
function validaIMC(pes,altu){
    let peso = pes
    let altura = altu
    let retorno
    
    // valida se o peso e a altura é numero e se estao vazio
    if(!isNaN(peso) && !isNaN(altura) && peso != "" && altura != "" ){
        retorno = true
    }else{
        retorno =false
    }
    
    return retorno
}


module.exports = {
    validaIMC,
    validaFatorial,
    validaUniversidade,
    validaTabuada,
    validaImparPar,
}
