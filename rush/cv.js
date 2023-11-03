$('a[href*="#"]').click(function (e) {
    var target = $(this.getAttribute('href'));
    target = target.length? target : $('[name=' + this.getAttribute('href').slice(1) + ']');
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
});