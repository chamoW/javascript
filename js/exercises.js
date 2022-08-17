/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function validateString(text) {
  if (typeof text == "string") {
    return true;
  } else {
    console.log(`${text} "IT IS NOT A STRING!!!. It is a ${typeof text}`);
  }
}

export function countCharacters(text) {
  if (validateString(text)) {
    console.log(`${text} has --${text.length}-- characters`);
  }
}

export function subString(text, count) {
  if (validateString(text)) {
    let subString = text.substring(0, count);
    console.log(`${text} with ${count} length is :  --${subString}-- `);
  }
}

export function fromStringToArray(text, separator) {
  if (validateString(text) && validateString(separator)) {
    let newArray = text.split(separator);

    console.log(`${text} separeted by  ${separator} is :  --${newArray}-- `);
  }
}
export function repeatText(text, times) {
  if (validateString(text)) {
    console.log(`${text} repeated   ${times} times is :`);
    for (let index = 1; index <= times; index++) {
      console.log(text);
    }
  }
}
