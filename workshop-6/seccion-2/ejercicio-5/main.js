//Ejercicio 5: promesas y callbacks

const callback = () => {
    return console.log('Promise ok!')
}

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(true){
            resolve();
        }else{
            reject(console.log('Promesa Pailas'));
        }
    },2000)
})

const manejarAsincronia = (callback, promise) => {
    promise.then(callback).catch(error => console.error(error))
}

manejarAsincronia(callback,promise);