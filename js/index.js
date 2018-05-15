$(function () {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false,
        t = 3000,
        $lis = $('.items'),
        $rec=$('.info-list>.info-item'),
        $contact=$('.contact_left>li'),
        $news=$('.newsinfo>li'),
        $about = $('.about-item>li');
    $('.panel:not(:first)').hide();
    $('.posint-itemts:first').addClass('on');
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
    $('.pre').click(function () {
        pres();
    });
    $('.next').click(function () {
        var index=$(this).index();
        $('.info_view').eq(index+1).removeClass('disno');
        console.log(index);
    })

    function pre() {
        var preIndex = currentIndex;
        currentIndex = --currentIndex % length;
        play(preIndex, currentIndex);
}

    function play(preIndex, currentIndex) {
        $('.panel').eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(1000);
        $('.posint-itemts').eq(currentIndex).addClass('on').siblings().removeClass('on');
    }

    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    function plays(preIndex,currenIndex) {
        var index=$(this).index();
        preIndex=index;
        $('.info-item').eq(preIndex).removeClass('disno');
    }
    function pres() {
        var preIndex = currentIndex;
        currentIndex = --currentIndex % length;
        plays(preIndex, currentIndex);
    }
    function nexts() {

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
    var abouts=$('.about_us ');
    $lis.hover(function () {
        var indexs=$(this).index();
        $(this).addClass('act');
        $(this).find('.nav-a').addClass('on');
        $(this).find('.about_us').slideDown();
        // $(this).children('.about_us').removeClass('disno');
    }, function () {
        var indexs=$(this).index();
        $(this).removeClass('act');
        $(this).find('.nav-a').removeClass('on');
        $(this).find('.about_us').slideUp();
    });
    //优势
    $('.team-item>li').hover(function () {
        if ($('li').hasClass('active')) {
            $('li').removeClass('active')
        }
        $(this).toggleClass('active');
    });

    $(".info-item").hover(function () {
        $(this).find('.title').toggleClass('hover');
        $(this).find('.times').toggleClass('hover')
    });
    $rec.click(function () {
        var i=$(this).index();
        $(this).parent().parent().addClass('disno');
        $('.info_view').eq(i).removeClass('disno');
        $('.next_pre').removeClass('disno');
    })

//    关于我们tab
    $about.click(function () {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('span').addClass('act').parent().siblings('li').find('span').removeClass('act');
        $('.right>.right-items').eq(i).show().siblings().hide();
    });
    //联系我们
    $contact.click(function () {
        var i=$(this).index();
        if(i!=1){
            $('.next_pre').addClass('disno');
            $('.info_view').addClass('disno');
            $('.info_pages').addClass('disno');
            $('.info_lists').removeClass('disno');
        }else{
            $('.info_pages').removeClass('disno');
        }
    });
    //新闻动态
    $news.click(function () {
        var i=$(this).index();
        if(i!=0){
            $('.next_pre').addClass('disno');
            $('.info_view').addClass('disno');
            $('.info_lists').removeClass('disno');
            $('.info_pages').addClass('disno');
        }else{
            $('.info_pages').removeClass('disno');
        }
    })
})