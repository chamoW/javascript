import welcome, { operations } from "./operations.js";

import {
  countCharacters,
  fromStringToArray,
  repeatText,
  subString,
} from "./exercises.js";
import { countRepeteadWord, deletePattern, invertString, validatePalindrom } from "./exercises2.js";
import { getAleatorio, getFactorial } from "./exercises3.js";
import { getYears } from "./exercises4.js";
import {  deleteDuplicated, filtrarData, getMaxAndMin, getParImpar, getSquares, obtenerPromedio, orderData } from "./exercises5.js";

console.group("OPERACTIONS");
welcome();
console.log(operations.sum(1, 3));
console.groupEnd("OPERACTIONS");

console.group("COUNT CHARACTERES");
countCharacters("Hola Mundo");
countCharacters();
countCharacters(1);
countCharacters({ name: "Wladimir" });
countCharacters([1, 2, 3]);
countCharacters("10,10");
countCharacters("Nelly Maribel Zhumi Chacon");
countCharacters("Amy Angelith Lopez Zhumi");
countCharacters("Wilson Wladimir Lopez Siguencia");
countCharacters("Jonathan Leonardo Lopez Siguencia");
countCharacters("Wilson Benjamin Lopez Pillajo");
console.groupEnd("COUNT CHARACTERES");

console.group("SUBSTRING CHARACTERES");
subString("Hola Mundo");
subString("Hola Mundo", 4);
subString("Hola Mundo", 40);
subString("Nelly Maribel Zhumi Chacon", 15);
console.groupEnd("SUBSTRING CHARACTERES");

console.group("FROM STRING TO ARRAY");
fromStringToArray("Wilson Wladimir");
fromStringToArray("Wilson Wladimir", "");
fromStringToArray("Wilson Wladimir", " ");
fromStringToArray("Wilson Wladimir", "/");
fromStringToArray({ name: "Wilson Wladimir" }, "/");
fromStringToArray("wladdylopez@hotmail.com", "@");
console.groupEnd("FROM STRING TO ARRAY");

console.group("TEXT REPEATED");
repeatText("Wladimir");
repeatText("Wladimir", 0);
repeatText("Wladimir", "ss");
repeatText("Wladimir", -1);
repeatText("Wladimir", 4);
repeatText("Marry", 1);
repeatText("Lopez", 13);
console.groupEnd("TEXT REPEATED");


console.group("TEXT REVERSED");
const validateForPrint = (text) =>{
  let inverted = invertString(text);
  if(inverted !== false){
    console.info(`${text} INVERTED is --${inverted}--`);
  }
}
validateForPrint("Wladimir");
validateForPrint();
validateForPrint("");
validateForPrint("Wilson Wladimir Lopez Siguencia");
validateForPrint("Nelly Maribel Zhumi Cachon");
validateForPrint("Amy Angelith Lopez Zhumi");
validateForPrint(null);
validateForPrint(undefined);


console.groupEnd("TEXT REVERSED");


console.group("REPETED WORD");
countRepeteadWord();
countRepeteadWord(null);
countRepeteadWord("veamos", null);
countRepeteadWord("veamos");
countRepeteadWord("veamos", "s");
countRepeteadWord("veamos", "veamos");
countRepeteadWord("veamos ", "veamos");
countRepeteadWord("veamos que sucede en veamos ", "veamos ");
countRepeteadWord("veamos que sucede en veamos que", "que");

console.groupEnd("REPETED WORD");


console.group("IS PALINDROM?");
validatePalindrom();
validatePalindrom(null);
validatePalindrom("");
validatePalindrom("prubilla");
validatePalindrom("asa");
validatePalindrom("Asa");
validatePalindrom("Ana lava lana");
console.groupEnd("IS PALINDROM?");


console.group("REPLACED WORD");
deletePattern();
deletePattern(null);
deletePattern("veamos", null);
deletePattern("veamos");
deletePattern("veamos", "s");
deletePattern("veamos", "veamos");
deletePattern("veamos ", "veamos");
deletePattern("veamos que sucede en veamos ", "veamos ");
deletePattern("veamos que sucede en veamos que", "que");
deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.groupEnd("REPLACED WORD");


console.group("ALEATORE NUMBER");
getAleatorio();
getAleatorio();
getAleatorio();
getAleatorio();
getAleatorio();
getAleatorio();
console.groupEnd("ALEATORE NUMBER");


console.group("FACTORIAL");
getFactorial()
getFactorial("")
getFactorial(-1)
getFactorial(0)
getFactorial(1)
getFactorial(2)
getFactorial(3)
getFactorial(4)
getFactorial(5)
console.groupEnd("FACTORIAL");


console.group("GET YEARS");
getYears()
getYears("")
getYears(1)
getYears(new Date(1986, 11,30 ))
getYears(new Date(1990, 6,15 ))
getYears(new Date(2021, 3,30 ))
console.groupEnd("GET YEARS");


console.group("array squares");
getSquares()
getSquares(1)
getSquares({number:1})
getSquares("1")
getSquares([1,2,3,4])
console.groupEnd("array squares");


console.group("array max and min");
getMaxAndMin()
getMaxAndMin(1)
getMaxAndMin({number:1})
getMaxAndMin("1")
getMaxAndMin([1,2,3,4])
getMaxAndMin([1, 4, 5, 99, -60])
getMaxAndMin([1,2,3,"SS"])
console.groupEnd("array max and min");



console.group("pairs and imparis");
getParImpar()
getParImpar(1)
getParImpar({number:1})
getParImpar("1")
getParImpar([2,2,4,4])
getParImpar([1, 4, 5, 99, -60])
getParImpar([1,2,3,"SS"])
console.groupEnd("pairs and imparis");


console.group("ORDER DATA");
orderData()
orderData({})
orderData(1)
orderData([])
orderData([2,3,"s"])
orderData([2,3, 54, 90, 0])
console.groupEnd("ORDER DATA");



console.group("DELETE DUPLICATED");
deleteDuplicated()
deleteDuplicated({})
deleteDuplicated(1)
deleteDuplicated([])
deleteDuplicated([2,3,"s", 2, 2])
deleteDuplicated([2,3, 54, 90, 0, 3, 0])
console.groupEnd("DELETE DUPLICATED");



console.group("OBTENER PROMEDIO");
obtenerPromedio()
obtenerPromedio({})
obtenerPromedio(1)
obtenerPromedio([])
obtenerPromedio([2,3,"s", 2, 2])
obtenerPromedio([2,3, 54, 90, 0, 3, 0])
obtenerPromedio([20,18,17, 20, 19])
console.groupEnd("OBTENER PROMEDIO");

console.group("FILTRAR DATA")
filtrarData()
console.groupEnd("FILTRAR DATA")
