$("img[usemap]").rwdImageMaps();

function GetDefaultImage() {
  document.getElementById("interation-2").src =
    "./img/ue14/interacao/UC4-01.png";

  document.getElementById("interation-2").useMap = "#image-map-1";
  $("img[usemap]").rwdImageMaps();
}

function GetFirstImage() {
  document.getElementById("interation-2").src =
    "./img/ue14/interacao/UC4-02.png";
  document.getElementById("interation-2").useMap = "#image-map-2";
  $("img[usemap]").rwdImageMaps();
}

function GetSecondImage() {
  document.getElementById("interation-2").src =
    "./img/ue14/interacao/UC4-03.png";
  document.getElementById("interation-2").useMap = "#image-map-3";
  $("img[usemap]").rwdImageMaps();
}

function GetThirdImage() {
  document.getElementById("interation-2").src =
    "./img/ue14/interacao/UC4-04.png";
  document.getElementById("interation-2").useMap = "#image-map-4";
  $("img[usemap]").rwdImageMaps();
}

function GetFourthImage() {
  document.getElementById("interation-2").src =
    "./img/ue14/interacao/UC4-05.png";
  document.getElementById("interation-2").useMap = "#image-map-5";
  $("img[usemap]").rwdImageMaps();
}

$(".close-return").on("click", function (e) {
  e.preventDefault();
  GetDefaultImage();
});

$(".01").on("click", function (e) {
  e.preventDefault();
  GetFirstImage();
});
$(".02").on("click", function (e) {
  e.preventDefault();
  GetSecondImage();
});
$(".03").on("click", function (e) {
  e.preventDefault();
  GetThirdImage();
});
$(".04").on("click", function (e) {
  e.preventDefault();
  GetFourthImage();
});

$(".0101").on("click", function (e) {
  e.preventDefault();
  GetSecondImage();
});
$(".0102").on("click", function (e) {
  e.preventDefault();
  GetThirdImage();
});
$(".0103").on("click", function (e) {
  e.preventDefault();
  GetFourthImage();
});

$(".0201").on("click", function (e) {
  e.preventDefault();
  GetFirstImage();
});
$(".0202").on("click", function (e) {
  e.preventDefault();
  GetThirdImage();
});
$(".0203").on("click", function (e) {
  e.preventDefault();
  GetFourthImage();
});

$(".0301").on("click", function (e) {
  e.preventDefault();
  GetFirstImage();
});
$(".0302").on("click", function (e) {
  e.preventDefault();
  GetSecondImage();
});
$(".0303").on("click", function (e) {
  e.preventDefault();
  GetFourthImage();
});

$(".0401").on("click", function (e) {
  e.preventDefault();
  GetFirstImage();
});
$(".0402").on("click", function (e) {
  e.preventDefault();
  GetSecondImage();
});
$(".0403").on("click", function (e) {
  e.preventDefault();
  GetThirdImage();
});

function GetDefaultImageInteraction1() {
  document.getElementById("interation-1").src =
    "./img/ue14/Pergunta 1/pergunta.png";
  document.getElementById("interation-1").useMap =
    "#image-map-interation-1-img-default";
  $("img[usemap]").rwdImageMaps();
}

function GetYesImageInteracion1() {
  document.getElementById("interation-1").src = "./img/ue14/Pergunta 1/Sim.png";
  document.getElementById("interation-1").useMap =
    "#image-map-close-interation-1";
  $("img[usemap]").rwdImageMaps();
}

function GetNoImageInteracion1() {
  document.getElementById("interation-1").src = "./img/ue14/Pergunta 1/Não.png";
  document.getElementById("interation-1").useMap =
    "#image-map-close-interation-1";
  $("img[usemap]").rwdImageMaps();
}

$(".close-iteration-1").on("click", function (e) {
  e.preventDefault();
  GetDefaultImageInteraction1();
});

$(".a").on("click", function (e) {
  e.preventDefault();
  GetYesImageInteracion1();
});
$(".b").on("click", function (e) {
  e.preventDefault();
  GetNoImageInteracion1();
});
