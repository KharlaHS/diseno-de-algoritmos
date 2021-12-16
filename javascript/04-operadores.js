/* 

operadores aritmeticos nos sirven para hacer operaciones 

    + Sirve para sumar o concatenar
    - sirve para restar numeros
    * sirve para multiplicar 2 numeros
    % modulos nos sirve para obtener el residuo de una división
    / división nos sirve para dividir dos numeros;

 */

    const numero1 = parseInt(prompt("ingresa el numero 1"));  //el promt concatena el texto porque lo reconoce como texto
    const numero2 = parseInt(prompt("ingresa el numero 2"));  // el paseint se agrega al pompt para que haga el calculo

    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero2 * numero2;
    const division = numero1 / numero2;
    
    console.log(" Numero 1: " + numero1);
    console.log(" Número 2: " + numero2);
    console.log("suma: " + suma);
    console.log("resta:" + resta);
    console.log("multiplicacion: " + multiplicacion);
    console.log("division: " + division);
   
/*el  scope o contexto, es el espacio en el que puede vivir una variable
El block scope pues sería el contexto de un bloque { } en específico
a lo que hay dentro de los símbolos "{ }" se le llama bloque
*/