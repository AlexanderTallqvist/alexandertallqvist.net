
var startDateTime = new Date(2020,3,6,18,0,0,0);
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;


function updateClock() {

  newDate = new Date();
  newStamp = newDate.getTime();

  var diff = Math.round((newStamp-startStamp)/1000);

  var d = Math.floor(diff/(24*60*60));
  diff = diff-(d*24*60*60);

  var h = Math.floor(diff/(60*60));
  diff = diff-(h*60*60);

  var m = Math.floor(diff/(60));
  diff = diff-(m*60);

  var s = diff;

  if (s < 10) {
    s = "0" + s;
  }

  document.getElementById("time-ago-days").innerText = d;
  document.getElementById("time-ago-hours").innerHTML = h;
  document.getElementById("time-ago-minutes").innerHTML = m;
  document.getElementById("time-ago-seconds").innerHTML = s;
}

setInterval(updateClock, 1000);