import filtersJson from "../data/filters.json" assert { type: "json" };

import { validateArray, validateNumericArray } from "./utils.js";
/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
export const getSquares = (data = undefined) => {
  if (validateArray(data)) {
    let array = [];

    /*
    for (let index = 0; index < data.length; index++) {
      array[index] = Math.pow(data[index], 2);
    }
    */
    array = data.map((item) => item * item);
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

/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
export const orderData = (data = undefined) => {
  if (validateNumericArray(data)) {
    let asc = data.map((el) => el).sort();
    let desc = data
      .map((el) => el)
      .sort()
      .reverse();

    let object = {
      data,
      asc,
      desc,
    };
    return console.info(object);
  }
};

/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
export const deleteDuplicated = (data = undefined) => {
  if (validateArray(data)) {
    let cleanedArray = data.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    let object = {
      data,
      cleanedArray,
    };
    return console.info(object);
  }
};
/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
export const obtenerPromedio = (data = undefined) => {
  if (validateNumericArray(data)) {
    let promedio = data.reduce((accumulator, item, index, self) => {
      accumulator += item;
      if (index === self.length - 1) {
        return (accumulator / self.length).toFixed(2);
      } else {
        return accumulator;
      }
    });

    return console.info(`El promedio de ${data.join("+ ")} es ${promedio}`);
  }
};

export const filtrarData = () => {
  const { uiPermissions } = filtersJson;

  const data = [];

  uiPermissions.forEach((item) => {
    if (item.childrenList.length) {
      item.childrenList.forEach((item2) => {
        data.push({
          id: item2.idItem,
          label: item.label + " - " + item2.label,
        });
      });
    }
  });

  console.log("data ", data);
};
