define([
    'backbone'
], function(Backbone) {
    return Backbone.Model.extend({
        url: "rest/helloworld"
    });
});