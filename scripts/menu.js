function incendio_menu() {
    const menu1 = document.getElementById('menu')
    const burger = document.getElementById('burger')
    const darker = document.getElementById('darker')
    if (CSS.supports('height', '100dvh')) {
        document.getElementById('menu').style.height = 'calc(100dvh - 120px)';
    }
    else {
        document.getElementById('menu').style.height = 'calc(100vh - 120px)';
    }
    darker.classList.toggle('helper-darker')
    menu1.classList.toggle('show-menu')
    document.body.classList.toggle("lock")
    burger.classList.toggle('open')

}


const mediaQuery = window.matchMedia('(max-width: 1200px)');
function handleTabletChange(e) {
    if (e.matches) {
        if (CSS.supports('height', '100dvh')) {
            document.getElementById('menu').style.height = 'calc(100dvh - 120px)';
        }
        else {
            document.getElementById('menu').style.height = 'calc(100vh - 120px)';
        }
    }
}

let btn = $('#button-up');

$(window).scroll(function() {
    if ($(window).scrollTop() > 120) {
        btn.addClass('showbtn');
    } else {
        btn.removeClass('showbtn');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);