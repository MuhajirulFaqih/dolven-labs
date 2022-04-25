var owlSlider = $('#owl-collections');
owlSlider.owlCarousel({
    navigation: true,
    nav: true,
    dots: false,
    dotsEach: 1,
    autoWidth: false,
    loop: true,
    navText : [ '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.70501 1.41L6.29501 0L0.295013 6L6.29501 12L7.70501 10.59L3.12501 6L7.70501 1.41Z" fill="#737070"/> </svg> ', '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.295002 1.41L1.705 0L7.705 6L1.705 12L0.295002 10.59L4.875 6L0.295002 1.41Z" fill="#737070"/> </svg> '],
    center: true,
    responsiveClass: true,
    margin: 10,
    items: 3,
    smartSpeed: 300,
    animateIn: 'ease-in-out',
    animateOut: 'ease-in-out',
    responsive: {
        480: {
            items: 3,
        },
        992: {
            items: 5
        }
    }
});
