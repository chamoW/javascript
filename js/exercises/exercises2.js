/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

import { validateString } from "./utils.js";

export const invertString = (text="") => {
  if (validateString(text)) {
    let inverted = text.split("").reverse().join("");
    return inverted;
  }

  return false;
};

export const countRepeteadWord = (text="", word="") => {
  if (validateString(text) && validateString(word)) {
    let counter = 0;

    let words = text.trim().split(" ");

    for (let index = 0; index < words.length; index++) {
      if (word.trim() === words[index]) {
        counter++;
      }
    }

    console.info(`There are --${counter}-- ${word} IN ${text}`);
  }
};

export const validatePalindrom = (text="") => {
  if (validateString(text)) {
    let newText = text.split(" ").join("");

    let inverted = invertString(newText);

    if (newText.toLowerCase() === inverted.toLowerCase()) {
      console.info(`${text} is a palindrom`);
      return true;
    }

    console.info(`${text} NOT is a palindrom`);
    return false;
  }
};


export const deletePattern = (text="", pattern="") => {

    if (validateString(text) && validateString(pattern)) {
        let finder = new RegExp(pattern,"gi")
        let replaced = text.replace(finder, "");
        console.info(`${pattern} replaced in  ${text} is --${replaced}--`);
    }



}
