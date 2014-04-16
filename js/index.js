$(document).ready(function(){

  // body.js vyuzivame pro stylovani

  $('body').addClass('js');

  // Inicializace Fancyboxu

	$(".fancybox").fancybox();

  $("[data-append],[data-replace],[data-after],[data-before]").ajaxInclude();

})
