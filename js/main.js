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
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return '<span class="current">0' + current + "</span>" + '<span class="slash">/</span>' + '<span class="total">0' + total + "</span>";
      },
    },
    navigation: {
      nextEl: ".ma_visual .swiper-button-next",
      prevEl: ".ma_visual .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        $(".ma_visual .swiper-slide").attr("aria-hidden", true);
        $(".ma_visual .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn").attr("tabindex", "0");

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
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn").attr("tabindex", "0");
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

  //main gallery bnzone
  var maGallery = new Swiper(".ma_gallery .swiper-container", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".ma_gallery .swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return '<span class="current">' + current + "</span>" + '<span class="slash">/</span>' + '<span class="total">' + total + "</span>";
      },
    },
    navigation: {
      nextEl: ".ma_gallery .swiper-button-next",
      prevEl: ".ma_gallery .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        $(".ma_gallery .swiper-slide").attr("aria-hidden", true);
        $(".ma_gallery .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_gallery .swiper-slide a, .ma_gallery .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_gallery .swiper-slide-active a, .ma_gallery .swiper-slide-active .btn").attr("tabindex", "0");

        //자동play 켜고닫기
        $(".ma_gallery .swiper_ctrl .btn_stop_play").click(function () {
          if ($(this).hasClass("stop")) {
            maGallery.autoplay.start();
          } else {
            maGallery.autoplay.stop();
          }
        });
      },
      slideChangeTransitionStart: function () {
        $(".ma_gallery .swiper-slide").attr("aria-hidden", true);
        $(".ma_gallery .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_gallery .swiper-slide a, .ma_gallery .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_gallery .swiper-slide-active a, .ma_gallery .swiper-slide-active .btn").attr("tabindex", "0");
      },
      autoplayStart: function () {
        $(".ma_gallery .swiper_ctrl .btn_stop_play").removeClass("stop");
      },
      autoplayStop: function () {
        $(".ma_gallery .swiper_ctrl .btn_stop_play").addClass("stop");
      },
    },
  });

  var maBnZone = new Swiper(".ma_bnzone .swiper-container", {
    spaceBetween : 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".ma_bnzone .swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return '<span class="current">' + current + "</span>" + '<span class="slash">/</span>' + '<span class="total">' + total + "</span>";
      },
    },
    navigation: {
      nextEl: ".ma_bnzone .swiper-button-next",
      prevEl: ".ma_bnzone .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        $(".ma_bnzone .swiper-slide").attr("aria-hidden", true);
        $(".ma_bnzone .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_bnzone .swiper-slide a, .ma_bnzone .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_bnzone .swiper-slide-active a, .ma_bnzone .swiper-slide-active .btn").attr("tabindex", "0");

        //자동play 켜고닫기
        $(".ma_bnzone .swiper_ctrl .btn_stop_play").click(function () {
          if ($(this).hasClass("stop")) {
            maBnZone.autoplay.start();
          } else {
            maBnZone.autoplay.stop();
          }
        });
      },
      slideChangeTransitionStart: function () {
        $(".ma_bnzone .swiper-slide").attr("aria-hidden", true);
        $(".ma_bnzone .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_bnzone .swiper-slide a, .ma_bnzone .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_bnzone .swiper-slide-active a, .ma_bnzone .swiper-slide-active .btn").attr("tabindex", "0");
      },
      autoplayStart: function () {
        $(".ma_bnzone .swiper_ctrl .btn_stop_play").removeClass("stop");
      },
      autoplayStop: function () {
        $(".ma_bnzone .swiper_ctrl .btn_stop_play").addClass("stop");
      },
    },
  });

});
