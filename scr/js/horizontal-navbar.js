/***********************************
 *        HORIZONTAL-NAVBAR          ************************************************************************************************************************************************************************************
 **********************************/
 $links = $("header.head > nav > ul.links-hover");
 $navElement = $(".head > nav");
 $toggleButton = $("#toggle");

 let mobileMaxWidth = ($links.width() + $('ul.brand > li').width()) * 1.1;

$toggleButton.click(function() {
  $links.toggle();
  if ($links.css("display") === "none") {
    $links.attr("aria-expanded", "false");
    $toggleButton.attr("aria-pressed", "true");
  } else {
    $links.attr("aria-expanded", "true");
    $toggleButton.attr("aria-pressed", "false");
  }
});

$(document).ready(function() {
  //navbar responsive
  if (bodyElement.width() > mobileMaxWidth) {
    $toggleButton.hide().attr("aria-pressed", "false");
  } else {
    $links.hide().attr("aria-expanded", "false");
    $navElement.switchClass("flexRow", "flexCol");
    $links.switchClass("flexEnd", "flexStart");
    $links.switchClass("flexRow", "flexCol");
  }

});

$(window).resize(function() {
  if (bodyElement.width() <= mobileMaxWidth) {
    $toggleButton.show().attr("aria-pressed", "false");
    $links.hide().attr("aria-expanded", "true");
    $navElement.switchClass("flexRow", "flexCol");
    $links.switchClass("flexEnd", "flexStart");
    $links.switchClass("flexRow", "flexCol");
  } else {
    $toggleButton.hide().attr("aria-pressed", "true");
    $links.show().attr("aria-expanded", "false");
    $navElement.switchClass("flexCol", "flexRow");
    $links.switchClass("flexStart", "flexEnd");
    $links.switchClass("flexCol", "flexRow");
  }
});

$.fn.switchClass = function(previous, next) {
  this.removeClass(previous).addClass(next);
};
