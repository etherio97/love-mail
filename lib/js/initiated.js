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
    aux.src = 'lib/assets/audio/audio_1.mp3';
    aux.type = 'audio/mp3';
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
  var ls = new URLSearchParams(
     location.search
  );
  var method = ls.get('v');
  var recipient = ls.get('txt');

  var reXPath = function (msg, txt) {
    if (! msg) {
      alert(msg)
    }
    location.assign('?v=1&txt=' + txt);
  }
    
  if (method == 0) {
    return reXPath(null, encodeURIComponent(
       window.btoa(recipent)
    );
  }

  document.getElementById('recipient').innerHTML = decodeURIComponent(
    window.atob(recipient)
  );

  f_stLoaded();
}
