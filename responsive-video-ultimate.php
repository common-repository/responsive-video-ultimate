<?php
/*
Plugin Name: Responsive Video Ultimate
Plugin URI: http://etwoz.hostingsiteforfree.com/responsive-video-ultimate/
Description: This plugin will enable responsive video in your wordpress theme.With this plugin you can easily embed responsive video in your pages, posts even in widgets by just few clicks. You can embed responsive video from most popular video sharing sites like Youtube,Vimeo, Dailymotion, funnyordie, blip.tv, ustream.tv.
Author: Arnab Kumar Halder
Version: 1.0
Author URI: http://arnabportfolio.blogspot.in/
*/


//enable wordpress post editor in widget
include_once( 'inc/enable_shortcode_widgets.php' );

// Wordpress jQuery

function responsive_video_ultimate() {
	wp_enqueue_script('jquery');
}
add_action('init', 'responsive_video_ultimate');


// botton for responsive video ultimate

function responsive_video_ultimate_buttons() {
	add_filter ("mce_external_plugins", "my_external_js");
	add_filter ("mce_buttons", "our_awesome_buttons");
}

function my_external_js($plugin_array) {
	$plugin_array['wptuts'] = plugins_url('js/custom-button.js', __FILE__);
	return $plugin_array;
}

function our_awesome_buttons($buttons) {
	array_push ($buttons, 'youtube_botton','vimeo_shortcode_button' , 'dailymotion_shortcode_button', 
	'funnyordie_shortcode_button', 'blip_tv_shortcode_button', 'ustream_tv_shortcode_button');
	return $buttons;
}
add_action ('init', 'responsive_video_ultimate_buttons');





// Some Setup

define('RESPONSIVE_VIDEO_shortcode_plugin_patch', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );

// fitvids js file


wp_enqueue_script('fitvids-js', RESPONSIVE_VIDEO_shortcode_plugin_patch.'js/active.js', array( 'jquery' ), '1.1', TRUE );



// fitvids js file active

wp_enqueue_script('fitvids-js-active ', RESPONSIVE_VIDEO_shortcode_plugin_patch.'js/jquery.fitvids.js', array( 'jquery' ), '1.0', TRUE );


// custom css file
wp_enqueue_style('custom-css-style', RESPONSIVE_VIDEO_shortcode_plugin_patch.'css/custom.css');











//youtube shortcode generate 

function youtube_shortcode($atts, $content = null) {
	return ('<div class="responsive_video"><iframe src="http://youtube.com/embed/'.$content.'" frameborder="0" allowfullscreen></iframe></div>');
}
add_shortcode("youtube", "youtube_shortcode");


//vimeo shortcode generate 

function vimeo_shortcode($atts, $content = null) {
	return ('<div class="responsive_video"><iframe src="http://player.vimeo.com/video/'.$content.'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
}
add_shortcode("vimeo", "vimeo_shortcode");



//dailymotion shortcode generate 

function dailymotion_shortcode($atts, $content = null) {
	return ('<div class="responsive_video"><iframe frameborder="0" src="http://www.dailymotion.com/embed/video/'.$content.'" allowfullscreen></iframe></div>');
	
}
add_shortcode("dailymotion", "dailymotion_shortcode");



//funnyordie.com generate 

function funnyordie_shortcode($atts, $content = null) {
	return ('<div class="responsive_video"><iframe src="http://www.funnyordie.com/embed/'.$content.'" frameborder="0" allowfullscreen></iframe></div>');
	
}
add_shortcode("funnyordie", "funnyordie_shortcode");


//blip.tv generate 

function blip_tv_shortcode($atts, $content = null) {
	return ('<div class="responsive_video"><iframe src="http://blip.tv/play/'.$content.'" frameborder="0" allowfullscreen></iframe></div>');
	
}
add_shortcode("blip_tv", "blip_tv_shortcode");

//ustream.tv shortcode generate 

function ustream_tv_shortcode($atts, $content = null) {
	return ('<div class="responsive_video"><iframe src="http://www.ustream.tv/embed/recorded/'.$content.'" frameborder="0"></iframe></div>');
	
}
add_shortcode("ustream_tv", "ustream_tv_shortcode");


?>