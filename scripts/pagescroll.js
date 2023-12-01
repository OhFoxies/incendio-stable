window.onscroll = function () {
    let navigation = document.getElementById('navbar');
    if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60 ) {
        navigation.style.opacity = '1'
    }
    else {
        navigation.style.opacity = '0.7'
    }
};