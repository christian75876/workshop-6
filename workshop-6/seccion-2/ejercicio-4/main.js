
console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }

  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }

  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }

  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };

  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());

  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

  /**Reflexión
   * Al llamar a una funcion declarada antes de su declaración, va a ser inicializada, ya que al estar declarada esta sube a la hoistin de forma syncrona.
   * con las funciones expresadas pasa lo contrario no pueden ser llamadas antes de su inicialización debido a que estas son asicronas y solo seran cargadas cuando sean llamadas.
   * al ser llamadas ambas funciones al tiempo antes de ser declaras la funcion expresada arroja un error que en este caso lo captura el catch mostrando el mensaje capturado
   * Hay que tener cuidado cuando y donde se llaman las funciones, asi como donde son almacenadas y no abusar del espacio de memoria debido a que esto puede afectar directamente la ejecución y velocidad de nuestra aplicación
   */