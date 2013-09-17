jquery.placeholder
==================

fallback for browsers that don't support the 'placeholder' attribute, e.g. IE &lt; 10


## options

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
		complete: function() {
			// stuff to run
		}
	});
```

