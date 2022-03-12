// 程式碼寫這裡

const timer = document.querySelector(".timer")
let defaultSeconds = 120
let totalSeconds
let running = false
let timerID
let paused = false

function updateTimer(seconds) {
  let mins = String(Math.floor(seconds / 60)).padStart(2, "0")
  let secs = String(seconds % 60).padStart(2, "0")

  timer.textContent = `${mins}:${secs}`

  if (seconds === 0) {
    timer.classList.add("times-up")
  }
}

function timesUp() {
  clearInterval(timerID)
  running = false
  updateTimer(0)
  playSound()
}

function playSound() {
  let sound = new Audio("sounds/news.mp3")
  sound.play()
}

function initTimer() {
  running = true
  totalSeconds = defaultSeconds
  timer.classList.remove("times-up")
  updateTimer(totalSeconds)

  timerID = setInterval(() => {
    if (totalSeconds > 1) {
      totalSeconds -= 1
      updateTimer(totalSeconds)
    } else {
      timesUp()
    }
  }, 1000)
}

function pauseTimer() {
  paused = true
  clearInterval(timerID)
}

function resumeTimer() {
  paused = false

  timerID = setInterval(() => {
    if (totalSeconds > 1) {
      totalSeconds -= 1
      updateTimer(totalSeconds)
    } else {
      timesUp()
    }
  }, 1000)
}

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Enter":
      if (!running) {
        initTimer()
      }
      break
    case " ":
      if (running) {
        if (paused) {
          // 繼續
          resumeTimer()
        } else {
          // 暫停
          pauseTimer()
        }
      }
      break
  }
})
