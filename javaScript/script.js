$(document).ready(function () {
    let button = $('.view');

    button.on('mouseenter', function () {
        $(this).closest('.project-wrapper')
            .find('.view-full-project')
            .stop(true).slideDown(500);
    });

    button.on('click', function (e) {
        e.preventDefault();
        $(this).closest('.project-wrapper')
            .find('.vfp-content')
            .stop(true).slideDown(700).css('display', 'flex');
    });

    $('.project-wrapper').on('mouseleave', function () {
        let thisHeight = $(this).find('.vfp-content').height();
        $(this).find('.view-full-project')
            .stop(true).slideUp(700);
        $(this).find('.vfp-content')
            .stop(true).slideUp(700);
        if ($(this).find('.vfp-content').is(':visible')) {
            $('html,body').animate({
                scrollTop: $(window).scrollTop() - thisHeight
            }, 700);
        }

    });


    /*---img---*/


    let image = $('.future-img');

    image.on('mouseenter mouseleave', function (e) {
        let windowWidth = $(window).width();

        if (e.type === 'mouseenter') {
            if (windowWidth > 600) {
                $(this).closest('.future').find('.future-text')
                    .width('28%');
                $(this).width('63%');
            } else {
                $(this).width('80%');
            }
        }

        if (e.type === 'mouseleave') {
            if (windowWidth > 600) {
                $(this).closest('.future').find('.future-text')
                    .width('40%');
                $(this).width('40%');
            } else {
                $(this).width('40%');
            }
        }
    });


    /*---smooth scroll---*/
    let goTo = $('.menu a, .links .red-button, .roll-nav-menu a');
    goTo.on('click', function (e) {
        const href = $(this).attr('href');

        // Ak je href hash (napr. #contact), použijeme smooth scroll
        if (href.startsWith("#")) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 1200);

            window.location.hash = href;
        }
        // Inak (napr. GitHub link) to necháme normálne prejsť
    });

    /*---go up button---*/
    let toTop = $('<a>', {
        href: '#home',
        class: 'roll-up',
        html: '⮝',
    });
    toTop.hide().appendTo('body').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1200);
    });

    let win = $(window);
    win.on('scroll', function () {
        if (win.scrollTop() >= 1500) toTop.fadeIn(500);
        else toTop.fadeOut(500);

    });

    /*---media-menu---*/
    $('.menu-toggle').on('click', function () {
        $('.roll-nav-menu').slideToggle();
    });
    $('.roll-nav-menu a').on('click', function (e) {
        $(this).closest('.roll-nav-menu').slideUp();
    })



    /*---mail---*/
    document.getElementById("contact").addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_9x52gg4", "template_g1f765j", this)
            .then(function () {
                alert("Správa bola úspešne odoslaná ✅");
            }, function (error) {
                alert("Chyba pri odosielaní 😕: " + JSON.stringify(error));
            });
    });


});