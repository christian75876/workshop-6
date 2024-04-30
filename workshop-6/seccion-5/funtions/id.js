
const booking = [];

const reservation = () =>{
    let name = prompt('Ingresa tu nombre para la reserva');
    let date = prompt('Ingresa la fecha de ingreso ejemplo: DD/MM/YYYY');
    let finalDate = prompt('Ingresa fecha final de la reserva ejemplo: DD/MM/YYYY');
    let ids = id.generarId();
    let dataClient = [name, date, finalDate, ids,];
    return dataClient;
}

const id = (() =>{
    function generarId (){
    let id = 0;
        id++;
        return id;
    }
    return {
        generarId
    }
})();

export {reservation}