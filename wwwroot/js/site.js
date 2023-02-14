var pathname = window.location.pathname;

$('.avbar-nav').each(function (i, obj) {
    var href = $(this).attr('href');

    if (pathname === href) {
        $(this).addClass("active");
        return false;
    }

});