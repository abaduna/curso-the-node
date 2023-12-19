const curso = require(`./curso.json`)


console.log(typeof curso);

let infoCurso = {
    "title": "learnig node js",
    "numer-of-the-viws" : 6565,
    "NumLikes" : 21121,
    "tema":["algo","noide"],
    "public": true
}
console.log(infoCurso);


// cadena de carct en formamto json
// obj => string
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(typeof infoCursoJSON);
console.log(infoCursoJSON);

//Strig => obj
let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto);