


mostrarTema(`Node.js`)
setTimeout(mostrarTema,1500,"PYTHON")



setTimeout(sumar,2000,5455,65654)

console.log(`antes de setImmediate()`);

function mostrarTema(tema) {
    console.log(`Estoy aprendienod ${tema}`);
}
setImmediate(mostrarTema,`node.js`)
console.log(`luegp de setImmediate()`);


setInterval(mostrarTema, 1500,`Node.js`);


function sumar(a,b) {
    console.log(a+b);
}
setInterval(sumar, 1500,10,11);