$(function() {
    $('#register-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 3,
            },
            password: {
                required: true,
                minlength: 8
            },
            passwordrepeat: {
                required: true,
                equalTo: '#password',
            },
            firstname: 'required',
            selectcountry: 'required',
            checkbox: 'required',
        },
        messages: {
            username: {
                required: 'Please enter your Username',
                minlength: 'Username must be minimum 3 symbols long',
            },
            password: {
                required: 'Please enter a password',
                minlength: 'Password must be at least 8 symbols long',
            },
            passwordrepeat: {
                required: 'Please retype your password',
                equalTo: 'Password should match previous one',
            },
            firstname: 'Please enter your First name',
            selectcountry: 'Please choose a valid country',
            equalTo: 'Passwords should match!',
            checkbox: 'You must agree to terms and Conditions',
        },
    });
});