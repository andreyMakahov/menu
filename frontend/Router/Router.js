$(function() {
    window.router = new Router({
        hashbang: true
    });
});

function Router(options) {
    this.options = options;

    page('*', this.ctrl.before, this.ctrl.layout);
    page('/', this.ctrl.auth);
    page('/category', this.ctrl.category);
    page('/category/:id', this.ctrl.categoryDetail);

    page(this.options);
}

Router.prototype.ctrl = {
    before: function(ctx, next) {
        console.log('before');
        next();
    },
    layout: function (ctx, next) {
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('body').append(tmpl({
            authorized: true,
            table: 123,
            code: 345,
            summary: 1234
        }));
        next();
    },
    auth: function(ctx, next) {
        $('.content').append(_.template($('#template-auth').html())());
    },
    category: function(ctx, next) {
        $('.content').append(_.template($('#template-category-list').html())({
            category: [
                {
                    image: '/frontend/Category/img/lunch.jpg',
                    name: 'Ланчи'
                },
                {
                    image: '/frontend/Category/img/hot.jpg',
                    name: 'Горячие блюда'
                }
            ]
        }));
    },
    categoryDetail: function() {
        $('.content').append(_.template($('#template-category-detail').html())({
            title: 'Горячее',
            dishes: [
                {
                    ico: '/frontend/Category/img/dish-ico.jpg',
                    name: 'Шашлык куриный',
                    description:'курица, овощи',
                    price:123
                },
                {
                    ico: '/frontend/Category/img/dish-ico.jpg',
                    name: 'Шашлык куриный',
                    description:'курица, овощи',
                    price:123
                }

            ]
        }));
    }
};