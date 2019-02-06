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
    $sidebar.toggle();
    if($sidebar.css('display') == 'none'){
      $btn.closing();
    }else{
      $btn.opening();
    }
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

$.fn.closing = function() {
  this.css($side, 0);
  this.text($openSign);
  this.attr('aria-pressed', 'true');
};

$.fn.opening = function() {
  this.css($side, $sidebar.width()+32);
  this.text($closeSign);
  this.attr('aria-pressed', 'false');
};
