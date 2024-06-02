let nombre = "Homero";
let apellido = "Simpson";
let edad = 38;

/*
let personaje = {}; -> Esto es un objeto literal
console.log(personaje);

En la consola del navegador nos va a devolver llaves vacias. Pero con la caracteristica de estar vacio.
*/

let personaje = {
    nombre: "Homero",
    apellido: "Simpson",
    edad: 38,
};
console.log(personaje);

//¿Como  accedo a una sola propiedad?
//Se accede de la siguiente manera:
//Metodo 1. Colocar un punto "." despues del nombre de la objeto, que en este caso es "personaje" e indicar la propiedad a la que quiero acceder.

console.log(personaje.nombre);


//¿Existe otra forma? Si.
//Metodo 2. Colocar corchetes despues del nombre del objeto, seguido de comillas dobles o simples e indicar la propiedad a la que quiero acceder.

console.log(personaje["apellido"]);


//¿Como modifico una propiedad?
//Metodo 1. Indicar el objeto seguido de un punto "." luego indicar la propiedad a la que queremos modificar, que en este caso sería "edad"

personaje.edad = 40;


//Metodo 2. Indicar el objeto seguido de corchetes "[]" luego indicar la propiedad entre comillas simples o dobles a la que queremos modificar, que en este caso sería "edad".

personaje["edad"] = 37;

