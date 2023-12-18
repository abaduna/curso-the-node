 function saludo(name) {
    return `Hi ${name}`
}

function saludarHolaMundo() {
    return `HOLA MUNDO`
}

// module.exports.saludo = saludo
// module.exports.saludarHolaMundo = saludarHolaMundo

module.exports= {
    saludo:saludo,
    saludarHolaMundo:saludarHolaMundo
}