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
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);

        window.location.hash = this.hash;
    })

    /*---go up button---*/
    let toTop = $('<a>', {
        href: '#home',
        class: 'roll-up',
        html: '⏶',
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