import { selectRoom } from "./funtions/selectRoom.js";
import { makeReservation } from "./funtions/id.js";
import { createReservation } from "./funtions/listReservations.js";
import { searchReservations } from "./funtions/edit.js";

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          console.log("Habitaciones", data.rooms);
          console.log("Tipo de habitaciones", data.roomTypes);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    }, 2000);
  });
};

let client = makeReservation();
const listReservations = [];

const aux = () => {
  getData()
    .then(({ rooms, roomTypes }) => {
      if(listReservations.length > 0) client = makeReservation();
      let room = selectRoom(rooms, roomTypes);
      return room;
    })
    .then((room) => {
      let reservation = createReservation(room, client);
      listReservations.push(reservation);
    })
    .then(() => {
      let continuar = confirm('Are you sure you want to continue');
      if (continuar) searchReservations(listReservations);
      
    })
    .then(() => {
      let continuar = confirm("llamar a la nueva función");
      if (continuar) aux();
    });
};

aux();