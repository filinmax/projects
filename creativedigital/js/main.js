/**
 * Created by fimax76 on 08.04.2017.
 */
;(function ($) {
    $(document).ready(function () {




        // $('.our-team__slider-cont').slick({
        //     autoplaySpeed: 10000,
        //     dots: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false
        // });
        //
        //
        // $('.testimonials__slider-cont').slick({
        //     autoplay: true,
        //     autoplaySpeed: 4000,
        //     dots: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false
        // });


        var map,
            point = {lat: 48.762900, lng: 37.587507};
        // var iv1Content = document.querySelector('.info-window-1');


        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17,
                disableDefaultUI: true
            });
            var image = {
                url: 'img/marker1.png'

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
                // infowindow.open(map, marker);
                iv1Content1.style.opacity = 0;
            });

        }

        initMap();

    });
})(jQuery);
