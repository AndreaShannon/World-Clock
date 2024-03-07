function updateTime() {
  //London//
  let londonElement = document.querySelector(`#london`);
  let londonDate = londonElement.querySelector(`.date`);
  let londonTime = londonElement.querySelector(`.time`);
  let londonCurrentTime = moment().tz(`Europe/London`);

  londonDate.innerHTML = londonCurrentTime.format(`MMMM Do YYYY`);
  londonTime.innerHTML = londonCurrentTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  //Los Angeles//
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Tokyo//
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoCurrentTime = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoCurrentTime.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoCurrentTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
