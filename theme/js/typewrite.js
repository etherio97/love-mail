// set up text to print, each item in array is new line
var aText = new Array("ခ်စ္ရပါေသာ...", " ပူရွိန္း ထံသုိ႔");
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
    sContents + aText[iIndex].substr(0, iTextPos) + "_";
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
      document.querySelector("audio#background").play();
      if (document.querySelector("audio#background").currentTime > 1) {
        typewriter();
        document.body.setAttribute('style', 'background-color: #11a66b');
      } else {
        setTimeout("indexStart()", 200);
        document.body.setAttribute('style', 'background-color: #832639');
      }

};
