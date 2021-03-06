<?php

	global $post;
	$converted = get_post_meta( $post->ID,'_uabb_converted', true );

$settings->foreground_outside = UABB_Helper::uabb_colorpicker( $settings, 'foreground_outside', true );

$settings->column_background = UABB_Helper::uabb_colorpicker( $settings, 'column_background', true );
$settings->border_color = UABB_Helper::uabb_colorpicker( $settings, 'border_color');
if( $settings->add_legend == 'yes' ) {
	$settings->legend_column->foreground = UABB_Helper::uabb_colorpicker( $settings->legend_column, 'foreground', true );
	
	$settings->legend_column->even_properties_bg = UABB_Helper::uabb_colorpicker( $settings->legend_column, 'even_properties_bg', true );
	$settings->legend_column->legend_color = UABB_Helper::uabb_colorpicker( $settings->legend_column, 'legend_color' );
}

$foreground_outside = ( $settings->foreground_outside != '' ) ? 'background: ' . $settings->foreground_outside : 'background: #f7f7f7';
?>

.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-creative-button-wrap {
	margin-top: <?php echo ( $settings->btn_margin_top != '' ) ? $settings->btn_margin_top : '20' ?>px;
	margin-bottom: <?php echo ( $settings->btn_margin_bottom != '' ) ? $settings->btn_margin_bottom : '20' ?>px;
}

<?php

if( $settings->add_legend == 'yes' ) {
	$columns = count($settings->pricing_columns) + 1;
} else {
	$columns = count($settings->pricing_columns);
}
?>

<?php
if( $settings->show_spacing == 'yes' && $settings->spacing != '' ) {
?>
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-col-<?php echo $columns; ?> {
	padding: 0 <?php echo ( $settings->spacing / 2 ) . 'px'; ?>;
}

.fl-node-<?php echo $id; ?> .uabb-pricing-table {
	margin: 0 -<?php echo ( $settings->spacing / 2 ); ?>px;
}
<?php
}
?>
<?php
if( $settings->add_legend == 'yes' ) {
	$l_bg_color = ( $settings->legend_column->foreground != '' ) ? $settings->legend_column->foreground : ( ( $settings->foreground_outside != '' ) ? $settings->foreground_outside : '#f7f7f7' );
	if( $l_bg_color != '' ) {
	?>
	.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-outter-0 .uabb-pricing-table-column-0 {
		background: <?php echo $l_bg_color; ?>;
	}
	<?php
	}
}

if( $settings->show_spacing == 'yes' ) {
	$border_size = ( $settings->border_size != '' ) ? $settings->border_size : 1;
	if( $settings->border_style != 'none' ) {
?>
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-outter-0 .uabb-pricing-table-column-0 {
	<?php echo ( $settings->border_style != 'none' ) ? 'border: ' . $border_size . 'px ' . $settings->border_style . ' ' . $settings->border_color : ''; ?>
}
<?php
	} else {
?>
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-outter-0 .uabb-pricing-table-column-0 {
	<?php echo ( $settings->border_radius != '' ) ? 'border-radius: ' . $settings->border_radius . 'px;' : 'border-radius: 1px;'; ?>
}
<?php
	}
?>
<?php
} else {
	if( $settings->border_style == 'none' ) {
?>
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-outter-0 .uabb-pricing-table-column-0 {
	<?php
	echo ( $settings->border_radius != '' ) ? 'border-top-left-radius: ' . $settings->border_radius . 'px;' : 'border-top-left-radius: 1px;';
	echo ( $settings->border_radius != '' ) ? 'border-bottom-left-radius: ' . $settings->border_radius . 'px;' : 'border-bottom-left-radius: 1px;';
	?>
}
<?php
	}
}
?>

<?php
if( $settings->add_legend == 'yes' ) {
	/*if( $settings->legend_column->legend_feature_color != '' ) {
	?>
	.fl-builder-content .fl-node-<?php //echo $id; ?> .uabb-pricing-table-outter-0 .uabb-pricing-table-features li {
		color: <?php echo $settings->legend_column->legend_feature_color; ?>;
	}
	<?php
	}*/
?>

	.fl-node-<?php echo $id; ?> .uabb-pricing-table-outter-0 .uabb-pricing-table-features li:nth-child(even) {
	    <?php echo ( $settings->legend_column->even_properties_bg != '' ) ? 'background: '. $settings->legend_column->even_properties_bg . ';' : '' ?>
	}
<?php
}
?>

.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-0 .uabb-button-wrap {
	visibility: hidden;
}

<?php
if( $settings->show_spacing == 'no' ) {
	$border_size = ( $settings->border_size != '' ) ? $settings->border_size : 1;
	if( $settings->border_style != 'none' ) {
?>
.fl-node-<?php echo $id; ?> .uabb-pricing-table {
	<?php
	echo ( $settings->border_style != 'none' ) ? 'border: ' . $border_size . 'px ' . $settings->border_style . ' ' . $settings->border_color : '';
	?>
}
<?php
	} else {
?>
.fl-node-<?php echo $id; ?> .uabb-pricing-table {
	<?php echo ( $settings->border_radius != '' ) ? 'border-radius: ' . $settings->border_radius . 'px;' : 'border-radius: 1px;'; ?>
}
<?php
	}
?>
<?php
}

$border_size = ( $settings->border_size != '' ) ? $settings->border_size : 1;
?>

.fl-node-<?php echo $id; ?> .uabb-featured-pricing-box {  
  bottom: 100%;
  <?php if( $settings->responsive_size != 'yes' ) { ?>
  bottom: calc(100% + <?php echo $border_size; ?>px);
  <?php } ?>
}

/*Fix when price is NOT highlighted*/
<?php if ($settings->highlight == 'title' || $settings->highlight == 'none') : ?>
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-0 .uabb-pricing-table-price {
	margin-bottom: 0;
	padding-bottom: 0;
}
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-0 .uabb-pricing-table-features {
	margin-top: 10px;
}
<?php endif; ?>

/*Fix when NOTHING is highlighted*/
<?php if ($settings->highlight == 'none') : ?>
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-0 .uabb-pricing-table-title {
	padding-bottom: 0;
}


<?php endif; ?>

