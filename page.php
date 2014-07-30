<?php get_header(); ?>

<div id="content">
	
<div class="posts_container">	

		<?php
		while ( have_posts() ) : the_post();
		echo '<h1>';
		the_title();
		echo '</h1>';
		the_content();
		endwhile;
		?>
		
</div>

</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
