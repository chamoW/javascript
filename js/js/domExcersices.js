import { clockAlarm } from "./clock/alarm.js";
import { digitalClock } from "./clock/clock.js";
import { menuHamburger } from "./menuHamburger/hamburger_buttonv2.js";
import { scrollGoUp } from "./scroll/scroll-go-up.js";
import { changeTheme } from "./theme/theme.js";
import validateNetworkStatus from "./network/network-status.js";
import getGeolocation from "./geolocation/geolocalozation.js";
import scrollSpy from "./scroll/scroll_spy.js";

const d = document,
  w = window;

d.addEventListener("DOMContentLoaded", (e) => {
  menuHamburger(".btn-hamburger", ".aside-panel", ".menu-nav a");
  digitalClock("#clock", "#btn-play", "#btn-stop");
  clockAlarm("#beep", "#btn-alarm-start", "#btn-alarm-stop");
  changeTheme(".btn-theme", "dark-mode", "data-theme");

  scrollGoUp(".btn-go-up");
  
  scrollSpy("data-scroll");
});

validateNetworkStatus("netstate");

getGeolocation("geolocation");

