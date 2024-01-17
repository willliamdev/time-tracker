const timer = document.querySelector(".timer")

const myButton = document.querySelector(".my-button")
console.log(myButton)

myButton.addEventListener("click", startsTimer)

function startsTimer() {
  let interv = setInterval(soma, 100,)
  return interv

}
let time = 0
function soma() {
  time += 1
  let seconds = (time % 60)
  let minutes = Math.floor(time / 60)
  timer.innerHTML = `${minutes}:${seconds}`

}