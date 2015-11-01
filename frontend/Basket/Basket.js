var Basket = {

    summary: 0,

    init: function() {
        this.$menuEl = $('.menu-basket');
    },

    add: function(summary) {
        this.summary += summary;
        this.render();
    },
    remove: function(summary) {
        this.summary -= summary;
        this.render();
    },
    render: function() {
        this.$menuEl.text(this.summary);
    },
    sendRequest: function() {
        Spinner.show();
        // TODO: change the url
        $.ajax({
            url: "",

        }).done(function() {
            Spinner.hide();
        })
        .fail(function() {
            Spinner.hide();
        });
    }
};

$(function() {
    Basket.init();
});