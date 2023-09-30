<?php
$args = array(
  'post_type' => 'post', // You can change this to a custom post type if needed
  'posts_per_page' => -1, // Display all posts, you can limit this number
);

// Créer la requête
$custom_query = new WP_Query(args);

// Vérifier si des articles existent et démarrer la boucle
if ($custom_query->have_posts()) :
  while ($custom_query->have_posts()) : $custom_query->the_post();

    $post_terms = get_the_terms(get_the_ID(), 'category');

    // Contenu de la boucle ici

  endwhile;
  // Restaurer les données de publication d'origine
  wp_reset_postdata();
else :
  // Si aucun article n'est trouvé
  echo 'No projects found';
endif;
?>