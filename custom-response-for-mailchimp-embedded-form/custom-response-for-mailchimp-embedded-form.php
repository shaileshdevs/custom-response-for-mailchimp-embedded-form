<?php
/**
 * Plugin Name:       Custom Response For Mailchimp Embedded Form
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-response-for-mailchimp-embedded-form
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_custom_response_for_mailchimp_embedded_form_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_custom_response_for_mailchimp_embedded_form_block_init' );

add_action( 'wp_enqueue_scripts', 'crmef_enqueue_scripts' );
function crmef_enqueue_scripts() {
	if ( has_block( 'create-block/custom-response-for-mailchimp-embedded-form') ) {
		global $post;

		$blocks = parse_blocks( $post->post_content );
		
		foreach ( $blocks as $singleBlock ) {
			if ( 'create-block/custom-response-for-mailchimp-embedded-form' === $singleBlock['blockName'] ) {
				$attrs = $singleBlock['attrs'];
			}
		}

		wp_enqueue_script( 'crmef-mailchimp-response', plugin_dir_url( __FILE__ ) . 'src/mailchimp-response.js', array(), filemtime( plugin_dir_path( __FILE__ ) . 'src/mailchimp-response.js' ), true );
		wp_localize_script( 'crmef-mailchimp-response', 'crmef_mailchimp_response_data', $attrs);
	}
}
