<?php
/**
 *  UABB Ribbon Module file
 *
 *  @package UABB Ribbon Module
 */

/**
 * Function that initializes UABB Ribbon Module
 *
 * @class RibbonModule
 */
class RibbonModule extends FLBuilderModule {
	/**
	 * Constructor function that constructs default values for the Ribbon Module
	 *
	 * @method __construct
	 */
	public function __construct() {
		parent::__construct(
			array(
				'name'            => __( 'Ribbon', 'uabb' ),
				'description'     => __( 'Ribbon', 'uabb' ),
				'category'        => BB_Ultimate_Addon_Helper::module_cat( BB_Ultimate_Addon_Helper::$lead_generation ),
				'group'           => UABB_CAT,
				'dir'             => BB_ULTIMATE_ADDON_DIR . 'modules/ribbon/',
				'url'             => BB_ULTIMATE_ADDON_URL . 'modules/ribbon/',
				'editor_export'   => true, // Defaults to true and can be omitted.
				'enabled'         => true, // Defaults to true and can be omitted.
				'partial_refresh' => true,
				'icon'            => 'ribbon.svg',
			)
		);
	}

	/**
	 * Function to get the icon for the Progress Bar
	 *
	 * @method get_icon
	 * @param string $icon gets the icon for the module.
	 */
	public function get_icon( $icon = '' ) {
		// check if $icon is referencing an included icon.
		if ( '' != $icon && file_exists( BB_ULTIMATE_ADDON_DIR . 'modules/ribbon/icon/' . $icon ) ) {
			$path = BB_ULTIMATE_ADDON_DIR . 'modules/ribbon/icon/' . $icon;
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
}

/**
 * Register the module and its form settings.
 */
FLBuilder::register_module(
	'RibbonModule', array(
		'general'    => array( // Tab.
			'title'    => __( 'Layout', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'general' => array(
					'title'  => '',
					'fields' => array(
						'title'       => array(
							'type'        => 'text',
							'label'       => __( 'Ribbon Message', 'uabb' ),
							'default'     => __( 'SPECIAL OFFER', 'uabb' ),
							'preview'     => array(
								'type'     => 'text',
								'selector' => '.uabb-ribbon-text-title',
							),
							'connections' => array( 'string', 'html' ),
						),
						'left_icon'   => array(
							'type'        => 'icon',
							'label'       => __( 'Left Icon', 'uabb' ),
							'show_remove' => true,
						),
						'right_icon'  => array(
							'type'        => 'icon',
							'label'       => __( 'Right Icon', 'uabb' ),
							'show_remove' => true,
						),
						'ribbon_resp' => array(
							'type'    => 'select',
							'label'   => __( 'Hide Ribbon Wings', 'uabb' ),
							'default' => 'small',
							'help'    => __( 'To hide Ribbon Wings on Small or Medium device use this option.', 'uabb' ),
							'options' => array(
								'none'   => __( 'None', 'uabb' ),
								'small'  => __( 'Small Devices', 'uabb' ),
								'medium' => __( 'Medium & Small Devices', 'uabb' ),
							),
						),
					),
				),
				'style'   => array(
					'title'  => __( 'Style', 'uabb' ),
					'fields' => array(
						'ribbon_width' => array(
							'type'    => 'select',
							'label'   => __( 'Ribbon Width', 'uabb' ),
							'default' => 'auto',
							'options' => array(
								'auto'   => __( 'Auto', 'uabb' ),
								'full'   => __( 'Full', 'uabb' ),
								'custom' => __( 'Custom', 'uabb' ),
							),
							'toggle'  => array(
								'custom' => array(
									'fields' => array( 'custom_width', 'ribbon_align' ),
								),
								'auto'   => array(
									'fields' => array( 'ribbon_align' ),
								),
							),
						),
						'custom_width' => array(
							'type'        => 'unit',
							'label'       => __( 'Custom Width', 'uabb' ),
							'placeholder' => '500',
							'size'        => '6',
							'description' => 'px',
						),
						'ribbon_align' => array(
							'type'    => 'select',
							'label'   => __( 'Alignment', 'uabb' ),
							'default' => 'center',
							'help'    => __( 'To align Ribbon use this setting.', 'uabb' ),
							'options' => array(
								'center' => __( 'Center', 'uabb' ),
								'left'   => __( 'Left', 'uabb' ),
								'right'  => __( 'Right', 'uabb' ),
							),
							'preview' => array(
								'type'     => 'css',
								'selector' => '.uabb-ribbon-wrap',
								'property' => 'text-align',
							),
						),
						'stitching'    => array(
							'type'    => 'select',
							'label'   => __( 'Stitching', 'uabb' ),
							'default' => 'yes',
							'options' => array(
								'yes' => __( 'Yes', 'uabb' ),
								'no'  => __( 'No', 'uabb' ),
							),
							'help'    => __( 'To give Stitch effect on Ribbon', 'uabb' ),
						),
						'shadow'       => array(
							'type'    => 'select',
							'label'   => __( 'Ribbon Shadow', 'uabb' ),
							'default' => 'yes',
							'options' => array(
								'yes' => __( 'Yes', 'uabb' ),
								'no'  => __( 'No', 'uabb' ),
							),
						),
					),
				),
				'colors'  => array(
					'title'  => __( 'Ribbon Colors', 'uabb' ),
					'fields' => array(
						'ribbon_bg_type' => array(
							'type'    => 'select',
							'label'   => __( 'Ribbon Color Type', 'uabb' ),
							'default' => 'color',
							'help'    => __( 'You can select one of the two background types: Color: simple one color background or Gradient: two color background.', 'uabb' ),
							'options' => array(
								'color'    => __( 'Color', 'uabb' ),
								'gradient' => __( 'Gradient', 'uabb' ),
							),
							'toggle'  => array(
								'color'    => array(
									'fields' => array( 'ribbon_color' ),
								),
								'gradient' => array(
									'fields' => array( 'gradient_color' ),
								),
							),
						),
						'ribbon_color'   => array(
							'type'       => 'color',
							'label'      => __( 'Ribbon Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
							'preview'    => array(
								'type'     => 'css',
								'selector' => '.uabb-ribbon-text',
								'property' => 'background',
							),
						),
						'gradient_color' => array(
							'type'    => 'uabb-gradient',
							'label'   => __( 'Gradient', 'uabb' ),
							'default' => array(
								'color_one' => '',
								'color_two' => '',
								'direction' => 'top_bottom',
								'angle'     => '0',
							),
						),
						'icon_color'     => array(
							'type'       => 'color',
							'label'      => __( 'Icon Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
						),
						'fold_color'     => array(
							'type'       => 'color',
							'label'      => __( 'Ribbon Fold Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
						),
						'end_color'      => array(
							'type'       => 'color',
							'label'      => __( 'Ribbon Wings Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
						),
					),
				),
			),
		),
		'typography' => array( // Tab.
			'title'    => __( 'Typography', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'text_typography' => array(
					'title'  => __( 'Ribbon Text', 'uabb' ),
					'fields' => array(
						'text_tag_selection'    => array(
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
						'text_font_family'      => array(
							'type'    => 'font',
							'label'   => __( 'Font Family', 'uabb' ),
							'default' => array(
								'family' => 'Default',
								'weight' => 'Default',
							),
							'preview' => array(
								'type'     => 'font',
								'selector' => '.uabb-ribbon-text',
							),
						),
						'text_font_size_unit'   => array(
							'type'        => 'unit',
							'label'       => __( 'Font Size', 'uabb' ),
							'description' => 'px',
							'responsive'  => array(
								'placeholder' => array(
									'default'    => '',
									'medium'     => '',
									'responsive' => '',
								),
							),
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ribbon-text',
								'property' => 'font-size',
								'unit'     => 'px',
							),
						),
						'text_line_height_unit' => array(
							'type'        => 'unit',
							'label'       => __( 'Line Height', 'uabb' ),
							'description' => 'em',
							'responsive'  => array(
								'placeholder' => array(
									'default'    => '',
									'medium'     => '',
									'responsive' => '',
								),
							),
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ribbon-text',
								'property' => 'line-height',
								'unit'     => 'em',
							),
						),
						'text_color'            => array(
							'type'       => 'color',
							'label'      => __( 'Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
							'preview'    => array(
								'type'     => 'css',
								'selector' => '.uabb-ribbon-text',
								'property' => 'color',
							),
						),
						'text_shadow_color'     => array(
							'type'       => 'color',
							'label'      => __( 'Text Shadow Color', 'uabb' ),
							'default'    => '',
							'show_reset' => true,
						),
						'text_transform'        => array(
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
								'selector' => '.uabb-ribbon-text',
								'property' => 'text-transform',
							),
						),
						'text_letter_spacing'   => array(
							'type'        => 'unit',
							'label'       => __( 'Letter Spacing', 'uabb' ),
							'placeholder' => '0',
							'size'        => '5',
							'description' => 'px',
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-ribbon-text',
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
