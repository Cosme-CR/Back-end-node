
const express = require("express")
const cors    = require("cors")

// criar um objeto pra manioular o express
const app = express()

const corsOptions ={
    origin:["*"],  //origem da requisisao podenendo ser um ip ou um * que significa todos
    methods:"GET", // metodos que serao liberados na api
    allowedHeaders:["Content-type", "Autorization"],//sao permissoes de cabecalho do cors
}
//configura as permisooes da api pelo cors
app.use(cors(corsOptions))

// response retornos da API
//request  sao chegada de dados da api

const estadCidade = require("./module/funcoes.js")


//criando ENDpoint para API
//cada endpoit retorna um json
app.get("/v1/senai/dados/estados", function(request,response){

    let estado = estadCidade.getListaDeEstado()
    //response.json({"message":"testando api"})
    response.json(estado)
    response.status(200)

})

app.get("/v1/senai/dados/estados/:uf", function(request,response){

    let sigla = request.params.uf
    let estado = estadCidade.getDadosEstado(sigla)
    response.json(estado)
    
    //console.log(request.params.uf) 
    response.status(200)
     

})

app.get("/v1/senai/dados/cidades",function(request, response){
    response.json({"mesg:": "testando api cidd"})
    response.status(200)
})







//serve pra iniciar a api
app.listen(8080,function(){console.log("api funcionando")})
