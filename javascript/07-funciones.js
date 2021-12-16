/*
las funciones nos sirven para escribir bloques d codigo 
que se puedan reutilizar
*/

/* 
palabra reservada, seguida de nombre de la funcion,
sguida de parentesis, seguida de llaves
 */

/*lo que esta dentro del parentesis
se llaman parametro 
function sumar (sólo se reciben datos) */

function sumar (numero1, numero2) {
    let suma = numero1 + numero2;
    document.write('<h1>'+ suma + '</h1>');
}

sumar(12, 12);
sumar(50, 8);
sumar(33, 12);

/*let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2;
document.write('<h1>'+ suma + '</h1>');

let numero3 = 23;
let numero4 = 2132;
let suma2 = numero + numero4;
document.write('<h1>'+ suma2 + '</h1>');*/
