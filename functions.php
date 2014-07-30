<?php

add_action( 'init', 'register_my_menus' );
function register_my_menus() {
register_nav_menus(
		array(
		'menu-1' => __( 'Hoofdmenu' )
		)
	);
// register_nav_menus(array('menu-1' => __( 'Hoofdmenu' ),'menu-2' => __( 'Menu 2' )));
}

?>
