function updateTime() {
  //London//
  let londonElement = document.querySelector(`#london`);
  if (londonElement) {
    let londonDate = londonElement.querySelector(`.date`);
    let londonTime = londonElement.querySelector(`.time`);
    let londonCurrentTime = moment().tz(`Europe/London`);

    londonDate.innerHTML = londonCurrentTime.format(`MMMM Do YYYY`);
    londonTime.innerHTML = londonCurrentTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }
  //Los Angeles//
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format(`MMMM Do YYYY`)}</div>
    </div>
    <div class="time">${cityTime.format(`h:mm:ss`)} <small>${cityTime.format(
    `A`
  )}</small></div>
</div>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
