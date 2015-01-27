

$(document).ready(function() {

    $(window).on('resize', function(){
        var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    if(pageWidth > 2000) {
        pageWidth = 2000;
    }
    $('.container').css('width',pageWidth*9/10)
    $('.container').css('height',(pageWidth/2)*9/10)
    });
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    if(pageWidth > 2000) {
        pageWidth = 2000;
    }
    $('.container').css('width',pageWidth*9/10)
    $('.container').css('height',(pageWidth/2)*9/10)
    

    var sliderRight = $('.container').width();
    $('#first-slider').css('right', sliderRight);
    $('#first-slider').show();
    $('#second-slider').css('right', sliderRight);
    $('#second-slider').show();
    $('#third-slider').css('right', sliderRight);
    $('#third-slider').show();
    $('#fourth-slider').css('right', sliderRight);
    $('#fourth-slider').show();

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

    var thirdSpotBoxTop = $(".third-spot").width();
    $(".third-spot .box").css('bottom', thirdSpotBoxTop);
    $(".third-spot .box").show();
    $(".third-spot .box").animate({
        bottom: 0
    }, 200, "linear", function() {});

    var fourthSpotBoxTop = $(".fourth-spot").width();
    $(".fourth-spot .box").css('left', fourthSpotBoxTop);
    $(".fourth-spot .box").show();
    $(".fourth-spot .box").animate({
        left: 0
    }, 200, "linear", function() {});
    
    $('.first-spot .content').toggle('slow');



    $(".first-spot").on('click', function() {
        $("#first-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
            $(".second-spot .box").css('right', secondSpotBoxTop);
            $(".third-spot .box").css('bottom', thirdSpotBoxTop);
            $(".fourth-spot .box").css('left', fourthSpotBoxTop);
        });
    });

    $(".second-spot").on('click', function() {
        $("#second-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
            $(".second-spot .box").css('right', secondSpotBoxTop);
            $(".third-spot .box").css('bottom', thirdSpotBoxTop);
            $(".fourth-spot .box").css('left', fourthSpotBoxTop);
        });
    });

    $(".third-spot").on('click', function() {
        $("#third-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
            $(".second-spot .box").css('right', secondSpotBoxTop);
            $(".third-spot .box").css('bottom', thirdSpotBoxTop);
            $(".fourth-spot .box").css('left', fourthSpotBoxTop);
        });
    });
    
    $(".fourth-spot").on('click', function() {
        $("#fourth-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
            $(".second-spot .box").css('right', secondSpotBoxTop);
            $(".third-spot .box").css('bottom', thirdSpotBoxTop);
            $(".fourth-spot .box").css('left', fourthSpotBoxTop);
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
        $(".third-spot .box").animate({
            bottom: 0
        }, 200, "linear", function() {});
        $(".fourth-spot .box").animate({
            left: 0
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
        $(".third-spot .box").animate({
            bottom: 0
        }, 200, "linear", function() {});
        $(".fourth-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
    });

    $("#third-slider").on('click', function() {
        $('#third-slider').css('right', sliderRight);

        $(".first-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
        $(".second-spot .box").animate({
            right: 0
        }, 200, "linear", function() {});
        $(".third-spot .box").animate({
            bottom: 0
        }, 200, "linear", function() {});
        $(".fourth-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
    });

    $("#fourth-slider").on('click', function() {
        $('#fourth-slider').css('right', sliderRight);

        $(".first-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
        $(".second-spot .box").animate({
            right: 0
        }, 200, "linear", function() {});
        $(".third-spot .box").animate({
            bottom: 0
        }, 200, "linear", function() {});
        $(".fourth-spot .box").animate({
            left: 0
        }, 200, "linear", function() {});
    });
});