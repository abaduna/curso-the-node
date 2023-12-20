const http = require(`http`)

// const servidor = http.createServer((req,res)=>{
//     //proceso
//     console.log(`solicitud nueva`);
//     res.end(`Hola mundo`)
// })

// const puerto = 3000

// servidor.listen(puerto,()=>{
//     console.log(`el servidor esta escuchando en el puerto ${puerto}`);
// })


//-*-*-*-*-*-*-*-*-*-*-*-*-*-**---*-*-*-*-*-*-*-*-*-*-*-


const servidor2 = http.createServer((req,res)=>{
    console.log(`==> req (solicitud)`);
    res.statusCode = 666
    console.log(res.statusCode);
    res.setHeader( )
    res.end(`Viendo res`)
})
servidor2.listen(3000,()=>{
    console.log(`el servidor esta escuchando en el puerto 3000`);
})