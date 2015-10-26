$(function() {
    window.router = new Router({
        hashbang: true
    });
});

function Router(options) {
    this.options = options;

    page('*', this.ctrl.before, this.ctrl.layout);
    page('/', this.ctrl.auth);
    page('/tableBusy', this.ctrl.tableBusy);
    page('/category', this.ctrl.category);
    page('/category/:id', this.ctrl.categoryDetail);
    page('/dish/:id', this.ctrl.dishDetail);
    page('/orders', this.ctrl.orders);

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
    tableBusy: function(ctx, next) {
        $('.content').append(_.template($('#template-table-is-busy').html())());
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
                    count: '(450мг)',
                    description:'курица, овощи',
                    price:123
                },
                {
                    ico: '/frontend/Category/img/dish-ico.jpg',
                    name: 'Шашлык куриный',
                    count: '(450мг)',
                    description:'курица, овощи',
                    price:123
                }

            ]
        }));
    },
    dishDetail: function() {
        $('.content').append(_.template($('#template-dish-detail').html())({
            categoryTitle: 'Бар',
            dish: {
                title: 'Лимонал Арбузный',
                images: [
                    '/frontend/Category/img/dish-image.jpg',
                    '/frontend/Category/img/dish-image.jpg',
                    '/frontend/Category/img/dish-image.jpg'
                ],
                count: '400мл',
                price: '480p',
                description: 'Арбуз, мята'
            }
        }));
        $('.dish-slider').bxSlider({
            nextText: '>',
            prevText: '<',
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev'
        });
    },
    orders: function(ctx, next) {
        $('.content').append(_.template($('#template-orders').html())({
            myOrderSum: '897p',
            companyOrderSum:'2342p',
            confirmed: [
                {
                    isMy: true,
                    title: 'Шашлык куриный',
                    price: '89p.',
                    count:2,
                    sum:'123p.'
                },
                {
                    isMy: false,
                    title: 'Шашлык куриный',
                    price: '899p.',
                    count:5,
                    sum:'123p.'
                }
            ],
            notConfirmed: [
                {
                    isMy: true,
                    title: 'Шашлык куриный',
                    price: '89p.'
                },
                {
                    isMy: false,
                    title: 'Шашлык куриный',
                    price: '899p.'
                }
            ]
        }));
    }
};