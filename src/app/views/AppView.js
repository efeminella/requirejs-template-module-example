
define( function( require ) {
	
	var Backbone  = require('Backbone')
	  , Templates = require('Templates')
	  , View      = require('View')
		
	var AppView = Backbone.View.extend({
		
		el: '#app-container',

		// instantiate default view, passing a reference to their
		// template via the Templates module, and render their 
		// markup
		render: function() 
		{
			this.$el.append( new View({
				model: new Backbone.Model({
					name: 'View #1 Template Rendered'
				}),
				template: Templates.template1()
			}).render().el );
			
			this.$el.append( new View({
				model: new Backbone.Model({
					name: 'View #2 Template Rendered'
				}),
				template: Templates.template2()
			}).render().el );
			
			this.$el.append( new View({
				model: new Backbone.Model({
					name: 'View #3 Template Rendered'
				}),
				template: Templates.template3()
			}).render().el );
			
			this.$el.append( new View({
				model: new Backbone.Model({
					name: 'View #4 Template Rendered'
				}),
				template: Templates.template4()
			}).render().el );
		}
	});
	return AppView;
});
