const d = document;
let clockInterval = undefined;
export function digitalClock(elementClock, btnPlay, btnStop) {
  let $elementClock = d.querySelector(elementClock),
    $btnPlay = d.querySelector(btnPlay),
    $btnStop = d.querySelector(btnStop);

  d.addEventListener("click", (e) => {
    if (e.target) {
      if (e.target.matches(btnPlay)) {
        playClock($elementClock, $btnPlay, $btnStop);
      } else if (e.target.matches(btnStop)) {
        stopClock($elementClock, $btnPlay, $btnStop);
      }
    }
  });
}

const playClock = (elementClock, btnPlay, btnStop) => {
  btnPlay.setAttribute("disabled", "true");
  btnStop.removeAttribute("disabled");

  clockInterval = setInterval(() => {
    let time = new Date().toLocaleTimeString();
    elementClock.innerHTML = time;
  }, 1000);
};

const stopClock = (elementClock, btnPlay, btnStop) => {
  btnStop.setAttribute("disabled", "true");
  btnPlay.removeAttribute("disabled");
  elementClock.innerHTML = "00:00:00";
  clearInterval(clockInterval);
};
