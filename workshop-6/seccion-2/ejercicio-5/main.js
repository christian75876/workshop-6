//Ejercicio 5: promesas y callbacks

const callback = (result) => {
    if(result === 'ok'){
    return console.log('Promise ok!')
    }else{
        return console.log('La promesa no se cumplio desde MSN->callback');
    }
}

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(false){
            resolve('ok');
        }else{
            reject('promesa rechazada');
        }
    },1000)
})

const manejarAsincronia = (callback, promise) => {
    promise.then((result) => callback(result)).
    catch((error) => console.error(error))
    
}

manejarAsincronia(callback,promise);

/**
 * AL cambiar el tiempo de 2s a 5s pues el callback se va a ejecutar pasado los 5 segundos de la promesa
 * En caso de que la promesa no se cumpla lo que sucedera es que se aplicara el reject en este caso un mensaje por consola 'Promesa pailas'
 * 
 */