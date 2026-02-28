/**************************************************************************
 *  Objetivo: calculo de media unuversitaria 
 *  Data:     26/02/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


 




function calculoMedia(n1,n2,n3,n4){
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let nota4 = Number(n4)
    
    let media = ((nota1 + nota2 + nota3 + nota4)/4)


    return media 

}

function geral(medi,nomProfe,nomAluno,sexoProf, sexoAlun,nomCurso, materia){
    let media         = medi
    let nomeProfessor = nomProfe
    let nomeAluno     = nomAluno
    let sexoProfessor = sexoProfe(sexoProf)
    let sexoAluno     = sexaluno(sexoAlun)
    let nomeCurso     = nomCurso
    let classificacao = classificaaluno(medi)

    

    switch(true){
        case (classificacao == "RECUPERAÇÂO"):
            




            break;
        case (classificacao == "APROVADO"):
            console.log(sexoAluno + nomeAluno + " foi " + classificacao + " na Disciplina " + materia)
            console.log("Curso " + nomeCurso)

            
            console.log("Media Final: " + media)
            console.log("Media final do Exame: Nao Nescessario")

            


            break;
        case (classificacao == "REPROVADO"):
             console.log(sexoAluno + nomeAluno + " foi " + classificacao + " na Disciplina " + materia)
            console.log("Curso " + nomeCurso)

            
            console.log("Media Final: " + media)
            console.log("Media final do Exame: Nao Apto")

            
            


            break;
        default:

        }


}



function classificaaluno(medi){
    let media Number(medi)
    let staus

      
    switch(true){
        case (media < 50):
            staus = "REPROVADO"
            break;
        case (media >= 50 && media <= 69):
            staus = "RECUPERAÇÂO"
            break;
        case (media >=70):
            staus = "APROVADO"
            break;
        default:

    }

    return staus
}




// verifica o sexo do sluno pra retornar aluno pu aluna

function sexaluno(tipo){
    let retorno

    if(tipo == "masculino"){
        retorno = "O aluno: "

    }else{
        retorno = "A aluna: "
    }
    return retorno

}


// verifica o sexo do professor pra retorar frofessor ou frofessora
function sexoProfe(tipo){
    let retorno

    if(tipo == "masculino"{
        retorno = "Professora "

    }else{
        retorno = "Professora: "
    }
    return retorno

}



















































































function CalculoFatorial(numero){
    let num = Number(numero)
    let resultado = 1

    for(let cont = num; cont>0;cont--){

        resultado *=cont
    }
    
    return resultado
}

console.log(CalculoFatorial(5))

