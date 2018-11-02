<?php
/**
 *  UABB Info List Module file
 *
 *  @package UABB Info List Module
 */

/**
 * Function that initializes Info List Module
 *
 * @class UABBInfoList
 */
class UABBInfoList extends FLBuilderModule {
	/**
	 * Constructor function that constructs default values for the Info List Module
	 *
	 * @method __construct
	 */
	public function __construct() {
		parent::__construct(
			array(
				'name'            => __( 'Info List', 'uabb' ),
				'description'     => __( 'A totally awesome module!', 'uabb' ),
				'category'        => BB_Ultimate_Addon_Helper::module_cat( BB_Ultimate_Addon_Helper::$content_modules ),
				'group'           => UABB_CAT,
				'dir'             => BB_ULTIMATE_ADDON_DIR . 'modules/info-list/',
				'url'             => BB_ULTIMATE_ADDON_URL . 'modules/info-list/',
				'editor_export'   => true, // Defaults to true and can be omitted.
				'enabled'         => true, // Defaults to true and can be omitted.
				'partial_refresh' => true, // Defaults to false and can be omitted.
				'icon'            => 'info-list.svg',
			)
		);
		$this->add_js( 'jquery-waypoints' );
		// Register and enqueue your own.
		$this->add_css( 'uabb-animate', $this->url . 'css/animate.css' );
	}

	/**
	 * Function to get the icon for the Info List
	 *
	 * @method get_icons
	 * @param string $icon gets the icon for the module.
	 */
	public function get_icon( $icon = '' ) {

		// check if $icon is referencing an included icon.
		if ( '' != $icon && file_exists( BB_ULTIMATE_ADDON_DIR . 'modules/info-list/icon/' . $icon ) ) {
			$path = BB_ULTIMATE_ADDON_DIR . 'modules/info-list/icon/' . $icon;
		}

		if ( file_exists( $path ) ) {
			$remove_icon = apply_filters( 'uabb_remove_svg_icon', false, 10, 1 );
			if ( true === $remove_icon ) {
				return;
			} else {
				return file_get_contents( $path );
			}
		} else {
			return '';
		}
	}

