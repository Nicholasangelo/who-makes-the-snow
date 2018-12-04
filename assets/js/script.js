$(document).ready(function () {
    AOS.init();

    $("#cover").hide();
    $("#img1").hide();
    $("#img2").hide();
    $(".oneEight").css("display", "none");
    $(".nineTwel").css("display", "none");
    $(".thirFour").css("display", "none");


});
function showAllPages() {
    setTimeout(function () {
        $("#cover").css("display", "none");
        $("#img1").css("display", "none");;
        $("#img2").css("display", "none");;
        $("#clickGlobe").css("display", "none");
        $(".oneEight").css("display", "block");
    }, 12000);
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
})

