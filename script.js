const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const quinta = '23 Jul 2022'

function countdown () {
    const quintaDate = new Date(quinta);
    const currentDate = new Date();

    const totalSeconds = (quintaDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

function formatTime(time){
    return time < 10 ? `0 ${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);