<?php
$isFeaturedSet = false;
// Loop through and style each pricing box
for($i = 0; $i < count($settings->pricing_columns); $i++) :

	if(!is_object($settings->pricing_columns[$i])) continue;

	// Pricing Box Settings
	$pricing_column = $settings->pricing_columns[$i];
			$settings->pricing_columns[$i]->featured_font_family = ( array ) $settings->pricing_columns[$i]->featured_font_family;

			$settings->pricing_columns[$i]->foreground = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'foreground', true );

			$settings->pricing_columns[$i]->even_properties_bg = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'even_properties_bg', true );

			$settings->pricing_columns[$i]->featured_f_background_color = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'featured_f_background_color', true );

			$settings->pricing_columns[$i]->features_color = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'features_color' );

			$settings->pricing_columns[$i]->featured_color = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'featured_color' );

			$settings->pricing_columns[$i]->title_typography_color = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'title_typography_color' );

			$settings->pricing_columns[$i]->price_typography_color = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'price_typography_color' );

			$settings->pricing_columns[$i]->duration_typography_color = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'duration_typography_color' );

			$settings->pricing_columns[$i]->highlight_color = UABB_Helper::uabb_colorpicker( $settings->pricing_columns[$i], 'highlight_color' );

		if( $settings->pricing_columns[$i]->set_featured == 'yes' ) {
			$isFeaturedSet = true;

			if( $settings->pricing_columns[$i]->show_button == 'no' ) {
			?>
			.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-features li:last-child {
				margin-bottom: 0;
			}

			<?php
			}
			?>
			.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-featured-pricing-box {
				
			    <?php if( $converted === 'yes' || isset( $settings->pricing_columns[$i]->featured_font_size_unit ) && $settings->pricing_columns[$i]->featured_font_size_unit != '' ) {
			    	?>
			    	font-size: <?php echo $settings->pricing_columns[$i]->featured_font_size_unit; ?>px;
			    <?php } else if(isset( $settings->pricing_columns[$i]->featured_font_size_unit ) && $settings->pricing_columns[$i]->featured_font_size_unit == '' && isset( $settings->pricing_columns[$i]->featured_font_size->desktop ) && $settings->pricing_columns[$i]->featured_font_size->desktop != '') { ?>
			    	font-size: <?php echo $settings->pricing_columns[$i]->featured_font_size->desktop; ?>px;
			    <?php } ?>	

                <?php if( isset( $settings->pricing_columns[$i]->featured_font_size->desktop ) && is_object( $settings->pricing_columns[$i]->featured_font_size->desktop ) && $settings->pricing_columns[$i]->featured_font_size->desktop == '' && isset( $settings->pricing_columns[$i]->featured_line_height->desktop ) && is_object( $settings->pricing_columns[$i]->featured_line_height->desktop && $settings->pricing_columns[$i]->featured_line_height->desktop != '' && $settings->pricing_columns[$i]->featured_line_height_unit == '' ) ) { ?>
					line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height->desktop; ?>px;
				<?php } ?>

			    <?php if( $converted === 'yes' || isset( $settings->pricing_columns[$i]->featured_line_height_unit ) && $settings->pricing_columns[$i]->featured_line_height_unit != '' ) { ?>
			    	line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height_unit; ?>em;
			    <?php } else if(isset( $settings->pricing_columns[$i]->featured_line_height_unit ) && $settings->pricing_columns[$i]->featured_line_height_unit == '' && isset( $settings->pricing_columns[$i]->featured_line_height->desktop ) && $settings->pricing_columns[$i]->featured_line_height->desktop != '') { ?>
			    	line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height->desktop; ?>px;
			    <?php } ?>

				<?php if( $settings->pricing_columns[$i]->featured_transform != 'none' ) : ?>
				   text-transform: <?php echo $settings->pricing_columns[$i]->featured_transform; ?>;
				<?php endif; ?>

		        <?php if( $settings->pricing_columns[$i]->featured_letter_spacing != '' ) : ?>
				   letter-spacing: <?php echo $settings->pricing_columns[$i]->featured_letter_spacing; ?>px;
				<?php endif; ?>
				
                <?php
				echo 'color: ' . uabb_theme_text_color( $settings->pricing_columns[$i]->featured_color ) . ';';
				echo ( $settings->pricing_columns[$i]->featured_font_family['family'] != 'Default' ) ? 'font-family: ' . $settings->pricing_columns[$i]->featured_font_family['family'] . ';' : '';
				echo ( $settings->pricing_columns[$i]->featured_font_family['weight'] != 'default' ) ? 'font-weight: ' . $settings->pricing_columns[$i]->featured_font_family['weight'] . ';' : '';
				
				echo 'background: ' . uabb_theme_base_color( $settings->pricing_columns[$i]->featured_f_background_color ) . ';';

				//echo 'margin: 0 ' .
				
				?>
			}

			<?php
			if( $global_settings->responsive_enabled ) { // Global Setting If started
			?>
			    @media ( max-width: <?php echo $global_settings->medium_breakpoint; ?>px ) {
			 
			        .fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-featured-pricing-box {
	            	
	            	<?php if( $converted === 'yes' || isset( $settings->pricing_columns[$i]->featured_font_size_unit_medium ) && $settings->pricing_columns[$i]->featured_font_size_unit_medium != '' ) { ?>
						font-size: <?php echo $settings->pricing_columns[$i]->featured_font_size_unit_medium; ?>px;
					<?php } else if( isset( $settings->pricing_columns[$i]->featured_font_size_unit_medium ) && $settings->pricing_columns[$i]->featured_font_size_unit_medium == '' && isset( $settings->pricing_columns[$i]->featured_font_size->medium ) && $settings->pricing_columns[$i]->featured_font_size->medium != '' ) { ?> 
						font-size: <?php echo $settings->pricing_columns[$i]->featured_font_size->medium; ?>px;
					<?php } ?>   

					<?php if( isset( $settings->pricing_columns[$i]->featured_font_size->medium ) && is_object($settings->pricing_columns[$i]->featured_font_size->medium) && $settings->pricing_columns[$i]->featured_font_size->medium == '' && isset( $settings->pricing_columns[$i]->featured_line_height->medium ) && is_object($settings->pricing_columns[$i]->featured_line_height->medium) && $settings->pricing_columns[$i]->featured_line_height->medium != '' && $settings->pricing_columns[$i]->featured_line_height_unit_medium == '' ) { ?>
					    line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height->medium; ?>px;
					<?php } ?>

	            	<?php if( $converted === 'yes' || isset( $settings->pricing_columns[$i]->featured_line_height_unit_medium ) && $settings->pricing_columns[$i]->featured_line_height_unit_medium != '' ) { ?>
						line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height_unit_medium; ?>em;
					<?php } else if( isset( $settings->pricing_columns[$i]->featured_line_height_unit_medium ) && $settings->pricing_columns[$i]->featured_line_height_unit_medium == '' && isset( $settings->pricing_columns[$i]->featured_line_height->medium ) && $settings->pricing_columns[$i]->featured_line_height->medium != '' ) { ?> 
						line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height->medium; ?>px;
					<?php } ?>
					
			        }
			    }
			 
			     @media ( max-width: <?php echo $global_settings->responsive_breakpoint; ?>px ) {
			        .fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-featured-pricing-box {
			            
			            <?php if( $converted === 'yes' || isset( $settings->pricing_columns[$i]->featured_font_size_unit_responsive ) && $settings->pricing_columns[$i]->featured_font_size_unit_responsive != '' ) { ?>
			            	font-size: <?php echo $settings->pricing_columns[$i]->featured_font_size_unit_responsive; ?>px;
							<?php if( $settings->pricing_columns[$i]->featured_line_height_unit_responsive == '' && $settings->pricing_columns[$i]->featured_font_size_unit_responsive != "" ) {?>
								line-height: <?php echo $settings->pricing_columns[$i]->featured_font_size_unit_responsive + 2 ?>px;
			            <?php }} else if( isset( $settings->pricing_columns[$i]->featured_font_size_unit_responsive ) && $settings->pricing_columns[$i]->featured_font_size_unit_responsive == '' && isset( $settings->pricing_columns[$i]->featured_font_size->small ) && $settings->pricing_columns[$i]->featured_font_size->small != '' ) {?> 
			            	font-size: <?php echo $settings->pricing_columns[$i]->featured_font_size->small; ?>px;
						    line-height: <?php echo $settings->pricing_columns[$i]->featured_font_size->small + 2?>px;
			            <?php } ?>
						
						<?php if( isset( $settings->pricing_columns[$i]->featured_font_size->small ) && is_object($settings->pricing_columns[$i]->featured_font_size->small) && $settings->pricing_columns[$i]->featured_font_size->small == '' && isset( $settings->pricing_columns[$i]->featured_line_height->small ) && is_object($settings->pricing_columns[$i]->featured_line_height->small) && $settings->pricing_columns[$i]->featured_line_height->small != '' && $settings->pricing_columns[$i]->featured_line_height_unit_responsive == '' ) { ?>
			   			 	line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height->small; ?>px;
						<?php } ?>

			            <?php if( $converted === 'yes' || isset( $settings->pricing_columns[$i]->featured_line_height_unit_responsive ) && $settings->pricing_columns[$i]->featured_line_height_unit_responsive != '' ) { ?>
			            	line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height_unit_responsive; ?>em;
			            <?php } else if( isset( $settings->pricing_columns[$i]->featured_line_height_unit_responsive )&& $settings->pricing_columns[$i]->featured_line_height_unit_responsive == '' && isset( $settings->pricing_columns[$i]->featured_line_height->small ) && $settings->pricing_columns[$i]->featured_line_height->small != '') { ?> 
			            	line-height: <?php echo $settings->pricing_columns[$i]->featured_line_height->small; ?>px;
			            <?php } ?>
			
			        }
			    }
				<?php
			}
		}
		?>

		.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-outter-<?php echo $i+1; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> {
			<?php echo ( $settings->pricing_columns[$i]->foreground != '' ) ? 'background: ' . $settings->pricing_columns[$i]->foreground : $foreground_outside; ?>;
			<?php
			if( $settings->show_spacing == 'yes' ) {
				$border_size = ( $settings->border_size != '' ) ? $settings->border_size : 1;
				if( $settings->border_style != 'none' ) {
					echo ( $settings->border_style != 'none' ) ? 'border: ' . $border_size . 'px ' . $settings->border_style . ' ' . $settings->border_color : '';
				} else {
					echo ( $settings->border_radius != '' ) ? 'border-radius: ' . $settings->border_radius . 'px;' : 'border-radius: 1px;';
				}
			?>
			<?php
			} else {
				if( $settings->border_style == 'none' ) {
					if( ( $i+1 ) == count( $settings->pricing_columns ) ) {
						echo ( $settings->border_radius != '' ) ? 'border-top-right-radius: ' . $settings->border_radius . 'px;' : 'border-top-right-radius: 1px;';
						echo ( $settings->border_radius != '' ) ? 'border-bottom-right-radius: ' . $settings->border_radius . 'px;' : 'border-bottom-right-radius: 1px;';
					}
				}
			}
			?>
		}

		<?php
		if( $settings->responsive_size == 'yes' ) {
			$size = ( $settings->resp_size != '' ) ? $settings->resp_size : '768';
		?>
		@media all and ( min-width: <?php echo $size; ?>px ) {
			<?php $border_size = ( $settings->border_size != '' ) ? $settings->border_size : 1;
				if( $settings->border_style != 'none' ) { ?>
					.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-outter-<?php echo $i+1; ?> .uabb-featured-pricing-box {
						border: <?php echo $border_size . 'px ' . $settings->border_style . ' ' . $settings->border_color; ?>;
						border-bottom: 0;
						width: 100%;
						<?php $total_border = intval($border_size) * 2; ?>
						<?php if( $settings->show_spacing != 'yes' ) { 
							
							if( isset( $settings->pricing_columns[ $i + 1 ] ) ) {

								if( $i < count($settings->pricing_columns) && $settings->pricing_columns[ $i + 1 ]->set_featured == 'yes' ) { 
									$total_border -= intval($border_size);
									?>
									margin: auto;
									border-right: 0;
								<?php } else { ?>
									margin-left: 0;
								<?php }
							} else { ?>
								margin-left: 0;
							<?php
							}
							if( isset( $settings->pricing_columns[ $i - 1 ] ) ) {
								if( $i > 0 && $settings->pricing_columns[ $i - 1 ]->set_featured == 'yes' ) { 
									$total_border -= intval($border_size);
									?>
									margin: auto;
									border-left: 0;
								<?php } else { ?>
									margin-left: -<?php echo $border_size ?>px;
								<?php }
							} else { ?>
								margin-left: -<?php echo $border_size ?>px;
							<?php
							}
								
						} else { ?>
							margin-left: -<?php echo $border_size ?>px;
						<?php } ?>
						width: calc( 100% + <?php echo $total_border; ?>px );
					}
			<?php } ?>
			}
		<?php } ?>

		.fl-node-<?php echo $id; ?> .uabb-pricing-table-outter-<?php echo $i+1; ?> .uabb-pricing-table-features li:nth-child(even) {
		    <?php echo ( $settings->pricing_columns[$i]->even_properties_bg != '' ) ? 'background: '.$settings->pricing_columns[$i]->even_properties_bg.';' : '' ?>
		}

		<?php
		if( $settings->pricing_columns[$i]->features_color != '' ) {
		?>
		.fl-node-<?php echo $id; ?> .uabb-pricing-table-outter-<?php echo $i+1; ?> .uabb-pricing-table-features li {
			color: <?php echo $settings->pricing_columns[$i]->features_color; ?>;
		}
		<?php
		}
		?>

		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-title {
			<?php echo ( $settings->pricing_columns[$i]->title_typography_color != '' ) ? 'color: ' . $settings->pricing_columns[$i]->title_typography_color . ';' : ''; ?>
		}

		.fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-duration {
			<?php echo ( $settings->pricing_columns[$i]->duration_typography_color != '' ) ? 'color: ' . $settings->pricing_columns[$i]->duration_typography_color . ';' : ''; ?>
		}

		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-price {
			<?php echo ( $settings->pricing_columns[$i]->price_typography_color != '' ) ? 'color: ' . $settings->pricing_columns[$i]->price_typography_color . ';' : ''; ?>
		}

		<?php $highlight_color = ( $settings->pricing_columns[$i]->highlight_color != '' ) ? $settings->pricing_columns[$i]->highlight_color : uabb_theme_base_color( $settings->column_background, true ); ?>

		/*Pricing Box Highlight*/
		<?php if ($settings->highlight == 'price') : ?>
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-price {
			background: <?php echo  $highlight_color; ?>;
			<?php echo ( $settings->pricing_columns[$i]->price_typography_color != '' ) ? 'color: ' . uabb_theme_text_color( $settings->pricing_columns[$i]->price_typography_color ) . ';' : ''; ?>
		}
		<?php elseif ($settings->highlight == 'title') : ?>

		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-title {
			background: <?php echo $highlight_color; ?>;
			<?php echo ( $settings->pricing_columns[$i]->title_typography_color != '' ) ? 'color: ' . uabb_theme_text_color( $settings->pricing_columns[$i]->title_typography_color ) . ';' : ''; ?>
		}
		<?php endif; ?>

		/*Fix when price is NOT highlighted*/
		<?php if ($settings->highlight == 'title' || $settings->highlight == 'none') : ?>
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-price {
			margin-bottom: 0;
			padding-bottom: 0;
		}
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-features {
			margin-top: 10px;
		}

		<?php endif; ?>

		/*Fix when NOTHING is highlighted*/
		<?php if ($settings->highlight == 'none') : ?>
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-title {
			padding-bottom: 0;
		}
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-<?php echo $i+1; ?> .uabb-pricing-table-price,
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column-0 .uabb-pricing-table-price {
		    padding: 25px 0 1px;
		}

		<?php endif; ?>

