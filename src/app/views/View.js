
define(['Backbone'], function(Backbone) 
{
	// return a simple base view which accepts a template and
	// provides a default render implementation of the model
	// against the specified template
	return Backbone.View.extend({
		initialize: function(options) {
			this.template = options.template;
		},
		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		}
	});;
});
