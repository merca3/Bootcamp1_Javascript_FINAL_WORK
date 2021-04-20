// $("#register-form").validate();


let myInput = $("#password");

$(myInput).focus(function() {
    $("#message").css('display', 'block');
})

$(myInput).blur(function() {
    $("#message").css('display', 'none');
})