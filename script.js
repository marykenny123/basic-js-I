//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas 
// puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

/* NOTA - he dado intro para ver los comentarios que ya estaban para así leerlos en lineas más cortas en mi pantalla para no tener que páginar 
pero dejarlos para revisar al final y automáticamente de ha puesto con doble barra */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.
console.log('Hola soy tu consola y juntas vamos a aprender Javascript')


//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.
console.log('Bienvenida/o al bootcamp Femcoders de Factoria F5')


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la 
// consola.

let studentName = "Sara";
let age = 18;
let isAdult = true;
let examResults = null;
let examDate;
let dog = {breed: "labrador", color:"black"};
let hobbies = ["running", "painting", "art"]    ;
console.log(studentName + " " + age + " " + isAdult + " " + examResults + " " + examDate + " " + dog.breed + " " + dog.color + " " + hobbies);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 
const postres = ["helado", "tarta", "pastel"];
console.log(postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.
coderName = "Maria";
coderAge = 25;
const coder = [coderName, coderAge];
console.log(coder);


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.
console.log(typeof studentName + " " + typeof age + " " + typeof isAdult + " " + typeof examResults + " " + typeof examDate + " " + 
    typeof dog + " " + typeof hobbies);


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

let sum = 5 + 7;
console.log(sum);


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

let subtract = 30 - 14;
console.log(subtract);




//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

let multiply = 5 * 9;
console.log(multiply);




//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

let divide = 72 / 9;
console.log(divide);




//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable 
// e imprime en la consola para ver el resultado.

let number1 = 1;
let number2 = 2;
let sameNumber = number1 == number2;
console.log(sameNumber);




// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado 
// impreso en la consola sea true.

let compareNumbers = number1 < number2;
console.log(compareNumbers);


//Ejercicio 11: completa el ejercicio
//Realiza la operación de comparación que consideres para que el resultado en consola sea true


let num1 = 15;
let num2 = 20;

let comparacion = num2 > num1;
console.log(comparacion);


//Ejercicio 12: completa el ejercicio//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el 
// resultado en consola sea false sin usar el comparador de desigualdad
let num3 = 1;
let num3AsString = "1";
let result88 = num3 === num3AsString;
console.log(result88);


//Ejercicio 13: completa el ejercicio
// //Realiza la opración de comparación que consideres con las dos variables del ejercicio anterior para que el resultado 
// en consola sea true.
let result99 = (num3 !== num3AsString);
console.log(result99);


//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable 
// con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un 
// espacio entre tu nombre y apellido.

let firstName = "Mary";
let surname = "Kenny";
let fullName = (firstName + " " + surname);
console.log(fullName);


//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. 
// (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

res3 = a == 5 || b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
