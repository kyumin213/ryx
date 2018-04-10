$(function () {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false,
        t = 3000,
        $lis = $('.nav-item li'),
        $teams = $('.team-item li'),
        $about = $('.about-item>li');
    length = $('.panel').length;
    //轮播图
    $('.panel,.slider-pre,.slider-next').hover(function () {
        stop();
        $('.pages').show();
    }, function () {
        $('.pages').hide();
        start();
    });
    $('.banner-posint >span').hover(function () {
        stop();
        var index = $(this).index();
        currentIndex = index;
        $('.banner-item li').eq(currentIndex).fadeIn(1000).siblings().fadeOut(500);
        $('.posint-itemts').eq(currentIndex).addClass('on').siblings().removeClass('on');
    }, function () {
        start();
    });

    $('.slider-next').click(function () {
        next();
    });
    $('.slider-pre').click(function () {
        pre();
    });
    function pre() {
        var preIndex = currentIndex;
        currentIndex = --currentIndex % length;
        play(preIndex, currentIndex);
    }

    function play(preIndex, currentIndex) {
        $('.panel').eq(preIndex).fadeOut(500) .parent().children().eq(currentIndex).fadeIn(1000);
        $('.posint-itemts').eq(currentIndex).addClass('on').siblings().removeClass('on');
    }

    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }



    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }

    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }

    start();


    //导航
    $lis.hover(function () {
        $(this).addClass('act');
        $(this).find('a').addClass('on');
    }, function () {
        $(this).removeClass('act');
        $(this).find('a').removeClass('on');
    });
    //优势
    $('.team-item>li').hover(function () {
        if($('li').hasClass('active')){
            $('li').removeClass('active')
        }
        $(this).toggleClass('active');
});

//    关于我们tab
    $about.click(function () {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('span').addClass('act').parent().siblings('li').find('span').removeClass('act');
        $('.right>.right-items').eq(i).show().siblings().hide();
    })
})