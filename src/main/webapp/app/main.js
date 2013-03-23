require.config({
    paths: {
        jquery: '../assets/js/libs/jquery',
        underscore: '../assets/js/libs/underscore',
        backbone: '../assets/js/libs/backbone'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

requirejs([
    'jquery',
    'underscore',
    'backbone',
    'views/fooView',
    'views/helloWorldView'
], function ($, _, Backbone, FooView, HelloWorldView) {
    var fooView = new FooView();
    var helloWorldView = new HelloWorldView();

    $("#content").append(fooView.render().$el);
    $('#content').append(helloWorldView.render().$el);
});