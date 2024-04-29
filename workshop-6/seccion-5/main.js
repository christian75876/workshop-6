
const getData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            fetch('data.json').
         then(response => response.json()).
         then(data => {
            console.log('Habitaciones', data.rooms);
            console.log('Tipo de habitaciones', data.roomTypes)
            resolve(data) 
         }).
         catch((error) => {
            console.error(error)
            reject(error) 
         });
        },2000)
    });
}

getData()
.then(({rooms, roomTypes}) => {
    const userInput = prompt('Ingrese cuantas personas se van a alojar?');
    for (bed of roomTypes){
        if(bed.capacity >= parseInt(userInput)){
            console.log(`Las habitaciones que cumplen con ese criterio son ${bed.name}`)
        }
    }
    
    
})