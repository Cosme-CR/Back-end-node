const express = require("express")
const app = express()

// importa suas funções
const funcoes = require("./funcoes")

// porta da API
const PORT = 3000

// rota: pegar cidades por UF
app.get("/cidades/:uf", (req, res) => {
    const uf = req.params.uf
    const resultado = funcoes.getCidades(uf)

    if (resultado) {
        res.json(resultado)
    } else {
        res.status(404).json({ erro: "UF não encontrada" })
    }
})

// rota: capitais do país
app.get("/capitais", (req, res) => {
    res.json(funcoes.getCapitalPais())
})

// rota: estados por região
app.get("/regiao/:nome", (req, res) => {
    const resultado = funcoes.getEstadoRegiao(req.params.nome)

    if (resultado) {
        res.json(resultado)
    } else {
        res.status(404).json({ erro: "Região não encontrada" })
    }
})

// rota: capital do estado
app.get("/capital/:uf", (req, res) => {
    const resultado = funcoes.getCapitalEstado(req.params.uf)

    if (resultado) {
        res.json(resultado)
    } else {
        res.status(404).json({ erro: "Estado não encontrado" })
    }
})

// rota: dados do estado
app.get("/estado/:uf", (req, res) => {
    const resultado = funcoes.getDadosEstado(req.params.uf)

    if (resultado) {
        res.json(resultado)
    } else {
        res.status(404).json({ erro: "Estado não encontrado" })
    }
})

// rota: lista de estados
app.get("/estados", (req, res) => {
    res.json(funcoes.getListaDeEstado())
})

// inicia servidor
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`)
})