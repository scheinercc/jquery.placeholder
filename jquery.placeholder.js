(function(window, $, undefined) {

	"use strict"; // jshint

	/* **
	* placeholder:
	* fallback for browsers that don't support the 'placeholder' attribute
	*
	* browser support: http://caniuse.com/#search=placeholder (e.g. no IE7-9)
	*
	***
	* options:
	*
	* 'complete'
	* 	callback function
	*/
	$.fn.placeholder = function( options ) {

		var opts = $.extend( {}, $.fn.placeholder.defaults, options ),
			$elems;

		if ( !( 'placeholder' in document.createElement('input'))) {

			$elems = $(this).find( '[placeholder]' );

			$elems
				// remove placeholder value on focus
				.on( 'focus', function() {

					var input = $(this),
						placeHolderText = input.attr('placeholder');

					if ( input.val() === placeHolderText ) {

						input.val('');
						input.removeClass('placeholder');
					}
				})
				// add placeholder text on blur if no individual value is set
				.on( 'blur', function() {

					var input = $(this),
						placeHolderText = input.attr('placeholder');

					if ( input.val() === '' || input.val() === placeHolderText ) {

						input.addClass('placeholder');
						input.val(placeHolderText);
					}
				})
				// initiate placeholder text
				.blur();

			// remove placeholder text on submit
			$elems
				.parents('form')
				.submit( function() {

					$(this)
						.find('[placeholder]')
						.each( function() {

							var input = $(this),
								placeHolderText = input.attr('placeholder');

							if ( input.val() === placeHolderText ) {
								input.val('');
							}
						});
				});
		}

		opts.complete.call( this );

		// ensure method calls can be chained
		// http://www.sitepoint.com/10-tips-better-jquery-plugins/
		return this;
	};

	// Plugin defaults – added as a property on the plugin function.
	$.fn.placeholder.defaults = {
		complete: function() {}
	};

}( window, window.jQuery ));
