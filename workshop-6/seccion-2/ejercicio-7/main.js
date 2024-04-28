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
    return console.log(caracteres)
}

let result = chars(input());




