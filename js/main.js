async function search(a) {
  let t = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`
  );
  if (t.ok && 400 != t.status) {
    let a = await t.json();
    displayCurrent(a.location, a.current),
      displayAnother(a.forecast.forecastday);
  }
}
document.getElementById("search").addEventListener("keyup", (a) => {
  search(a.target.value);
});
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function displayCurrent(a, t) {
  if (null != t) {
    var e = new Date(t.last_updated.replace(" ", "T"));
    let n = `      <div class="col-4 items2 pb-3 px-0">
    <div class="d-flex justify-content-between cont2 py-2 px-3">
      <p class="mb-0">${days[e.getDay()]}</p>
      <p class="mb-0">${e.getDate() + monthNames[e.getMonth()]}</p>
    </div>
    <br>
  <div class="px-3">
    <h5>${a.name}</h5>
    <br><br>
    <div class="d-flex justify-content-between">
      <h1>${t.temp_c}<sup>o</sup>C</h1>
      <h3><img src="https:${
        t.condition.icon
      }" width="90" class="mt-4" alt=""></h3>
    </div>
    <br>
    <div class="content">${t.condition.text}</div>
    <br>
    <div class="d-flex justify-content-around">
      <div class="col-4"><img src="icon-umberella@2x.png" class="w-25" alt=""><span class="ms-3">20%</span></div>
      <div class="col-4"><img src="icon-wind@2x.png" alt="" class="w-25"><span class="ms-3">18km/h</span></div>
      <div class="col-4"><img src="icon-compass@2x.png" alt="" class="w-25"><span class="ms-3">East</span></div>
    </div>
    <!-- <span class=" fa-xl"><img 
      src="icon-umberella@2x.png" alt=""> 20% </span><span class=" fa-xl"><img src="icon-wind@2x.png"
    alt=""> 18km/h </span><span class=" fa-xl"><img src="icon-compass@2x.png" alt=""> East </span> -->
  </div>
  </div>`;
    document.getElementById("ite").innerHTML = n;
  }
}
function displayAnother(a) {
  let t = "";
  for (let e = 1; e < a.length; e++)
    t += `      <div class="col-4 items${e} pb-3 px-0">
    <div class="text-center cont${e} py-2 px-3">
      <p class="mb-0">${
        days[new Date(a[e].date.replace(" ", "T")).getDay()]
      }</p>
    </div>
    <br>
<div class="text-center">
<h6><img src="https:${a[e].day.condition.icon}" alt=""></h6>
<br>
<h2>${a[e].day.maxtemp_c}<sup>o</sup>C</h2>
<h5>${a[e].day.mintemp_c}<sup>o</sup></h5>

<br>
<div class="content">${a[e].day.condition.text}</div>
<br>
</div>

  </div>`;
  document.getElementById("ite").innerHTML += t;
}
search("cairo");

//hello
