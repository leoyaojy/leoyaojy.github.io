$(function() {
    $.backstretch([
        "http://ojka0j4ul.bkt.clouddn.com/1.jpg",
        "http://ojka0j4ul.bkt.clouddn.com/2.jpg",
        "http://ojka0j4ul.bkt.clouddn.com/3.jpg",
        "http://ojka0j4ul.bkt.clouddn.com/4.jpg",
        "http://ojka0j4ul.bkt.clouddn.com/5.jpg",
        "http://ojka0j4ul.bkt.clouddn.com/6.jpg"
    ], {
        fade: 750,
        duration: 3000
    });
    setCircles();
    $('#fancyBox').fancybox();
});

function setCircles() {
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
}

function reset() {
    $(".counter").TimeCircles().destroy();
    setCircles();
}
window.onresize = function() {
    reset();
};
console.log("%cluckyw.cn", "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em");
