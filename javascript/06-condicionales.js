/*
Las condicionales se utilizan para tomat decisiones dentro
de nuestro programa
 */

/*
if (condicion) {         documet.write hace que se imprima
    codigo               directamente en el html sin necesidad
    codigo               de verlo en la consola.
    codigo
} 
if lleva condicion (), else no lleva condicion
*/

let edad = parseInt(prompt("ingresa tu edad"));

if(edad >= 18 && edad < 30 ) {
    document.write(" Eres un joven" );
} else if (edad >= 30 && edad < 60) {
    document.write(" Eres un adulto ");
} else if (edad >= 60) {
    document.write(" Eres un adulto mayor ");
} else {
    document.write("eres un niñe ");
}

