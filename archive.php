<?php get_header(); ?>
  <!-- Deze template wordt gebruikt indien er geen category.php aanwezig is. Omdat de archiveer functie voor deze website niet wordt gebruikt kunnen we archive.php als standaardtemplate gebruiken -->   
        <div id="container">  
            <div id="content">
				<div class="posts_container">	
				
				<?php	
				
				global $wp_query; //roept de class aan waar alle shit in zit
				$queried_object_id = $wp_query->queried_object_id; //pakt uit deze class het id nummer van de huidige categorie welke wordt getoond (is opgeroepen) en zet deze in de variabele
				//echo $queried_object_id;
				
				global $post;
				$args = array( 'numberposts' => 10, 'category' => $queried_object_id );
				$myposts = get_posts( $args );

				foreach( $myposts as $post ){
				setup_postdata($post);
					
					if(is_category( 'agenda' ) ){
					?>
						<div class='post_div'><h2 class="cat_h2"> <?php echo the_title(); ?></h2><p id="afzet"><?php echo get_the_content(); ?></p></div>
					<?php
					}elseif(is_category( 'bestuur' ) ){
					?>
						<div class='post_div'><h3 class="cat_h3"> <?php echo the_title(); ?></h3><p id="afzet_h3"><?php echo get_the_content(); ?></p></div>
					<?php
					}else{
					?>
						<div class='post_div' style="display:inline-block; vertical-align:top;">
						<h4 class="cat_h4"><?php echo the_title(); ?></h3>
						<p id="afzet_h4"><?php echo get_the_content(); ?></p>
						</div>
					<?php
					}
				}
				?>

				</div><!-- #posts_container -->   	
            </div><!-- #content -->     
        </div><!-- #container -->
         
<?php get_sidebar(); ?>   
<?php get_footer(); ?>