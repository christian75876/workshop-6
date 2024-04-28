//Event Loop y web Apis
setTimeout(() => console.log('Mensaje 2: con timeout de 0 segundos'),0);
console.log('Mensaje 1: Inmediatamente');
setTimeout(() => console.log('MEnsjae 3: con timeout de 1 segundos'),1000);

/**Reflexión
 * Aunque se llame antes el mensaje 2. Este no se mostrara antes que el mensjae 1 varias razones:
 * - Mensaje 2 proviene de una función asincrona
 * - Mensaje 1 es sincrono por lo cual ingresa a la pila de ejución de forma inmediata.
 */