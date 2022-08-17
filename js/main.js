import welcome, { operations } from "./operations.js";

import {
  countCharacters,
  fromStringToArray,
  repeatText,
  subString,
} from "./exercises.js";

console.group("OPERACTIONS");
welcome();
console.log(operations.sum(1, 3));
console.groupEnd("OPERACTIONS");

console.group("COUNT CHARACTERES");
countCharacters("Hola Mundo");
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
fromStringToArray("Wilson Wladimir", "");
fromStringToArray("Wilson Wladimir", " ");
fromStringToArray("Wilson Wladimir", "/");
fromStringToArray({ name: "Wilson Wladimir" }, "/");
fromStringToArray("wladdylopez@hotmail.com", "@");
console.groupEnd("FROM STRING TO ARRAY");

console.group("TEXT REPEATED");
repeatText("Wladimir");
repeatText("Wladimir", 4);
repeatText("Marry", 1);

repeatText("Lopez", 500);

console.groupEnd("TEXT REPEATED");
