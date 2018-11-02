<?php
/**
 *  UABB Interactive Banner 1 Module file
 *
 *  @package UABB Interactive Banner 1 Module
 */

/**
 * Function that initializes Interactive Banner 1 Module
 *
 * @class InteractiveBanner1Module
 */
class InteractiveBanner1Module extends FLBuilderModule {

	/**
	 * Variable for Interactive Banner 1 module
	 *
	 * @property $data
	 * @var $data
	 */
	public $data = null;

	/**
	 * Constructor function that constructs default values for the Interactive Banner 1 Module
	 *
	 * @method __construct
	 */
	public function __construct() {
		parent::__construct(
			array(
				'name'            => __( 'Interactive Banner 1', 'uabb' ),
				'description'     => __( 'Interactive Banner 1', 'uabb' ),
				'category'        => BB_Ultimate_Addon_Helper::module_cat( BB_Ultimate_Addon_Helper::$content_modules ),
				'group'           => UABB_CAT,
				'dir'             => BB_ULTIMATE_ADDON_DIR . 'modules/interactive-banner-1/',
				'url'             => BB_ULTIMATE_ADDON_URL . 'modules/interactive-banner-1/',
				'editor_export'   => true, // Defaults to true and can be omitted.
				'enabled'         => true, // Defaults to true and can be omitted.
				'partial_refresh' => true,
				'icon'            => 'ib-1.svg',
			)
		);
		$this->add_css( 'font-awesome' );
	}

