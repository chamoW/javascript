export const validateString = (text) => {
  if (typeof text == "string") {
    if (!text) {
      console.warn(`EMPTY STRING`);

      return false;
    }
    return true;
  } else {
    console.warn(`${text} "IT IS NOT A STRING!!!. It is a ${typeof text}`);
    return false;
  }
};

export const validateNumber = (text) => {
  if (typeof text == "number") {
    if (text <= 0) {
      console.warn(`Ingrese un numero mayor a cero`);

      return false;
    }
    return true;
  } else {
    console.warn(`${text} "IT IS NOT A NUMBER!!!. It is a ${typeof text}`);
    return false;
  }
};

export const validateDate = (text) => {
  if (text instanceof Date) {
    return true;
  } else {
    console.error(`${text} "IT IS NOT A DATE!!!. It is a ${typeof text}`);
    return false;
  }
};

export const validateArray = (arreglo) => {
  if (arreglo === undefined) {
    return console.warn("Debe ingresar un arreglo de numeros");
  }

  if (!(arreglo instanceof Array)) {
    return console.error(
      `${arreglo} "IT IS NOT AN ARRAY!!!. It is a ${typeof arreglo}`
    );
  }

  if (arreglo.length === 0) {
    return console.warn(`El array esta vacio`);
  }

  return true;
};

export const validateNumericArray = (arreglo) => {
  if (validateArray(arreglo)) {
    for (const element of arreglo) {
      //console.log(`${typeof element}`);
      if (typeof element !== "number") {
        return console.error(`${element} is not number`);
      }
    }
    return true;
  }

  
};
