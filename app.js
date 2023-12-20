const http = require(`http`)

const cursos = require(`./cursos`)

const servidor = http.createServer((req,res)=>{
    const {method} = req

    switch (method) {
        case `GET`:
            return manejarSolicitudGET(req,res)
            
        case `POST`:
            return manejarSolicitudPOST(req,res)
        default:
            res.statusCode = 501
            res.end(`el metodo usado no puede ser manejado por el sevidor ${method}`);
            break;
    }
})
function manejarSolicitudGET(req,res) {
    const path = req.url

    console.log(res.statusCode);

    if (path === `/`) {//200 ok por defecto
        res.writeHead(200,{
            "Content-type":"aplication/json"
        })
       return res.end(`welcomen to my  1ro server and API create whit node`)
    }else if(path === `/api/cursos`){
        res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCuros))

    }else if(path === `/api/cursos/programacion`){
        
        return  res.end(JSON.stringify(cursos.infoCuros.progrmacion))
        
    }else{
        res.statusCode = 404
        return res.end(`EL recurso solicitiado no existe `)
    }
}
function  manejarSolicitudPOST(req,res){
    const path = req.url
    if (path === `/cursos/promacion`) {


        let cuerpo = ``;

        req.on(`data`,contenidos =>{
            cuerpo+= contenidos.toString()
        })
        req.on(`end`,()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo)

            console.log(typeof cuerpo);

            console.log(cuerpo.title);

            res.end(`El servidor recibio una solocitur POST `)
        })
        
    }
}

const PUERTO = 3000
servidor.listen(PUERTO,()=>{
    console.log(`el servidor esta escuchando en el puerto ${PUERTO}`);
})