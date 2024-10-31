(function() {
    tinymce.create('tinymce.plugins.WPTuts', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {
		
		    //youtube_botton
			
            ed.addCommand('youtube_botton', function() {
                var youtubevideoid = prompt("Enter Your youtube Video ID"),
                    shortcode;
					shortcode = '[youtube]' + youtubevideoid + '[/youtube]';
                    ed.execCommand('mceInsertContent', 0, shortcode);      
            });;
			 //vimeo_shortcode_button
			 
			ed.addCommand('vimeo_shortcode_button', function() {
                var vimeovideoid = prompt("Enter Your vimeo Video ID"), 
                    shortcode;
					shortcode = '[vimeo]' + vimeovideoid + '[/vimeo]';
                    ed.execCommand('mceInsertContent', 0, shortcode);      
            });;
			
			 //dailymotion_shortcode_button
             ed.addCommand('dailymotion_shortcode_button', function() {
                var dailymotionvideoid = prompt("Enter Your dailymotion Video ID"), 
                    shortcode;
					shortcode = '[dailymotion]' + dailymotionvideoid + '[/dailymotion]';
                    ed.execCommand('mceInsertContent', 0, shortcode);      
            });;
			
			//funnyordie_shortcode_button
			 ed.addCommand('funnyordie_shortcode_button', function() {
                var funnyordie_videoid = prompt("Enter Your funnyordie Video id"), 
                    shortcode;
					shortcode = '[funnyordie]' + funnyordie_videoid + '[/funnyordie]';
                    ed.execCommand('mceInsertContent', 0, shortcode);      
            });;
			
				//blip_tv_shortcode_button
			 ed.addCommand('blip_tv_shortcode_button', function() {
                var blip_tv_videoid = prompt("Enter Your blip_tv Video id"), 
                    shortcode;
					shortcode = '[blip_tv]' + blip_tv_videoid + '[/blip_tv]';
                    ed.execCommand('mceInsertContent', 0, shortcode);      
            });;
			
					//ustream_tv_shortcode_button
			 ed.addCommand('ustream_tv_shortcode_button', function() {
                var ustream_tv_videoid = prompt("Enter Your ustream_tv Video id"), 
                    shortcode;
					shortcode = '[ustream_tv]' + ustream_tv_videoid + '[/ustream_tv]';
                    ed.execCommand('mceInsertContent', 0, shortcode);      
            });;
			
			
			
			
           
            ed.addButton('youtube_botton', {
                title : 'Insert youtube shortcode',
                cmd : 'youtube_botton',
                image : url + '/youtube.png'
            });

			  ed.addButton('vimeo_shortcode_button', {
                title : 'Insert youtube shortcode',
                cmd : 'vimeo_shortcode_button',
                image : url + '/vimeo.png'
            });
			
			  ed.addButton('dailymotion_shortcode_button', {
                title : 'Insert youtube shortcode',
                cmd : 'dailymotion_shortcode_button',
                image : url + '/dailymotion.png'
            });
			
			  ed.addButton('funnyordie_shortcode_button', {
                title : 'Insert youtube shortcode',
                cmd : 'funnyordie_shortcode_button',
                image : url + '/funnyordie.png'
            });
			
			 ed.addButton('blip_tv_shortcode_button', {
                title : 'Insert youtube shortcode',
                cmd : 'blip_tv_shortcode_button',
                image : url + '/blip.png'
            });
			
			
			 ed.addButton('ustream_tv_shortcode_button', {
                title : 'Insert youtube shortcode',
                cmd : 'ustream_tv_shortcode_button',
                image : url + '/ustream_tv.png'
            });
			
			
			
			
			
			
			
        },

        /**
         * Creates control instances based in the incomming name. This method is normally not
         * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
         * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
         * method can be used to create those.
         *
         * @param {String} n Name of the control to create.
         * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
         * @return {tinymce.ui.Control} New control instance or null if no control was created.
         */
        createControl : function(n, cm) {
            return null;
        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                    longname : 'WPTuts Buttons',
                    author : 'Lee',
                    authorurl : 'http://wp.tutsplus.com/author/leepham',
                    infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/example',
                    version : "0.1"
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('wptuts', tinymce.plugins.WPTuts);
})();