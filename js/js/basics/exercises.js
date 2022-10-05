import { validateString } from "./utils.js";

/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

/*
export function countCharacters(text) {
  if (validateString(text)) {
    console.info(`${text} has --${text.length}-- characters`);
  }
}
*/

export const countCharacters = (text = "") => {
  if (validateString(text)) {
    console.info(`${text} has --${text.length}-- characters`);
  }
};

export const subString = (text = "", count = undefined) => {
  if (validateString(text)) {
    count === undefined
      ? console.warn("No ingresaste la cantidad de caracteres a cortar")
      : console.log(
          `${text} with ${count} length is :  --${text.substring(0, count)} -- `
        );
  }
};

export const fromStringToArray = (text = "", separator = undefined) => {
  if (validateString(text)) {
    separator === undefined
      ? console.warn("No ingresaste el caracter separador")
      : console.log(
          `${text} separeted by  ${separator} is :  --${text.split(
            separator
          )}-- `
        );
  }
};

export const repeatText = (text = "", times = undefined) => {
  if (times === undefined)
    return console.warn("No ingresaste la cantidad de veces a repertir");
  if (times <= 0)
    return console.warn(`El numero de veces ${times} debe ser mayor a cero`);
  if (typeof times !== "number")
    return console.error(`El numero de veces ${times} debe un numero`);

  if (validateString(text)) {
    console.log(`${text} repeated   ${times} times is :`);
    for (let index = 1; index <= times; index++) {
      console.info(text);
    }
  }
};
