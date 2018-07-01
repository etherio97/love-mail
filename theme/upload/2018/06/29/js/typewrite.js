var startOnload = function () {
  document.querySelector('.mail').addEventListener('click', function () {
    document.querySelector('#mail').setAttribute("class", "mail fadeOutRight");

    document.querySelector('#welcomeMsg').setAttribute("class", "msg show");

    setTimeout(function () {
      document.querySelector('#welcomeMsg').setAttribute("class", "msg loop");
    }, 2100);

    document.querySelector('#background').volume = 0.8;

    setTimeout(indexStart, 800);
  })
}

window.onload = startOnload();

var method = lsOutput(0);
var recipient;

if (method) {
  if (method == 1) {
    var rp = lsOutput(1);
    var recipient = decodeURIComponent(rp);

  } else if (method == 0) {
    var rp = lsOutput(1);
    var recipient = encodeURIComponent(rp);

    location.replace('/?' + 'method=1&text=' + encodeURIComponent(recipient) );

  } else {
    alert('Parameter Error! Insert Parameter to load this page correctly...');

    location.replace('/?method=1&text=null');

  } 
}

function indexStart() {

  var audio = document.querySelector("#background");

  audio.play();

  document.body.style.backgroundColor = '#11a66b';

  if (audio.currentTime > 0) {
    document.getElementById('recipient').innerHTML = decodeURIComponent(recipient);

    if (audio.currentTime > 4) {
      typeMsg("#welcomeLod-1", 100, 1.6, 1.2, 12);
      typeMsg("#welcomeLod-2", 2000, 2.2, 1.2, 8);
      typeMsg("#welcomeLod-3", 4300, 3.5, 1.2, 18);
    } else {
      setTimeout("indexStart()", 200);
    }

  } else {
    setTimeout("indexStart()", 200);
    document.body.style.backgroundColor = '#832639';
  }

};

function typeMsg(id, delay, time, step, count) {
  var docx = document.querySelector(id);
  attr = time + ' steps(' + step + ', end), blink-caret .75s step-end ' + count + ')';
  setTimeout(function () {
    docx.setAttribute('class', 'msg typing');
    docx.setAttribute('style', attr);
  }, delay);

}

function lsOutput(x) {
  var result = search(x);
  return result[1];
}

function search(x) {
  var a = decodeURIComponent(location.search);
  var b = a.slice(1);
  a = b.split("&");

  return a[x].split("=");
}