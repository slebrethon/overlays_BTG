// timer BEHINDTHEGAME

// selection DATE
var countDownDate = new Date("Sep 20, 2021 21:50:00 GMT+00:00").getTime();

// calcul TIMER
var x = setInterval(function() {

  // element TIMER
  var now = new Date().getTime();
  var distance = countDownDate - now;
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // nomenclature TIMER
  // document.getElementById("decounter").innerHTML = days + "" + hours + "" + minutes + ":" + seconds + "";
  document.getElementById("decounter").innerHTML = minutes + ":" + seconds + "";
    
  // affichage EXPIRE 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("decounter").innerHTML = "EXPIRED";
  }
}, 1000);