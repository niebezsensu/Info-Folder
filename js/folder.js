$(document).ready(function() {

    $(window).on('resize', function() {
        var pageHeight = $(window).height();
        var pageWidth = $(window).width();
        if (pageWidth > 2000) {
            pageWidth = 2000;
        }
        $('.container').css('width', pageWidth * 9 / 10)
        $('.container').css('height', (pageWidth / 2) * 9 / 10)
    });
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    if (pageWidth > 2000) {
        pageWidth = 2000;
    }
    $('.container').css('width', pageWidth * 9 / 10)
    $('.container').css('height', (pageWidth / 2) * 9 / 10)


    var sliderRight = $('.container').width();
    $('#first-slider').css('right', sliderRight);
    $('#first-slider').show();
    $('#first-slider-content').css('right', sliderRight);
    $('#second-slider').css('right', sliderRight);
    $('#second-slider').show();
    $('#second-slider-content').css('right', sliderRight);
    $('#third-slider').css('right', sliderRight);
    $('#third-slider').show();
    $('#third-slider-content').css('right', sliderRight);
    $('#fourth-slider').css('right', sliderRight);
    $('#fourth-slider').show();
    $('#fourth-slider-content').css('right', sliderRight);

    var firstSpotBoxRight = $(".first-spot").width();
    $(".first-spot .box").css('left', firstSpotBoxRight);
    $(".first-spot .box").show();
    $(".first-spot .box").animate({
        left: 0
    }, 200, "linear", function() {});
    
    $('.first-spot .content').toggle(1000);

    var secondSpotBoxTop = $(".second-spot").width();
    $(".second-spot .box").css('right', secondSpotBoxTop);
    $(".second-spot .box").show();
    $(".second-spot .box").animate({
        right: 0
    }, 200, "linear", function() {});
    
    $('.second-spot .content').toggle(1000);

    var thirdSpotBoxTop = $(".third-spot").width();
    $(".third-spot .box").css('bottom', thirdSpotBoxTop);
    $(".third-spot .box").show();
    $(".third-spot .box").animate({
        bottom: 0
    }, 200, "linear", function() {});

    $('.third-spot .content').toggle(1000);
    
    var fourthSpotBoxTop = $(".fourth-spot").width();
    $(".fourth-spot .box").css('left', fourthSpotBoxTop);
    $(".fourth-spot .box").show();
    $(".fourth-spot .box").animate({
        left: 0
    }, 200, "linear", function() {});

    $('.fourth-spot .content').toggle(1000);



    $(".first-spot").on('click', function() {
        $("#first-slider").animate({
            right: 0
        }, 500, "linear", function() {
            $(".first-spot .box").css('left', firstSpotBoxRight);
            $(".second-spot .box").css('right', secondSpotBoxTop);
            $(".third-spot .box").css('bottom', thirdSpotBoxTop);
            $(".fourth-spot .box").css('left', fourthSpotBoxTop);
            $('.first-spot .content').toggle(300);
            $('.second-spot .content').toggle(300);
            $('.third-spot .content').toggle(300);
            $('.fourth-spot .content').toggle(300);
            
            $('#audio1').get(0).play();
        });
        
        $('#first-slider-content').show();
        $('#first-slider-content').animate({
            right: 0
        }, 1000, "linear", function() {
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
            $('.first-spot .content').toggle(300);
            $('.second-spot .content').toggle(300);
            $('.third-spot .content').toggle(300);
            $('.fourth-spot .content').toggle(300);
            
            $('#audio3').get(0).play();
        });
        
        $('#second-slider-content').show();
        $('#second-slider-content').animate({
            right: 0
        }, 1000, "linear", function() {
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
            $('.first-spot .content').toggle(300);
            $('.second-spot .content').toggle(300);
            $('.third-spot .content').toggle(300);
            $('.fourth-spot .content').toggle(300);
            
            $('#audio4').get(0).play();
        });
        
        $('#third-slider-content').show();
        $('#third-slider-content').animate({
            right: 0
        }, 1000, "linear", function() {
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
            $('.first-spot .content').toggle(300);
            $('.second-spot .content').toggle(300);
            $('.third-spot .content').toggle(300);
            $('.fourth-spot .content').toggle(300);
            
            $('#audio2').get(0).play();
        });
        
        $('#fourth-slider-content').show();
        $('#fourth-slider-content').animate({
            right: 0
        }, 1000, "linear", function() {
        });
    });


    $("#first-slider").on('click', function() {
        $('#first-slider').css('right', sliderRight);
        $('#first-slider-content').css('right', sliderRight);
        $('#first-slider-content').hide();
        
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
        
        $('.first-spot .content').toggle(300);
        $('.second-spot .content').toggle(300);
        $('.third-spot .content').toggle(300);
        $('.fourth-spot .content').toggle(300);
        
        $('#audio1').get(0).pause();
        $('#audio1').get(0).currentTime = 0;
    });

    $("#second-slider").on('click', function() {
        $('#second-slider').css('right', sliderRight);
        $('#second-slider-content').css('right', sliderRight);
        $('#second-slider-content').hide();

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
        
        $('.first-spot .content').toggle(300);
        $('.second-spot .content').toggle(300);
        $('.third-spot .content').toggle(300);
        $('.fourth-spot .content').toggle(300);
        
        $('#audio3').get(0).pause();
        $('#audio3').get(0).currentTime = 0;
    });

    $("#third-slider").on('click', function() {
        $('#third-slider').css('right', sliderRight);
        $('#third-slider-content').css('right', sliderRight);
        $('#third-slider-content').hide();
        

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
        
        $('.first-spot .content').toggle(300);
        $('.second-spot .content').toggle(300);
        $('.third-spot .content').toggle(300);
        $('.fourth-spot .content').toggle(300);
        
        $('#audio4').get(0).pause();
        $('#audio4').get(0).currentTime = 0;
    });

    $("#fourth-slider").on('click', function() {
        $('#fourth-slider').css('right', sliderRight);
        $('#fourth-slider-content').css('right', sliderRight);
        $('#fourth-slider-content').hide();
        

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
        
        $('.first-spot .content').toggle(300);
        $('.second-spot .content').toggle(300);
        $('.third-spot .content').toggle(300);
        $('.fourth-spot .content').toggle(300);
        
        $('#audio2').get(0).pause();
        $('#audio2').get(0).currentTime = 0;
    });
});