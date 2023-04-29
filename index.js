const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampm = document.getElementById("AmPm");
function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let a = "AM";
  if (h > 12) {
    h = h - 12;
    a = "PM";
  }
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondEl.innerText = s;
  ampm.innerText = a;
}

clock();
