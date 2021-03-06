$(function() {
    window.router = new Router({
        hashbang: true
    });
});

function Router(options) {
    this.options = options;

    page('/', this.ctrl.auth);
    page('/tableBusy', this.ctrl.tableBusy);
    page('/category', this.ctrl.category);
    page('/category/:id', this.ctrl.categoryDetail);
    page('/dish/:id', this.ctrl.dishDetail);
    page('/orders', this.ctrl.orders);
    page('/feedback', this.ctrl.feedback);

    page(this.options);
}

Router.prototype.ctrl = {
    auth: function(ctx, next) {
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('.page-wrapper').empty().append(tmpl({
            data: {
                page:'auth',
                authorized: false
            }
        }));
        $('.content').append(_.template($('#template-auth').html())());
    },
    tableBusy: function(ctx, next) {
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('.page-wrapper').empty().append(tmpl({
            data: {
                page:'auth',
                authorized: false
            }
        }));
        $('.content').append(_.template($('#template-table-is-busy').html())());
    },
    category: function(ctx, next) {
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('.page-wrapper').empty().append(tmpl({
            data: {
                page:'category',
                authorized: true,
                table: 123,
                code: 345,
                summary: 1234
            }
        }));
        $('.content').append(_.template($('#template-category-list').html())({
            category: [
                {
                    image: '/frontend/Category/img/lunch.jpg',
                    name: 'Ланчи'
                },
                {
                    image: '/frontend/Category/img/hot.jpg',
                    name: 'Горячие блюда'
                },
                {
                    image: '/frontend/Category/img/lunch.jpg',
                    name: 'Ланчи'
                },
                {
                    image: '/frontend/Category/img/hot.jpg',
                    name: 'Горячие блюда'
                },
                {
                    image: '/frontend/Category/img/lunch.jpg',
                    name: 'Ланчи'
                },
                {
                    image: '/frontend/Category/img/hot.jpg',
                    name: 'Горячие блюда'
                },
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
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('.page-wrapper').empty().append(tmpl({
            data: {
                page:'category-detail',
                authorized: true,
                table: 123,
                code: 345,
                summary: 1234
            }
        }));
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
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('.page-wrapper').empty().append(tmpl({
            data: {
                page:'dish-detail',
                authorized: true,
                table: 123,
                code: 345,
                summary: 1234
            }
        }));
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
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('.page-wrapper').empty().append(tmpl({
            data: {
                page:'order',
                authorized: true,
                table: 123,
                code: 345,
                summary: 1234
            }
        }));
        $('.content').append(_.template($('#template-orders').html())({
            myOrderSum: '897 p.',
            companyOrderSum:'2342 p.',
            confirmed: [
                {
                    isMy: true,
                    title: 'Шашлык куриный',
                    price: '89 p.',
                    count:2,
                    sum:'123 p.'
                },
                {
                    isMy: false,
                    title: 'Шашлык куриный',
                    price: '899 p.',
                    count:5,
                    sum:'123 p.'
                }
            ],
            notConfirmed: [
                {
                    isMy: true,
                    title: 'Шашлык куриный',
                    price: '89 p.'
                },
                {
                    isMy: false,
                    title: 'Шашлык куриный',
                    price: '899 p.'
                }
            ]
        }));
    },
    feedback: function(ctx, next) {
        var tmpl = _.template(document.getElementById('template-layout').innerHTML);
        $('.page-wrapper').empty().append(tmpl({
            data: {
                page:'feedback',
                authorized: true,
                feedback:true
            }
        }));
        $('.content').append(_.template($('#template-feedback').html())({
            feedback: true
        }));
        Feedback.initEvents();
    }
};