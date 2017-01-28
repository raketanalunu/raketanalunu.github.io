$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    var sectionY = $("#about").offset().top
    if (scroll > sectionY) {
        $("#nav-container").addClass("scrolled");
    } else {
        $("#nav-container").removeClass("scrolled");
    }
});