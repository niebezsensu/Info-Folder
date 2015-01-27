$(document).ready(function() {


    var firstSliderRight = $('.container').width();
    $('#first-slider').css('right', firstSliderRight);
    $('#first-slider').show();

    var firstSpotBoxRight = $(".first-spot").width();
    $(".first-spot .box").css('left', firstSpotBoxRight);
    $(".first-spot .box").show();
    $(".first-spot .box").animate({
        left: 0
    }, 200, "linear", function() {});

    $(".first-spot").on('click', function() {
        $("#first-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
        });
    });

    $("#first-slider").on('click', function() {
        $('#first-slider').css('right', firstSliderRight);
        $(".first-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
    })
});