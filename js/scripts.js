$('header').addClass('hero1');

if ($('header').hasClass('hero1')) {
    setTimeout(
        function () {
            $('header').removeClass('hero1');
            $('header').addClass('hero2').trigger('classChange'); //send trigger to start recursion
        }, 5000);
}



//everytime one of the if blocks is executed it sends a trigger to change to the next image
$('header').on('classChange', function () {

    if ($('header').hasClass('hero1')) {
        setTimeout(
            function () {
                $('header').removeClass('hero1');
                $('header').addClass('hero2').trigger('classChange');
            }, 5000);
    }




    if ($('header').hasClass('hero2')) {
        setTimeout(
            function () {
                $('header').removeClass('hero2');
                $('header').addClass('hero3').trigger('classChange');
            }, 5000);
    }
    if ($('header').hasClass('hero3')) {
        setTimeout(
            function () {
                $('header').removeClass('hero3');
                $('header').addClass('hero1').trigger('classChange');
            }, 5000);
    }
});


$("video").each(function () {
    var player = videojs(this)
    $('.rewindbtn').click(function () {
        event.preventDefault();
        var time = player.currentTime();
        player.currentTime(time - 10);
    });



    $(".playbtn").click(function () {
        event.preventDefault();

        if (!player.paused()) {
            player.pause();

            $(".playbtn").html("play");
        } else {
            player.play();

            $(".playbtn").html("pause");

        }
    });


});

$(".portofolio-item").hover(function () {
    $(this).find(".portofolio-content").addClass("showbutton");
    $(this).find(".portofolio-content").removeClass("hidebutton");


}, function () {

    $(this).find(".portofolio-content").removeClass("showbutton");
    $(this).find(".portofolio-content").addClass("hidebutton");
});






$("video").hover(function () {
    $(".player-btn").addClass("showbutton");
    $(".player-btn").removeClass("hidebutton");


}, function () {
    $(".player-btn").removeClass("showbutton");
    $(".player-btn").addClass("hidebutton");


});

$(".buttonwrapper").hover(function () {
    $(".player-btn").addClass("showbutton");
    $(".player-btn").removeClass("hidebutton");



}, function () {
    $(".player-btn").removeClass("showbutton");
    $(".player-btn").addClass("hidebutton");


});


$(".contactinfo").toggle("slide");

$(".contact").click(function () {
    event.preventDefault();
    console.log("test");
    $(".contactinfo").toggle("slide");

    if ($(".contactinfo").hasClass("hidebutton")) {
        $(".contactinfo").addClass("showbutton");
        $(".contactinfo").removeClass("hidebutton");
    }

});

$(".closebutt").click(function () {
    event.preventDefault();

    $(".contactinfo").toggle("slide");

});


$(".contactinfo2").toggle("slide");

$(".contact2").click(function () {
    event.preventDefault();
    $(".contactinfo2").toggle("slide");

    if ($(".contactinfo2").hasClass("hidebutton")) {
        $(".contactinfo2").addClass("showbutton");
        $(".contactinfo2").removeClass("hidebutton");
    }

});

$(".closebutt2").click(function () {
    event.preventDefault();

    $(".contactinfo2").toggle("slide");

});