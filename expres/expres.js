const express = require(`express`)

const app = express()

const {infoCuros} =  require(`./cursos`)



//Routers
const routerProgramacion = require("./routers/programacion")

app.use(`/api/curso/programacion`,routerProgramacion)

const routerMatematica = require("./routers/matematicas")

app.use(`/api/curso/matematica`,routerMatematica)


//Routing
app.get(`/`,(req,res)=>{
    res.send(`mi primer servidor. curso de expres y nodemon`)
})

app.get(`/api/curso`,(req,res)=>{
    res.send(JSON.stringify(infoCuros) )
})













//poner el puesto que se asigna por defecto
const PUERTO = process.env.PORT || 3000

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando por el puerto ${PUERTO}...`);
})