const d = document;

export function clockAlarm(sound, btnStartAlarm, btnStopAlarm) {
  d.addEventListener("click", (e) => {
    if (e.target) {
      if (e.target.matches(btnStartAlarm)) {
        starAlarm(sound, btnStartAlarm, btnStopAlarm);
      } else if (e.target.matches(btnStopAlarm)) {
        stopAlarm(sound, btnStartAlarm, btnStopAlarm);
      }
    }
  });
}

const starAlarm = (sound, btnStartAlarm, btnStopAlarm) => {
  d.querySelector(sound).play();
  d.querySelector(btnStartAlarm).setAttribute("disabled", "true");
  d.querySelector(btnStopAlarm).removeAttribute("disabled");
};

const stopAlarm = (sound, btnStartAlarm, btnStopAlarm) => {
  d.querySelector(sound).pause();
  d.querySelector(sound).currentTIme = 0;
  d.querySelector(btnStopAlarm).setAttribute("disabled", "true");
  d.querySelector(btnStartAlarm).removeAttribute("disabled");
};
