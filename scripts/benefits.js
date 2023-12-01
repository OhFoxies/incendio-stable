const splide = new Splide("#splide_benefits", {
    // Optional parameters
    type: 'loop',
    perPage: 3,
    focus: 0,
    perMove: 1,
    gap: 35,
    arrows: true,
    pagination: true,
    flickMaxPages: 1,
    throttle: 300,

    // Responsive breakpoint
    breakpoints: {
        1200: {
            arrows: true,
            perPage: 2,
            gap: 50,
        },
        820: {
            arrows: false,
            perPage: 1,
            gap: 500,
        }
    }
});

splide.mount();