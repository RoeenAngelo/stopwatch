const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');
const timer  = document.querySelector('.timer');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds  = 0;
let leadingMinutes  = 0;
let leadingHours  = 0;

// Variables for set interval & timer

let timerInterval = null;
let timerStatus = 'stopped'


function stopWatch() {
    
    seconds ++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes ++;
    }
    
    if (minutes / 60 === 1) {
            minutes = 0;
            hours ++;
    }

    (seconds < 10) ? leadingSeconds = '0' + seconds : leadingSeconds = seconds;
    
    (minutes < 10) ? leadingMinutes = '0' + minutes : leadingMinutes = minutes;
    
    (hours < 10) ? leadingHours = '0' + hours : leadingHours = hours;


timer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;

}

startStopBtn.addEventListener('click', () => {
    
    if (timerStatus === 'stopped') {
        timerInterval = setInterval(stopWatch, 1000); //starts the timer
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
        timerStatus = 'started'
    } else {
        clearInterval(timerInterval)
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
        timerStatus = 'stopped'
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = '00:00:00';
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
    timerStatus = 'stopped'

})