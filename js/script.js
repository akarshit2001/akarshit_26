$(function () {

    $("#butto").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#navbarSupportedContent").collapse('hide');
        }
    });

    $("#butto").click(function (event) {
        $(event.target).focus();
    });
});
