const timer = document.querySelector(".timer")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const pauseButton = document.querySelector("#pause")

startButton.addEventListener("click", startTimer)
pauseButton.addEventListener("click", pauseTimer)
stopButton.addEventListener("click", stopTimer)

let time = 0
let intervalId

function startTimer() {
  startButton.innerHTML = "Resume"
  pauseButton.classList.remove("hide")
  stopButton.classList.add("hide")
  startButton.classList.add("hide")
  if (!intervalId) {
    intervalId = setInterval(soma, 1000)
  }
}

function pauseTimer() {
  pauseButton.classList.add("hide")
  startButton.classList.remove("hide")
  stopButton.classList.remove("hide")

  clearInterval(intervalId)
  intervalId = null
}

function stopTimer() {
  startButton.innerHTML = "Start"
  startButton.classList.remove("hide")
  stopButton.classList.add("hide")
  pauseButton.classList.add("hide")
  timer.innerHTML = "00:00"
  clearInterval(intervalId)
  intervalId = null
  time = 0
}
function soma() {
  time += 1
  let seconds = String(time % 60).padStart(2, "0")
  let minutes = String(Math.floor(time / 60)).padStart(2, "0")
  timer.innerHTML = `${minutes}:${seconds}`
}
