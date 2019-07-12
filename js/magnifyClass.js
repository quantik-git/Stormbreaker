/***********************************
 *          MAGNIFY CLASS         ************************************************************************************************************************************************************************************
 **********************************/
const root = document.querySelector("html");
let fontSize = null;

$(".plus, .minus").click(function() {
  fontSize = $("p").css('font-size');
  fontSize = parseFloat(fontSize);
  ($(this).hasClass("plus")) ? fontSize += 1 : fontSize -= 1;
  root.style.setProperty("--font-size", fontSize + "px");

  if (bodyLayoutClass.indexOf("basic") === NOT_FOUND) {
    for(let i = 0; i < 300; i += 10) {
      setTimeout(function(){updateButtonWidth();}, i);
    }
  }
});
