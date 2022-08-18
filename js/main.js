import welcome, { operations } from "./operations.js";

import {
  countCharacters,
  fromStringToArray,
  repeatText,
  subString,
} from "./exercises.js";
import { countRepeteadWord, deletePattern, invertString, validatePalindrom } from "./exercises2.js";

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