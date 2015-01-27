$(document).ready(function() {


    var sliderRight = $('.container').width();
    $('#first-slider').css('right', sliderRight);
    $('#first-slider').show();
    $('#second-slider').css('right', sliderRight);
    $('#second-slider').show();

    var firstSpotBoxRight = $(".first-spot").width();
    $(".first-spot .box").css('left', firstSpotBoxRight);
    $(".first-spot .box").show();
    $(".first-spot .box").animate({
        left: 0
    }, 200, "linear", function() {});

    var secondSpotBoxTop = $(".second-spot").width();
    $(".second-spot .box").css('right', secondSpotBoxTop);
    $(".second-spot .box").show();
    $(".second-spot .box").animate({
        right: 0
    }, 200, "linear", function() {});



    $(".first-spot").on('click', function() {
        $("#first-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
            $(".second-spot .box").css('right', secondSpotBoxTop);
        });
    });
    
    $(".second-spot").on('click', function() {
        $("#second-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
            $(".second-spot .box").css('right', secondSpotBoxTop);
        });
    });

    $("#first-slider").on('click', function() {
        $('#first-slider').css('right', sliderRight);

        $(".first-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
        $(".second-spot .box").animate({
            right: 0
        }, 200, "linear", function() {});
    });
    
    $("#second-slider").on('click', function() {
        $('#second-slider').css('right', sliderRight);

        $(".first-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
        $(".second-spot .box").animate({
            right: 0
        }, 200, "linear", function() {});
    });
});