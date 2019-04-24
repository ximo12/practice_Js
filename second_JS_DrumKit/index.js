var numberOfDrums = document.querySelectorAll(".drum").lenght;

var allButtonsDrum = document.querySelectorAll(".drum");

allButtonsDrum.forEach(function (buttonItem){
  buttonItem.addEventListener("click", function (){
      alert ("I got clicked");
  });
});
