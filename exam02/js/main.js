/**
 * Created by fimax76 on 08.04.2017.
 */
;(function ($) {
    $(document).ready(function () {

        var isotopeContainer = $('.isotope-cont');


        isotopeContainer.isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'masonry'
        });


        $('.our-team__slider-cont').slick({
            autoplaySpeed: 10000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });


        $('.testimonials__slider-cont').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });


        var map,
            point = {lat: 48.762900, lng: 37.587507};
        var iv1Content = document.querySelector('.info-window-1');


        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17,
                disableDefaultUI: true
            });
            var image = {
                url: 'img/twitter.svg'
            };
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: image
            });

            var infowindow = new google.maps.InfoWindow({
                content: iv1Content
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
                iv1Content1.style.opacity = 0;
            });

        }

        initMap();


        // filter buttons
        $('#filters span').click(function () {
            var $this = $(this);
            // don't proceed if already selected
            if (!$this.hasClass('is-checked')) {
                $this.parents('#options').find('.is-checked').removeClass('is-checked');
                $this.addClass('is-checked');
            }
            var selector = $this.attr('data-filter');
            isotopeContainer.isotope({
                itemSelector: '.isotope-item',
                filter: selector
            });
            return false;
        });


        $(".fm-scroll").click(function () {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            }, 1500);
        });

        $(".menu__list-portfolio").click(function () {
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
            }, 1500);
        });

        $(".menu__list-team").click(function () {
            $('html, body').animate({
                scrollTop: $("#the-team").offset().top
            }, 1500);
        });

        $(".menu__list-contact").click(function () {
            $('html, body').animate({
                scrollTop: $("#contact-us").offset().top
            }, 1500);
        });

        $(".team-cta__button").click(function () {
            $('html, body').animate({
                scrollTop: $("#contact-us").offset().top
            }, 1500);
        });


    });
})(jQuery);
