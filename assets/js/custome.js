 jQuery(document).ready(function ($) {
     $('.counter').counterUp({
         delay: 10,
         time: 1000,

     });
     
     
     
     
     
    /*owl carousel*/

    $('.trade-feature-carousel').owlCarousel({
        animateOut: 'animate__fadeOutLeft',
        animateIn: 'animate__fadeInRight',
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,


            }
        }
    });

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
 });
