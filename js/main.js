/* ------------------------ *\
|* GLOBAL VARIABLES SETTING *|
\* ------------------------ */

const PERSON_NAME = "person.name";

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

function auxLoaded(aux) {
  typeMsg("#welcomeLod-1", 100, 2, 18);
  typeMsg("#welcomeLod-2", 2000, 2, 14);
  typeMsg("#welcomeLod-3", 4300, 4, 24);

  function typeMsg(id, delay, time, step) {
    var docx = document.querySelector(id);
    attr = 'animation-duration: ' + time + 's; animation-timing-function: steps(' + step + ', end);';
    docx.setAttribute('style', attr);

    setTimeout(function () {
      docx.setAttribute('class', 'msg typing');
    }, delay)
  }
}

var _location = { search: '?name=ပူရှိန်း' }

let initiated = false;

/* ------------------------- *\
|* To String Location.Search *|
\* ------------------------- */
window.addEventListener('load', () => {
  let name;
  const mail = document.querySelector('#mail');
  const person = document.querySelector('#recipient');
  const params = new URLSearchParams(_location.search);
  const welcome = document.querySelector('#welcomeMsg');
 
  if (params.has('name')) {
    name = params.get('name');
    name = encodeURI(name);
    name = btoa(name);
    
    sessionStorage.setItem(PERSON_NAME, name);
  }

  name = sessionStorage.getItem(PERSON_NAME);
  
  if (!name) return console.log('no name');
  
  try {
    name = atob(name);
    name = decodeURI(name);
  } catch (err) {
    sessionStorage.removeItem(PERSON_NAME);
    return console.error('Decoding failed', err)
  }

  person.innerHTML = name;

  let aux = new Audio;
  aux.src = './assets/audio/audio_1.mp3';
  aux.addEventListener('canplaythrough', () => {
    init(aux, mail, person, welcome);
  })
//  f_stLoaded();
});

function init(aux, mail, person, heart) {
  setTimeout(() => {
    mail.classList.remove('hide');
    mail.classList.add('fadeInLeft');
  }, 1200);
  
  heart.addEventListener('click', () => {
    aux.paused ? aux.play() : aux.pause();
  });
  
  mail.addEventListener('click', () => {
    mail.classList.remove('fadeInLeft');
    mail.classList.add('fadeOutRight');
    
    heart.classList.remove('hide');
    heart.classList.add('up');
    
    setTimeout(() => {
      aux.play();
      setTimeout(() => auxLoaded(aux), 4000);
    }, 1800);
  });
  
  aux.addEventListener('playing', () => {
    heart.classList.add('pluse');
    console.log('...');
  });
  
  var bg
  
  aux.addEventListener('play', () => {
    bg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#35895d';
    console.log('>');
  });
  
  aux.addEventListener('pause', () => {
    heart.classList.remove('up');
    heart.classList.remove('pluse');
    document.body.style.backgroundColor = bg;
    console.log('||');
  });
  
}