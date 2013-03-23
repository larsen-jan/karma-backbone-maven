define([
    'underscore',
    'views/fooView'
], function(_, FooView) {
    var view = new FooView();

    describe('FooView Tests', function() {
        it('the view is an object', function() {
            expect(_.isObject(view)).toBe(true);
        });

        it('the view should render foo', function() {
            expect(view.render().$el.html()).toBe("Foo");
        });
    });
});