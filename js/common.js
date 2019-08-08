
$(document).ready(function () {

    $('.burger_menu').on('click', function mobileMenu (){
        var burgerSpan = $('.burger_menu span:nth-child(2)').css('width');

        if (burgerSpan != "0px") {
            $('.burger_menu span:nth-child(2)').css('width', '0px');
            $('.burger_menu').css('justify-content', 'center');
            $('.burger_menu span:nth-child(1)').css('transform', 'rotate(45deg)');
            $('.burger_menu span:nth-child(3)').css('transform', 'rotate(-45deg)');
            //$('.burger_menu').css('height', 'none');
            $('.menu_header').addClass('mobile')
            setTimeout(function () {
                $('.menu_header').css('transition', 'all .5s')
                $('.menu_header').css('transform', 'translateX(0)')
            }, 100)
        } else {
            $('.menu_header').css('transform', 'translateX(100vw)')
            setTimeout(function () {
                $('.menu_header').removeClass('mobile')
            }, 500)
            $('.burger_menu :nth-child(2)').css('width', '100%');
            $('.burger_menu').css('justify-content', 'space-between');
            $('.burger_menu span:nth-child(1)').css('transform', '');
            $('.burger_menu span:nth-child(3)').css('transform', '');
            $('.burger_menu').css('height', '35px');
        }
    })

    $(".menu_header").on('click','a', function (event) {

        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
})