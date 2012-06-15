
define( function( require ) {
	
	// define template engine dependency and require each template
	var Handlebars = require('Handlebars')
	  , _template1 = require('text!app/templates/template-1.tpl')
	  , _template2 = require('text!app/templates/template-2.tpl')
	  , _template3 = require('text!app/templates/template-3.tpl')
	  , _template4 = require('text!app/templates/template-4.tpl');

	// expose a public API which provides named methods for retrieving
	// each compiled template; defer to Handlebars to cache previously
	// compiled templates upon subsequent invocations
	return {
		template1: function() {
			return Handlebars.compile( _template1 );
		},
		template2: function() {
			return Handlebars.compile( _template2 );
		},
		template3: function() {
			return Handlebars.compile( _template3 );
		},
		template4: function() {
			return Handlebars.compile( _template4 );
		}
	}
});