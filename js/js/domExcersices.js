import { clockAlarm } from "./clock/alarm.js";
import { digitalClock } from "./clock/clock.js";
import { menuHamburger } from "./menuHamburger/hamburger_buttonv2.js";
import { scrollGoUp } from "./scroll-go-up.js";
import { changeTheme } from "./theme/theme.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menuHamburger(".btn-hamburger", ".aside-panel", ".menu-nav a");
  digitalClock("#clock", "#btn-play", "#btn-stop");
  clockAlarm("#beep", "#btn-alarm-start", "#btn-alarm-stop");
  changeTheme(".btn-theme", "dark-mode", "data-theme")

  scrollGoUp(".btn-go-up")
});
