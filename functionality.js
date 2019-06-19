// Constants
const NOT_FOUND = -1;

/***********************************
 *            SIDEBAR              ************************************************************************************************************************************************************************************
 **********************************/
 bodyElement = $("body");
 $mainElement = $("main");
 bodyLayoutClass = $("body").attr("class"); /* bodyLayout */
if (bodyLayoutClass.indexOf("basic-sidebar-left") !== NOT_FOUND) {
  $sidebar = $(".sidebar-left");
  $side = "left";
  $openSign = ">";
  $closeSign = "<";
  $sidebarToggleButton = $(".btn-sidebar-left");
} else if (bodyLayoutClass.indexOf("basic-sidebar-right") !== NOT_FOUND) {
  $sidebar = $(".sidebar-right");
  $side = "right";
  $openSign = "<";
  $closeSign = ">";
  $sidebarToggleButton = $(".btn-sidebar-right");
}

if (bodyLayoutClass.indexOf("basic") === NOT_FOUND) {

 distanceTop = $mainElement.position().top;

  if (bodyElement.width() < 481) {
    $sidebar.css($side, 0);
    $sidebar.css("top",distanceTop);
  }

  $(document).ready(function() {
    $sidebarToggleButton.css("background-color", $sidebar.css("background-color"));
    $sidebarToggleButton.css("top",distanceTop + 40);

    /*Configuração do aspeto inicial*/
    if ($mainElement.width() < 780) {
      $sidebar.toggle();
      $sidebarToggleButton.closing();
    } else {
      $sidebarToggleButton.opening();
    }

    /*Configuração da utilização do button*/
    $sidebarToggleButton.click(function() {
      $sidebar.toggle("fast", function() {
        if ($sidebar.css("display") === "none") {
          $sidebarToggleButton.closing();
        } else {
          $sidebarToggleButton.opening();
        }
      });
    });
  });

  /*Configuração da alteração de tamanho da janela*/
  $(window).resize(function() {
    if ($sidebar.css("display") === "grid") {
      if ($mainElement.width() < 780) {
        $sidebar.css($side, 0);
        $sidebar.css("top",distanceTop);
        $sidebar.hide();
        $sidebarToggleButton.closing();
      }
      updateButtonWidth();
    }
  });
}

function updateButtonWidth() {
  $sidebarToggleButton.css($side, $sidebar.innerWidth());
}

$.fn.closing = function() {
  this.css($side, 0);
  this.text($openSign);
  this.attr("aria-pressed", "true");
  $sidebar.attr("aria-expanded", "false");
};

$.fn.opening = function() {
  this.css($side, $sidebar.innerWidth());
  this.text($closeSign);
  this.attr("aria-pressed", "false");
  $sidebar.attr("aria-expanded", "true");
};

/***********************************
 *        HORIZONTAL-NAVBAR          ************************************************************************************************************************************************************************************
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
 height = $(window).height() - ($("body").height() - $mainElement.innerHeight());
 $fillClass.css("min-height", height);

/***********************************
 *          CONTRAST CLASS         ************************************************************************************************************************************************************************************
 **********************************/
$(".contrast").click(function() {
  $("body").toggleClass(".contrast-vars");// todo trocar $("body") por var

  if (bodyLayoutClass.indexOf("basic") === NOT_FOUND) {
    $sidebarToggleButton.css("background-color", $sidebar.css("background-color"));
    $sidebarToggleButton.css("color", $sidebar.css("color"));
  }
});

/***********************************
 *          MAGNIFY CLASS         ************************************************************************************************************************************************************************************
 **********************************/
if (typeof root === 'undefined') {
 const root = document.querySelector(":root");
}
let estadoBotaoMagnify = false;
const originalFontSize = getComputedStyle(document.documentElement).getPropertyValue("--font-size");

$(".magnify").click(function() {
  if (estadoBotaoMagnify === false) {
    root.style.setProperty("--font-size", " 25px");
    estadoBotaoMagnify = true;
  } else {
    root.style.setProperty("--font-size", originalFontSize);
    estadoBotaoMagnify = false;
  }
  for(let i = 0; i < 300; i += 10) {
    setTimeout(function(){updateButtonWidth();}, i);
  }
});
