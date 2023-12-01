const splide_hotel = new Splide("#splide_hotel", {
    // Optional parameters
    type: 'loop',
    perPage: 1,
    focus: 0,
    perMove: 1,
    gap: 35,
    arrows: true,
    pagination: true,
    flickMaxPages: 1,
    throttle: 300,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,

    breakpoints: {
        820: {
            arrows: false,
        }
    }
});

splide_hotel.mount();