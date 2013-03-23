define([
    'underscore',
    'sinon',
    'views/helloWorldView'
], function(_, sinon, HelloWorldView) {
    describe('HelloWorldView Tests', function() {
        beforeEach(function() {
            this.server = sinon.fakeServer.create();
        });

        afterEach(function() {
            this.server.restore();
        });

        it('should render nothing when fetch is completed', function() {
            var view = new HelloWorldView();
            expect(view.render().$el.html()).toBe("");
        });

        it('should render response when server responds', function() {
            var view = new HelloWorldView();
            setSuccessfulResponse(this.server, "rest/helloworld", {helloWorld: "Foo!"});

            expect(view.render().$el.html()).toBe("Foo!");
        });

        function setSuccessfulResponse(server, url, responseBody) {
            server.respondWith("GET", url, getSuccessfulResponse(responseBody));
            server.respond();
        }

        function getSuccessfulResponse(responseBody) {
            return [200, {"Content-Type": "application/json"}, JSON.stringify(responseBody)];
        }
    });
});