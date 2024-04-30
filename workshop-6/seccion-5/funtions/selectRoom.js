const selectRoom = (rooms, roomTypes) => {
    const userInput = prompt("Ingrese cuantas personas se van a alojar?");
    const availableRooms = getAvailableRooms(userInput, roomTypes);
    console.log(`Las habitaciones disponibles para ${userInput} personas son: ${availableRooms}`);

    const selectedRoom = prompt("Ingrese el nombre de la habitación que desea reservar");
    const roomTypeId = findRoomTypeId(selectedRoom, roomTypes);
    let aux = reserveRoom(roomTypeId, rooms);
    return aux
};

const getAvailableRooms = (numPersons, roomTypes) => {
    const availableRoomNames = [];
    for (const roomType of roomTypes) {
        if (roomType.capacity >= parseInt(numPersons)) {
            availableRoomNames.push(roomType.name);
        }
    }
    return availableRoomNames.join(', ');
};

const findRoomTypeId = (roomName, roomTypes) => {
    for (const roomType of roomTypes) {
        if (roomType.name === roomName) {
            return roomType.id;
        }
    }
    return null; 
};

const reserveRoom = (roomTypeId, rooms) => {
    for (const room of rooms) {
        if (room.roomTypeId === roomTypeId && room.availability === true) {
            room.availability = false;
            console.log(`Habitación reservada:`, room);
            return room; 
        }
    }
    console.log("No se pudo reservar la habitación seleccionada."); 
};

export  {selectRoom};