const express = require(`express`)

const routerMatematica = express.Router()

const  {Matematicas}  =  require(`../cursos`).infoCuros 

routerMatematica.get(`/`,(req,res)=>{
    res.send(JSON.stringify(Matematicas) )
})


//curso de matematica
routerMatematica.get(`/:tema`,(req,res)=>{
    const tema = req.params.tema
    const resultados = Matematicas.filter(mate =>mate.tema ===  tema)
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontro resultados de ${tema}`);

    }
    res.send(JSON.stringify(resultados))
})

module.exports = routerMatematica