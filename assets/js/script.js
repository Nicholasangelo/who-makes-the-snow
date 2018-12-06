$(document).ready(function () {
    AOS.init();

    $("#cover").hide();
    $("#img1").hide();
    $("#img2").hide();
    $(".oneEight").css("display", "none");
    $(".nineTwel").css("display", "none");
    $(".thirFour").css("display", "none");
    $("#carouselExampleControls").css("display", "none");
    $("#img15").css("display", "none");
    $("#img16").css("display", "none");
    $("#img17").css("display", "none");
    $("#img18").css("display", "none");
    $("#img19").css("display", "none");
    $("#img191").css("display", "none");
    $("#img192").css("display", "none");
    $("#img193").css("display", "none");
    $("#img20").css("display", "none");
    $(".twents").css("display", "none");

});
function showAllPages() {
    setTimeout(function () {
        $("#cover").css("display", "none");
        $("#img1").css("display", "none");;
        $("#img2").css("display", "none");;
        $("#clickGlobe").css("display", "none");
        $(".oneEight").css("display", "block");
    }, 10000);
}
function showFinalPages() {
    setTimeout(function () {
        $(".twents").css("display", "block");
        $("#img20").css("display", "none");
    }, 6000);
}

$("#clickGlobe").on("click", function (event) {
    event.preventDefault();
    $("#cover").show();
    $("#clickGlobe").on("click", function (event) {
        event.preventDefault();
        $("#cover").hide();
        $("#img1").show();
        $("#img2").show();
        $("#clickGlobe").hide();
        showAllPages();
    })

})

$("#seven8btn").on("click", function (event) {
    event.preventDefault();
    $(".oneEight").css("display", "none");
    $(".nineTwel").css("display", "block");
    AOS.init();

})

$("#twelBtn").on("click", function (event) {
    event.preventDefault();
    $(".nineTwel").css("display", "none");
    $(".thirFour").css("display", "block");
    AOS.init();
});

$("#globe2").on("click", function (event) {
    event.preventDefault();
    $(".thirFour").css("display", "none");
    $("#img15").delay("fast").fadeIn();

});
$("#img15").on("click", function (event) {
    event.preventDefault();
    $("#img15").css("display", "none");
    $("#img16").delay("fast").fadeIn();
});
$("#img16").on("click", function (event) {
    event.preventDefault();
    $("#img16").css("display", "none");
    $("#img17").delay("fast").fadeIn();
});
$("#img17").on("click", function (event) {
    event.preventDefault();
    $("#img17").css("display", "none");
    $("#img18").delay("fast").fadeIn();
});
$("#img18").on("click", function (event) {
    event.preventDefault();
    $("#img18").css("display", "none");
    $("#img191").delay("fast").fadeIn();
    $("#img192").delay("2000").fadeIn();
    $("#img193").delay("4000").fadeIn();
    $("#img19").delay("5000").fadeIn();
});
$("#img19").on("click", function (event) {
    event.preventDefault();
    $("#img191").css("display", "none");
    $("#img19").css("display", "none");
    $("#img192").css("display", "none");
    $("#img193").css("display", "none");
    $("#img20").fadeIn("3000").animate({
        height: "50em",
        width: "50em"
    },"slow");
    $("body").fadeIn("3000").css("background-color", "white");
    showFinalPages();
})
