$(function () {
  //visual
  var maVisual = new Swiper(".ma_visual .swiper-container", {
    effect: "fade",
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".ma_visual .swiper-pagination",
    },
    navigation: {
      nextEl: ".ma_visual .swiper-button-next",
      prevEl: ".ma_visual .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        $(".ma_visual .swiper-slide").attr("aria-hidden", true);
        $(".ma_visual .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr(
          "tabindex",
          "-1"
        );
        $(
          ".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn"
        ).attr("tabindex", "0");

        //자동play 켜고닫기
        $(".ma_visual .swiper_ctrl .btn_stop_play").click(function () {
          if ($(this).hasClass("stop")) {
            maVisual.autoplay.start();
          } else {
            maVisual.autoplay.stop();
          }
        });
      },
      slideChangeTransitionStart: function () {
        $(".ma_visual .swiper-slide").attr("aria-hidden", true);
        $(".ma_visual .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr(
          "tabindex",
          "-1"
        );
        $(
          ".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn"
        ).attr("tabindex", "0");
      },
      autoplayStart: function () {
        $(".ma_visual .swiper_ctrl .btn_stop_play").removeClass("stop");
      },
      autoplayStop: function () {
        $(".ma_visual .swiper_ctrl .btn_stop_play").addClass("stop");
      },
    },
  });

  //main news tab
  var $newsTabLink = $(".ma_news_tab a");
  $newsTabLink.on("click focus", function (e) {
    e.preventDefault();
    $(this).parents(".ma_news_tab").find("> li").removeClass("active");
    $(this).parents(".ma_news_tab > li").addClass("active");
  });

  //main committee tab
  var $newsTabLink = $(".ma_committee_tab a");
  $newsTabLink.on("click focus", function (e) {
    e.preventDefault();
    $(this).parents(".ma_committee_tab").find("> li").removeClass("active");
    $(this).parents(".ma_committee_tab > li").addClass("active");
  });

  //main space tab
  var $spaceTabLink = $(".ma_space_tab a");
  $spaceTabLink.on("click focus", function (e) {
    e.preventDefault();
    $(this).parents(".ma_space_tab").find("> li").removeClass("active");
    $(this).parents(".ma_space_tab > li").addClass("active");
  });
});
