<?php
/*
Plugin Name: Accessibility Button
Description: Helps improve accessibility in your WordPress site.
Version: 0.1
Author: Sairus Logic Development
Text Domain: sl-accessibility-button
Domain Path: /language
Author URI: http://sairuslogic.com/
*/




function sl_access_load_textdomain() {
    load_plugin_textdomain( 'sl-accessibility-button', false, dirname( plugin_basename( __FILE__ ) ) . '/language' );
}

function sl_access_button_create_button () {

echo '<div class="accessibility-wrapper">
        <div class="accessibility-action accessibility-font">
            ' . file_get_contents( __DIR__ . '/icons/font.svg') . '
            <div class="accessibility-title"><div>' . __('Font reading', 'sl-accessibility-button') . '</div></div>
        </div>
        <div class="accessibility-action accessibility-white">
            ' . file_get_contents( __DIR__ . '/icons/repeat.svg') . '
            <div class="accessibility-title"><div>' . __('White background', 'sl-accessibility-button') . '</div></div>
        </div>
        <div class="accessibility-action accessibility-grayscale">
            ' . file_get_contents( __DIR__ . '/icons/tint.svg') . '
            <div class="accessibility-title"><div>' . __('Grayscale', 'sl-accessibility-button') . '</div></div>
        </div>
        <div class="accessibility-action accessibility-adjust" id="is_normal_contrast">
            ' . file_get_contents( __DIR__ . '/icons/adjust.svg') . '
            <div class="accessibility-title"><div>' . __('High contrast', 'sl-accessibility-button') . '</div></div>
        </div>
        <div class="accessibility-action accessibility-text">
            ' . file_get_contents( __DIR__ . '/icons/text-height.svg') . '
            <div class="accessibility-title"><div>' . __('Text size', 'sl-accessibility-button') . '</div></div>
        </div>
        <div class="accessibility-main-btn">
            ' . file_get_contents( __DIR__ . '/icons/wheelchair.svg') . '
        </div>
    </div>';
}



function sl_access_button_assets() {

    wp_enqueue_style( 'sl_access_button_main', plugins_url( 'css/sl-accessibillity-button.css', __FILE__ ) );

    wp_enqueue_script( 'sl_access_button_main', plugins_url( 'js/sl-accessibillity-button.js', __FILE__ ), array('jquery'), '0.1', true );

    $css_path = plugins_url( 'accessibility-button-wp/css/sl-accessibillity-button-contrast.css' );
    wp_localize_script( 'sl_access_button_main', 'sl_accessibillity_button_contrast_path', $css_path );
}


add_action( 'plugins_loaded', 'sl_access_load_textdomain' );
add_action( 'wp_enqueue_scripts', 'sl_access_button_assets' );
add_action('wp_footer','sl_access_button_create_button');
