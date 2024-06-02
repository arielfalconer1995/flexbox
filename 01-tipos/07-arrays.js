//Los elementos de un array comienzan desde el número 0. Con lo cual si yo quiero acceder al primer elemento del array, debere pasarle el número 0.

let animales = ["chanchito", "caballo", "perro", "gato"];

console.log(animales);

//De esta forma se pasa el indice para mostrar el primer elemento que en este caso es "chanchito"

console.log(animales[0]);

//¿Como agregamos elementos?
//1. Utilizamos nuevamente el nombre de la variable, seguido de los corchetes y agregamos el nuevo indice.
animales[4] = "dragón";
console.log(animales);

//importante!!
//En el caso de pasar un indice que no tenga sentido por ejemplo:

animales[10] = "Pez";
console.log(animales);

//Veremos en la consola del navegador que nos va a indicar que tenemos un array de longitud 11 pero que tengo 5 espacios consecutivos vacíos y luego nos saldrá el ultimo elemento agregado "Pez".

//Ahora si intentamos imprimir un elemento vacío por ejemplo:

console.log(animales[7]);
console.log(typeof animales);

//Nos va a devolver el valor: undefined.
