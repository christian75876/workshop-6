

console.log(`Examina este codigo e intenta adivinar si se pueden acceder a ellas:\njavascript
    // Global Scope
    var globalVariable = "Soy una variable global.";

    function testScope() {
      // Function Scope
      var functionVariable = "Soy una variable local.";

      if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
      }

      console.log("Dentro de la función:", functionVariable);
    }

    console.log("Fuera de la función:", globalVariable);
    testScope();`);

const input = (string) => {
    alert(`Estamos en el contesto \n\t"${string} Scope"\n `);
    const globalVariable = confirm('La variable "globalVariable"  es accesible desde este Scope?');
    const functionVariable = confirm('La variable "functionVariable" es accesible desde este Scope?');
    const blockVariable = confirm('La variable "blockVariable" es accesible desde este Scope?');
    return [globalVariable, functionVariable, blockVariable]
}

const global = () => {
    let [globalVariable, functionVariable, blockVariable] = input('Global')
    if (functionVariable) {
        alert('No as acertado en "funtionVariable" en este caso es una variable local y no es pocible acceder a ella desde el contexto global.')
    } else {
        alert('Has acertado, muy bien')
    }
    if (blockVariable) {
        alert('No as acertado en "BlockVariable" en este caso es una variable interna dentro de un bloque es una variable local!');
    } else {
        alert('Has acertado, muy bien')
    }
    if (globalVariable) {
        alert('As acertado esta es una "globalVariable" es una variable Global y puede ser accedida desde cualquier lugar del cogido!!!')
    } else {
        alert('Esta es una variable local y puede esta presente en todo el codigo interno!')
    }
}

const func = () => {
    let [globalVariable, functionVariable, blockVariable] = input('Functional')
    if (functionVariable) {
        alert('Has acertado en "funtionVariable" en este caso es una variable local y se puede acceder a ella desde el contexto interno de la funcion.')
    } else {
        alert('Lo lamento pero funtionVariable" en este caso es una variable local y se puede acceder a ella desde el contexto interno de la funcion.')
    }
    if (blockVariable) {
        alert('No as acertado en "BlockVariable" en este caso es una variable interna dentro de un bloque es una variable local!');
    } else {
        alert('Has acertado, muy bien')
    }
    if (globalVariable) {
        alert('Has acertado "globalVariable" esta es una variable Global y puede ser accedida desde cualquier lugar del cogido!!!')
    } else {
        alert('Esta es una variable local y puede esta presente en todo el codigo interno!')
    }
}

const block = () => {
    let [globalVariable, functionVariable, blockVariable] = input('Block')
    if (functionVariable) {
        alert('Has acertado en "funtionVariable" en este caso es una variable local y se puede acceder a ella desde el contexto interno de la funcion.')
    } else {
        alert('Lo lamento no as acertado la variable funtionVariable" en este caso es una variable local y se puede acceder a ella desde el contexto interno de la funcion.')
    }
    if (blockVariable) {
        alert('Has acertado en "BlockVariable" en este caso es una variable interna dentro de un bloque es una variable local y puedes aceder a ella!');
    } else {
        alert('Lo lamento "BlockVariable" en este caso es una variable interna dentro de un bloque es una variable local y puedes aceder a ella!');
    }
    if (globalVariable) {
        alert('Has acertado "globalVariable" esta es una variable Global y puede ser accedida desde cualquier lugar del cogido!!!')
    } else {
        alert('Esta es una variable local y puede esta presente en todo el codigo interno!')
    }
}

alert('Abre la consola y mira el codigo!');
global();
func();
block();