define([
    'jquery',
    'backbone'
], function($, Backbone) {
    return Backbone.View.extend({
        render: function() {
            this.$el.html("Foo");
            return this;
        }
    });
});