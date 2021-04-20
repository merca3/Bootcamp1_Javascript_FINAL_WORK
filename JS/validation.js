$("#register-form").validate({
    rules: {
        username: "required",
    },
    messages: {
        username: "Please specify your name",
    }
});


let myInput = $("#password");

$(myInput).focus(function() {
    $("#message").css('display', 'block');
})

$(myInput).blur(function() {
    $("#message").css('display', 'none');
})