import {selectRoom} from "./funtions/selectRoom.js";
import { reservation } from "./funtions/id.js";

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

let client = reservation();
console.log(client);


getData()
  .then(({rooms, roomTypes}) => {
    let aux = selectRoom(rooms, roomTypes);
    
  })












