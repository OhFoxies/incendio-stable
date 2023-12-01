function scrolldown() {
    const news = document.getElementById('news')
    news.scrollIntoView({behavior: "smooth", block: "start"});
}
const delay = ms => new Promise(res => setTimeout(res, ms));
const contact = async () => {
    const burger = document.getElementById('burger')
    const darker = document.getElementById('darker')
    let menu = document.getElementById('menu')
    if (menu.classList.contains('show-menu')) {
        menu.classList.toggle('show-menu')
        darker.classList.toggle('helper-darker')
        document.body.classList.toggle("lock")
        burger.classList.toggle('open')
    }
    document.getElementById('contact2').scrollIntoView({ behavior: "smooth", block: "nearest"})
    await delay(200);
    document.getElementById("contact1").classList.toggle('bigger');
    document.getElementById("contact2").classList.toggle('bigger');
    document.getElementById("contact3").classList.toggle('bigger');
    await delay(2050);
    document.getElementById("contact1").classList.toggle('bigger');
    document.getElementById("contact2").classList.toggle('bigger');
    document.getElementById("contact3").classList.toggle('bigger');
}

const contact_other = async () => {
    document.getElementById('contact3').scrollIntoView({ behavior: 'smooth', block: 'center'})
    await delay(200);
    document.getElementById("contact3").classList.toggle('bigger');
    await delay(2050);
    document.getElementById("contact3").classList.toggle('bigger');
}