<?php
if( $settings->pricing_columns[$i]->show_button == 'yes' ) {
	$btn_id = $id . ' .uabb-pricing-table-outter-' . ( $i+1 );
	$font_size = ( isset( $settings->pricing_columns[$i]->button_typography_font_size_unit ) ) ? $settings->pricing_columns[$i]->button_typography_font_size_unit : $settings->pricing_columns[$i]->button_typography_font_size;

	$line_height = ( isset( $settings->pricing_columns[$i]->button_typography_line_height_unit ) ) ? $settings->pricing_columns[$i]->button_typography_line_height_unit : $settings->pricing_columns[$i]->button_typography_line_height;

	FLBuilder::render_module_css('uabb-button', $btn_id , array(

		'icon' => $settings->pricing_columns[$i]->btn_icon,
		'icon_position' => $settings->pricing_columns[$i]->btn_icon_position,
	    'style'             => $settings->pricing_columns[$i]->btn_style,
	    'border_size'       => $settings->pricing_columns[$i]->btn_border_size,
	    'transparent_button_options' => $settings->pricing_columns[$i]->btn_transparent_button_options,
	    'threed_button_options'      => $settings->pricing_columns[$i]->btn_threed_button_options,
	    'flat_button_options'        => $settings->pricing_columns[$i]->btn_flat_button_options,
	    'bg_color'          => $settings->pricing_columns[$i]->btn_bg_color,
	    'bg_hover_color'    => $settings->pricing_columns[$i]->btn_bg_hover_color,
	    'bg_color_opc'          => $settings->pricing_columns[$i]->btn_bg_color_opc,
	    'bg_hover_color_opc'    => $settings->pricing_columns[$i]->btn_bg_hover_color_opc,
	    'text_color'        => $settings->pricing_columns[$i]->btn_text_color,
	    'text_hover_color'  => $settings->pricing_columns[$i]->btn_text_hover_color,
	    'hover_attribute'   => $settings->pricing_columns[$i]->hover_attribute,
	    'width'              => $settings->pricing_columns[$i]->btn_width,
	    'custom_width'       => $settings->pricing_columns[$i]->btn_custom_width,
	    'custom_height'      => $settings->pricing_columns[$i]->btn_custom_height,
	    'padding_top_bottom' => $settings->pricing_columns[$i]->btn_padding_top_bottom,
	    'padding_left_right' => $settings->pricing_columns[$i]->btn_padding_left_right,
	    'border_radius'      => $settings->pricing_columns[$i]->btn_border_radius,
	    'align'             => '',
	    'mob_align'          => '',
		'font_family' => $settings->pricing_columns[$i]->button_typography_font_family,
		'font_size'         		=> ( isset( $settings->pricing_columns[$i]->button_typography_font_size ) ) ? $settings->pricing_columns[$i]->button_typography_font_size : '',
        'line_height'       		=> ( isset( $settings->pricing_columns[$i]->button_typography_line_height ) ) ? $settings->pricing_columns[$i]->button_typography_line_height : '',
		'font_size_unit'         		=> $settings->pricing_columns[$i]->button_typography_font_size_unit,
        'line_height_unit'       		=> $settings->pricing_columns[$i]->button_typography_line_height_unit,
        'font_size_unit_medium'     	=> $settings->pricing_columns[$i]->button_typography_font_size_unit_medium,
        'line_height_unit_medium'   	=> $settings->pricing_columns[$i]->button_typography_line_height_unit_medium,
        'font_size_unit_responsive'    	=> $settings->pricing_columns[$i]->button_typography_font_size_unit_responsive,
        'line_height_unit_responsive'  	=> $settings->pricing_columns[$i]->button_typography_line_height_unit_responsive,
        'transform'                     => $settings->pricing_columns[$i]->button_transform,
        'letter_spacing'                => $settings->pricing_columns[$i]->button_letter_spacing,
	));
}
?>