	/**
	 * Function to get the icon for the Interactive Banner 1
	 *
	 * @method get_icons
	 * @param string $icon gets the icon for the module.
	 */
	public function get_icon( $icon = '' ) {

		// check if $icon is referencing an included icon.
		if ( '' != $icon && file_exists( BB_ULTIMATE_ADDON_DIR . 'modules/interactive-banner-1/icon/' . $icon ) ) {
			$path = BB_ULTIMATE_ADDON_DIR . 'modules/interactive-banner-1/icon/' . $icon;
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
	 * Function that gets the data for the Interactive Banner 1 module
	 *
	 * @method get_data
	 */
	public function get_data() {
		// Make sure we have a banner_image_src property.
		if ( ! isset( $this->settings->banner_image_src ) ) {
			$this->settings->banner_image_src = '';
		}

		// Cache the attachment data.
		$this->data = FLBuilderPhoto::get_attachment_data( $this->settings->banner_image );
		if ( ! $this->data ) {

			// Photo source is set to "library".
			if ( is_object( $this->settings->banner_image_src ) ) {
				$this->data = $this->settings->banner_image_src;
			} else {
				$this->data = FLBuilderPhoto::get_attachment_data( $this->settings->banner_image_src );
			}

			// Data object is empty, use the settings cache.
			if ( ! $this->data && isset( $this->settings->data ) ) {
				$this->data = $this->settings->data;
			}
		}

		return $this->data;
	}

	/**
	 * Function that gets the alt for the Interactive Banner 1 module
	 *
	 * @method get_alt
	 */
	public function get_alt() {
		$photo = $this->get_data();

		if ( ! empty( $photo->alt ) ) {
			return htmlspecialchars( $photo->alt );
		} elseif ( ! empty( $photo->description ) ) {
			return htmlspecialchars( $photo->description );
		} elseif ( ! empty( $photo->caption ) ) {
			return htmlspecialchars( $photo->caption );
		} elseif ( ! empty( $photo->title ) ) {
			return htmlspecialchars( $photo->title );
		}
	}

	/**
	 * Function that renders the button for the Interactive Banner 1 module
	 *
	 * @method render_button
	 */
	public function render_button() {
		if ( 'yes' == $this->settings->show_button ) {
			if ( '' != $this->settings->button ) {
				echo '<div class="uabb-ib1-button-outter">';
				FLBuilder::render_module_html( 'uabb-button', $this->settings->button );
				echo '</div>';
			}
		}
	}

	/**
	 * Function that renders the Icon.
	 *
	 * @method render_icon
	 */
	public function render_icon() {
		if ( '' != $this->settings->icon ) {
			$imageicon_array = array(

				/* General Section */
				'image_type'            => 'icon',

				/* Icon Basics */
				'icon'                  => $this->settings->icon,
				'icon_size'             => $this->settings->icon_size,
				'icon_align'            => '',

				/* Image Basics */
				'photo_source'          => '',
				'photo'                 => '',
				'photo_url'             => '',
				'img_size'              => '',
				'img_align'             => '',
				'photo_src'             => '',

				/* Icon Style */
				'icon_style'            => '',
				'icon_bg_size'          => '',
				'icon_border_style'     => '',
				'icon_border_width'     => '',
				'icon_bg_border_radius' => '',

				/* Image Style */
				'image_style'           => '',
				'img_bg_size'           => '',
				'img_border_style'      => '',
				'img_border_width'      => '',
				'img_bg_border_radius'  => '',
			);
			/* Render HTML Function */
			FLBuilder::render_module_html( 'image-icon', $imageicon_array );
		}
	}
}



/**
 * Register the module and its form settings.
 */
FLBuilder::register_module(
	'InteractiveBanner1Module', array(
		'general'    => array( // Tab.
			'title'    => __( 'General', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'general' => array( // Section.
					'title'  => __( 'Title', 'uabb' ), // Section Title.
					'fields' => array( // Section Fields.
						'banner_title'          => array(
							'type'        => 'text',
							'label'       => __( 'Title', 'uabb' ),
							'default'     => __( 'Interactive Banner', 'uabb' ),
							'connections' => array( 'string', 'html' ),
							'preview'     => array(
								'type'     => 'text',
								'selector' => '.uabb-ib1-title',
							),
						),
						'banner_title_location' => array(
							'type'    => 'select',
							'label'   => __( 'Title Alignment', 'uabb' ),
							'default' => 'center',
							'options' => array(
								'left'   => __( 'Left', 'uabb' ),
								'right'  => __( 'Right', 'uabb' ),
								'center' => __( 'Center', 'uabb' ),
							),
							'preview' => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-title',
								'property' => 'text-align',
							),
						),
					),
				),
				'style'   => array( // Section.
					'title'  => __( 'Style', 'uabb' ), // Section Title.
					'fields' => array( // Section Fields.
						'banner_style'             => array(
							'type'    => 'select',
							'label'   => __( 'Banner Style', 'uabb' ),
							'default' => 'style1',
							'help'    => __( 'Select appear effect for description text.', 'uabb' ),
							'options' => array(
								'style01' => __( 'Appear From Bottom', 'uabb' ),
								'style02' => __( 'Appear From Top', 'uabb' ),
								'style03' => __( 'Appear From Left', 'uabb' ),
								'style04' => __( 'Appear From Right', 'uabb' ),
								'style11' => __( 'Zoom In', 'uabb' ),
								'style12' => __( 'Zoom Out', 'uabb' ),
								'style13' => __( 'Zoom In-Out', 'uabb' ),
								'style21' => __( 'Jump From Left', 'uabb' ),
								'style22' => __( 'Jump From Right', 'uabb' ),
								'style31' => __( 'Pull From Bottom', 'uabb' ),
								'style32' => __( 'Pull From Top', 'uabb' ),
								'style33' => __( 'Pull From Left', 'uabb' ),
								'style34' => __( 'Pull From Right', 'uabb' ),
							),
						),
						'banner_image'             => array(
							'type'        => 'photo',
							'label'       => __( 'Banner Image', 'uabb' ),
							'show_remove' => true,
							'connections' => array( 'photo' ),
						),
						'banner_height_options'    => array(
							'type'    => 'select',
							'label'   => __( 'Banner Height', 'uabb' ),
							'default' => 'default',
							'help'    => __( 'Control your banner height, by default - it depends on selected image size.', 'uabb' ),
							'options' => array(
								'default' => __( 'Default', 'uabb' ),
								'custom'  => __( 'Custom', 'uabb' ),
							),
							'toggle'  => array(
								'custom' => array(
									'fields' => array( 'banner_height', 'image_size_compatibility' ),
								),
							),
						),
						'banner_height'            => array(
							'type'        => 'unit',
							'label'       => __( 'Custom Banner Height', 'uabb' ),
							'size'        => '8',
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-block',
								'property' => 'height',
								'unit'     => 'px',
							),
						),
						'image_size_compatibility' => array(
							'type'    => 'select',
							'label'   => __( 'Image Responsive Compatibility', 'uabb' ),
							'default' => 'none',
							'help'    => __( 'There might be responsive issues for certain image sizes. If you are facing such issues then select appropriate devices width to make your module responsive.', 'uabb' ),
							'options' => array(
								'none'   => __( 'None', 'uabb' ),
								'small'  => __( 'Small Devices', 'uabb' ),
								'medium' => __( 'Medium and Small Devices', 'uabb' ),
							),
						),
						'vertical_align'           => array(
							'type'    => 'select',
							'label'   => __( 'Vertical Center', 'uabb' ),
							'default' => 'yes',
							'options' => array(
								'yes' => __( 'Yes', 'uabb' ),
								'no'  => __( 'No', 'uabb' ),
							),
						),
					),
				),
			),
		),
		'hover'      => array( // Tab.
			'title'    => __( 'Hover', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'description' => array( // Section.
					'title'  => __( 'Description', 'uabb' ), // Section Title.
					'fields' => array( // Section Fields.
						'banner_desc'                  => array(
							'type'          => 'editor',
							'media_buttons' => false,
							'rows'          => 10,
							'label'         => '',
							'default'       => __( 'Enter description text here.', 'uabb' ),
							'preview'       => array(
								'type'     => 'text',
								'selector' => '.uabb-ib1-description',
							),
							'connections'   => array( 'string', 'html' ),
						),
						'overlay_background_color'     => array(
							'type'       => 'color',
							'label'      => __( 'Background Overlay Color', 'uabb' ),
							'default'    => '808080',
							'show_reset' => true,
							'preview'    => array(
								'type'     => 'css',
								'selector' => '.uabb-background',
								'property' => 'background',
							),
						),
						'overlay_background_color_opc' => array(
							'type'        => 'text',
							'label'       => __( 'Opacity', 'uabb' ),
							'default'     => '',
							'description' => '%',
							'maxlength'   => '3',
							'size'        => '5',
						),
					),
				),
				'icon'        => array( // Section.
					'title'  => __( 'Icon Above Description', 'uabb' ), // Section Title.
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
						'icon_size'  => array(
							'type'        => 'unit',
							'label'       => __( 'Size', 'uabb' ),
							'placeholder' => '30',
							'maxlength'   => '3',
							'size'        => '4',
							'description' => 'px',
						),
					),
				),
				'link'        => array( // Section.
					'title'  => __( 'Call To Action Below Description', 'uabb' ), // Section Title.
					'fields' => array( // Section Fields.
						'show_button'     => array(
							'type'    => 'select',
							'label'   => __( 'CTA Link', 'uabb' ),
							'default' => 'yes',
							'options' => array(
								'yes'      => __( 'Button on Hover', 'uabb' ),
								'complete' => __( 'Complete Banner', 'uabb' ),
								'no'       => __( 'None', 'uabb' ),
							),
							'toggle'  => array(
								'yes'      => array(
									'fields' => array( 'button' ),
								),
								'complete' => array(
									'fields' => array( 'cta_link', 'cta_link_target' ),
								),
							),
						),
						'button'          => array(
							'type'         => 'form',
							'label'        => __( 'Button Settings', 'uabb' ),
							'form'         => 'button_form_field', // ID of a registered form.
							'preview_text' => 'text', // ID of a field to use for the preview text.
						),
						'cta_link'        => array(
							'type'        => 'link',
							'default'     => '#',
							'label'       => __( 'Link', 'uabb' ),
							'help'        => __( 'The link applies to the entire module.', 'uabb' ),
							'preview'     => array(
								'type' => 'none',
							),
							'connections' => array( 'string', 'html' ),
						),
						'cta_link_target' => array(
							'type'    => 'select',
							'label'   => __( 'Link Target', 'uabb' ),
							'default' => '_self',
							'options' => array(
								'_self'  => __( 'Same Window', 'uabb' ),
								'_blank' => __( 'New Window', 'uabb' ),
							),
							'preview' => array(
								'type' => 'none',
							),
						),
					),
				),
			),
		),
		'typography' => array( // Tab.
			'title'    => __( 'Typography', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'title_typography' => array(
					'title'  => __( 'Title', 'uabb' ),
					'fields' => array(
						'title_typography_tag_selection'  => array(
							'type'    => 'select',
							'label'   => __( 'Tag', 'uabb' ),
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
						'title_typography_font_family'    => array(
							'type'    => 'font',
							'label'   => __( 'Font Family', 'uabb' ),
							'default' => array(
								'family' => 'Default',
								'weight' => 'Default',
							),
							'preview' => array(
								'type'     => 'font',
								'selector' => '.uabb-ib1-title',
							),
						),
						'title_typography_font_size_unit' => array(
							'type'        => 'unit',
							'label'       => __( 'Font Size', 'uabb' ),
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-title',
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
						'title_typography_line_height_unit' => array(
							'type'        => 'unit',
							'label'       => __( 'Line Height', 'uabb' ),
							'description' => 'em',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-title',
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
						'title_typography_color'          => array(
							'type'       => 'color',
							'label'      => __( 'Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
							'preview'    => array(
								'type'     => 'css',
								'property' => 'color',
								'selector' => '.uabb-ib1-title',
							),
						),
						'title_typography_title_background_color' => array(
							'type'       => 'color',
							'label'      => __( 'Title Background Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
							'preview'    => array(
								'type'     => 'css',
								'property' => 'background-color',
								'selector' => '.uabb-ib1-title',
							),
						),
						'title_typography_title_background_color_opc' => array(
							'type'        => 'text',
							'label'       => __( 'Opacity', 'uabb' ),
							'default'     => '',
							'description' => '%',
							'maxlength'   => '3',
							'size'        => '5',
						),
						'title_transform'                 => array(
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
								'selector' => '.uabb-ib1-title',
								'property' => 'text-transform',
							),
						),
						'title_letter_spacing'            => array(
							'type'        => 'unit',
							'label'       => __( 'Letter Spacing', 'uabb' ),
							'placeholder' => '0',
							'size'        => '5',
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-title',
								'property' => 'letter-spacing',
								'unit'     => 'px',
							),
						),
					),
				),
				'desc_typography'  => array(
					'title'  => __( 'Description', 'uabb' ),
					'fields' => array(
						'desc_typography_font_family'      => array(
							'type'    => 'font',
							'label'   => __( 'Font Family', 'uabb' ),
							'default' => array(
								'family' => 'Default',
								'weight' => 'Default',
							),
							'preview' => array(
								'type'     => 'font',
								'selector' => '.uabb-ib1-description',
							),
						),
						'desc_typography_font_size_unit'   => array(
							'type'        => 'unit',
							'label'       => __( 'Font Size', 'uabb' ),
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-description',
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
						'desc_typography_line_height_unit' => array(
							'type'        => 'unit',
							'label'       => __( 'Line Height', 'uabb' ),
							'description' => 'em',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-description',
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
						'desc_typography_color'            => array(
							'type'       => 'color',
							'label'      => __( 'Description Text Color', 'uabb' ),
							'preview'    => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-description',
								'property' => 'color',
							),
							'default'    => '',
							'show_reset' => true,
						),
						'desc_transform'                   => array(
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
								'selector' => '.uabb-ib1-description',
								'property' => 'text-transform',
							),
						),
						'desc_letter_spacing'              => array(
							'type'        => 'unit',
							'label'       => __( 'Letter Spacing', 'uabb' ),
							'placeholder' => '0',
							'size'        => '5',
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ib1-description',
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