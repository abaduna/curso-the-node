const express = require(`express`)
const routerProgramacion = express.Router()

routerProgramacion.use(express.json())//convierte todos a JSON  Middleware




const {infoCuros} =  require(`./../cursos`)
const {progrmacion} = infoCuros
///reutilizar Routers
routerProgramacion.get(`/`,(req,res)=>{
    res.send(JSON.stringify(progrmacion) )
})


//curso de promgramaicon
routerProgramacion.get(`/:lenguaje`,(req,res)=>{
    const lenguaje = req.params.lenguaje
    const resultados = progrmacion.filter(curso =>curso.lenguaje ===  lenguaje)
    if (resultados.length == 0) {
        return res.status(404).send(`No se encontro resultados de ${lenguaje}`);

    }

    console.log(req.query.ordenar);
    if (req.query.ordenar === "vistas") {
       return res.send(JSON.stringify(resultados.sort((a,b)=>a.vius - b.vius)))
    }

    res.send(JSON.stringify(resultados))
})

routerProgramacion.get(`/:lenguaje/:nivel`,(req,res)=>{
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel
    const resultados = progrmacion.filter(curso =>curso.lenguaje ===  lenguaje &&curso.nivel === nivel )
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontro resultados de ${lenguaje} y el ${nivel}`);

    }

    res.send(JSON.stringify(resultados))
})


routerProgramacion.post('/',(req,res)=>{
    
     try {
     let cursoNew = req.body
     progrmacion.push(cursoNew)
     res.send(JSON.stringify(progrmacion))
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})
routerProgramacion.put(`/:id`,(req,res)=>{
    const cursoUpDate = req.body
    const id = req.params.id

    const indice = progrmacion.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        progrmacion[indice] = cursoUpDate
    }
    res.send(JSON.stringify(progrmacion))   
})


routerProgramacion.patch(`/:id`,(req,res)=>{
    const infoNew = req.body
    const id = req.params.id

    const indice = progrmacion.findIndex(curso => curso.id == id)
    if (indice >= 0) {
        const cursoModificar = progrmacion[indice]
        Object.assign(cursoModificar,infoNew)
    }
    res.send(JSON.stringify(progrmacion))})


routerProgramacion.delete(`/:id`,(req,res)=>{
    
    const id = req.params.id

    const indice = progrmacion.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        progrmacion.splice(indice,1)
    }
    res.send(JSON.stringify(progrmacion))
    })
module.exports = routerProgramacion