<?php endfor;

if( $isFeaturedSet ) {
?>
.fl-node-<?php echo $id; ?> .fl-module-content {
	padding-top: 40px;
}
<?php
}
?>

/* Pricing Box Typography {Desktop} */
.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column .uabb-pricing-table-title {

    <?php if( $converted === 'yes' || isset( $settings->title_typography_font_size_unit ) && $settings->title_typography_font_size_unit != '' ) {
    	?>
    	font-size: <?php echo $settings->title_typography_font_size_unit; ?>px;
    <?php } else if(isset( $settings->title_typography_font_size_unit ) && $settings->title_typography_font_size_unit == '' && isset( $settings->title_typography_font_size['desktop'] ) && $settings->title_typography_font_size['desktop'] != '') { ?>
    	font-size: <?php echo $settings->title_typography_font_size['desktop']; ?>px;
    <?php } ?>	

    <?php if( isset( $settings->title_typography_font_size['desktop'] ) && $settings->title_typography_font_size['desktop'] == '' && isset( $settings->title_typography_line_height['desktop'] ) && $settings->title_typography_line_height['desktop'] != '' && $settings->title_typography_line_height_unit == '' ) { ?>
		line-height: <?php echo $settings->title_typography_line_height['desktop']; ?>px;
	<?php } ?>

    <?php if( $converted === 'yes' || isset( $settings->title_typography_line_height_unit ) && $settings->title_typography_line_height_unit != '' ) { ?>
    	line-height: <?php echo $settings->title_typography_line_height_unit; ?>em;
    <?php } else if(isset( $settings->title_typography_line_height_unit ) && $settings->title_typography_line_height_unit == '' && isset( $settings->title_typography_line_height['desktop'] ) && $settings->title_typography_line_height['desktop'] != '') { ?>
    	line-height: <?php echo $settings->title_typography_line_height['desktop']; ?>px;
    <?php } ?>

	<?php if( $settings->title_transform != 'none' ) : ?>
	   text-transform: <?php echo $settings->title_transform; ?>;
	<?php endif; ?>

    <?php if( $settings->title_letter_spacing != '' ) : ?>
	   letter-spacing: <?php echo $settings->title_letter_spacing; ?>px;
	<?php endif; ?>

	<?php echo ( $settings->title_typography_font_family['family'] != 'Default' ) ? 'font-family: ' . $settings->title_typography_font_family['family'] . ';' : ''; ?>
	<?php echo ( $settings->title_typography_font_family['weight'] != 'default' ) ? 'font-weight: ' . $settings->title_typography_font_family['weight'] . ';' : ''; ?>
}

