const sections = document.querySelectorAll('section');
const a = document.querySelectorAll('.container nav ul li a');
const progress = document.querySelector('.progress-bar');
const welcomer = document.getElementById('welcomer-holder')
const textHolder = document.querySelector('.title-holder')
let current;

// Load Animation
// (function(){
//     const items = document.querySelectorAll('')

//     function IsElementInViewPort(el){
//         let rect = el.getBoundingClientRect()

//         return(
//             rect.top >= 0 &&
//             rect.right >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.left <= (window.innerWidth || document.documentElement.clientWidth) 
//         );
//     }
//     //!!!!!!!!!!! Most change this !!!!!!!!!!!//
//     function callBackFunction(){
//         for (let i = 0; i < items.length; i++) {
//             if(IsElementInViewPort(items[i])){
//                 items[i].classList.add('in-view')
//             }
//         }
//     }

//     window.addEventListener('scroll', callBackFunction)
//     window.addEventListener('load', callBackFunction)
    
// })()

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