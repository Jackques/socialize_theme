<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html <?php language_attributes(); ?> dir="ltr" xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
<meta name="description" content="<?php bloginfo( 'description' ); ?>">

<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="wp-content/themes/socialize_theme/scripts/menubalken_liquid.js"></script>
<?php	wp_head(); ?>
</head>

<body>
<!--<div id="sidefill"></div>-->
<div id="header">
	<div id="logo_container">
	<a href="http://www.socialize-breda.nl/">
		<img src="wp-content/themes/socialize_theme/images/logo_tijdelijk.png" />
	</a>
		<!-- voorbeeld, ik ga het logo natuurlijk wel via wordpress erin laten genereren -->
	</div>
</div>

<?php /* de code om het hoofdmenu in te voeren, het hoofdmnu wat op de primaire plek staat (ingestelt in wordpress als primair) in te voegen en waarvan de knoppen worden ingewikkeld in div's, o,ja en met een omgewikkelde div genaamd "menu-header" */ ?>
<?php wp_nav_menu( array( 'container_class' => 'hoofdmenu', 'theme_location' => 'menu-1', 'container' => 'div' ) ); ?>