var Spinner = {
    init: function() {
      this.$el = $('#spinner');
    },
    show: function() {
        this.$el.show();
    },
    hide: function() {
        this.$el.hide();
    }
};

$(function() {
   Spinner.init();
});