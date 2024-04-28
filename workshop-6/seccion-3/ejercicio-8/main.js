const sumar = () => {
    let count = 0;

    const incrementar = () => {
        count ++;
        return count;
    }

    return incrementar;
}

const incremerarContador = sumar();

let continuar = true;
while(continuar){
    let eleccion = confirm('Desea sumar 1 al contador?');
    if(eleccion){
       alert(incremerarContador()); 
    }
    continuar = confirm('Desea continuar con la sumatoria??')
}