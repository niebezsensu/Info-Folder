$(document).ready(function() {



    $(".first-spot .box").css('left', $(".first-spot").width());
    $(".first-spot .box").show();
    $(".first-spot .box").animate({
        left: 0
    }, 500, "linear", function() {

    });
});