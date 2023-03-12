!(function ($) {
    "use strict";

    const text = document.querySelector(".text");
    window.addEventListener('scroll', showText);

    showText();

    function showText() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const textTop = text.getBoundingClientRect().top;
        if (textTop < triggerBottom) {
            text.classList.add("show");
        }
        else {
            text.classList.remove("show");
        }
    }

    const leftImg = document.querySelector(".left");
    window.addEventListener('scroll', showImg);

    showImg();

    function showImg() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const textTop = leftImg.getBoundingClientRect().top;
        if (textTop < triggerBottom) {
            leftImg.classList.add("show");
        }
        else {
            leftImg.classList.remove("show");
        }
    }

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            rtl: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            nav: true,
            navText: ["<i class='fal fa-long-arrow-right'></i>", "<i class='fal fa-long-arrow-left'></i>"],
            responsive: {
                300: {
                    items: 1
                },
                400: {
                    items: 2
                },
                900: {
                    items: 3,
                    margin: 0,
                },
                1200: {
                    items: 4,
                    margin: 10,
                }
            }
        });
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('nav').append($mobile_nav);
        $('nav').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fal fa-times');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('fal fa-times');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

})(jQuery);

