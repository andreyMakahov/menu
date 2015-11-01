var Feedback = {

    WAITER: 1,
    DISH:   2,
    SPEED:  3,

    initEvents: function() {
        this.waiterEl = $('#waiterRate');
        this.dishEl = $('#dishRate');
        this.speedEl = $('#speedRate');

        $('.waiter-rate TD').on('click', function(e) {
            var target = $(e.target),
                rate = target.data('rate');
            if(rate) {
                this.setRate(this.WAITER, rate);
                this.deselectRow(this.WAITER);
                target.addClass('selected');
            }
        }.bind(this));

        $('.dish-rate TD').on('click', function(e) {
            var target = $(e.target),
                rate = target.data('rate');
            if(rate) {
                this.setRate(this.DISH, target.data('rate'));
                this.deselectRow(this.DISH);
                target.addClass('selected');
            }
        }.bind(this));

        $('.speed-rate TD').on('click', function(e) {
            var target = $(e.target),
                rate = target.data('rate');
            if(rate) {
                this.setRate(this.SPEED, target.data('rate'));
                this.deselectRow(this.SPEED);
                target.addClass('selected');
            }
        }.bind(this));
    },

    setRate: function(entityId, rate) {
        switch(entityId) {
            case this.WAITER:
                this.waiterEl.val(rate);
                break;
            case this.DISH:
                this.dishEl.val(rate);
                break;
            case this.SPEED:
                this.speedEl.val(rate);
                break;
        }
    },
    deselectRow: function(row) {
        $('.rate-table TR:nth-child('+ row +')').find('.selected').removeClass('selected');
    }
};

