
// dependencies ...
require.config( {
	paths : {
	    $           : '../vendor/zepto/1.0/zepto.min'
	  , _           : '../vendor/lodash/1.3.3/lodash.min'
	  , Backbone    : '../vendor/backbone/0.9.2/backbone-min'
	  , Handlebars  : '../vendor/handlebars/1.0.5/handlebars'
	  , text        : '../vendor/require/plugins/text'
	  , AppView     : 'app/views/AppView'
	  , View        : 'app/views/View'
	  , Templates   : 'app/templates/Templates'
	},
    shim: {
        '$': {
            exports: '$'
        }, 
        'Backbone': {
            deps: ['_', '$'],
            exports: 'Backbone'
        }, 
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

// initialization ...
require(['$', 'AppView'], function($, AppView) {
	$(function(){
		new AppView().render();
	});
});