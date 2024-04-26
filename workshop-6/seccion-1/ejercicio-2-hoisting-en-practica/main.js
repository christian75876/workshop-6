

alert(```javascript
// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};
```)

let choise = prompt('Que crees que sucedera?? CUENTAME!!');

let select = (`El codigo funcionara de forma correcta e imprimira 
                Valor de a:" 1
                Valor de b:" 2
                Valor de c:" 3
                Resultado de funcionDeclarada: Función declarada ha sido llamada.
                Resultado de funcionExpresada: Función expresada ha sido llamada.

`)
if (select) {
    alert('Lamento decirte que el codigo no funionara debido a que no puedes hacer una llamada a una variable si antes estar declarada, por lo cuale sl codigo se rompera! otro error presentado la concatenacion de las variables y/o funciones');
} else {
    alert('Correcto eres un KRACK')
}


