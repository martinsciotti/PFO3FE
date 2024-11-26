/* 1. CALCULAR EL AREA DE UN RECTANGULO */

function areaRectangulo(longitud, ancho) {
    return longitud*ancho;
}

console.log("//////////");
console.log("Ejercicio 1: calcular el area de un rectangulo");
console.log("//////////");

console.log("Solución 1: 5x3");
console.log(areaRectangulo(5, 3));

console.log("----------");

console.log("Solución 2: 8x3.5");
console.log(areaRectangulo(8, 3.5));

console.log("----------");

console.log("Solución 3: 1x10");
console.log(areaRectangulo(1, 10));


/*
Proceso de pensamiento:
El área de un rectángulo se calcula multiplicando la longitud por el ancho.
Diseñé la función para tomar estos dos parámetros y retornar el producto.
Los ejemplos elegidos verifican la fórmula básica para distintas dimensiones.
*/

/* 2. CONTAR PALABRAS EN UNA CADENA */

function contarPalabras(string) {
    return string.split(" ").length;
}

console.log("//////////");
console.log("Ejercicio 2: contar palabras en una cadena");
console.log("//////////");

console.log("Solucion 1");
console.log("'Humahuaca en un lugar copado'");
console.log("Cantidad de palabras: ", contarPalabras("Humahuaca es un lugar copado"));

console.log("----------");

console.log("Solucion 2");
console.log("'Javascript es muy divertido'");
console.log("Cantidad de palabras: ", contarPalabras("Javascript es muy divertido"));

console.log("----------");

console.log("Solucion 3");
console.log("'Me gustaría seguir aprendiendo mucho más acerca de esto'");
console.log("Cantidad de palabras: ", contarPalabras("Me gustaría seguir aprendiendo mucho más acerca de esto"));


/*
Proceso de pensamiento:
Para contar palabras, separé la cadena por espacios usando split(" ").
El resultado es un arreglo donde cada palabra es un elemento.
Contar los elementos del arreglo me da el número de palabras.
*/

/*3. INVERTIR UNA CADENA*/

function invertirCadena(string) {
    return string.split("")
    .reverse()
    .join("");
}

console.log("//////////");
console.log("Ejercicio 3: invertir una cadena");
console.log("//////////");

console.log("Solución 1");
console.log("Cadena a invertir: hola");
console.log("Cadena invertida: ", invertirCadena("hola"));

console.log("----------");

console.log("Solución 2");
console.log("Cadena a invertir: javascript");
console.log("Cadena invertida: ", invertirCadena("javascript"));

console.log("----------");

console.log("Solución 3");
console.log("Cadena a invertir: desarrollo frontend");
console.log("Cadena invertida: ", invertirCadena("desarrollo frontend"));

console.log("----------");

/*
Proceso de pensamiento:
Para invertir una cadena, la convertí en un arreglo de caracteres con split(""),
luego usé reverse() para invertirlo y finalmente join("") para volver a unirlo.
Los ejemplos verifican cadenas de distinta longitud y caracteres.
*/

/* 4. ENCONTRAR EL PALINDROMO*/

function esPalindromo(string) {
    const cadenaInvertida = string.split("").reverse().join("");
    return string === cadenaInvertida;
}

console.log("//////////");
console.log("Ejercicio 4: encontrar el palíndromo");
console.log("//////////");

console.log("Solución 1");
console.log("La palabra 'neuquen' es palíndromo? ", esPalindromo("neuquen"));
console.log("----------");

console.log("Solución 2");
console.log("La palabra 'reconocer' es palíndromo? ", esPalindromo("reconocer"));
console.log("----------");

console.log("Solución 3");
console.log("La palabra 'palindromo' es palíndromo? ", esPalindromo("palindromo"));
console.log("----------");

/*
Proceso de pensamiento:
Un palíndromo es igual al leerlo al derecho y al revés.
Primero invertí la cadena y la comparé con la original.
El resultado devuelve true si ambas coinciden, false de lo contrario.
Probé cadenas que son y no son palíndromos.
*/

/* 5. CREAR UN PROGRAMA PARA CONVERTIR LA EDAD DE UN PERRO A AÑOS HUMANOS*/

function edadCanina() {
    const edadPerro = prompt("Introduce la edad de tu perro: ");
    const edadHumana = edadPerro * 7;
    console.log("//////////");
    console.log("Ejercicio 5: convertir la edad de un perro a años humanos");
    console.log(`Tu perro tiene ${edadHumana} años humanos.`);
}

edadCanina();

/*
Proceso de pensamiento:
La conversión se basa en multiplicar la edad del perro por 7.
Usé prompt para obtener la entrada del usuario.
El mensaje final se muestra usando interpolación de cadenas.
*/
