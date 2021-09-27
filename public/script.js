const overlay = document.getElementById("overlay");

// Overlay disappear

const disappear = () => {
  if (!document.referrer) {
    setTimeout(() => {
      overlay.classList.add("stopOverlay");
    }, 3000);
    setTimeout(() => {
      overlay.classList.add("destroy");
    }, 3100);
  } else {
    setTimeout(() => {
      overlay.classList.add("destroy");
    }, 10);
  }
};

disappear();

// Header system

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

//Gray line system

$("#ord").hover(function () {
  $("#riga").css({
    justifyContent: "flex-start",
  });
});

$("#manu").hover(function () {
  $("#riga").css({
    justifyContent: "center",
  });
});

$("#rec").hover(function () {
  $("#riga").css({
    justifyContent: "flex-end",
  });
});

$("#carroConta").click(function () {
  window.location.href = "services.html";
});

// Go Up system

$(".circle").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

// Hamburger System

$("#hamburger").click(function () {
  $("#hamburgerShow").addClass("on");
  $("#hamburgerShow").removeClass("off");
});

$("#closeX").click(() => {
  $("#hamburgerShow").addClass("off");
  $("#hamburgerShow").removeClass("on");
});
