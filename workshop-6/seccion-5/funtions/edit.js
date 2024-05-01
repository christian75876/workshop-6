export const searchReservations = (array) => {
  let found = prompt("Ingresa tu nombre para revisar tus reservaciones");
  let find = array.find((element) => element.name === found);
  console.log(find);
  let aux = menu(find, array);
  console.log(aux);
  return aux;
};

const menu = (element, array) => {
  let option = prompt(
    "Ingresa la opcion que deseas \n\t1. editar fechas\n\t2.Eliminar reserva\n\t3.Salir"
  );
  switch (option) {
    case "1":
      element.date = prompt("Ingresa la nueva fecha de ingreso");
      element.finalDate = prompt("Ingresa la nueva fecha de salida");
      break;
    case "2":
      array = array.filter((element) => element !== element);
      console.log(array);
      break;
    case "3":
      return array;
    default:
      alert("Ingresaste una opcion no valida");
  }
  return array;
};
