/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

import { validateNumber, validateDate, validateArray } from "./utils.js";

export const getAleatorio = () => {
  return console.info(501 + Math.round(Math.random() * 99));
};

export const getFactorial = (value) => {
  if (validateNumber(value)) {
    let factorial = 1;
    for (let index = 1; index <= value; index++) {
      factorial *= index;
    }

    return console.log(`El factorial de ${value} es: ${factorial}`);
  }
};



