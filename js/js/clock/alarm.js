const d = document;

export function clockAlarm(sound, btnStartAlarm, btnStopAlarm) {
  let $sound = d.querySelector(sound),
    $btnStartAlarm = d.querySelector(btnStartAlarm),
    $btnStopAlarm = d.querySelector(btnStopAlarm);

  d.addEventListener("click", (e) => {
    if (e.target) {
      if (e.target.matches(btnStartAlarm)) {
        starAlarm($sound, $btnStartAlarm, $btnStopAlarm);
      } else if (e.target.matches(btnStopAlarm)) {
        stopAlarm($sound, $btnStartAlarm, $btnStopAlarm);
      }
    }
  });
}

const starAlarm = (sound, btnStartAlarm, btnStopAlarm) => {
  sound.play();
  btnStartAlarm.setAttribute("disabled", "true");
  btnStopAlarm.removeAttribute("disabled");
};

const stopAlarm = (sound, btnStartAlarm, btnStopAlarm) => {
  sound.pause();
  sound.currentTIme = 0;
  btnStopAlarm.setAttribute("disabled", "true");
  btnStartAlarm.removeAttribute("disabled");
};
