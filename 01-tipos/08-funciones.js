//¿Que son las funciones?

//Podemos pensar en las funciones como un listado de instrucciones que deben ejecutarse.

//¿Como se usan?
//Paso 1. Para utilizar las funciones primero hay que utilizar la palabra reservada de function.

//Paso 2. Luego hay que nombrar nuestra función. En este caso se va a llamar "saludar". Utilizaremos también parentesis para indicarle a js que esta es una función.

//Paso 3. Despúes colocamos llaves. Con esto creamos una variable llamada "saludar", la cual vamos a poder referenciar en un futuro.

//Dentro de las llaves puedo colocar mi codigo para trabajar. En este caso utilizo el console.log('Hola mundo');

function saludar() {
    console.log('Hola mundo');
}

//Ahora para poder llamar a la función que he creado, debo escribir su nombre. Luego en la consola del navegador nos va a salir el texto de Hola mundo.

saludar();

//Ahora cuando nosotros hacemos uso de la palabra reservada de function, lo que indiquemos a la derecha de esta palabra reservada, lo va a tomar como el nombre de esta funcion. Ese es el nombre que debemos escribir para poder ejecutar toda la porción de codigo que nosotros hayamos declarado entre medio de las llaves.

//La palabra reservada return nos va a permitir reutilizar código que se encuentre dentro de las funciones.

function suma() {
    return 2 + 2;
}

//Metodo 1. Para poder utilizar el valor de 2 + 2, debemos crear la siguiente variable que será igual a la ejecución de la función suma.

//let resultado = suma ();

//Luego imprimimos la variable resultado con:

//console.log(resultado);

//En la consola del navegador, vamos a avisualizar el resultado de la operación suma.



//Metodo 2. En vez de hacer todo el paso del metodo 1. podemos hacer lo siguiente.

console.log(suma());

//De esta manera llegamos al mismo resultado