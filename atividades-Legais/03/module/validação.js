/**************************************************************************
 *  Objetivo: Contem todas as funcoes de validacao 
 *  Data:     26/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


 





///////////////////////////////////////////////////////////////////////////////////////////////validação da universidade
//


function validaUniversidade(nomProfe,nomAluno,sexoProf,sexoAlun,nomCurso,materia,n1,n2,n3,n4){




}





function validaVazioUniverdade(nomProfe,nomAluno,sexoProf, sexoAlun,nomCurso, materia,n1,n2,n3,n4){
    let retorno

    if(nomProfe =="" && nomAluno =="" && sexoProf == "" && sexoAlun == "" && nomCurso == ""&& materia =="" && n1=="" && n2 = "" && n3 == "" && n4 =="" ){
        retorno = false
    }else{
        retorno = true
    }
    return retorno
}
    
function validaSexoUniverside(sexoAlun,sexoProf){
    let sexoAluno     = sexoAlun
    let sexoProfessor = sexoProf
    let retorno
    
    if(sexoAluno == "feminino" || sexoAluno == "masculino" && sexoProfessor == "feminino" || sexoProfessor == "masculino"){
        retorno = true
    }else{
        retorno =false

    }
    return retorno
}

function validaNumUniversidade(n1,n2,n3,n4){
    
    let retorno

    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)){
        retorno = true
    }else{
        retorno =false
    }
    return retorno
}   
    
function validaRange(n1,n2,n3,n4){
    

    
    
    
    
    
}



/////////////////////////////////////////////////////////////////////////////////////////////validação fatorial
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
        retorno false
    }
    
    return retorno
}



