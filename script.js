// Initialize variables
let startTime;
let elapsedTime = 0;
let running = false;
let timer;

// Format time as HH:MM:SS:MS
function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor(time % 1000 / 10);
  return (
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds) +
    ":" +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

// Update time display
function updateTime() {
  let now = Date.now();
  elapsedTime = now - startTime;
  document.getElementById("display").innerHTML = formatTime(elapsedTime);
  timer = requestAnimationFrame(updateTime);
}

// Start or stop the stopwatch
function startStop() {
  if (running) {
    running = false;
    cancelAnimationFrame(timer);
    document.getElementById("startstop").innerHTML = "Start";
  } else {
    running = true;
    startTime = Date.now() - elapsedTime;
    timer = requestAnimationFrame(updateTime);
    document.getElementById("startstop").innerHTML = "Stop";
  }
}

// Reset the stopwatch
function reset() {
  elapsedTime = 0;
  running = false;
  cancelAnimationFrame(timer);
  document.getElementById("display").innerHTML = "00:00:00:00";
  document.getElementById("startstop").innerHTML = "Start";
}
