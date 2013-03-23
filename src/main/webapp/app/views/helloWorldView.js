define([
    'jquery',
    'backbone',
    'models/helloWorldModel'
], function($, Backbone, HelloWorldModel) {
    return Backbone.View.extend({
        initialize: function() {
            _.bindAll(this);
            this.model = new HelloWorldModel();
            this.model.fetchDeferred = this.model.fetch();
            this.model.on("sync", this.render);
            return this;
        },

        render: function() {
            this.model.fetchDeferred.done(_.bind(function(resp) {
                this.$el.html(resp.helloWorld); // I may or may not be rendered
            }, this));

            return this;
        }
    });
});