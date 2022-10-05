import { validateDate } from './utils.js';
export const getYears = (date) => {

    if (validateDate(date)) {
      let now = Date.now();
      let hoyMenosFecha = new Date().getTime() - date.getTime();
      let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
      let totalyears = Math.floor(hoyMenosFecha / aniosEnMS);
  
      return console.info(
        `Han pasado: ${totalyears} anios desde ${date.getFullYear()}`
      );
    }
  };