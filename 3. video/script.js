const timePicker = document.getElementById("timer");
const video = document.getElementById("video");

// Запуск/остановка по клику на видео
video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Отображение времени
video.addEventListener(
  "timeupdate",
  function () {
    timePicker.innerHTML = secondsToTime(video.currentTime);
  },
  false
);

// Сброс времени при окончании видео
video.addEventListener(
  "ended",
  function () {
    video.currentTime = 0;
  },
  false
);

//Расчет времени
function secondsToTime(time) {
  let h = Math.floor(time / (60 * 60)),
    dm = time % (60 * 60),
    m = Math.floor(dm / 60),
    ds = dm % 60,
    s = Math.ceil(ds);
  if (s === 60) {
    s = 0;
    m = m + 1;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (m === 60) {
    m = 0;
    h = h + 1;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h === 0) {
    fulltime = m + ":" + s;
  } else {
    fulltime = h + ":" + m + ":" + s;
  }
  return fulltime;
}
