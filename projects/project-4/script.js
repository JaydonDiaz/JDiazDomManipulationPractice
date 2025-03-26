document.addEventListener('DOMContentLoaded', function () {
  const timerDisplay = document.querySelector('#timer')
  const startStopBtn = document.querySelector('#startStopBtn')
  const resetBtn = document.querySelector('#resetBtn')
  const playIcon = document.querySelector('#play')

  let timerInterval;
  let seconds = 0;
  let isRunning = false;

  function formatTime(time) {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  function toggleTimer() {
    if (isRunning) {
      clearInterval(timerInterval)
      playIcon.classList.remove('fa-pause')
      playIcon.classList.add('fa-play')
      playIcon.style.backgroundColor = 'green'
    } else {
      timerInterval = setInterval(() => {
        seconds++
        timerDisplay.textContent = formatTime(seconds)
      }, 1000)
      playIcon.classList.add('fa-pause')
      playIcon.classList.remove('fa-play')
      playIcon.style.backgroundColor = 'orange'

    }
    isRunning = !isRunning
  }

  function resetTimer() {
    clearInterval(timerInterval)
    seconds = 0
    timerDisplay.textContent = '00:00:00';
    isRunning: false;
    playIcon.classList.remove('fa-pause')
    playIcon.classList.add('fa-play')

  }

  startStopBtn.addEventListener('click', toggleTimer)
  resetBtn.addEventListener('click', resetTimer)
})
