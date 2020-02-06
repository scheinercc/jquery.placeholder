jquery.placeholder
==================

fallback for browsers that don't support the `placeholder` attribute, e.g. IE &lt; 10


## options

* `submitHandler`<br/>
`.js-form-submit` default class name; required on form submit element, i.e. `<button class="'js-form-submit">`
* `complete`<br/>
callback function

## usage

basic:

```js
	jQuery.placeholder();
```

extended:

```js
	jQuery.placeholder({
		submitHandler: '.my-own-submit-selector',
		complete: function() {
			// stuff to run
		}
	});
```
