import { validateArray, validateNumericArray } from "./utils.js";
/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
export const getSquares = (data = undefined) => {
  if (validateArray(data)) {
    let array = [];

    for (let index = 0; index < data.length; index++) {
      array[index] = Math.pow(data[index], 2);
    }

    return console.info(`${data} squares is ${array}`);
  }
};

/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

export const getMaxAndMin = (data = undefined) => {
  if (validateNumericArray(data)) {
    let array = [];
    /*
    data.sort((a, b) => a - b);

    array[0] = data[0];
    array[1] = data[data.length - 1];
*/
    array[0] = Math.max(...data);
    array[1] = Math.min(...data);
    return console.info(`From ${data} max and min are: ${array}`);
  }
};

/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

export const getParImpar = (data = undefined) => {
  if (validateNumericArray(data)) {
    let indexPar = 0;
    let indexImPar = 0;
    let arrayPar = [];
    let arrayImpar = [];
    /*
    for (let index = 0; index < data.length; index++) {
      let element = data[index];

      if (element % 2 === 0) {
        arrayPar[indexPar] = element;
        indexPar++;
      } else {
        arrayImpar[indexImPar] = element;
        indexImPar++;
      }
    }
    */

    arrayPar = data.filter((num) => num % 2 === 0);
    arrayImpar = data.filter((num) => num % 2 === 1);

    return console.info(
      `From ${data} pairs are: ${arrayPar} and impars are: ${arrayImpar}`
    );
  }
};
