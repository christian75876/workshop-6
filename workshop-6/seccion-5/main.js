import {selectRoom} from "./funtions/selectRoom.js";
import {makeReservation} from "./funtions/id.js";
import { createReservation } from "./funtions/listReservations.js";

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

getData()
  .then(({rooms, roomTypes}) => {
    let room = selectRoom(rooms, roomTypes);
    return room
  })
  .then((room) => {
    let reservation = createReservation(room,client);
    listReservations.push(reservation)
    return 
  })












