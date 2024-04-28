console.log(`Evalue el siguiente codigo e interte determinar su ejecución.
                
            1.    console.log("Inicio del script");

            2.    setTimeout(() => {
                  console.log("Primer setTimeout");
                  }, 0);

            3.    setTimeout(() => {
                  console.log("Segundo setTimeout");
                  }, 0);

            4.    Promise.resolve("Promesa resuelta").then  
                  (console.log);

            5.    console.log("Fin del script");`);

const input = () => {
    let aux = prompt(`ingrese el orden en que se  ejecuta el codigo separado por coma`);
    if(!/^[1-5,]+$/.test(aux) || aux.length !== 9){
        alert('Ingresaste caracteres no validos o incompletos, vuelve a ingresar.');
        input();
    }else{
        return aux;
    }
}   

const chars = (string) => {
    const caracteres = string.split(',');
    return caracteres
}

let result = chars(input());
let orden = ['1','5','4','2','3'];
let errores = []

for(let i = 0; i < 5; i++){
    if(result[i] === orden[i]){
        console.log(`La posición ${i+1} es correcta!`);
    }else{
        errores.push(result[i]);
    }
}


const mensajes = (valor) => {
    switch(valor){
        case '1':
            return '1. En el codigo anteriormente 1.    console.log("Inicio del script"); esta es la primera tarea que se ejecuta debido a que syncrona y esta declarada primera! '
        case '2':
            return `2.    setTimeout(() => {
                console.log("Primer setTimeout");
                }, 0);
                esta es una función asincrona por lo cual se ejecutara luego de que las funciones sincronas se allan ejecutado, y tambien luego de que las promesas se allan resuelto!`
        case '3':
            return`3.    setTimeout(() => {
                console.log("Segundo setTimeout");
                }, 0);
                esta es una función asincrona por lo cual se ejecutara luego de que las funciones sincronas se allan ejecutado, y tambien luego de que las promesas se allan resuelto! en el orden de arriba hacia abajo`
        case '4':
            return `4.    Promise.resolve("Promesa resuelta").then  
            (console.log);
            esta es una funcion asincrona sin tiempo de latencia por lo cual se ejecutara luego de que no existan funciones syncronas a ejecutar!!`
        case '5':
            return ` 5.    console.log("Fin del script"); esta es ua funcion sincrona se ejecutara inmediatamente ingrese a la pila de ejecución en orden declarativo en el codigo!`
        default:
            alert('Suscedio un evento inesperado');
            break;
    }
}

let final = '';
if(errores.length > 0){
    let aux = '';
    for(error in errores){
        console.log(errores[error])
        let i = mensajes(errores[error]);
        aux+=i+`\n`;
    }
    alert(aux)
}else{
    console.log('Has acertado en todo!')
}