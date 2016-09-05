// JavaScript Document
$(document).ready(function (e) {
    $(document).scroll(function () {
        var u = $(document).scrollTop();
        if (u < 150) {
            $(".indexs").removeClass("indexs1");
        } else {
            $(".indexs").addClass("indexs1");
        }
    });
    $(".as").hover(function () {
        $(".as").fadeTo("slow", 1);
    }, function () {
        $(".as").fadeTo("slow", 0.6);
    });

    $(".index01_1 ul li").click(function () {
        var sk = $(this).index();
        switch (sk) {
            case 0:
                $('html,body').animate({scrollTop: '0px'}, 1000);
                break;
            case 1:
                $('html,body').animate({scrollTop: '920px'}, 1000);
                break;
            case 2:
                $('html,body').animate({scrollTop: '1960px'}, 1000);
                break;
            case 3:
                $('html,body').animate({scrollTop: '3800px'}, 1000);
                break;
        }
    });
});

