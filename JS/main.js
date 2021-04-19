$('#send-message').submit(function(event) {
    event.preventDefault();
    const username = $('#username-input').val();
    const message = $('#message-input').val();
    if ($('#username-input').val() === '') {
        alert('Enter username!')
    } else if ($('#message-input').val() === '') {
        alert('Enter message!')
    } else {
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const hour = d.getHours();
        const mins = d.getMinutes();
        const newTextBox = `
    <li>
        <div class="card bg-secondary text-light">
            <div class="card-header fs-5">
                <span id="name" class="me-5">${username}</span>
                    <span id="day">${day}</span>.<span id="month">${month}</span>.<span id="year">${year}</span>
                    <span id="hour">${hour}</span>:<span id="min">${mins}</span>
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
});

$('.row-sm-image img').hover(function() {
    const source = $(this).attr('src');
    $('.active img').attr('src', source);
})