
const d = document;
let clockInterval = undefined;
export function digitalClock(elementClock, btnPlay, btnStop) {
  d.addEventListener("click", (e) => {
    if (e.target) {
      if (e.target.matches(btnPlay)) {
        playClock(elementClock, btnPlay, btnStop);
      } else if (e.target.matches(btnStop)) {
        stopClock(elementClock, btnPlay, btnStop);
      }
    }
  });
}


const playClock = (elementClock, btnPlay, btnStop) => {
  d.querySelector(btnPlay).setAttribute("disabled", "true");
  d.querySelector(btnStop).removeAttribute("disabled");

  clockInterval = setInterval(() => {
    let time = new Date().toLocaleTimeString();
    d.querySelector(elementClock).innerHTML = time;
  }, 1000);
};

const stopClock = (elementClock, btnPlay, btnStop) => {
  d.querySelector(btnStop).setAttribute("disabled", "true");
  d.querySelector(btnPlay).removeAttribute("disabled");
  d.querySelector(elementClock).innerHTML = "00:00:00";
  clearInterval(clockInterval);
};

