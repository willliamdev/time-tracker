const timer = document.querySelector(".timer")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")

startButton.addEventListener("click", startTimer)

stopButton.addEventListener("click", stopTimer)

let time = 0
let intervalId

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(soma, 100)
  }
}

function stopTimer() {
  clearInterval(intervalId)
  intervalId = null
}

function soma() {
  console.log(intervalId)
  time += 1
  let seconds = (time % 60)
  let minutes = Math.floor(time / 60)
  timer.innerHTML = `${minutes}:${seconds}`
}
