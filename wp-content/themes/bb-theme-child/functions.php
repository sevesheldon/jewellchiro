<?php

// Defines
define( 'FL_CHILD_THEME_DIR', get_stylesheet_directory() );
define( 'FL_CHILD_THEME_URL', get_stylesheet_directory_uri() );

// Classes
require_once 'classes/class-fl-child-theme.php';

// Actions
add_action( 'wp_enqueue_scripts', 'FLChildTheme::enqueue_scripts', 1000 );

add_action('wp_dashboard_setup', 'custom_dashboard_widgets'); 
function custom_dashboard_widgets() {
global $wp_meta_boxes;
wp_add_dashboard_widget('custom_contact_widget', 'Theme Support', 'custom_dashboard_contact');
}
function custom_dashboard_contact() {
// Widget Content Here
echo '<p>Welcome to your website! Make sure to keep your site updated often to keep it secure. </p>
<p>Need help with something? I can always provide as-needed <a href="https://www.heartcenteredwebdesign.com/website-care/">tech support or a monthly maintenance plan</a> if needed. I am just a click away. Enjoy your site!</p>
<p>Jocelyn St.Cyr<br/>(781) 629-9168<br/>
jocelyn@heartcenteredwebdesign.com</p>';
}


function my_bb_custom_fonts ( $system_fonts ) {
  $system_fonts[ 'LeagueSpartan' ] = array(
    'fallback' => 'Muli, Arial, sans-serif',
    'weights' => array(
        '700',
    ),
  );

  $system_fonts[ 'MyriadPro' ] = array(
    'fallback' => 'Verdana, Arial, sans-serif',
    'weights' => array(
        '400',
    ),
  );

	$system_fonts[ 'PreludeFLF' ] = array(
    'fallback' => 'Verdana, Arial, sans-serif',
    'weights' => array(
        '700',
    ),
  );
		
	return $system_fonts;
}
	
//Add to Beaver Builder Theme Customizer
add_filter( 'fl_theme_system_fonts', 'my_bb_custom_fonts' );

//Add to Page Builder modules
add_filter( 'fl_builder_font_families_system', 'my_bb_custom_fonts' );
