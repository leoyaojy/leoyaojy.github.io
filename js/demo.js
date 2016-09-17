$(function() {
    $box = $('.content');
    $ht = $box.height() + 175;
    $win_ht = $(window).height();
    if ($win_ht > $ht) {
        $box.css({
            'left': '50%',
            'top': '50%',
            'margin-left': -$box.width() / 2 + 'px',
            'margin-top': -$ht / 2 + 'px'
        });
    } else {
        $box.css({
            'left': '50%',
            'margin-left': -$box.width() / 2 + 'px',
            'margin-top': '60px',
            'margin-bottom': '60px'
        });
    }

    $.backstretch([
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
        "img/6.jpg"
    ], {
        fade: 750,
        duration: 3000
    });

    $(".counter").TimeCircles({
        "direction": "Clockwise",
        "animation": "smooth",
        "bg_width": 0,
        "fg_width": 0.02,
        "circle_bg_color": "rgba(255, 255, 255, 0)",
        "circle_bg_fill_color": "rgba(255, 255, 255, 0.1)",
        "time": {
            "Days": {
                "text": "天",
                "color": "#ffffff",
                "show": true
            },
            "Hours": {
                "text": "时",
                "color": "#ffffff",
                "show": true
            },
            "Minutes": {
                "text": "分",
                "color": "#ffffff",
                "show": true
            },
            "Seconds": {
                "text": "秒",
                "color": "#ffffff",
                "show": true
            }
        }
    });


    $('#fancyBox').fancybox();
});