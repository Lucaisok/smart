console.log("connected");

const overlay = document.getElementById("overlay");

function disappear() {
    var executed = true;
    console.log("here", executed);
    if (executed) {
        setTimeout(() => {
            overlay.classList.add("stopOverlay");
        }, 3000);
        setTimeout(() => {
            overlay.classList.add("destroy");
        }, 3100);
        executed = false;
    }
    console.log(executed);
}

disappear();

var position = $(window).scrollTop();

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        if (window.pageYOffset >= 90) {
            $("header").addClass("headerShadow");
        }
        $("header").css({
            position: "absolute",
        });
    } else {
        if (window.pageYOffset < 50) {
            $("header").removeClass("headerShadow");
        }
        $("header").css({
            position: "fixed",
        });
    }
    position = scroll;
});

$(".circle").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
