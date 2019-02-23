$classe = $("body").attr('class');
if($classe == "basic-sidebar-left"){
  $sidebar = $(".sidebar-left");
  $side = "left";
  $openSign = ">";
  $closeSign = "<";
  $btn = $(".btn-sidebar-left");
}else if($classe == "basic-sidebar-right"){
  $sidebar = $(".sidebar-right");
  $side = "right";
  $openSign = "<";
  $closeSign = ">";
  $btn = $(".btn-sidebar-right");
}

if($classe != "basic"){
  $top = $('main').position().top;
  if($('body').width() < 481){
     $sidebar.css($side, 0);
     $sidebar.css('top', $top);
   }
  $(document).ready(function(){
    
    $btn.css('background-color', $sidebar.css('background-color'));
    $btn.css('top', $top + 40);

    /*Configuração do aspeto inicial*/
    if($('main').width() < 780){
      $sidebar.toggle();
      $btn.closing();
    }else{
      $btn.opening();
    }

    /*Configuração da utilização do button*/
    $btn.click(function(){
      $sidebar.toggle("fast", function() {
        if($sidebar.css('display') == 'none'){
          $btn.closing();
        }else{
          $btn.opening();
        }
      });
    });
  });
  /*Configuração da alteração de tamanho da janela*/
  $( window ).resize(function() {
    if($('main').width() < 780 && $sidebar.css('display') == 'grid'){
      $sidebar.hide();
      $btn.closing();
    }else if($sidebar.css('display') == 'grid'){
      $btn.css($side, $sidebar.innerWidth());/*update da largura*/
    }
  });
}
$.fn.closing = function() {
  this.css($side, 0);
  this.text($openSign);
  this.attr('aria-pressed', 'true');
  $sidebar.attr('aria-expanded', 'false');
};

$.fn.opening = function() {
  this.css($side, $sidebar.innerWidth());
  this.text($closeSign);
  this.attr('aria-pressed', 'false');
  $sidebar.attr('aria-expanded', 'true');
};

/***********************************
 *        VERTICAL-NAVBAR          ************************************************************************************************************************************************************************************
 **********************************/
$links = $('header.head > nav > ul.links-hover');

$("#toggle").click(function(){
  $links.toggle();
});

$(document).ready(function(){
 //navbar responsive
  if($('body').width() >= 450){
     $("#toggle").hide();
  }else{
    $links.hide();
    $('.head > nav').switchClass('flexRow', 'flexCol');
    $links.switchClass('flexEnd', 'flexStart');
    $links.switchClass('flexRow', 'flexCol');
  }

});

$( window ).resize(function() {
  if($('body').width() < 450){
    $("#toggle").show();
    $links.hide();
    $('.head > nav').switchClass('flexRow', 'flexCol');
    $links.switchClass('flexEnd', 'flexStart');
    $links.switchClass('flexRow', 'flexCol');
  }else if($('body').width() >= 450) {
    $("#toggle").hide();
    $links.show();
    $('.head > nav').switchClass('flexCol', 'flexRow');
    $links.switchClass('flexStart', 'flexEnd');
    $links.switchClass('flexCol', 'flexRow');
  }
});

$.fn.switchClass = function(previous, next) {
  this.removeClass(previous).addClass(next);
};
