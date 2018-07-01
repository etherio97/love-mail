var audio = document.querySelector("#background")

// set up text to print, each item in array is new line
var aText = new Array("ခ်စ္ရပါေသာ...", " ::နာမည္:: ထံသုိ႔");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substr(0, iTextPos) + "✎";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

function indexStart() {
  audio.play();
  if (audio.currentTime > 0) {
    document.body.setAttribute('style', 'background-color: #11a66b');

    if (audio.currentTime > 5) {
      typewriter();;
    } else {
      setTimeout("indexStart()", 200);
    }

  } else {
    setTimeout("indexStart()", 200);
    document.body.style.backgroundColor = '#832639';
  }

};