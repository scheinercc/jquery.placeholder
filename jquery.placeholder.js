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

					var $input = $(this),
						placeHolderText = $input.attr('placeholder');

					if ( $input.val() === placeHolderText ) {

						$input
							.val('')
							.removeClass('placeholder');
					}
				})
				// add placeholder text on blur if no individual value is set
				.on( 'blur', function() {

					var $input = $(this),
						placeHolderText = $input.attr('placeholder');

					if ( $input.val() === '' ) {

						$input
							.addClass('placeholder')
							.val(placeHolderText);
					}
				})
				// initiate placeholder text
				.blur();

			// form submit
			$elems
				.parents('form')
				.find(opts.submitHandler)
				.on( 'click', function( evt ) {

					evt.preventDefault();

					var $this = $(this),
						$placeholderElems = $this.parents('form').find('[placeholder]');

					// remove placeholder text
					$placeholderElems
						.each( function() {

							var input = $(this),
								placeHolderText = input.attr('placeholder');

							if ( input.val() === placeHolderText ) {
								input.val('');
							}
						});

					// add placeholder text back
					setTimeout( function() {
						$placeholderElems
							.each( function() {

								var input = $(this),
									placeHolderText = input.attr('placeholder');

								if ( input.val() === '' || input.val() === placeHolderText ) {

									input
										.val(placeHolderText)
										.addClass('placeholder');
								}
							});
					}, 10);
				});
		}

		opts.complete.call( this );

		// ensure method calls can be chained
		// http://www.sitepoint.com/10-tips-better-jquery-plugins/
		return this;
	};

	// Plugin defaults – added as a property on the plugin function.
	$.fn.placeholder.defaults = {
		submitHandler: '.js-form-submit',
		complete: function() {}
	};

}( window, window.jQuery ));
