<?php
/**
 *  UABB Spacer Gap Module file
 *
 *  @package UABB Spacer Gap Module
 */

/**
 * Function that initializes UABB Spacer Gap Module
 *
 * @class UABBSpacerGap
 */
class UABBSpacerGap extends FLBuilderModule {
	/**
	 * Constructor function that constructs default values for the Spacer Gap Module
	 *
	 * @method __construct
	 */
	public function __construct() {
		parent::__construct(
			array(
				'name'            => __( 'Spacer / Gap', 'uabb' ),
				'description'     => __( 'A totally awesome module!', 'uabb' ),
				'category'        => BB_Ultimate_Addon_Helper::module_cat( BB_Ultimate_Addon_Helper::$extra_additions ),
				'group'           => UABB_CAT,
				'dir'             => BB_ULTIMATE_ADDON_DIR . 'modules/spacer-gap/',
				'url'             => BB_ULTIMATE_ADDON_URL . 'modules/spacer-gap/',
				'editor_export'   => true, // Defaults to true and can be omitted.
				'enabled'         => true, // Defaults to true and can be omitted.
				'partial_refresh' => true, // Defaults to false and can be omitted.
				'icon'            => 'minus.svg',
			)
		);
	}
}

FLBuilder::register_module(
	'UABBSpacerGap', array(
		'spacer_gap_general' => array( // Tab.
			'title'    => __( 'General', 'uabb' ), // Tab title.
			'sections' => array( // Tab Sections.
				'spacer_gap_general' => array( // Section.
					'title'  => '', // Section Title.
					'fields' => array( // Section Fields.
						'desktop_space' => array(
							'type'        => 'unit',
							'label'       => __( 'Desktop', 'uabb' ),
							'size'        => '8',
							'placeholder' => '10',
							'class'       => 'uabb-spacer-gap-desktop',
							'description' => 'px',
							'help'        => __( 'This value will work for all devices.', 'uabb' ),
							'preview'     => array(
								'type'     => 'css',
								'selector' => '.uabb-spacer-gap-preview.uabb-spacer-gap',
								'property' => 'height',
								'unit'     => 'px',
							),
						),
						'medium_device' => array(
							'type'        => 'unit',
							'label'       => __( 'Medium Device ( Tabs )', 'uabb' ),
							'default'     => '',
							'size'        => '8',
							'class'       => 'uabb-spacer-gap-tab-landscape',
							'description' => 'px',
						),
						'small_device'  => array(
							'type'        => 'unit',
							'label'       => __( 'Small Device ( Mobile )', 'uabb' ),
							'default'     => '',
							'size'        => '8',
							'class'       => 'uabb-spacer-gap-mobile',
							'description' => 'px',
						),
					),
				),
			),
		),
	)
);
