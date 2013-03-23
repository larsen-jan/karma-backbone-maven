require({
    // Karma serves files from '/base'
    baseUrl:'/base/app',

    // From main.js require.config save additional libs for test
    paths:{
        jquery:'../assets/js/libs/jquery',
        underscore:'../assets/js/libs/underscore',
        backbone:'../assets/js/libs/backbone',

        // Additional test dependencies:
        sinon:'../assets/js/libs/sinon'
    },

    // Same as in main.js require.config
    shim:{
        'backbone':{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        'underscore':{
            exports:'_'
        },
        'sinon':{
            exports:'sinon'
        }
    },

    deps:Object.keys(window.__karma__.files).filter(function (file) { // Files with *.test.js from files list in karma.conf.js
        return /\.test\.js$/.test(file);
    }),

    callback:window.__karma__.start
});