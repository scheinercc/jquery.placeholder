jquery.placeholder
==================

fallback for browsers that don't support the 'placeholder' attribute, e.g. IE &lt; 10


## options

* 'submitHandler'<br/>
class name '.js-form-submit'; to be used on form submit element, i.e. <button class="'js-form-submit">
* 'complete'<br/>
callback function

## usage

basic:

```js
	jQuery.placeholder();
```

extended:

```js
	jQuery.placeholder({
		submitHandler: '.js-form-submit',
		complete: function() {
			// stuff to run
		}
	});
```

