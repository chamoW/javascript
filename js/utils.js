export const validateString = (text) => {
  if (typeof text == "string") {
    if (!text) {
       console.warn(`EMPTY STRING`);

       return false;
    }
    return true;
  } else {
    console.warn(
      `${text} "IT IS NOT A STRING!!!. It is a ${typeof text}`
    );
    return false;
  }
};
