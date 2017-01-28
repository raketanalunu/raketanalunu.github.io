$( function() {
    var button = $('.toggle-button');
    var menu = $('nav .menu');
        
    $('.toggle-button, nav .menu a').on('click', function(e) {
        if (button.css('display') != 'none') {
            e.preventDefault();
            menu.slideToggle();
        }
    });
});