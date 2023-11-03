import { personas } from "./datos.js";


/**
 * Teoria de objetos
 */
const personaCompleta = {
  nombre: "Juan",
  edad: 30,
  casado: false,
  hijos: ['Pedro', 'Romina'],
  direccion: {
    calle: 'Sarmiento',
    numero: 45
  },
  verDatos: function() {
    console.log(`El nombre es: ${this.nombre} y su esdad es: ${this.edad}`);
  }
}

console.log(personaCompleta.nombre);
console.log(personaCompleta.hijos);
console.log(personaCompleta.direccion);

personaCompleta.nombre = "Pedro";  
personaCompleta.verDatos();

/**
 * no se puede llamar a una funcion dentro de un objeto
 * sin mencionar al objeto en si
 */
// verDatos(); 

// Ejemplo menos practico
const persona5 = ["Felipe", 65, false]

/**
 * Funciones trabajando con arreglo de personas
 */
function obtenerNombres(arrayPersonas) {
  for (let index = 0; index < arrayPersonas.length; index++) {
    const element = arrayPersonas[index];
    console.log(element.nombre);
  }
}
// obtenerNombres(personas);

function mayores(arrayPersonas, edadMayor) {
  for (let index = 0; index < arrayPersonas.length; index++) {
    const element = arrayPersonas[index];
    if (element.edad > edadMayor) {
      console.log(element.nombre);
    }
  }
}
// mayores(personas, 80);

function mayorQueYCasado(arrayPersonas, edadMayor, casado) {
  for (let index = 0; index < arrayPersonas.length; index++) {
    const element = arrayPersonas[index];
    if (element.edad > edadMayor && element.casado === casado) {
      console.log(element.nombre);
    }
  }
}

mayorQueYCasado(personas, 50, false)
