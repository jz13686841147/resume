// JavaScript Document
$(document).ready(function (e) {
    var music = document.getElementById("bgMusic");


    $("#audioBtn").click(function () {
        if (music.paused) {
            music.play();
            $("#audioBtn").removeClass("pause").addClass("play");
        } else {
            music.pause();
            $("#audioBtn").removeClass("play").addClass("pause");
        }
        $(".index02_1 div img:last-child").toggleClass("animate");
        $(".index02_2").toggleClass("index02_3");
    });
});