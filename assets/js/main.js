$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    responsiveClass: true,
    margin:20,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1200: {
            items: 2,
            nav: false
        }
    }
})