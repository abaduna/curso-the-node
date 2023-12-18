const { error } = require("console")
const fs = require("fs")

// leer un archivo

console.log(`antes de leer este archivo `);

fs.readFile(`index.html`,`utf-8`,(err,contenido)=>{
    if (err) {
        console.error(err);
    
    }else{
        console.log(contenido);
    }
})

//
console.log(`despues de leer este archivo `);
//re nombrar un archivo

fs.rename(`main.html`, `index.html`,(err)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(`terminado`);
})
console.log(`despues  de cambiar el archivo `);
//Agregar contenido al final de un archivo

fs.appendFile(`index.html`,`<p>Hola</p>`,(err)=>{
    if (err) {
        console.log(`ocurio un error`);
        console.log(err);
        return
    }
    console.log(`terminado`);
})

// remplazar todos el constenid

fs.writeFile(`index.html`,`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.Js</title>
</head>
<body>
    <h1>Abaduna</h1>
    <p>Estoy aprendi node.js</p>
    <p>remplazado</p>
</body>
</html>`,(err)=>{
    
    if (err) {
      console.log(`OCURIO UN ERROR`);  
      return
    }
    console.log(`termiando`);
})
console.log(`despues  de agregar  a un  archivo `);
//Eliminar archivos

fs.unlink(`index2.html`,(err)=>{
    if (err) {
        throw err
    }
    console.log(`elimiando`);
})

console.log();