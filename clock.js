// Getting elements

const militaryButton = document.getElementById("militaryButton");
const standardButton = document.getElementById("standardButton");
const timeCondensed = document.getElementsByClassName("timeCondensed")[0];
const timeFull = document.getElementsByClassName("timeFull")[0];
const timeOfDay = document.getElementById("session");

let timeUpdateTimeout;

// Standard time
// Modified from Ancil Eric, https://flexiple.com/javascript/javascript-clock

function standardTime() {
  clearTimeout(timeUpdateTimeout); // Clear existing timeout

  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }
  if (hh == 12) {
    session = "PM";
  }

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss;
  let condensed = hh + ":" + mm;

  timeFull.innerText = time;
  timeOfDay.innerText = session;
  timeCondensed.innerText = condensed;

  timeUpdateTimeout = setTimeout(function () {
    standardTime();
  }, 1000);
}

standardTime();

// Military Time
// Modified from Ancil Eric, https://flexiple.com/javascript/javascript-clock

function militaryTime() {
  clearTimeout(timeUpdateTimeout); // Clear existing timeout

  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss;
  let condensed = hh + ":" + mm;

  timeFull.innerText = time;
  timeCondensed.innerText = condensed;

  timeUpdateTimeout = setTimeout(function () {
    militaryTime();
  }, 1000);
}

// Button Actions

const showStandard = function () {
  standardTime();
  militaryButton.style.display = "block";
  standardButton.style.display = "none";
  session.style.display = "block";
};

const showMilitary = function () {
  militaryTime();
  militaryButton.style.display = "none";
  standardButton.style.display = "block";
  session.style.display = "none";
};

militaryButton.addEventListener("click", showMilitary);
standardButton.addEventListener("click", showStandard);
