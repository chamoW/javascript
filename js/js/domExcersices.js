import { clockAlarm } from "./clock/alarm.js";
import { digitalClock } from "./clock/clock.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  digitalClock("#clock", "#btn-play", "#btn-stop");
  clockAlarm("#beep", "#btn-alarm-start", "#btn-alarm-stop");
});
