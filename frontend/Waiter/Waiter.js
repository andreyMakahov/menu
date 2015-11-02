var Waiter = {
    call: function() {
        Spinner.show();
        // TODO: change the url
        $.ajax({
            url: "",

        }).done(function() {
            Spinner.hide();
            alert('Официант подойдет к Вам в течении пары минут');
        })
        .fail(function() {
            Spinner.hide();
        });
    }
};