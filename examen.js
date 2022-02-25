//EJERCICIO 1: Colocar las condiciones necesarias para que se cumpla la salida en consola. (

var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (Math.sign(numero2) === 1) {
  console.log("numero2 es positivo");
}
if (Math.sign(numero1) === -1 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if (++numero1 != numero2) {
  console.log(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}

//EJERCICIO 2 El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5(escrito como 5!) es igual a 5! = 5 x 4 x 3 x 2 x 1 = 120 Utilizando la estructura crear un script que calcule la factorial de un número entero.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
//Coloco el numero del que quiere obtener el factorial
console.log(factorial(5));

//EJERCICIO 3:  Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function numPar(x) {
  if (x % 2 === 0) {
    return `${x} es un numero par`;
  } else {
    return `${x} es un numero impar`;
  }
}

console.log(numPar(100));

//EJERCICIO 4 : Definir una función determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”.

function palindromo(cadenaTexto) {
  cadenaTexto = cadenaTexto.replace(/\s*/g, "");

  return cadenaTexto === cadenaTexto.split(" ").reverse().join(" ");
}

console.log(palindromo("oso"));



//EJERCICIO 5. Objetos

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //Metodo
  getDetalles() {
    return this.nombre;
    return this.edad;
  }
}
console.log(new Persona("Marlene", 31));

class Estudiante extends Persona {
  constructor(nombre, edad, calificacion) {
    super(nombre, edad);
    this.calificacion = calificacion;
  }

  getDetalles() {
    super.getDetalles();
  }
}

class Profesor extends Persona {
  //Parametros por default
  constructor(nombre, edad, asignatura = "JS", nivel = "basico") {
    super(nombre, edad, edad);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
}

//Se crea un constructot que asigne el objeto profesor y el arrelo de estudiantes que pertenecen al grupo VOY EN EL PUNTO 4

class Grupo {
  constructor(profesor, promedio, estudiantes) {
    this.profesor = { profesor };
    this.promedio = promedio;
    this.estudiantes = [estudiantes];
  }
  getDetalles(){
    console.log(this.profesor, this.estudiantes);
} 

}

//Metodo calificar

function getRandom() {
  return Math.random() * 10;
}
console.log(getRandom());


let arregloEstudiantes = [
    {nombre : "Marlene",
     edad : 31},
     {nombre : "Lennin",
        edad : 31},
]

let profe = new Profesor("Severus", "58");

let grupo = new Grupo(arregloEstudiantes[1]);




//BONUS Escribe una function que genere todas las posibles combinaciones con las letras de dicho string. (La entrada la puede limitar a 3 letras).

let combinaciones = function (cadena) {
    let combinacionesPosibles = [];
  
    for (let i = 0; i < cadena.length; i++) {
      for (let j = i + 1; j < cadena.length + 1; j++) {
        combinacionesPosibles.push(cadena.slice(i, j));
      }
    }
    return combinacionesPosibles;
  };
  
  //Coloca una palabra
  console.log(combinaciones("Car"));
