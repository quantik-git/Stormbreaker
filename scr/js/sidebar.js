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

if (bodyLayoutClass.indexOf("basic-sidebar") !== NOT_FOUND) {
  distanceTop = $mainElement.position().top;

  if (bodyElement.width() < 481) {
    $sidebar.css($side, 0);
    $sidebar.css("top", distanceTop);
  }

  $(document).ready(function() {
    $sidebarToggleButton.css("top", distanceTop + 40);

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
        $sidebar.css("top", distanceTop);
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
