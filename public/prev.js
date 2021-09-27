let inviaPrev = document.getElementById("inviaPrev");
let annullaPrev = document.getElementById("annullaPrev");
let accettoPrev = document.getElementById("accettoPrev");
let nPrev = document.getElementById("namePrev");
let emPrev = document.getElementById("emailPrev");
let sPrev = document.getElementById("servizi");
let tPrev = document.getElementById("textPrev");

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

annullaPrev.addEventListener("click", () => {
  location.reload();
});

inviaPrev.addEventListener("click", (event) => {
  event.preventDefault();
  let fullName = nPrev.value;
  let email = emPrev.value;
  let oggetto = sPrev.value;
  let text = tPrev.value;

  let formFields = {
    fullName: fullName,
    email: email,
    text: text,
    oggetto: oggetto,
  };

  if (
    fullName != "" &&
    email != "" &&
    oggetto != "" &&
    text != "" &&
    accettoPrev.checked == true
  ) {
    axios
      .post("/preventivo", formFields)
      .then(function (response) {
        if (response.data.success) {
          // here thanks
          nPrev.value = " ";
          emPrev.value = " ";
          sPrev.value = " ";
          tPrev.value = " ";
          accettoPrev.checked = false;
          $("#thanksContainerPrev").css({
            display: "flex",
          });
          $(".every2").css({
            display: "none",
          });
        } else {
          // here error
          $("#errorContainerPrev").css({
            display: "flex",
          });
          $(".every2").css({
            display: "none",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        $("#errorContainerPrev").css({
          display: "flex",
        });
      });
  } else {
    $(".every2").css({
      display: "block",
    });
  }
});

$("#chiudiPrev").click(function () {
  $("#thanksContainerPrev").css({
    display: "none",
  });
});

$("#chiudiErrorePrev").click(function () {
  $("#errorContainerPrev").css({
    display: "none",
  });
});

$("#hamburger").click(function () {
  $("#hamburgerShow").addClass("on");
  $("#hamburgerShow").removeClass("off");
});

$("#closeX").click(() => {
  $("#hamburgerShow").addClass("off");
  $("#hamburgerShow").removeClass("on");
});
