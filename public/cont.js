let invia = document.getElementById("invia");
let annulla = document.getElementById("annulla");
let accetto = document.getElementById("accetto");
let f = document.getElementById("fullName");
let em = document.getElementById("email");
let o = document.getElementById("oggetto");
let t = document.getElementById("text");

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

annulla.addEventListener("click", () => {
    location.reload();
});

invia.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("cxlicked");
    let fullName = f.value;
    let email = em.value;
    let oggetto = o.value;
    let text = t.value;

    let formFields = {
        fullName: fullName,
        email: email,
        text: text,
        oggetto: oggetto,
    };

    console.log(formFields);
    if (
        fullName != "" &&
        email != "" &&
        oggetto != "" &&
        text != "" &&
        accetto.checked == true
    ) {
        axios
            .post("/contact", formFields)
            .then(function (response) {
                console.log(response);
                if (response.data.success) {
                    // here thanks
                    f.value = " ";
                    em.value = " ";
                    o.value = " ";
                    t.value = " ";
                    accetto.checked = false;
                    $(".thanksContainer").css({
                        display: "flex",
                    });
                    $(".every").css({
                        display: "none",
                    });
                } else {
                    // here error
                    $(".errorContainer").css({
                        display: "flex",
                    });
                    $(".every").css({
                        display: "none",
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
                $(".errorContainer").css({
                    display: "flex",
                });
            });
    } else {
        $(".every").css({
            display: "block",
        });
    }
});

$("#chiudi").click(function () {
    $(".thanksContainer").css({
        display: "none",
    });
});

$("#chiudiErrore").click(function () {
    $(".errorContainer").css({
        display: "none",
    });
});

$("#hamburger").click(function () {
    console.log("clicked!");
    $("#hamburgerShow").addClass("on");
    $("#hamburgerShow").removeClass("off");
});

$("#closeX").click(() => {
    $("#hamburgerShow").addClass("off");
    $("#hamburgerShow").removeClass("on");
});
