// $(document).on('ready', function(){
    $(".fb-button").on('click', function(e) {
        e.preventDefault();
        $(".chat-content").toggleClass('openChat')
    })

    setTimeout(() => {
        $('.splash').css('display', 'none');
    }, 2000);
// })