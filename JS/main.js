const sections = document.querySelectorAll('section');
const a = document.querySelectorAll('.container nav ul li a');
const progress = document.querySelector('.progress-bar');
let current;
let header  = document.querySelector('header')
let sticky = header.offsetHeight * 4.85


function onload(){
    var typed = new Typed('#typing', {
        strings:
            [
                "are Zeropoint", "make it", "fix it",
                "build it", "take it",
                "are your family"
            ],
        typeSpeed: 120,
        loop: true,
        startDelay: 2200,
        backSpeed: 60
    });
}

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > sticky)
    {
        header.classList.add('sticky');
    }

    else
    {
        header.classList.remove('sticky');
    }
    
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