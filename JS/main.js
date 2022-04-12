const sections = document.querySelectorAll('section');
const a = document.querySelectorAll('.container nav ul li a');
const progress = document.querySelector('.progress-bar');
const welcomer = document.getElementById('welcomer-holder')
const textHolder = document.querySelector('.title-holder')
let current;

// Window load
window.onload = function(e){
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
}

// Texts
const mainTextHolder = document.querySelector('.text-holder') 
const aboutUsHolder = document.querySelector('.aboutus-text') 
const roadMapHolder = document.querySelector('.roadmap-text') 
const shopHolder = document.querySelector('.shop-text')

// Bubbles
const aboutUsBubble = document.querySelector('#aboutus-bubble') 
const roadMapBubble = document.querySelector('#roadmap-bubble')
const shopBubble = document.querySelector('#shop-bubble') 

// Click Event // Bubbles
aboutUsBubble.addEventListener('click', function(e){
    aboutUsBubble.classList.remove('active')
    setTimeout((e) => {
        roadMapBubble.classList.remove('active')
    }, 120);
})

roadMapBubble.addEventListener('click', function(e){
    setTimeout((e) => {
        aboutUsBubble.classList.add('active')
    }, 120);
    roadMapBubble.classList.add('active')
})

shopBubble.addEventListener('click', function(){
    aboutUsBubble.classList.add('active')
    roadMapBubble.classList.add('active')
})


// Window scroll
window.addEventListener('scroll', ()=>{
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop - sectionHeight / 3)
        {
            current = section.getAttribute('id')
        }
    })
    
    a.forEach(item =>{
        item.classList.remove('active');
        if(item.classList.contains(current))
        {
            item.classList.add('active');
        }
    })

    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = winScroll/height * 100; // You can change this!
    progress.style.width = `${scrolled}%` 

})