.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column .uabb-pricing-table-price {

    <?php if( $converted === 'yes' || isset( $settings->price_typography_font_size_unit ) && $settings->price_typography_font_size_unit != '' ) {
    	?>
    	font-size: <?php echo $settings->price_typography_font_size_unit; ?>px;
    <?php } else if(isset( $settings->price_typography_font_size_unit ) && $settings->price_typography_font_size_unit == '' && isset( $settings->price_typography_font_size['desktop'] ) && $settings->price_typography_font_size['desktop'] != '') { ?>
    	font-size: <?php echo $settings->price_typography_font_size['desktop']; ?>px;
     <?php } ?>
    
    <?php if( isset( $settings->price_typography_font_size['desktop'] ) && $settings->price_typography_font_size['desktop'] == '' && isset( $settings->price_typography_line_height['desktop'] ) && $settings->price_typography_line_height['desktop'] != '' && $settings->price_typography_line_height_unit == '' ) { ?>
		line-height: <?php echo $settings->price_typography_line_height['desktop']; ?>px;
	<?php } ?>

    <?php if( $converted === 'yes' || isset( $settings->price_typography_line_height_unit ) && $settings->price_typography_line_height_unit != '' ) { ?>
    	line-height: <?php echo $settings->price_typography_line_height_unit; ?>em;
    <?php } else if(isset( $settings->price_typography_line_height_unit ) && $settings->price_typography_line_height_unit == '' && isset( $settings->price_typography_line_height['desktop'] ) && $settings->price_typography_line_height['desktop'] != '') { ?>
    	line-height: <?php echo $settings->price_typography_line_height['desktop']; ?>px;
    <?php } ?>

	<?php if( isset( $settings->price_typography_line_height_unit ) && $settings->price_typography_line_height_unit != '' ) : ?>
		line-height: <?php echo $settings->price_typography_line_height_unit; ?>em;
	<?php endif; ?>

    <?php if( $settings->price_typography_letter_spacing != '' ) ?>
	   letter-spacing: <?php echo $settings->price_typography_letter_spacing; ?>px;	

	
	<?php echo ( $settings->price_typography_font_family['family'] != 'Default' ) ? 'font-family: ' . $settings->price_typography_font_family['family'] . ';' : ''; ?>
	<?php echo ( $settings->price_typography_font_family['weight'] != 'default' ) ? 'font-weight: ' . $settings->price_typography_font_family['weight'] . ';' : ''; ?>
}

.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-duration {
    
    <?php if( $converted === 'yes' || isset( $settings->duration_typography_font_size_unit ) && $settings->duration_typography_font_size_unit != '' ) {
    	?>
    	font-size: <?php echo $settings->duration_typography_font_size_unit; ?>px;
    <?php } else if(isset( $settings->duration_typography_font_size_unit ) && $settings->duration_typography_font_size_unit == '' && isset( $settings->duration_typography_font_size['desktop'] ) && $settings->duration_typography_font_size['desktop'] != '') { ?>
    	font-size: <?php echo $settings->duration_typography_font_size['desktop']; ?>px;
    <?php } ?> 
    
    <?php if( isset( $settings->duration_typography_font_size['desktop'] ) && $settings->duration_typography_font_size['desktop'] == '' && isset( $settings->duration_typography_line_height['desktop'] ) && $settings->duration_typography_line_height['desktop'] != '' && $settings->duration_typography_line_height_unit == '' ) { ?>
		line-height: <?php echo $settings->duration_typography_line_height['desktop']; ?>px;
	<?php } ?>

    <?php if( $converted === 'yes' || isset( $settings->duration_typography_line_height_unit ) && $settings->duration_typography_line_height_unit != '' ) { ?>
    	line-height: <?php echo $settings->duration_typography_line_height_unit; ?>em;
    <?php } else if(isset( $settings->duration_typography_line_height_unit ) && $settings->duration_typography_line_height_unit == '' && isset( $settings->duration_typography_line_height['desktop'] ) && $settings->duration_typography_line_height['desktop'] != '') { ?>
    	line-height: <?php echo $settings->duration_typography_line_height['desktop']; ?>px;
    <?php } ?>
	
	<?php if( $settings->duration_typography_transform != 'none' ) : ?>
	   text-transform: <?php echo $settings->duration_typography_transform; ?>;
	<?php endif; ?>

    <?php if( $settings->duration_typography_letter_spacing != '' ) : ?>
	   letter-spacing: <?php echo $settings->duration_typography_letter_spacing; ?>px;
	<?php endif; ?>

	<?php echo ( $settings->duration_typography_font_family['family'] != 'Default' ) ? 'font-family: ' . $settings->duration_typography_font_family['family'] . ';' : ''; ?>
	<?php echo ( $settings->duration_typography_font_family['weight'] != 'default' ) ? 'font-weight: ' . $settings->duration_typography_font_family['weight'] . ';' : ''; ?>
}

.fl-node-<?php echo $id; ?> .uabb-pricing-table li {
	text-align: <?php echo $settings->features_align; ?>;

    <?php if( $converted === 'yes' || isset( $settings->feature_typography_font_size_unit ) && $settings->feature_typography_font_size_unit != '' ) {
    	?>
    	font-size: <?php echo $settings->feature_typography_font_size_unit; ?>px;
    <?php } else if(isset( $settings->feature_typography_font_size_unit ) && $settings->feature_typography_font_size_unit == '' && isset( $settings->feature_typography_font_size['desktop'] ) && $settings->feature_typography_font_size['desktop'] != '') { ?>
    	font-size: <?php echo $settings->feature_typography_font_size['desktop']; ?>px;
    <?php } ?>
    
    <?php if( isset( $settings->feature_typography_font_size['desktop'] ) && $settings->feature_typography_font_size['desktop'] == '' && isset( $settings->feature_typography_line_height['desktop'] ) && $settings->feature_typography_line_height['desktop'] != '' && $settings->feature_typography_line_height_unit == '' ) { ?>
		line-height: <?php echo $settings->feature_typography_line_height['desktop']; ?>px;
	<?php } ?>

    <?php if( $converted === 'yes' || isset( $settings->feature_typography_line_height_unit ) && $settings->feature_typography_line_height_unit != '' ) { ?>
    	line-height: <?php echo $settings->feature_typography_line_height_unit; ?>em;
    <?php } else if(isset( $settings->feature_typography_line_height_unit ) && $settings->feature_typography_line_height_unit == '' && isset( $settings->feature_typography_line_height['desktop'] ) && $settings->feature_typography_line_height['desktop'] != '') { ?>
    	line-height: <?php echo $settings->feature_typography_line_height['desktop']; ?>px;
    <?php } ?>

	<?php if( $settings->feature_content_transform != 'none' ) : ?>
	   text-transform: <?php echo $settings->feature_content_transform; ?>;
	<?php endif; ?>

    <?php if( $settings->feature_content_letter_spacing != '' ) : ?>
	   letter-spacing: <?php echo $settings->feature_content_letter_spacing; ?>px;
	<?php endif; ?>

	<?php echo ( $settings->feature_typography_font_family['family'] != 'Default' ) ? 'font-family: ' . $settings->feature_typography_font_family['family'] . ';' : ''; ?>
	<?php echo ( $settings->feature_typography_font_family['weight'] != 'default' ) ? 'font-weight: ' . $settings->feature_typography_font_family['weight'] . ';' : ''; ?>
}

