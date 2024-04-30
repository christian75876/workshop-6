import {selectRoom} from "./funtions/selectRoom";

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

getData()
  .then(({rooms, roomTypes}) => {
    selectRoom(rooms, roomTypes);
  })












    // .then(({ rooms, roomTypes }) => {
    // const userInput = prompt("Ingrese cuantas personas se van a alojar?");
    // let room = `Las habitaciones que son para ${userInput}`;
    // for (bed of roomTypes) {
    //   if (bed.capacity >= parseInt(userInput)) {
    //     room += `, ${bed.name}`;
    //   }
    // }
    // console.log(room);
    // let selectedRoom = prompt(
    //   "Ingrese el nombre de la habitacion que desea reservar"
    // );
    // return  [roomTypes, selectedRoom, rooms];
    // })
    // .then(([roomTypes, selectedRoom, rooms]) => {
    //   console.log(selectedRoom);
    //       let findRoom = 0;
    //     for (let i = 0; i < roomTypes.length; i++) {
    //         if (roomTypes[i].name === selectedRoom) {
    //           findRoom = roomTypes[i].id;
    //           console.log(findRoom);
    //           break;
    //         }
    //       }
    //       return [roomTypes, rooms,findRoom]
    // })
    // .then(([roomTypes, rooms, findRoom]) => {
    //   for (let i = 0; i < rooms.length; i++) {
    //     if(rooms[i].roomTypeId === findRoom && (rooms[i].availability === true)){
    //       rooms[i].availability = false
    //       console.log(rooms[i]);  
    //       break;
    //     }
    //   }
    // })











//   .then(([selectedRoom, roomTypes]) => {
//     
//     return findRoom;
//   })
//   .then((findRoom) => {
//     for (roomId in roomTypes) {
//       if (roomId.id === findRoom) {
//         console.log(roomId.name, roomId.priceNight);
//         break;
//       }
//     }
//   });
