// $(document).on('ready', function(){
    $(".fb-button").on('click', function(e) {
        e.preventDefault();
        $(".chat-fb .chat-content").toggleClass('openChat')
    })

    $(".wsp-button").on('click', function(e) {
        e.preventDefault();
        $(".chat-wsp .chat-content").toggleClass('openChatWsp');
        $(".btn-enviar-wsp").toggleClass('index-wsp')
    })


    setTimeout(() => {
        $('.splash').css('display', 'none');
    }, 2000);
// })