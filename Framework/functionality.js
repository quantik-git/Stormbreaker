/***********************************
 *            SIDEBAR              ************************************************************************************************************************************************************************************
 **********************************/
 bodyElement = $("body");
 $mainElement = $("main");
 bodyLayoutClass = $("body").attr("class"); /* bodyLayout */
if (bodyLayoutClass === "basic-sidebar-left") {
  $sidebarClass = $(".sidebar-left");
  sidebarSide = "left";
  buttonOpenSign = ">";
  buttonCloseSign = "<";
  $sidebarToggleButton = $(".btn-sidebar-left");
} else if (bodyLayoutClass === "basic-sidebar-right") {
  $sidebarClass = $(".sidebar-right");
  sidebarSide = "right";
  buttonOpenSign = "<";
  buttonCloseSign = ">";
  $sidebarToggleButton = $(".btn-sidebar-right");
}

if (bodyLayoutClass !== "basic") {
  
 distanceTop = $mainElement.position().top;
  
  if (bodyElement.width() < 481) {
    $sidebarClass.css(sidebarSide, 0);
    $sidebarClass.css("top", distanceTop);
  }
  
  $(document).ready(function() {
    $sidebarToggleButton.css("background-color", $sidebarClass.css("background-color"));
    $sidebarToggleButton.css("top", distanceTop + 40);

    /*Configuração do aspeto inicial*/
    if ($mainElement.width() < 780) {
      $sidebarClass.toggle();
      $sidebarToggleButton.closing();
    } else {
      $sidebarToggleButton.opening();
    }

    /*Configuração da utilização do button*/
    $sidebarToggleButton.click(function() {
      $sidebarClass.toggle("fast", function() {
        if ($sidebarClass.css("display") === "none") {
          $sidebarToggleButton.closing();
        } else {
          $sidebarToggleButton.opening();
        }
      });
    });
  });
  
  /*Configuração da alteração de tamanho da janela*/
  $(window).resize(function() {
    if ($sidebarClass.css("display") === "grid") {
      if ($mainElement.width() < 780) {
        $sidebarClass.css(sidebarSide, 0);
        $sidebarClass.css("top",distanceTop);
        $sidebarClass.hide();
        $sidebarToggleButton.closing();
      }
      updateButtonWidth();
    }
  });
}

function updateButtonWidth() {
  $sidebarToggleButton.css(sidebarSide, $sidebarClass.innerWidth());
}

$.fn.closing = function() {
  this.css(sidebarSide, 0);
  this.text(buttonOpenSign);
  this.attr("aria-pressed", "true");
  $sidebarClass.attr("aria-expanded", "false");
};

$.fn.opening = function() {
  this.css(sidebarSide, $sidebarClass.innerWidth());
  this.text(buttonCloseSign);
  this.attr("aria-pressed", "false");
  $sidebarClass.attr("aria-expanded", "true");
};

/***********************************
 *        VERTICAL-NAVBAR          ************************************************************************************************************************************************************************************
 **********************************/
 $links = $("header.head > nav > ul.links-hover");
 $navElement = $(".head > nav");
 $toggleButton = $("#toggle");
 
 const mobileMaxWidth = 480;

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

/***********************************
 *          FILL CLASS             ************************************************************************************************************************************************************************************
 **********************************/
 $fillClass = $(".fill");
 windowAvailableHeight = $(window).height() - ($("body").height() - $mainElement.innerHeight());
 $fillClass.css("min-height", windowAvailableHeight);

/***********************************
 *          CONTRAST CLASS         ************************************************************************************************************************************************************************************
 **********************************/
 if (typeof root === 'undefined') {
   const root = document.querySelector(":root");
 }
const computedStyles = getComputedStyle(document.documentElement);
const originalTextColor = computedStyles.getPropertyValue("--text-color");
const originalMainThemeColor = getComputedStyle(document.documentElement).getPropertyValue("--main-theme-color");
const originalSecondaryThemeColor = getComputedStyle(document.documentElement).getPropertyValue("--secondary-theme-color");
const originalTertiaryThemeColor = getComputedStyle(document.documentElement).getPropertyValue("--tertiary-theme-color");
const originalBodyBackground = getComputedStyle(document.documentElement).getPropertyValue("--body-background");

let estadoBotaoContrast = 0;

$(".contrast").click(function() {
  if (estadoBotaoContrast === 0) {
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--main-theme-color", "black");
    root.style.setProperty("--secondary-theme-color", "black");
    root.style.setProperty("--tertiary-theme-color", "black");
    root.style.setProperty("--body-background", "var(--main-theme-color)");
    estadoBotaoContrast = 1;
  } else {
    root.style.setProperty("--text-color", originalTextColor);
    root.style.setProperty("--main-theme-color", originalMainThemeColor);
    root.style.setProperty("--secondary-theme-color", originalSecondaryThemeColor);
    root.style.setProperty("--tertiary-theme-color", originalTertiaryThemeColor);
    root.style.setProperty("--body-background", originalBodyBackground);
    estadoBotaoContrast = 0;
  }
  
  if (bodyLayoutClass !== "basic") {
    $sidebarToggleButton.css("background-color", $sidebarClass.css("background-color"));
    $sidebarToggleButton.css("color", $sidebarClass.css("color"));
  }
});

/***********************************
 *          MAGNIFY CLASS         ************************************************************************************************************************************************************************************
 **********************************/
let estadoBotaoMagnify = 0;
const originalFontSize = getComputedStyle(document.documentElement).getPropertyValue("--font-size");

$(".magnify").click(function() {
  if (estadoBotaoMagnify === 0) {
    root.style.setProperty("--font-size", " 25px");
    estadoBotaoMagnify = 1;
  } else {
    root.style.setProperty("--font-size", originalFontSize);
    estadoBotaoMagnify = 0;
  }
  for(let i = 0; i < 300; i += 10) {
    setTimeout(function(){updateButtonWidth();}, i);
  }
});

