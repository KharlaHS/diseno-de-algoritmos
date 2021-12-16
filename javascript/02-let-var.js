/*
Variable var se utilizaba anteriormente, son variables globales.
Variable let s una variable de contexto, sólo vive en un bloque
de código.
*/

var numero = 40;
console.log(numero); // 40

if(true) {
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 50

var texto = "Bootcamp Java";
console.log(texto); // Bootcamp Java

if(true) {
    let texto = "cohorte 8";
    console.log(texto); //cohorte 8
    let numeroFavorito = 76;
}

console.log(texto); // cohorte 8

/*la diferencia de var y let es que 
let es una variable local o de contexto
que esta delimitada 
dentro de los corchetes se esta declarando la variable
fuera de este es un alcance global y si se puede imprimir
let se utiliza para que las variables esten acotadas
y solo puedan estar en una parte del codigo
var en cambio se queda en la memoria del codigo
var es una variable global 
y puede ser llamada desde cualquier parte del código
let hace referencia a una variable local 
y sólo se puede acceder a ella desde el bloque 
en el que se encuentre
es decir afuera de { } es como si no existiera
 */
