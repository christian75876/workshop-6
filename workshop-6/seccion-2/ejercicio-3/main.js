
const crearSumador = (num) => {
    let num2 = Number(prompt("Ingrese otro número"));
    if (isNaN(num2) || !/[1-9]/.test(num2)) {
        alert('Detectamos un error de digitación. Reinicia la pagina!!')
        crearSumador(num)
    }
    const crearSumador = (num2) => {
        let total = num + num2;
        return total;
    }
    return crearSumador;
}

let num = Number(prompt("Ingrese un número"));
if (isNaN(num) || !/[1-9]/.test(num)) {
    alert('Detectamos un error de digitación. Reinicia la pagina!!')
} else {
    crearSumador(num);
}

let sumaCinco = crearSumador(5);
console.log(sumaCinco(3))

/**Reflexión...
 * almacenan el valor asignado en otro espacio de memoria dedicado a la funcion!
 * Se debe tener cuidado con los clousure porque se van almacenando en la memoria local y se la terminan consumiendo!
 */