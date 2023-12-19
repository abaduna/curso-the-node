function ordenarProdocto(produc) {
    return new Promise((resolve,reject)=>{
        console.log(`Ordenado:${produc}`);
        setTimeout(() => {
            if (produc === `taza`) {
                resolve(`Ordenanod una taza con el logo`)
            }else{
                reject(`este producto no esta disponible actualmente`)
            }
        }, 2000);
    })

}

function procesarPedido(respuesta) {
    return new Promise((resolve,reject)=>{
        console.log(`procesando respuesta`);
        console.log(`la respuesta fue_ ${respuesta}`);
        setTimeout(()=>{
            resolve(`Gracias por su compra difrutaa tu producto`)
        },2000)
    })
}
// ordenarProdocto(`taza`)
//     .then(respuesta =>{
//         console.log(`Respuesta recivida`);
//         console.log(respuesta);
//         return procesarPedido(respuesta)
//     })
//     .then(respuestaProceso =>{
//         console.log(respuestaProceso);
//     })
//     .catch(error =>{
//         console.error(error);
//     })
    //--**********-*-*-*-*-*-*-*--**-*-*--*-**-*-*-**-*-*--**-*-*-*-*-
    console.log(`---------------------------------------------`);
//hacerlo en la tineda
    async function realizarPedido (product) {
        try {
        const respuesta = await ordenarProdocto(product)
        console.log(`Respuesta recibida`);
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada);            
        } catch (error) {
            console.error(error);
        }

    }
    realizarPedido(`taza`)