	/**
	 * Render Image
	 *
	 * @method render_image
	 * @param object $item gets the object for the module.
	 * @param object $settings gets the settings for the module.
	 */
	public function render_image( $item, $settings ) {
		$settings->icon_image_size = isset( $settings->icon_image_size ) ? $settings->icon_image_size : 75;
		if ( 'circle' == $settings->list_icon_style ) {
			$infolist_icon_size = (int) $settings->icon_image_size / 2;
		} elseif ( 'square' == $settings->list_icon_style ) {
			$infolist_icon_size = (int) $settings->icon_image_size / 2;
		} elseif ( 'custom' == $settings->list_icon_style ) {
			$infolist_icon_size = (int) $settings->icon_image_size;
		} else {
			$infolist_icon_size = (int) $settings->icon_image_size;
		}
		$imageicon_array = array(

			/* General Section */
			'image_type'            => ( isset( $item->image_type ) ) ? $item->image_type : 'none',

			/* Icon Basics */
			'icon'                  => $item->icon,
			'icon_size'             => $infolist_icon_size,
			'icon_align'            => 'center',

			/* Image Basics */
			'photo_source'          => $item->photo_source,
			'photo'                 => $item->photo,
			'photo_url'             => $item->photo_url,
			'img_size'              => (int) $settings->icon_image_size,
			'img_align'             => 'center',
			'photo_src'             => ( isset( $item->photo_src ) ) ? $item->photo_src : '',

			/* Icon Style */
			'icon_style'            => $settings->list_icon_style,
			'icon_bg_size'          => $settings->list_icon_bg_padding,
			'icon_border_style'     => '',
			'icon_border_width'     => '',
			'icon_bg_border_radius' => $settings->list_icon_bg_border_radius,

			/* Image Style */
			'image_style'           => $settings->list_icon_style,
			'img_bg_size'           => $settings->list_icon_bg_padding,
			'img_border_style'      => '',
			'img_border_width'      => '',
			'img_bg_border_radius'  => $settings->list_icon_bg_border_radius,
		);
		/* Render HTML Function */
		FLBuilder::render_module_html( 'image-icon', $imageicon_array );

	}
	/**
	 * Render text
	 *
	 * @method render_text
	 * @param object $item gets the items.
	 * @param var    $list_item_counter  counts the list item counter value.
	 */
	public function render_each_item( $item, $list_item_counter ) {
		echo '<li class="uabb-info-list-item info-list-item-dynamic' . $list_item_counter . '">';
		echo '<div class="uabb-info-list-content-wrapper fl-clearfix uabb-info-list-' . $this->settings->icon_position . '">';

		if ( ! empty( $item->list_item_link ) && 'complete' === $item->list_item_link && ! empty( $item->list_item_url ) ) {

			echo '<a href="' . $item->list_item_url . '" class="uabb-info-list-link" target="' . $item->list_item_link_target . '" ' . BB_Ultimate_Addon_Helper::get_link_rel( $item->list_item_link_target, $item->list_item_link_nofollow, 0 ) . '></a>';
		}

		if ( isset( $item->image_type ) && 'none' != $item->image_type ) {
			echo '<div class="uabb-info-list-icon info-list-icon-dynamic' . $list_item_counter . '">';

			if ( ! empty( $item->list_item_link ) && 'icon' == $item->list_item_link ) {
				echo '<a href="' . $item->list_item_url . '" class="uabb-info-list-link" target="' . $item->list_item_link_target . '" ' . BB_Ultimate_Addon_Helper::get_link_rel( $item->list_item_link_target, $item->list_item_link_nofollow, 0 ) . '></a>';
			}
			$this->render_image( $item, $this->settings );

			if ( ! empty( $item->image_type ) && 'custom_char' == $item->image_type ) {
				echo '<div class="custom-character' . $list_item_counter . '">' . $item->custom_text . '</div>';
			}
			echo '</div>';
		}

		echo '<div class="uabb-info-list-content uabb-info-list-' . $this->settings->icon_position . ' info-list-content-dynamic' . $list_item_counter . '">';

		echo '<' . $this->settings->heading_tag_selection . ' class="uabb-info-list-title">';
		if ( ! empty( $item->list_item_link ) && 'list-title' === $item->list_item_link && ! empty( $item->list_item_url ) ) {

			echo '<a href="' . $item->list_item_url . '" target="' . $item->list_item_link_target . '" ' . BB_Ultimate_Addon_Helper::get_link_rel( $item->list_item_link_target, $item->list_item_link_nofollow, 0 ) . '>';

		}
		if ( isset( $item->list_item_title ) ) {

			echo $item->list_item_title;
		}
		if ( ! empty( $item->list_item_link ) && 'list-title' === $item->list_item_link && ! empty( $item->list_item_url ) ) {

			echo '</a>';

		}
		echo '</' . $this->settings->heading_tag_selection . ' >';

		if ( isset( $item->list_item_description ) && '' != $item->list_item_description ) {
			echo '<div class="uabb-info-list-description uabb-text-editor info-list-description-dynamic' . $list_item_counter . '">';
			if ( strpos( $item->list_item_description, '</p>' ) > 0 ) {
				echo $item->list_item_description;
			} else {
				echo '<p>' . $item->list_item_description . '</p>';
			}

			echo '</div>';
		}

		echo '</div>';

		$list_item_counter = $list_item_counter + 1;
		echo '</div>';
		if ( isset( $item->image_type ) && 'none' != $item->image_type ) {
			if ( 'center' == $this->settings->align_items && 'top' != $this->settings->icon_position ) {
				echo '<div class="uabb-info-list-connector-top uabb-info-list-' . $this->settings->icon_position . '"></div>';
			}
			echo '<div class="uabb-info-list-connector uabb-info-list-' . $this->settings->icon_position . '"></div>';
		}

		echo '</li>';
	}

	/**
	 * Render List text
	 *
	 * @method render_text
	 */
	public function render_list() {
		$info_list_html    = '';
		$list_item_counter = 0;
		foreach ( $this->settings->add_list_item as $item ) {
			$this->render_each_item( $item, $list_item_counter );
			$list_item_counter = $list_item_counter + 1;
		}
	}
}

