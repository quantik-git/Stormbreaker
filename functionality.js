$classe = $("body").attr('class');
if($classe == "basic-sidebar-left"){
  $sidebar = ".sidebar-left";
  $side = "left";
  $openSign = ">";
  $closeSign = "<";
  $btn = ".btn-sidebar-left";
}else if($classe == "basic-sidebar-right"){
  $sidebar = $(".sidebar-right");
  $side = "right";
  $openSign = "<";
  $closeSign = ">";
  $btn = $(".btn-sidebar-right");
}

if($classe != "basic"){
  $(document).ready(function(){
    $btn.css('background-color', $sidebar.css('background-color'));
    $btn.css('top', $("header.head").height()+32+16+40);

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
      $sidebar.toggle();
      $btn.closing();
    }else if($sidebar.css('display') == 'grid'){
      $btn.css($side, $sidebar.width()+32);/*update da largura*/
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
  this.css($side, $sidebar.width()+32);
  this.text($closeSign);
  this.attr('aria-pressed', 'false');
  $sidebar.attr('aria-expanded', 'true');
};

/***********************************
 *        VERTICAL-NAVBAR          ************************************************************************************************************************************************************************************
 **********************************/
$("#toggle").click(function(){
  $(".links-hover").toggle();
});

$(document).ready(function(){
 //navbar responsive
  if($('main').width() >= 450){
     $("#toggle").hide();
  }else{
    $('.links-hover').hide();
    $('nav').switchClass('flexRow', 'flexCol');
    $('.links-hover').switchClass('flexEnd', 'flexStart');
    $('.links-hover').switchClass('flexRow', 'flexCol');
  }

});

$( window ).resize(function() {
  if($('main').width() < 450){
    $("#toggle").show();
    $('.links-hover').hide();
    $('nav').switchClass('flexRow', 'flexCol');
    $('.links-hover').switchClass('flexEnd', 'flexStart');
    $('.links-hover').switchClass('flexRow', 'flexCol');
  }else if($('main').width() >= 450) {
    $("#toggle").hide();
    $('.links-hover').show();
    $('nav').switchClass('flexCol', 'flexRow');
    $('.links-hover').switchClass('flexStart', 'flexEnd');
    $('.links-hover').switchClass('flexCol', 'flexRow');
  }
});

$.fn.switchClass = function(previous, next) {
  this.removeClass(previous).addClass(next);
};
