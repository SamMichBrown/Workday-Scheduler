var now = Date.now();
var date = new Date(now)
var currentTime = moment(date).format('dddd, MMMM Do')

var currentDate = document.getElementById("currentDay")
currentDay.innerHTML = currentTime;

