const daysEl = document.querySelector('[data-value="days"]');
const hourEl = document.querySelector('[data-value="hours"]');
const minuteEl = document.querySelector('[data-value="mins"]');
const secondEl = document.querySelector('[data-value="secs"]');


const timer = {
  start() {
    const startTime = new Date('Aug 26, 2022');

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const days = getDays(deltaTime);
      updateDays(days);

      const hours = getHours(deltaTime);
      updateHours(hours);

      const minutes = getMinutes(deltaTime);
      updateMinutes(minutes);

      const seconds = getSeconds(deltaTime);
      updateSeconds(seconds)
    }, 1000)
  },
}

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}



function updateDays(time) {
  daysEl.textContent = time;
}
function updateHours(time) {
  hourEl.textContent = time;
}
function updateMinutes(time) {
  minuteEl.textContent = time;
}
function updateSeconds(time) {
  secondEl.textContent = time;
}



function getDays(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  return days;
}
function getHours(time) {
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  return hours;
}
function getMinutes(time) {
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  return minutes;
}
function getSeconds(time) {
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
  return seconds;
}