FLBuilder::register_module(
	'UABBInfoList', array(
		'info_list_item'    => array( // Tab.
			'title'    => __( 'List Item', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'info_list_general' => array( // Section.
					'title'  => '', // Section Title.
					'fields' => array( // Section Fields.
						'add_list_item' => array(
							'type'         => 'form',
							'label'        => __( 'List Item', 'uabb' ),
							'form'         => 'info_list_item_form',
							'preview_text' => 'list_item_title',
							'multiple'     => true,
						),
					),
				),
			),
		),

		'info_list_general' => array( // Tab.
			'title'    => __( 'General', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'info_list_general'   => array( // Section.
					'title'  => __( 'List Settings', 'uabb' ), // Section Title.
					'fields' => array( // Section Fields.
						'icon_position'              => array(
							'type'    => 'select',
							'label'   => __( 'Icon / Image Position', 'uabb' ),
							'default' => 'left',
							'options' => array(
								'left'  => __( 'Icon to the left', 'uabb' ),
								'right' => __( 'Icon to the right', 'uabb' ),
								'top'   => __( 'Icon at top', 'uabb' ),
							),
							'toggle'  => array(
								'left'  => array(
									'fields' => array( 'align_items', 'mobile_view' ),
								),
								'right' => array(
									'fields' => array( 'align_items', 'mobile_view' ),
								),
							),
						),
						'align_items'                => array(
							'type'    => 'select',
							'label'   => __( 'Icon Vertical Alignment', 'uabb' ),
							'default' => 'top',
							'options' => array(
								'center' => __( 'Center', 'uabb' ),
								'top'    => __( 'Top', 'uabb' ),
							),
						),
						'mobile_view'                => array(
							'type'    => 'select',
							'label'   => __( 'Mobile Structure', 'uabb' ),
							'default' => '',
							'options' => array(
								''      => __( 'Inline', 'uabb' ),
								'stack' => __( 'Stack', 'uabb' ),
							),
							'preview' => array(
								'type' => 'none',
							),
						),
						'icon_image_size'            => array(
							'type'        => 'unit',
							'label'       => __( 'Icon / Image Size', 'uabb' ),
							'description' => 'px',
							'size'        => '8',
							'placeholder' => '75',
						),
						'space_between_elements'     => array(
							'type'        => 'unit',
							'label'       => __( 'Space Between Two Elements', 'uabb' ),
							'description' => 'px',
							'size'        => '8',
							'placeholder' => '20',
						),
						'list_icon_style'            => array(
							'type'        => 'select',
							'label'       => __( 'Icon / Image Style', 'uabb' ),
							'default'     => 'simple',
							'description' => '',
							'options'     => array(
								'simple' => __( 'Simple', 'uabb' ),
								'square' => __( 'Square', 'uabb' ),
								'circle' => __( 'Circle', 'uabb' ),
								'custom' => __( 'Design your own', 'uabb' ),
							),
							'toggle'      => array(
								'circle' => array(
									'fields' => array( 'list_icon_bg_color', 'list_icon_bg_color_opc' ),
								),
								'square' => array(
									'fields' => array( 'list_icon_bg_color', 'list_icon_bg_color_opc' ),
								),
								'custom' => array(
									'fields' => array( 'list_icon_bg_color', 'list_icon_bg_color_opc', 'list_icon_bg_size', 'list_icon_bg_border_radius', 'list_icon_bg_padding', 'list_icon_border_style' ),
								),
							),
						),
						'list_icon_bg_color'         => array(
							'type'       => 'color',
							'label'      => __( 'Color Option for Background', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
						),
						'list_icon_bg_color_opc'     => array(
							'type'        => 'text',
							'label'       => __( 'Opacity', 'uabb' ),
							'default'     => '',
							'description' => '%',
							'maxlength'   => '3',
							'size'        => '5',
						),
						'list_icon_bg_border_radius' => array(
							'type'        => 'unit',
							'label'       => __( 'Border Radius ( For Background )', 'uabb' ),
							'maxlength'   => '3',
							'size'        => '4',
							'placeholder' => '0',
							'description' => 'px',
						),

						'list_icon_bg_padding'       => array(
							'type'        => 'unit',
							'label'       => __( 'Padding ( For Background )', 'uabb' ),
							'maxlength'   => '3',
							'size'        => '4',
							'placeholder' => '10',
							'description' => 'px',
						),
						'list_icon_border_style'     => array(
							'type'    => 'select',
							'label'   => __( 'Border Style', 'uabb' ),
							'default' => 'none',
							'help'    => __( 'The type of border to use. Double borders must have a width of at least 3px to render properly.', 'uabb' ),
							'options' => array(
								'none'   => __( 'None', 'uabb' ),
								'solid'  => __( 'Solid', 'uabb' ),
								'dashed' => __( 'Dashed', 'uabb' ),
								'dotted' => __( 'Dotted', 'uabb' ),
								'double' => __( 'Double', 'uabb' ),
							),
						),
						'list_icon_border_width'     => array(
							'type'        => 'unit',
							'label'       => __( 'Border Width', 'uabb' ),
							'description' => 'px',
							'maxlength'   => '3',
							'size'        => '6',
							'placeholder' => '1',
						),
						'list_icon_border_color'     => array(
							'type'       => 'color',
							'label'      => __( 'Border Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
						),
						'list_icon_animation'        => array(
							'type'        => 'select',
							'label'       => __( 'Image/Icon Animation', 'uabb' ),
							'description' => '',
							'help'        => __( 'Select whether you want to animate image/icon or not', 'uabb' ),
							'default'     => 'no',
							'options'     => array(
								'yes' => __( 'Yes', 'uabb' ),
								'no'  => __( 'No', 'uabb' ),
							),
						),
					),
				),
				'info_list_connector' => array( // Section.
					'title'  => __( 'List Connector', 'uabb' ), // Section Title.
					'fields' => array( // Section Fields.
						'list_connector_option' => array(
							'type'        => 'select',
							'label'       => __( 'Show Connector', 'uabb' ),
							'description' => '',
							'help'        => __( 'Select whether you would like to show connector on list items.', 'uabb' ),
							'default'     => 'yes',
							'options'     => array(
								'yes' => __( 'Yes', 'uabb' ),
								'no'  => __( 'No', 'uabb' ),
							),
							'toggle'      => array(
								'yes' => array(
									'fields' => array( 'list_connector_color', 'list_connector_style' ),
								),
							),

						),
						'list_connector_color'  => array(
							'type'       => 'color',
							'label'      => __( 'Connector Line Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
							'preview'    => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-connector',
								'property' => 'color',
							),
						),
						'list_connector_style'  => array(
							'type'        => 'select',
							'label'       => __( 'Connector Line Style', 'uabb' ),
							'description' => '',
							'default'     => 'solid',
							'options'     => array(
								'solid'  => __( 'Solid', 'uabb' ),
								'dashed' => __( 'Dashed', 'uabb' ),
								'dotted' => __( 'Dotted', 'uabb' ),
							),
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-connector',
								'property' => 'border-style',
							),
						),
					),
				),
			),
		),

		'info_list_style'   => array( // Tab.
			'title'    => __( 'Typography', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'heading_typography'     => array(
					'title'  => __( 'Title', 'uabb' ),
					'fields' => array(
						'heading_tag_selection'    => array(
							'type'    => 'select',
							'label'   => __( 'Select Tag', 'uabb' ),
							'default' => 'h3',
							'options' => array(
								'h1'   => __( 'H1', 'uabb' ),
								'h2'   => __( 'H2', 'uabb' ),
								'h3'   => __( 'H3', 'uabb' ),
								'h4'   => __( 'H4', 'uabb' ),
								'h5'   => __( 'H5', 'uabb' ),
								'h6'   => __( 'H6', 'uabb' ),
								'div'  => __( 'Div', 'uabb' ),
								'p'    => __( 'p', 'uabb' ),
								'span' => __( 'span', 'uabb' ),
							),
						),
						'heading_font_family'      => array(
							'type'    => 'font',
							'label'   => __( 'Font Family', 'uabb' ),
							'default' => array(
								'family' => 'Default',
								'weight' => 'Default',
							),
							'preview' => array(
								'type'     => 'font',
								'selector' => '.uabb-info-list-title',
							),
						),
						'heading_font_size_unit'   => array(
							'type'        => 'unit',
							'label'       => __( 'Font Size', 'uabb' ),
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-title',
								'property' => 'font-size',
								'unit'     => 'px',
							),
							'responsive'  => array(
								'placeholder' => array(
									'default'    => '',
									'medium'     => '',
									'responsive' => '',
								),
							),
						),
						'heading_line_height_unit' => array(
							'type'        => 'unit',
							'label'       => __( 'Line Height', 'uabb' ),
							'description' => 'em',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-title',
								'property' => 'line-height',
								'unit'     => 'em',
							),
							'responsive'  => array(
								'placeholder' => array(
									'default'    => '',
									'medium'     => '',
									'responsive' => '',
								),
							),
						),
						'heading_color'            => array(
							'type'       => 'color',
							'default'    => '',
							'show_reset' => true,
							'label'      => __( 'Choose Color', 'uabb' ),
							'preview'    => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-title',
								'property' => 'color',
							),
						),
						'heading_transform'        => array(
							'type'    => 'select',
							'label'   => __( 'Transform', 'uabb' ),
							'default' => '',
							'options' => array(
								''           => 'Default',
								'uppercase'  => 'UPPERCASE',
								'lowercase'  => 'lowercase',
								'capitalize' => 'Capitalize',
							),
							'preview' => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-title',
								'property' => 'text-transform',
							),
						),
						'heading_letter_spacing'   => array(
							'type'        => 'unit',
							'label'       => __( 'Letter Spacing', 'uabb' ),
							'placeholder' => '0',
							'size'        => '5',
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-title',
								'property' => 'letter-spacing',
								'unit'     => 'px',
							),
						),
						'heading_margin_top'       => array(
							'label'       => __( 'Margin Top', 'uabb' ),
							'type'        => 'unit',
							'size'        => '8',
							'description' => 'px',
							'max_length'  => '3',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-title',
								'property' => 'margin-top',
								'unit'     => 'px',
							),
						),
						'heading_margin_bottom'    => array(
							'label'       => __( 'Margin Bottom', 'uabb' ),
							'type'        => 'unit',
							'size'        => '8',
							'description' => 'px',
							'max_length'  => '3',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-title',
								'property' => 'margin-bottom',
								'unit'     => 'px',
							),
						),
					),
				),
				'description_typography' => array(
					'title'  => __( 'Description', 'uabb' ),
					'fields' => array(
						'description_font_family'      => array(
							'type'    => 'font',
							'label'   => __( 'Font Family', 'uabb' ),
							'default' => array(
								'family' => 'Default',
								'weight' => 'Default',
							),
							'preview' => array(
								'type'     => 'font',
								'selector' => '.uabb-info-list-description *',
							),
						),
						'description_font_size_unit'   => array(
							'type'        => 'unit',
							'label'       => __( 'Font Size', 'uabb' ),
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-description *',
								'property' => 'font-size',
								'unit'     => 'px',
							),
							'responsive'  => array(
								'placeholder' => array(
									'default'    => '',
									'medium'     => '',
									'responsive' => '',
								),
							),
						),
						'description_line_height_unit' => array(
							'type'        => 'unit',
							'label'       => __( 'Line Height', 'uabb' ),
							'description' => 'em',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-description *',
								'property' => 'line-height',
								'unit'     => 'em',
							),
							'responsive'  => array(
								'placeholder' => array(
									'default'    => '',
									'medium'     => '',
									'responsive' => '',
								),
							),
						),
						'description_color'            => array(
							'type'       => 'color',
							'label'      => __( 'Choose Color', 'uabb' ),
							'preview'    => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-content .uabb-info-list-description *',
								'property' => 'color',
							),
							'default'    => '',
							'show_reset' => true,
						),
						'description_transform'        => array(
							'type'    => 'select',
							'label'   => __( 'Transform', 'uabb' ),
							'default' => '',
							'options' => array(
								''           => 'Default',
								'uppercase'  => 'UPPERCASE',
								'lowercase'  => 'lowercase',
								'capitalize' => 'Capitalize',
							),
							'preview' => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-description *',
								'property' => 'text-transform',
							),
						),
						'description_letter_spacing'   => array(
							'type'        => 'unit',
							'label'       => __( 'Letter Spacing', 'uabb' ),
							'placeholder' => '0',
							'size'        => '5',
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-info-list-description *',
								'property' => 'letter-spacing',
								'unit'     => 'px',
							),
						),
					),
				),
			),
		),
	)
);


