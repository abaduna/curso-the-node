const EventEmitter = require(`events`)

const emiserProducts = new EventEmitter()


emiserProducts.on(`compra`,()=>{
   console.log(`Se realizo una compa`);
})
// emiserProducts.emit(`compra`)
//-**************-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//PromiS

const promesaCumplida = false

const miPromesa = new Promise((resolve,reject)=>{
   setTimeout(() => {
       if (promesaCumplida) {
           resolve(`promesa cumplida`)
       }else{
           reject(`Promes rechazada`)
       }
   }, 3000);
})

// miPromesa.then((valor)=>{
//     console.log(valor);
// })

const manejarPromesaCumplida = (valor)=>{
   console.log(valor);
}
const manejarPromesaRechazada =(razonDelRechazo)=>{
   console.log(razonDelRechazo);
}
miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada)
//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
console.log(`----------------------------------------------------`);

const estatuPedido =()=>{
   return Math.random() <0.8
}

const miPeddidoDePizza = new Promise((resolve,reject)=>{
   setTimeout(() => {
       if(estatuPedido()){
           resolve(`pedido exitoso comida en camino`)
       }else{
           reject(`Ocurrio un error. por favor`)
       }
   }, 2000);
})

const manejarPedido = (mensajeDeCOnfirmacion)=>{
   console.log(`mensaje de confirmacion`);
}
const rechazarPedido =(mensajeDeError)=>{
   console.log(mensajeDeError);
}
miPeddidoDePizza.then(manejarPedido,rechazarPedido)
miPeddidoDePizza.then(manejarPedido).catch(rechazarPedido)
//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*--*-


miPeddidoDePizza
   .then((mensajeDeCOnfirmacion)=>{
       console.log(mensajeDeCOnfirmacion);
   })
   // .then(null,(mensajeDeError)=>{
   //     console.log(mensajeDeError);
   // })
   .catch((mensajeDeError)=>{
           console.log(mensajeDeError);
       })