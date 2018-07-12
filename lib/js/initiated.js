/* ------------------------ *\
|* GLOBAL VARIABLES SETTING *|
\* ------------------------ */

var aux, isTRus;

function f_stLoaded() {
  document.getElementById('mail').addEventListener('click', function () {
    document.getElementById('welcomeMsg').setAttribute("class", "msg up");
    document.getElementById('mail').setAttribute("class", "mail fadeOutRight");
    document.body.style.backgroundColor = '#832639';

    aux = document.getElementById("bgMusic");
    aux.type = new AudioContext();
    aux.src = 'lib/assets/audio/audio_1.mp3';
    aux.volume = 1;
    aux.load = auxLoaded();
  })

}

function auxLoaded() {
  // {{buffered, playing audio}}  
  var isPlayed = aux.play();

  if (Boolean(isPlayed) == true) {
    document.getElementById('welcomeMsg').setAttribute("class", "msg up");
    isTRus = setInterval(msgTiming, 250);
  }

  function msgTiming() {
    if (aux.currentTime > 0) {
      document.body.style.backgroundColor = '#35895d';
      document.getElementById('welcomeMsg').setAttribute("class", "msg up pluse");

    }
    if (aux.currentTime > 4) {
      typeMsg("#welcomeLod-1", 100, 2, 18);
      typeMsg("#welcomeLod-2", 2000, 2, 14);
      typeMsg("#welcomeLod-3", 4300, 4, 24);
    }
    if (Boolean(aux.paused) == true) {
      clearInterval(isTRus);
    }
  }

  function typeMsg(id, delay, time, step) {
    var docx = document.querySelector(id);
    attr = 'animation-duration: ' + time + 's; animation-timing-function: steps(' + step + ', end);';
    docx.setAttribute('style', attr);

    setTimeout(function () {
      docx.setAttribute('class', 'msg typing');
    }, delay)
  }
}

/* ------------------------- *\
|* To String Location.Search *|
\* ------------------------- */
window.onload = function () {
  var ls = location.search;
  var method, recipient;
  var reXPath = function (v, m) {
    if (v !== '') {
      alert(v)
    }
    location.assign('/?v=1&txt=' + m);
  }

  if (ls) {
    var method = lsOutput(0);
    var recipient = lsOutput(1);

    if (method == 0) {
      xRname = encodeURIComponent(recipient);
      reXPath('', window.btoa(xRname));
    } else
    if (method == 1) {
      xRname = window.atob(recipient);
      document.getElementById('recipient').innerHTML = decodeURIComponent(xRname);

      isTRus = f_stLoaded();
    }
  } else {
    reXPath('INVALID REQUEST!! \nYou must enter a valid query paramter to load this page.', '0');
  }

  function lsOutput(x) {
    var result = search(x);

    function search(x) {
      var a = decodeURIComponent(location.search);
      var b = a.slice(1);
      a = b.split("&");

      return a[x].split("=");
    }
    return result[1];
  }
}