// Add List Items.
FLBuilder::register_settings_form(
	'info_list_item_form', array(
		'title' => __( 'Add List Item', 'uabb' ),
		'tabs'  => array(
			'list_item_general' => array(
				'title'    => __( 'General', 'uabb' ),
				'sections' => array(
					'title' => array(
						'title'  => __( 'General Settings', 'uabb' ),
						'fields' => array(
							'list_item_title'         => array(
								'type'        => 'text',
								'label'       => __( 'Title', 'uabb' ),
								'description' => '',
								'default'     => __( 'Name of the element', 'uabb' ),
								'help'        => __( 'Provide a title for this icon list item.', 'uabb' ),
								'placeholder' => __( 'Title', 'uabb' ),
								'class'       => 'uabb-list-item-title',
								'connections' => array( 'string', 'html' ),
							),
							'list_item_url'           => array(
								'type'        => 'link',
								'label'       => __( 'Link', 'uabb' ),
								'connections' => array( 'url' ),
							),
							'list_item_link'          => array(
								'type'    => 'select',
								'label'   => __( 'Apply Link To', 'uabb' ),
								'default' => 'no',
								'options' => array(
									'no'         => __( 'No Link', 'uabb' ),
									'complete'   => __( 'Complete Box', 'uabb' ),
									'list-title' => __( 'List Title', 'uabb' ),
									'icon'       => __( 'Icon', 'uabb' ),
								),
								'preview' => 'none',
							),
							'list_item_link_target'   => array(
								'type'    => 'select',
								'label'   => __( 'Link Target', 'uabb' ),
								'default' => '_self',
								'options' => array(
									'_self'  => __( 'Same Window', 'uabb' ),
									'_blank' => __( 'New Window', 'uabb' ),
								),
							),
							'list_item_link_nofollow' => array(
								'type'        => 'select',
								'label'       => __( 'Link nofollow', 'uabb' ),
								'description' => '',
								'default'     => '0',
								'help'        => __( 'Enable this to make this link nofollow', 'uabb' ),
								'options'     => array(
									'1' => __( 'Yes', 'uabb' ),
									'0' => __( 'No', 'uabb' ),
								),
							),
							'list_item_description'   => array(
								'type'        => 'editor',
								'default'     => __( 'Enter description text here.', 'uabb' ),
								'label'       => '',
								'rows'        => 13,
								'connections' => array( 'string', 'html' ),
							),
						),
					),
				),
			),

			'list_item_image'   => array(
				'title'    => __( 'Icon / Image', 'uabb' ),
				'sections' => array(
					'title'       => array(
						'title'  => __( 'Icon / Image', 'uabb' ),
						'fields' => array(
							'image_type' => array(
								'type'    => 'select',
								'label'   => __( 'Image Type', 'uabb' ),
								'default' => 'none',
								'options' => array(
									'none'        => __( 'None', 'uabb' ), // Removed args 'Image type.',.
									'icon'        => __( 'Icon', 'uabb' ),
									'photo'       => __( 'Photo', 'uabb' ),
									'custom_char' => __( 'Custom Character', 'uabb' ),
								),
								'toggle'  => array(
									'icon'        => array(
										'sections' => array( 'icon_basic', 'icon_style', 'icon_colors' ),
									),
									'photo'       => array(
										'sections' => array( 'img_basic', 'img_style' ),
									),
									'custom_char' => array(
										'sections' => array( 'custom_char' ),
									),
								),
							),
						),
					),
					/* Icon Basic Setting */
					'icon_basic'  => array( // Section.
						'title'  => __( 'Icon', 'uabb' ), // Section Title.
						'fields' => array( // Section Fields.
							'icon'       => array(
								'type'        => 'icon',
								'label'       => __( 'Icon', 'uabb' ),
								'show_remove' => true,
							),
							'icon_color' => array(
								'type'       => 'color',
								'label'      => __( 'Icon Color', 'uabb' ),
								'default'    => '',
								'show_reset' => true,
							),
						),
					),
					/* Image Basic Setting */
					'img_basic'   => array( // Section.
						'title'  => __( 'Image', 'uabb' ), // Section Title.
						'fields' => array( // Section Fields.
							'photo_source' => array(
								'type'    => 'select',
								'label'   => __( 'Photo Source', 'uabb' ),
								'default' => 'library',
								'options' => array(
									'library' => __( 'Media Library', 'uabb' ),
									'url'     => __( 'URL', 'uabb' ),
								),
								'toggle'  => array(
									'library' => array(
										'fields' => array( 'photo' ),
									),
									'url'     => array(
										'fields' => array( 'photo_url' ),
									),
								),
							),
							'photo'        => array(
								'type'        => 'photo',
								'label'       => __( 'Photo', 'uabb' ),
								'show_remove' => true,
								'connections' => array( 'photo' ),
							),
							'photo_url'    => array(
								'type'        => 'text',
								'label'       => __( 'Photo URL', 'uabb' ),
								'placeholder' => 'http://www.example.com/my-photo.jpg',
							),
						),
					),
					/* Image Basic Setting */
					'custom_char' => array( // Section.
						'title'  => __( 'Image', 'uabb' ), // Section Title.
						'fields' => array( // Section Fields.
							'custom_text'  => array(
								'type'        => 'text',
								'label'       => __( 'Custom Text', 'uabb' ),
								'description' => '',
							),
							'custom_color' => array(
								'type'       => 'color',
								'label'      => __( 'Icon Color', 'uabb' ),
								'default'    => '',
								'show_reset' => true,
							),
						),
					),
				),
			),
		),
	)
);
