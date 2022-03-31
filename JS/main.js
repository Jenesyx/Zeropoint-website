const sections = document.querySelectorAll('section');
const a = document.querySelectorAll('.container nav ul li a');
const progress = document.querySelector('.progress-bar');
let current;

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