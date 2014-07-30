//alert("doet dit het?");

if(jQuery)
{
    //alert('jquery active');
}

$(document).ready(function (){
var bob = $(".menu li");
bob.prepend('<div class="menu_first_filler"></div>'); //first in
bob.append('<div class="menu_last_filler"></div>'); //last in

var padd = $('#content').css('margin-left').replace("px", ""); //hij geeft de inhoud van de css eigenschap 'margin-left' terug als een string
padd = parseInt(padd) + 50; //parseInt is een standaard javascript functie welke ervoor zorgt dat de parameter(content) naar een int wordt geconverteerd vanuit een string.
$('.menu_first_filler').css( "width", "" + padd + "" );

var i = 0;
var listItems = $(".menu li");
listItems.each(function(i, li) {
    i++;
	//alert("dit is de" + i + "iteratie");
	var tochar = i.toString();
	var lastnum = tochar.charAt(tochar.length-1);
	//alert(lastnum);
	
switch (lastnum) {
  case "0":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_red.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_red.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_red.png)");
    break;
  case "1":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_gold.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_gold.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_gold.png)");
    break;
  case "2":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_cyan.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_cyan.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_cyan.png)");
    break;
  case "3":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_green.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_green.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_green.png)");
    break;
  case "4":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_red.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_red.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_red.png)");
    break;
  case "5":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_pink.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_pink.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_pink.png)");
    break;
  case "6":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_orange.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_orange.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_orange.png)");
    break;
  case "7":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_purple.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_purple.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_purple.png)");
    break;
  case "8":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_darkblue.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_darkblue.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_darkblue.png)");
    break;
  case "9":
    $(this).find('.menu_first_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_cyan.png)");
	$(this).find('a').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_middle_cyan.png)");
	$(this).find('.menu_last_filler').css("background-image", "url(wp-content/themes/socialize_theme/images/acht_menubut_end_cyan.png)");
    break;
}

});// end of listItems.each



});

$(window).resize(function() {
padd = $('#content').css('margin-left');
padd = parseInt(padd) + 50; //parseInt is een standaard javascript functie welke ervoor zorgt dat de parameter(content) naar een int wordt geconverteerd vanuit een string.
$('.menu_first_filler').css( "width", "" + padd + "" );
});