<?php
if( $settings->add_legend == 'yes' ) { ?>
	
	.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column-0 .uabb-pricing-table-features li,
	.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column .uabb-pricing-table-features .uabb-pricing-ledgend {
		<?php echo ( $settings->legend_column->legend_font_family->family != 'Default' ) ? 'font-family: ' . $settings->legend_column->legend_font_family->family . ';' : ''; ?>
		<?php echo ( $settings->legend_column->legend_font_family->weight != 'default' ) ? 'font-weight: ' . $settings->legend_column->legend_font_family->weight . ';' : ''; ?>

		 <?php if( $converted === 'yes' || isset( $settings->legend_column->legend_font_size_unit ) && $settings->legend_column->legend_font_size_unit != '' ) {
    	?>
	    	font-size: <?php echo $settings->legend_column->legend_font_size_unit; ?>px;
	    <?php } else if(isset( $settings->legend_column->legend_font_size_unit ) && $settings->legend_column->legend_font_size_unit == '' && isset( $settings->legend_column->legend_font_size->desktop ) && $settings->legend_column->legend_font_size->desktop != '') { ?>
	    	font-size: <?php echo $settings->legend_column->legend_font_size->desktop; ?>px;
	    <?php } ?>
		
        <?php if( isset( $settings->legend_column->legend_font_size->desktop ) && $settings->legend_column->legend_font_size->desktop == '' && isset( $settings->legend_column->legend_line_height->desktop ) && $settings->legend_column->legend_line_height->desktop != '' && $settings->legend_column->legend_line_height_unit == '' ) { ?>
		    line-height: <?php echo $settings->legend_column->legend_line_height->desktop; ?>px;
		<?php } ?>


	    <?php if( $converted === 'yes' || isset( $settings->legend_column->legend_line_height_unit ) && $settings->legend_column->legend_line_height_unit != '' ) { ?>
	    	line-height: <?php echo $settings->legend_column->legend_line_height_unit; ?>em;
	    <?php } else if(isset( $settings->legend_column->legend_line_height_unit ) && $settings->legend_column->legend_line_height_unit == '' && isset( $settings->legend_column->legend_line_height->desktop ) && $settings->legend_column->legend_line_height->desktop != '') { ?>
	    	line-height: <?php echo $settings->legend_column->legend_line_height->desktop; ?>px;
	    <?php } ?>

		<?php if( $settings->legend_column->legend_transform != 'none' ) : ?>
		   text-transform: <?php echo $settings->legend_column->legend_transform; ?>;
		<?php endif; ?>

        <?php if( $settings->legend_column->legend_letter_spacing != '' ) : ?>
		   letter-spacing: <?php echo $settings->legend_column->legend_letter_spacing; ?>px;
		<?php endif; ?>
	
	}

	.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column-0 .uabb-pricing-table-features li {
		text-align: <?php echo $settings->legend_column->legend_align; ?>;
		<?php
		if( isset( $settings->legend_column->legend_feature_color ) ) {
			if( $settings->legend_column->legend_feature_color != '' && $settings->legend_column->legend_color == '' ) {
				$settings->legend_column->legend_feature_color = UABB_Helper::uabb_colorpicker( $settings->legend_column, 'legend_feature_color' );
				$settings->legend_column->legend_color = $settings->legend_column->legend_feature_color;
				echo 'color: ' . $settings->legend_column->legend_color . ';';

			} else {
				echo ( $settings->legend_column->legend_color != '' ) ? 'color: ' . $settings->legend_column->legend_color . ';' : '';
			}
		} else {
			echo ( $settings->legend_column->legend_color != '' ) ? 'color: ' . $settings->legend_column->legend_color . ';' : '';
		}
		?>
		<?php echo ( $settings->legend_column->legend_color != '' ) ? 'color: ' . $settings->legend_column->legend_color . ';' : ''; ?>
	}
<?php } ?>

<?php
if( $settings->responsive_size == 'yes' ) {
	$size = ( $settings->resp_size != '' ) ? $settings->resp_size : '767';
?>
@media all and ( max-width: <?php echo $size; ?>px ) {
	.fl-node-<?php echo $id; ?> .uabb-pricing-table {
		flex-direction: column;
		border: none;
		margin: 0;
	}

	.fl-node-<?php echo $id; ?> .uabb-featured-pricing-box {
	    position: static;
	    padding: 10px 10px;
	}

	.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-element-box {
	    width: 100%;
	    float: none;
	    margin: 0 0 1.5em 0;
    }

    .fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-legend-box {
    	display: none;
    }

    .fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-features .uabb-pricing-ledgend {
    	display: block;
    	font-weight: bold;
	}

	.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-col-<?php echo $columns; ?> {
	    padding: 0;
	}
}
<?php
}
?>

