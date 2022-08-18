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

export const validateArray = (text) => {
  if (!text) {
    console.warn("Debe ingresar un valor");

    return false;
  }

  if (text instanceof Array) {
    return true;
  } else {
    console.error(`${text} "IT IS NOT AN ARRAY!!!. It is a ${typeof text}`);
    return false;
  }
};

export const validateNumericArray = (text) => {
  if (!text) {
    console.warn("Debe ingresar un valor");

    return false;
  }

  if (text instanceof Array) {
    for (const element of text) {

        //console.log(`${typeof element}`);
      if (typeof element !== "number") {
        console.error(`${element} is not number`);
        return false;
      }
    }

    return true;
  } else {
    console.error(`${text} "IT IS NOT AN ARRAY!!!. It is a ${typeof text}`);
    return false;
  }
};
