var x;
x = setTimeout(startOnload, 800);

function startOnload() {
  document.querySelector('.mail').addEventListener('click', function () {
    document.querySelector('#mail').setAttribute("class", "mail fadeOutRight");

    document.querySelector('#welcomeMsg').setAttribute("class", "msg show");
    setTimeout(function() {
      document.querySelector('#welcomeMsg').setAttribute("class", "msg loop");
    }, 2100);

    document.querySelector('#background').volume = 0.8;

    setTimeout(indexStart, 420);
  })
}

var lsOutput = function (x) {
  var result = search(x);
  return result[1];
}

var search = function (x) {
  var a = decodeURIComponent(location.search);
  var b = a.slice(1);
  a = b.split("&");
  return a[x].split("=");
}

var method = lsOutput(0);
var recipient = lsOutput(1);
var audio = document.querySelector("#background");

function indexStart() {
  audio.play();
  document.body.style.backgroundColor = '#11a66b';

  if (audio.currentTime > 0) {
    document.getElementById('recipient').innerHTML = decodeURIComponent(recipient);

    if (audio.currentTime > 4) {
      typeMsg("#welcomeLod-1", 100);
      typeMsg("#welcomeLod-2", 2000);
      typeMsg("#welcomeLod-3", 4000);
    } else {
      setTimeout("indexStart()", 200);
    }

  } else {
    setTimeout("indexStart()", 200);
    document.body.style.backgroundColor = '#832639';
  }

};

function typeMsg(id, delay, time) {
  var docx = document.querySelector(id);

  setTimeout(function () {
    docx.setAttribute('class', 'msg typing')
  }, delay);

}