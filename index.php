<?php get_header(); ?>

<div id="content">
	
<div class="posts_container">	
<?php
if ( is_front_page() ) {
    //echo "dit is de frontpage";

global $post;
$args = array( 'numberposts' => 5, 'category' => 1 );
$myposts = get_posts( $args );

foreach( $myposts as $post ){
	setup_postdata($post);
	?>
		<div class='post_div'><h1> <?php echo the_title(); ?></h1><?php echo the_content(); ?></div>
	<?php
	}

	

	
} else {
    //echo "dit is niet de frontpage";
}
?>
</div>

</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
