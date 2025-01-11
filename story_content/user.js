function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6o7NUSZpifM":
        Script1();
        break;
      case "64m0c9N9ZR8":
        Script2();
        break;
      case "6V8PXqkZDe4":
        Script3();
        break;
      case "6K1NumNk60L":
        Script4();
        break;
      case "6m3lFPFbv3A":
        Script5();
        break;
      case "5ptUpaRDRTD":
        Script6();
        break;
      case "6U1cqMwIjkX":
        Script7();
        break;
      case "5q8We2LukQb":
        Script8();
        break;
      case "5lsO1kgZGA1":
        Script9();
        break;
      case "6VaDnotF6lW":
        Script10();
        break;
      case "5iRNhyvM64M":
        Script11();
        break;
      case "5Whq6pdZnAT":
        Script12();
        break;
  }
}

function getAudioElement() {
  return document.getElementById('bgSong');
}

function Script1() {
  var audio = getAudioElement();
  audio.src = "musik.mp3";
  audio.load();
  audio.play();
}

function Script2() {
  var audio = getAudioElement();
  audio.volume = 0.0;
}

function Script3() {
  var audio = getAudioElement();
  audio.volume = 0.1;
}

function Script4() {
  var audio = getAudioElement();
  audio.volume = 0.2;
}

function Script5() {
  var audio = getAudioElement();
  audio.volume = 0.3;
}

function Script6() {
  var audio = getAudioElement();
  audio.volume = 0.4;
}

function Script7() {
  var audio = getAudioElement();
  audio.volume = 0.5;
}

function Script8() {
  var audio = getAudioElement();
  audio.volume = 0.6;
}

function Script9() {
  var audio = getAudioElement();
  audio.volume = 0.7;
}

function Script10() {
  var audio = getAudioElement();
  audio.volume = 0.8;
}

function Script11() {
  var audio = getAudioElement();
  audio.volume = 0.9;
}

function Script12() {
  var audio = getAudioElement();
  audio.volume = 1.0;
}