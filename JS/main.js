const sections = document.querySelectorAll('section');
const a = document.querySelectorAll('.container nav ul li a');
const progress = document.querySelector('.progress-bar');
const welcomer = document.getElementById('welcomer-holder')
const textHolder = document.querySelector('.title-holder')
const items = document.querySelectorAll('.on-scroll')
const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('nav')
const overlay = document.querySelector('.nav-overlay')
const close = document.querySelector('.close')
let current;

// Window load
window.onload = function (e) {
    var typed = new Typed('#typing', {
        strings: 
            [
                "are ZeroPoint", "make it", "fix it",
                "build it", "take it",
                "are your family"
            ],
        typeSpeed: 120,
        loop: true,
        startDelay: 2200,
        backSpeed: 60
    });

    textHolder.classList.add('active')

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    function IsElementInViewPort(el){
        let rect = el.getBoundingClientRect()

        return(
            rect.top >= 0 &&
            rect.right >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) 
        );
    }

    function callBackFunction(){
        for (let i = 0; i < items.length; i++) {
            if(IsElementInViewPort(items[i])){
                items[i].classList.add('in-view')
            }
        }
    }

    window.addEventListener('scroll', callBackFunction)
    window.addEventListener('load', callBackFunction)
}


// Texts
const aboutUsHolder = document.querySelector('.aboutus-text')
const roadMapHolder = document.querySelector('.roadmap-text')
const shopHolder = document.querySelector('.shop-text')

// Bubbles
const aboutUsBubble = document.querySelector('#aboutus-bubble')
const roadMapBubble = document.querySelector('#roadmap-bubble')
const shopBubble = document.querySelector('#shop-bubble')

// Click Event // Bubbles
aboutUsBubble.addEventListener('click', function (e) {
    aboutUsBubble.classList.remove('active')
    aboutUsHolder.classList.remove('active')
    setTimeout((e) => {
        roadMapHolder.classList.remove('active')
        shopHolder.classList.remove('active')
        roadMapBubble.classList.remove('active')
        shopBubble.classList.remove('active')
    }, 120);
})

roadMapBubble.addEventListener('click', function (e) {
    roadMapBubble.classList.add('active')
    roadMapHolder.classList.add('active')
    setTimeout((e) => {
        aboutUsHolder.classList.add('active')
        aboutUsBubble.classList.add('active')
        shopBubble.classList.remove('active')
        shopHolder.classList.remove('active')
    }, 120);
})

shopBubble.addEventListener('click', function (e) {
    shopBubble.classList.add('active')
    shopHolder.classList.add('active')
    setTimeout((e) => {
        aboutUsHolder.classList.add('active')
        aboutUsBubble.classList.add('active')
        roadMapBubble.classList.remove('active')
        roadMapHolder.classList.remove('active')
    }, 120);
})


// Window scroll
window.addEventListener('scroll', () => {

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id')
        }
    })

    a.forEach(item => {
        item.classList.remove('active');
        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    })

    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = winScroll / height * 100; // You can change this!
    progress.style.width = `${scrolled}%`;


})

navToggle.addEventListener('click', function(){
    navShow()
})

close.addEventListener('click', function(){
    navHide()
})

overlay.addEventListener('click', function(){
    navHide()
})

function navShow(){
    overlay.style.transition = "all 0.5s ease"
    overlay.classList.add('show')
    nav.style.transition = "all 0.3s ease 0.5s"
    nav.classList.add('open')
}
function navHide(){
    nav.style.transition = "all 0.3s ease"
    overlay.style.transition = "all 0.3s ease 0.5s"
    overlay.classList.remove('show')
    nav.classList.remove('open')
}