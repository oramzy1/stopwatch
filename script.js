let startTime;
let updatedTime;
let difference;
let interval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        interval = setInterval(updateTime, 1000);
        running = true;
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(interval);
        running = false;
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(interval);
    running = false;
    difference = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