<?php if( $global_settings->responsive_enabled ) { // Responsive Typography ?>
	@media ( max-width: <?php echo $global_settings->medium_breakpoint; ?>px ) {
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column .uabb-pricing-table-title {

        	<?php if( $converted === 'yes' || isset( $settings->title_typography_font_size_unit_medium ) && $settings->title_typography_font_size_unit_medium != '' ) { ?>
				font-size: <?php echo $settings->title_typography_font_size_unit_medium; ?>px;
			<?php } else if( isset( $settings->title_typography_font_size_unit_medium ) && $settings->title_typography_font_size_unit_medium == '' && isset( $settings->title_typography_font_size['medium'] ) && $settings->title_typography_font_size['medium'] != '' ) { ?> 
				font-size: <?php echo $settings->title_typography_font_size['medium']; ?>px;
			<?php } ?>  
		    
		    <?php if( isset( $settings->title_typography_font_size['medium'] ) && $settings->title_typography_font_size['medium'] == '' && isset( $settings->title_typography_line_height['medium'] ) && $settings->title_typography_line_height['medium'] != '' && $settings->title_typography_line_height_unit_medium == '' ) { ?>
			    line-height: <?php echo $settings->title_typography_line_height['medium']; ?>px;
			<?php } ?>

        	<?php if( $converted === 'yes' || isset( $settings->title_typography_line_height_unit_medium ) && $settings->title_typography_line_height_unit_medium != '' ) { ?>
				line-height: <?php echo $settings->title_typography_line_height_unit_medium; ?>em;
			<?php } else if( isset( $settings->title_typography_line_height_unit_medium ) && $settings->title_typography_line_height_unit_medium == '' && isset( $settings->title_typography_line_height['medium'] ) && $settings->title_typography_line_height['medium'] != '' ) { ?> 
				line-height: <?php echo $settings->title_typography_line_height['medium']; ?>px;
			<?php } ?>
				
		}

		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column .uabb-pricing-table-price {

        	<?php if( $converted === 'yes' || isset( $settings->title_typography_font_size_unit_medium ) && $settings->title_typography_font_size_unit_medium != '' ) { ?>
				font-size: <?php echo $settings->title_typography_font_size_unit_medium; ?>px;
			<?php } else if( isset( $settings->title_typography_font_size_unit_medium ) && $settings->title_typography_font_size_unit_medium == '' && isset( $settings->title_typography_font_size['medium'] ) && $settings->title_typography_font_size['medium'] != '' ) { ?> 
				font-size: <?php echo $settings->title_typography_font_size['medium']; ?>px;
			<?php } ?> 
		    
		    <?php if( isset( $settings->price_typography_font_size['medium'] ) && $settings->price_typography_font_size['medium'] == '' && isset( $settings->price_typography_line_height['medium'] ) && $settings->price_typography_line_height['medium'] != '' && $settings->price_typography_line_height_unit_medium == '' ) { ?>
			    line-height: <?php echo $settings->price_typography_line_height['medium']; ?>px;
			<?php } ?>

        	<?php if( $converted === 'yes' || isset( $settings->price_typography_line_height_unit_medium ) && $settings->price_typography_line_height_unit_medium != '' ) { ?>
				line-height: <?php echo $settings->price_typography_line_height_unit_medium; ?>em;
			<?php } else if( isset( $settings->price_typography_line_height_unit_medium ) && $settings->price_typography_line_height_unit_medium == '' && isset( $settings->price_typography_line_height['medium'] ) && $settings->price_typography_line_height['medium'] != '' ) { ?> 
				line-height: <?php echo $settings->price_typography_line_height['medium']; ?>px;
			<?php } ?>	
			
		}

		.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-duration {

        	<?php if( $converted === 'yes' || isset( $settings->duration_typography_font_size_unit_medium ) && $settings->duration_typography_font_size_unit_medium != '' ) { ?>
				font-size: <?php echo $settings->duration_typography_font_size_unit_medium; ?>px;
			<?php } else if( isset( $settings->duration_typography_font_size_unit_medium ) && $settings->duration_typography_font_size_unit_medium == '' && isset( $settings->duration_typography_font_size['medium'] ) && $settings->duration_typography_font_size['medium'] != '' ) { ?> 
				font-size: <?php echo $settings->duration_typography_font_size['medium']; ?>px;
			<?php } ?> 
		    
		    <?php if( isset( $settings->duration_typography_font_size['medium'] ) && $settings->duration_typography_font_size['medium'] == '' && isset( $settings->duration_typography_line_height['medium'] ) && $settings->duration_typography_line_height['medium'] != '' && $settings->duration_typography_line_height_unit_medium == '' ) { ?>
			    line-height: <?php echo $settings->duration_typography_line_height['medium']; ?>px;
			<?php } ?>

        	<?php if( $converted === 'yes' || isset( $settings->duration_typography_line_height_unit_medium ) && $settings->duration_typography_line_height_unit_medium != '' ) { ?>
				line-height: <?php echo $settings->duration_typography_line_height_unit_medium; ?>em;
			<?php } else if( isset( $settings->duration_typography_line_height_unit_medium ) && $settings->duration_typography_line_height_unit_medium == '' && isset( $settings->duration_typography_line_height['medium'] ) && $settings->duration_typography_line_height['medium'] != '' ) { ?> 
				line-height: <?php echo $settings->duration_typography_line_height['medium']; ?>px;
			<?php } ?>			
		}

		.fl-node-<?php echo $id; ?> .uabb-pricing-table li {

        	<?php if( $converted === 'yes' || isset( $settings->feature_typography_font_size_unit_medium ) && $settings->feature_typography_font_size_unit_medium != '' ) { ?>
				font-size: <?php echo $settings->feature_typography_font_size_unit_medium; ?>px;
			<?php } else if( isset( $settings->feature_typography_font_size_unit_medium ) && $settings->feature_typography_font_size_unit_medium == '' && isset( $settings->feature_typography_font_size['medium'] ) && $settings->feature_typography_font_size['medium'] != '' ) { ?> 
				font-size: <?php echo $settings->feature_typography_font_size['medium']; ?>px;
			<?php } ?> 
		    
		     <?php if( isset( $settings->feature_typography_font_size['medium'] ) && $settings->feature_typography_font_size['medium'] == '' && isset( $settings->feature_typography_line_height['medium'] ) && $settings->feature_typography_line_height['medium'] != '' && $settings->feature_typography_line_height_unit_medium == '' ) : ?>
			    line-height: <?php echo $settings->feature_typography_line_height['medium']; ?>px;
			<?php endif; ?>

        	<?php if( $converted === 'yes' || isset( $settings->feature_typography_line_height_unit_medium ) && $settings->feature_typography_line_height_unit_medium != '' ) { ?>
				line-height: <?php echo $settings->feature_typography_line_height_unit_medium; ?>em;
			<?php } else if( isset( $settings->feature_typography_line_height_unit_medium ) && $settings->feature_typography_line_height_unit_medium == '' && isset( $settings->feature_typography_line_height['medium'] ) && $settings->feature_typography_line_height['medium'] != '' ) { ?> 
				line-height: <?php echo $settings->feature_typography_line_height['medium']; ?>px;
			<?php } ?>
		}

		<?php if( $settings->add_legend == 'yes' ) { ?>
			.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column-0 .uabb-pricing-table-features li,
			.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column .uabb-pricing-table-features .uabb-pricing-ledgend {

            	<?php if( $converted === 'yes' || isset( $settings->legend_column->legend_font_size_unit_medium ) && $settings->legend_column->legend_font_size_unit_medium != '' ) { ?>
					font-size: <?php echo $settings->legend_column->legend_font_size_unit_medium; ?>px;
				<?php } else if( isset( $settings->legend_column->legend_font_size_unit_medium ) && $settings->legend_column->legend_font_size_unit_medium == '' && isset( $settings->legend_column->legend_font_size->medium ) && $settings->legend_column->legend_font_size->medium != '' ) { ?> 
					font-size: <?php echo $settings->legend_column->legend_font_size->medium; ?>px;
				<?php } ?> 

				<?php if( isset( $settings->legend_column->legend_font_size->medium ) &&$settings->legend_column->legend_font_size->medium == '' && isset( $settings->legend_column->legend_line_height->medium ) && $settings->legend_column->legend_line_height->medium != '' && $settings->legend_column->legend_line_height_unit_medium == '' ) { ?>
				    line-height: <?php echo $settings->legend_column->legend_line_height->medium; ?>px;
				<?php } ?>

            	<?php if( $converted === 'yes' || isset( $settings->legend_column->legend_line_height_unit_medium ) && $settings->legend_column->legend_line_height_unit_medium != '' ) { ?>
					line-height: <?php echo $settings->legend_column->legend_line_height_unit_medium; ?>em;
				<?php } else if( isset( $settings->legend_column->legend_line_height_unit_medium ) && $settings->legend_column->legend_line_height_unit_medium == '' && isset( $settings->legend_column->legend_line_height->medium ) && $settings->legend_column->legend_line_height->medium != '' ) { ?> 
					line-height: <?php echo $settings->legend_column->legend_line_height->medium; ?>px;
				<?php } ?>
			}
		<?php } ?>
	}

	@media ( max-width: <?php echo $global_settings->responsive_breakpoint; ?>px ) {
		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column .uabb-pricing-table-title {

        	<?php if( $converted === 'yes' || isset( $settings->title_typography_font_size_unit_responsive ) && $settings->title_typography_font_size_unit_responsive != '' ) { ?>
				font-size: <?php echo $settings->title_typography_font_size_unit_responsive; ?>px;
			<?php } else if( isset( $settings->title_typography_font_size_unit_responsive ) && $settings->title_typography_font_size_unit_responsive == '' && isset( $settings->title_typography_font_size['small'] ) && $settings->title_typography_font_size['small'] != '' ) { ?> 
				font-size: <?php echo $settings->title_typography_font_size['small']; ?>px;
			<?php } ?>  
		    
		    <?php if( isset( $settings->title_typography_font_size['small'] ) && $settings->title_typography_font_size['small'] == '' && isset( $settings->title_typography_line_height['small'] ) && $settings->title_typography_line_height['small'] != '' && $settings->title_typography_line_height_unit_responsive == '' ) { ?>
			    line-height: <?php echo $settings->title_typography_line_height['small']; ?>px;
			<?php } ?>

        	<?php if( $converted === 'yes' || isset( $settings->title_typography_line_height_unit_responsive ) && $settings->title_typography_line_height_unit_responsive != '' ) { ?>
				line-height: <?php echo $settings->title_typography_line_height_unit_responsive; ?>em;
			<?php } else if( isset( $settings->title_typography_line_height_unit_responsive ) && $settings->title_typography_line_height_unit_responsive == '' && isset( $settings->title_typography_line_height['small'] ) && $settings->title_typography_line_height['small'] != '' ) { ?> 
				line-height: <?php echo $settings->title_typography_line_height['small']; ?>px;
			<?php } ?>
		}

		.fl-builder-content .fl-node-<?php echo $id; ?> .uabb-pricing-table-column .uabb-pricing-table-price {

        	<?php if( $converted === 'yes' || isset( $settings->price_typography_font_size_unit_responsive ) && $settings->price_typography_font_size_unit_responsive != '' ) { ?>
				font-size: <?php echo $settings->price_typography_font_size_unit_responsive; ?>px;
			<?php } else if( isset( $settings->price_typography_font_size_unit_responsive ) && $settings->price_typography_font_size_unit_responsive == '' && isset( $settings->price_typography_font_size['small'] ) && $settings->price_typography_font_size['small'] != '' ) { ?> 
				font-size: <?php echo $settings->price_typography_font_size['small']; ?>px;
			<?php } ?> 
		    
		    <?php if( isset( $settings->price_typography_font_size['small'] ) && $settings->price_typography_font_size['small'] == '' && isset( $settings->price_typography_line_height['small'] ) && $settings->price_typography_line_height['small'] != '' && $settings->price_typography_line_height_unit_responsive == '' ) { ?>
			    line-height: <?php echo $settings->price_typography_line_height['small']; ?>px;
			<?php } ?>


        	<?php if( $converted === 'yes' || isset( $settings->price_typography_line_height_unit_responsive ) && $settings->price_typography_line_height_unit_responsive != '' ) { ?>
				line-height: <?php echo $settings->price_typography_line_height_unit_responsive; ?>em;
			<?php } else if( isset( $settings->price_typography_line_height_unit_responsive ) && $settings->price_typography_line_height_unit_responsive == '' && isset( $settings->price_typography_line_height['small'] ) && $settings->price_typography_line_height['small'] != '' ) { ?> 
				line-height: <?php echo $settings->price_typography_line_height['small']; ?>px;
			<?php } ?>

		}

		.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-duration {

        	<?php if( $converted === 'yes' || isset( $settings->duration_typography_font_size_unit_responsive ) && $settings->duration_typography_font_size_unit_responsive != '' ) { ?>
				font-size: <?php echo $settings->duration_typography_font_size_unit_responsive; ?>px;
			<?php } else if( isset( $settings->duration_typography_font_size_unit_responsive ) && $settings->duration_typography_font_size_unit_responsive == '' && isset( $settings->duration_typography_font_size['small'] ) && $settings->duration_typography_font_size['small'] != '' ) { ?> 
				font-size: <?php echo $settings->duration_typography_font_size['small']; ?>px;
			<?php } ?> 	
		    
		    <?php if( isset( $settings->duration_typography_font_size['small'] ) && $settings->duration_typography_font_size['small'] == '' && isset( $settings->duration_typography_line_height['small'] ) && $settings->duration_typography_line_height['small'] != '' && $settings->duration_typography_line_height_unit_responsive == '' ) { ?>
			    line-height: <?php echo $settings->duration_typography_line_height['small']; ?>px;
			<?php } ?>

        	<?php if( $converted === 'yes' || isset( $settings->duration_typography_line_height_unit_responsive ) && $settings->duration_typography_line_height_unit_responsive != '' ) { ?>
				line-height: <?php echo $settings->duration_typography_line_height_unit_responsive; ?>em;
			<?php } else if( isset( $settings->duration_typography_line_height_unit_responsive ) && $settings->duration_typography_line_height_unit_responsive == '' && isset( $settings->duration_typography_line_height['small'] ) && $settings->duration_typography_line_height['small'] != '' ) { ?> 
				line-height: <?php echo $settings->duration_typography_line_height['small']; ?>px;
			<?php } ?>	
			
		}

		.fl-node-<?php echo $id; ?> .uabb-pricing-table li {

        	<?php if( $converted === 'yes' || isset( $settings->feature_typography_font_size_unit_responsive ) && $settings->feature_typography_font_size_unit_responsive != '' ) { ?>
				font-size: <?php echo $settings->feature_typography_font_size_unit_responsive; ?>px;
			<?php } else if( isset( $settings->feature_typography_font_size_unit_responsive ) && $settings->feature_typography_font_size_unit_responsive == '' && isset( $settings->feature_typography_font_size['small'] ) && $settings->feature_typography_font_size['small'] != '' ) { ?> 
				font-size: <?php echo $settings->feature_typography_font_size['small']; ?>px;
			<?php } ?> 
		    
		    <?php if( isset( $settings->feature_typography_font_size['small'] ) && $settings->feature_typography_font_size['small'] == '' && isset( $settings->feature_typography_line_height['small'] ) && $settings->feature_typography_line_height['small'] != '' && $settings->feature_typography_line_height_unit_responsive == '' ) { ?>
		   		line-height: <?php echo $settings->feature_typography_line_height['small']; ?>px;
			<?php } ?>

        	<?php if( $converted === 'yes' || isset( $settings->feature_typography_line_height_unit_responsive ) && $settings->feature_typography_line_height_unit_responsive != '' ) { ?>
				line-height: <?php echo $settings->feature_typography_line_height_unit_responsive; ?>em;
			<?php } else if( isset( $settings->feature_typography_line_height_unit_responsive ) && $settings->feature_typography_line_height_unit_responsive == '' && isset( $settings->feature_typography_line_height['small'] ) && $settings->feature_typography_line_height['small'] != '' ) { ?> 
				line-height: <?php echo $settings->feature_typography_line_height['small']; ?>px;
			<?php } ?>	
			
		}

		<?php if( $settings->add_legend == 'yes' ) : ?>
		.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column-0 .uabb-pricing-table-features li,
		.fl-node-<?php echo $id; ?> .uabb-pricing-table .uabb-pricing-table-column .uabb-pricing-table-features .uabb-pricing-ledgend {

        	<?php if( $converted === 'yes' || isset( $settings->legend_column->legend_font_size_unit_responsive ) && $settings->legend_column->legend_font_size_unit_responsive != '' ) { ?>
				font-size: <?php echo $settings->legend_column->legend_font_size_unit_responsive; ?>px;
			<?php } else if( isset( $settings->legend_column->legend_font_size_unit_responsive ) && $settings->legend_column->legend_font_size_unit_responsive == '' && isset( $settings->legend_column->legend_font_size->small ) && $settings->legend_column->legend_font_size->small != '' ) { ?> 
				font-size: <?php echo $settings->legend_column->legend_font_size->small; ?>px;
			<?php } ?> 
			
			<?php if( isset( $settings->legend_column->legend_font_size->small ) && $settings->legend_column->legend_font_size->small == '' && isset( $settings->legend_column->legend_line_height->small ) && $settings->legend_column->legend_line_height->small != '' && $settings->legend_column->legend_line_height_unit_responsive == '' ) { ?>
			    line-height: <?php echo $settings->legend_column->legend_line_height->small; ?>px;
			<?php } ?>

        	<?php if( $converted === 'yes' || isset( $settings->legend_column->legend_line_height_unit_responsive ) && $settings->legend_column->legend_line_height_unit_responsive != '' ) { ?>
				line-height: <?php echo $settings->legend_column->legend_line_height_unit_responsive; ?>em;
			<?php } else if( isset( $settings->legend_column->legend_line_height_unit_responsive ) && $settings->legend_column->legend_line_height_unit_responsive == '' && isset( $settings->legend_column->legend_line_height->small ) && $settings->legend_column->legend_line_height->small != '' ) { ?> 
				line-height: <?php echo $settings->legend_column->legend_line_height->small; ?>px;
			<?php } ?>	
			
		}
		<?php endif; ?>
	}
<?php } ?>