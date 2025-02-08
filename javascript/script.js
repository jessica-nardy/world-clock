function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesElementDate =
    losAngelesElement.querySelector("#los-angeles-date");
  losAngelesElementDate.innerHTML = moment().format("MMMM Do YYYY");

  let losAngelesElementHour =
    losAngelesElement.querySelector("#los-angeles-hour");
  losAngelesElementHour.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");

  let tokyoElementDate = tokyoElement.querySelector("#tokyo-date");
  tokyoElementDate.innerHTML = moment().format("MMMM Do YYYY");

  let tokyoElementHour = tokyoElement.querySelector("#tokyo-hour");
  tokyoElementHour.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city-select");
  citiesElement.innerHTML += `    <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )} <small>${cityTime.format("A")}</small></div>
            </div>`;
}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", updateCity);
