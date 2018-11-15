$(document).ready(function () {

    // menu mobile

    $('.header-trigger').click(function () {
        $('nav ul').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() > 500) {
            $('nav ul').removeAttr('style');
        }
    });

    // accorderon  main page show

    $(function ($) {
        var contents = $('.issues-content');
        var titles = $('.issues-title');
        titles.on('click', function () {
            var title = $(this);
            contents.filter(':visible').slideUp(function () {
                $(this).prev('.issues-title').removeClass('is-opened');
            });

            var content = title.next('.issues-content');

            if (!content.is(':visible')) {
                content.slideDown(function () {
                    title.addClass('is-opened')
                });
            }
        });
    });

    // all message

    $(function ($) {
        var contents = $('.tape-dialog-all-content');
        var titles = $('.tape-dialog-all');

        titles.on('click', function () {
            var title = $(this);

            contents.filter(':visible').slideUp(function () {
                $(this).siblings('.tape-dialog-all').removeClass('is-opened');
            });
            var content = title.siblings('.tape-dialog-all-content');
            if (!content.is(':visible')) {
                content.slideDown(function () {
                    title.addClass('is-opened')
                });
            }
        });
    });

    // carousel main page

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: false,
            nav: true,
            dots: true,
            // animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    });

    // open diary block

    $('.block-open-more').click(function (event) {
        event.preventDefault();

        var parent = $(this).parents('.diary-block');
        var parent_id = parent.data('id');

        parent.slideToggle(400);
        $('.diary-block-open[data-id=' + parent_id + ']').slideToggle(400);

    });

    $('.diary-block-close').click(function (event) {
        event.preventDefault();
        var parent = $(this).parents('.diary-block-open');
        var parent_id = parent.data('id');

        $(this).parents('.diary-block-open').slideToggle(400);
        $('.diary-block[data-id=' + parent_id + ']').slideToggle(400);
    });

    // slider diary

    $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 250,
        vThumbWidth: 70,
        thumbItem: 4,
        thumbMargin: 0,
        slideMargin: 0,
    });


    // add img

    $("#files, #file, #filess, #css-add-img").change(function () {
        filename = this.files[0].name;
        // console.log(filename);
    });

    $('input[type=file]').change(function () {
        files = this.files;
        $('.tape-add-img-name').append(files[0].name);
    });

    // select2

    $('.js-example-basic-single').select2();

    // star rate script

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });

    //  admin menu

    $(".admin-menu-on").hide();

    $(".admin-menu-off").click(
        function () {
            $(".admin-menu-on").slideToggle('fast');
        },
        function () {
            $(".admin-menu-on").slideToggle('fast');
        }
    );


    // relativeanchor

    $('a[rel="relativeanchor"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 20
        }, 1000);
        return false;
    });


    // career modal
    $('.career-table-btn').click(function () {
        $('.career-modal').fadeIn(500);
    });

    $('.career-card-close').click(function () {
        $('.career-modal').fadeOut(400);
    });





    $('.career-add').click(function () {
        $('.career-modal-reg').fadeIn(500);
    });

    $('.career-card-close').click(function () {
        $('.career-modal-reg').fadeOut(400);
    });

    $('.complaint').click(function () {
        $('.complaint-modal').fadeIn(500);
    });

    $('.complaint-close').click(function () {
        $('.complaint-modal').fadeOut(400);
    });

    $('.rate-place').click(function () {
        $('.rate-place-modal').fadeIn(500);
    });

    $('.rate-place-close').click(function () {
        $('.rate-place-modal').fadeOut(400);
    });


    // go top auto

    $(function () {
        $.fn.scrollToTop = function () {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
            var scrollDiv = $(this);
            $(window).scroll(function () {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function () {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });

    $(function () {
        $("#go-top").scrollToTop();
    });

    // css-mentor view all

    $(function ($) {
        var contents = $('.css-card-content');
        var titles = $('.css-card-all');

        titles.on('click', function () {
            var title = $(this);

            contents.filter(':visible').slideUp(function () {
                $(this).siblings('.css-card-all').removeClass('is-opened');
            });

            var content = title.siblings('.css-card-content');

            if (!content.is(':visible')) {
                content.slideDown(function () {
                    title.addClass('is-opened')
                });
            }
        });
    });


    $(function ($) {
        var contents = $('.css-card-subtitle-content');
        var titles = $('.css-card-subtitle-all');

        titles.on('click', function () {
            var title = $(this);

            contents.filter(':visible').slideUp(function () {
                $(this).siblings('.css-card-subtitle-all').removeClass('is-opened');
            });

            var content = title.siblings('.css-card-subtitle-content');

            if (!content.is(':visible')) {
                content.slideDown(function () {
                    title.addClass('is-opened')
                });
            }
        });
    });

    // sort mentor click

    $('.sort-mentor').click(function () { // при клике на рисунок
        if ($(this).find('img').attr('src') == 'img/a-b.svg') { // если в этом элименте мы находим картику с путем катороый равняется аб
            $(this).find('img').attr('src', 'img/b-a.svg'); // то это меняем картинку на ба
        } else {
            $(this).find('img').attr('src', 'img/a-b.svg'); // иначе возвращяем обратно
        }
    });

    // sort mentor click phone and change

    // $('.mentor-phone-img').click(function () {
    //     if ($(this).find('img').attr('src') == 'img/blue-tel.svg') {
    //         $(this).find('img').attr('src', 'img/green-tel.svg');
    //         $(this).siblings('.mentor-title').toggle();
    //         $(this).siblings('.mentor-phone').toggle();
    //     } else {
    //         $(this).find('img').attr('src', 'img/blue-tel.svg');
    //         $(this).siblings('.mentor-title').toggle();
    //         $(this).siblings('.mentor-phone').toggle();
    //     }
    // });


    // $('.mentor-title').click(function () {
    //     $('.css-card').slideToggle(500);
    // });


    // sort css-social click

    $('.css-sort-mentor').click(function () { // при клике на рисунок
        if ($(this).find('img').attr('src') == 'img/a-b.svg') { // если в этом элименте мы находим картику с путем катороый равняется аб
            $(this).find('img').attr('src', 'img/b-a.svg'); // то это меняем картинку на ба
        } else {
            $(this).find('img').attr('src', 'img/a-b.svg'); // иначе возвращяем обратно
        }
    });


    // sort css-social click phone and change

    $('.css-block-img').click(function () {
        if ($(this).find('img').attr('src') == 'img/blue-tel.svg') {
            $(this).find('img').attr('src', 'img/green-tel.svg');
            $(this).siblings('.css-block-title').toggle();
            $(this).siblings('.css-block-phone').toggle();
        } else {
            $(this).find('img').attr('src', 'img/blue-tel.svg');
            $(this).siblings('.css-block-title').toggle();
            $(this).siblings('.css-block-phone').toggle();
        }
    });


    //  add social card org


    $('.css-social-add').click(function () {
        $('.css-slip').fadeIn(500);
    });

    $('.css-slip-close').click(function () {
        $('.css-slip').fadeOut(400);
    });


    // sort css-org click

    $('.css-org-sort-mentor').click(function () { // при клике на рисунок
        if ($(this).find('img').attr('src') == 'img/a-b.svg') { // если в этом элименте мы находим картику с путем катороый равняется аб
            $(this).find('img').attr('src', 'img/b-a.svg'); // то это меняем картинку на ба
        } else {
            $(this).find('img').attr('src', 'img/a-b.svg'); // иначе возвращяем обратно
        }
    });

    $('.css-org-sort-child').click(function () { // при клике на рисунок
        if ($(this).find('img').attr('src') == 'img/a-b.svg') { // если в этом элименте мы находим картику с путем катороый равняется аб
            $(this).find('img').attr('src', 'img/b-a.svg'); // то это меняем картинку на ба
        } else {
            $(this).find('img').attr('src', 'img/a-b.svg'); // иначе возвращяем обратно
        }
    });


    // sort css-org click phone and change

    $('.css-block-sort-img').click(function () {
        if ($(this).find('img').attr('src') == 'img/blue-tel.svg') {
            $(this).find('img').attr('src', 'img/green-tel.svg');
            $(this).siblings('.css-block-mentor-link').toggle();
            $(this).siblings('.css-block-mentors-phone').toggle();
        } else {
            $(this).find('img').attr('src', 'img/blue-tel.svg');
            $(this).siblings('.css-block-mentor-link').toggle();
            $(this).siblings('.css-block-mentors-phone').toggle();
        }
    });


    $('.css-block-title').click(function () {
        $('.css-big-card').slideToggle(500);
    });

    // open diary block team

    $('.team-diary-more').click(function (event) {
        event.preventDefault();

        var parent = $(this).parents('.team-diary');
        var parent_id = parent.data('id');

        parent.slideToggle(400);
        $('.team-diary-content[data-id=' + parent_id + ']').slideToggle(400);

    });

    $('.team-diary-close').click(function (event) {
        event.preventDefault();
        var parent = $(this).parents('.team-diary-content');
        var parent_id = parent.data('id');

        $(this).parents('.team-diary-content').slideToggle(400);
        $('.team-diary[data-id=' + parent_id + ']').slideToggle(400);
    });


    // open modal mentor social

    $('.css-block-mentor-link').click(function () {
        $('.social-modal').fadeIn(500);
    });

    $('.social-card-close').click(function () {
        $('.social-modal').fadeOut(400);
    });

    // open modal mentor
    $('.css-mentor-add').click(function () {
        $('.social-modal').fadeIn(500);
    });

    $('.social-card-close').click(function () {
        $('.social-modal').fadeOut(400);
    });

});



