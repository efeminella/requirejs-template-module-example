define( function( require ) {
	// Define template engine dependency and require each template
	var Handlebars = require('Handlebars')
	  , _template1 = require('text!app/templates/template-1.tpl')
	  , _template2 = require('text!app/templates/template-2.tpl')
	  , _template3 = require('text!app/templates/template-3.tpl')
	  , _template4 = require('text!app/templates/template-4.tpl');

	// Given a template and an optional arguments object, returns the 
	// compiled template, or, if a context is passed, invokes the compiled 
	// template with the given context.
	var _compiled = function(tpl, context) {
	    var compiled = Handlebars.compile(tpl);
	    return context ? compiled(context) : compiled;
	};

	// Expose a public API which provides named methods for retrieving
	// each compiled template; defer to Handlebars to cache previously
	// compiled templates upon subsequent invocations
	return {
		template1: function() {
			return _compiled(_template1, arguments[0]);
		},
		template2: function() {
			return _compiled(_template2, arguments[0]);
		},
		template3: function() {
			return _compiled(_template3, arguments[0]);
		},
		template4: function() {
			return _compiled(_template4, arguments[0]);
		}
	}
});
