$(function() {
    window.router = new Router({
        hashbang: true
    });
});

function Router(options) {
    this.options = options;

    page('*', this.ctrl.before);
    page('/', this.ctrl.index);

    page(this.options);
}

Router.prototype.ctrl = {
    before: function(ctx, next) {
        console.log('before');
        $('body').append(_.template($('#layout').html())());
        next();
    },
    index: function(ctx, next) {

    }
};