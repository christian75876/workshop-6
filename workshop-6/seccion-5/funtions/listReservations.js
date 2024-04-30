
export const createReservation = (room, client) => {
    let reservation = Object.assign({},room, client)
    message(reservation);
    return reservation
}

const message = ({name, number, priceNight, date, finalDate}) => {
    console.log(`Sr@ ${name}, se reservo la habitación numero ${number},cada noche tiene un precio de ${priceNight} desde la fecha: ${date} asta la fecha ${finalDate}`);
}