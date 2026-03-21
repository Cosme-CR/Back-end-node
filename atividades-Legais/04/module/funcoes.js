const objL = require("./estadocidade.js")

//console.log(objL.listaDeEstados.sigla)



//objL.listaDeEstados.estados.forEach(function(teste){
//    console.log(teste.sigla)
//})

console.log("inicio prog")


//function getEstadoRegiao(regiao){
    
//}


function getEstadoRegiao (sg){
    // obj que sera o retorno
    let retorno = {regiao:sg, estados:[]}
    let statu = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){
        //se a regiao for igual o parametro da funcao  vai entrar aqui
        if(estad.regiao .toLowerCase() == sg.toLowerCase()){
            //console.log(estad.capital)
            //emcada loop que entrar no if vai criar um obj dentro do vetor
            retorno.estados.push({uf: estad.nome, descricao: estad.nome})
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}
console.log(getEstadoRegiao("SUL"))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCapitalEstado (sg){
    // obj vaizio que sera o retorno
    let retorno = {}
    let statu = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){
        //se a  sigla for igual o parametro da funcao  vai entrar aqui
        if(estad.sigla.toLowerCase() == sg.toLowerCase()){
            //console.log(estad.capital)
            //cria novos coisa dentro do obj e coloca os itens que estao no vetror
            retorno.uf        = estad.sigla
            retorno.descricao = estad.nome
            retorno.capital   = estad.capital
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}

///////////////////////////////////////////////////////////////////////////////////

function getDadosEstado (sg){
    // obj vaizio que sera o retorno
    let retorno = {}
    let statu = false
    
    //percorre o vetor estado 
    for(let estad of objL.listaDeEstados.estados){
        //se a  sigla for igual o parametro da funcao  vai entrar aqui
        if(estad.sigla.toLowerCase() == sg.toLowerCase()){
            //console.log(estad.capital)
            //cria novos coisa dentro do obj e coloca os itens que estao no vetror
            retorno.uf        = estad.sigla
            retorno.descricao = estad.nome
            retorno.capital   = estad.capital
            retorno.regiao    = estad.regiao
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{ return false }
}

///////////////////////////////////////////////////////////////

function getListaDeEstado(){
    //vai ser o contador
    let cont = 0
    //vetor auxiliar q vai receber as siglas dos estados
    let sigla = []
    // laco que vai percorrer o vetor estados q ta dentro do  obj listaDeEstado
    for(let est of objL.listaDeEstados.estados){
        //vetor sigla vai ta recendo a sigla do est.siglaa
        sigla.push(est.sigla)
        //so vai contar pra saber quantas siglas tem q é a qnt de estados 
        cont ++
    }
    //obj auxiliar no qual sera o retorno da função mandando a sigla com a qnt 
    let retorno = {
        uf: sigla,
        quantidade :cont, 
    }
    return retorno
}


