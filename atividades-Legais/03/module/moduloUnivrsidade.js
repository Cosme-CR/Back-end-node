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
function geral(ntf, medi, nomProfe, nomAluno, sexoProf, sexoAlun, nomCurso, materia, n1, n2, n3, n4) {
    let media = Number(medi);
    let nomeProfessor = nomProfe;
    let nomeAluno = nomAluno;
    
    let sexoProfessor = sexoProfe(sexoProf);
    let sexoAluno = sexaluno(sexoAlun);
    let nomeCurso = nomCurso;
    let classificacao = classificaaluno(media);

    switch (classificacao) {
        case "RECUPERAÇÃO":
            //nota final doexame
            let nota = Number(ntf)

                if (ntf != "" && !isNaN(ntf) && nota >= 0 && nota <= 100) {
                    let mediaFinal = ((nota + media) / 2);
                    let status = mediaFinal >= 60 ? "APROVADO" : "REPROVADO";
    
                    console.log(`${sexoAluno} ${nomeAluno} foi ${status} na Disciplina ${materia}`);
                    console.log("Curso: " + nomeCurso);
                    console.log(sexoProfessor+ nomeProfessor)
                    console.log(`Notas: ${n1}, ${n2}, ${n3}, ${n4}`);
                    console.log("Média Inicial: " + media);
                    console.log("Média Final (com Exame): " + mediaFinal);
                }else{
                    console.log("nota do exame invalido")
                }


            
            break;

        case "APROVADO":
            exibirRelatorio(sexoAluno, nomeAluno, "APROVADO", materia,sexoProfessor, nomeProfessor, nomeCurso, n1, n2, n3, n4, media, "Não Necessário");
            break;

        case "REPROVADO":
            exibirRelatorio(sexoAluno, nomeAluno, "REPROVADO", materia,sexoProfessor, nomeProfessor, nomeCurso, n1, n2, n3, n4, media, "Não Apto");
            break;
    }
}

// Função auxiliar para evitar repetição de código 
function exibirRelatorio(sexo, nome, status, materia, sexoProfessor, nomeProfessor, curso, n1, n2, n3, n4, media, exame) {
    console.log(`${sexo} ${nome} foi ${status} na Disciplina ${materia}`);
    console.log(sexoProfessor+ nomeProfessor)
    console.log("Curso: " + curso);
    console.log(`Notas: ${n1}, ${n2}, ${n3}, ${n4}`);
    console.log("Média Final: " + media);
    console.log("Situação do Exame: " + exame);
}


function classificaaluno(medi){
    let media = Number(medi)
    let staus

      
    switch(true){
        case (media < 50):
            staus = "REPROVADO"
            break;
        case (media >= 50 && media <= 69):
            staus = "RECUPERAÇÃO"
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

    if(tipo == "masculino"){
        retorno = "Professor: "

    }else{
        retorno = "Professora: "
    }
    return retorno

}


module.exports = {
    calculoMedia,
    geral
}
