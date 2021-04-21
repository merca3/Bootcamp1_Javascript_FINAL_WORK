$(function() {
    $('#send-message').validate({
        rules: {
            usernameinput: {
                required: true,
                minlength: 3,
            },
            message: 'required',
        },
        messages: {
            usernameinput: {
                required: 'Please enter your Username',
                minlength: 'Username must be minimum 3 symbols long',
            },
            message: 'Please enter the message',
        },
        submitHandler: function() {
            const username = $('#username-input').val();
            const message = $('#message-input').val();

            const d = new Date();
            const newTextBox = `
    <li>
        <div class="card bg-secondary text-light">
            <div class="card-header fs-5 text-info">
                <span id="name" class="me-5">${username}</span>
                    <span id="date">${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</span>
                </div>
            <div class="card-body m-0 fs-7">
                <div class="">
                    <p>${message}</p>
                </div>
            </div>
        </div>
    </li>`;

            $('#chat-window').prepend(newTextBox);

            $('#username-input').val('');
            $('#message-input').val('');
        }
    })
})





$('.row-sm-image img').hover(function() {
    const source = $(this).attr('src');
    $('.active img').attr('src', source);
})