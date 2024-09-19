// Navbar disappear and reappear on scroll 
var lastScrollTop = 0;
    navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top = "-100px";
    }
    else{
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop
})

// Text Change 

const text = document.querySelector('.second-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "DHARE"
    }, 0);
    setTimeout(() => {
        text.textContent = "GAMING"
    }, 2500);
}
textLoad();
setInterval(textLoad, 5000);

// Carousel

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.classList.remove('gallery-item-6');
            el.classList.remove('gallery-item-7');
        });

        this.carouselArray.slice(0, 7).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className.includes('gallery-controls-previous')) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();


// YOU ARE THE TOP FRAGGER OF MY HEART!
gsap.to(".banner h1", {
    x: "-40%",  
    ease: "none",  
    scrollTrigger: {
        trigger: ".banner",
        start: "top 0%",  
        end: "top -500%",
        scrub: 1,  
        pin: true,
        onUpdate: function(self) {
            if (self.progress === 1) {
                gsap.to(".banner h1", {
                    x: "-40%",
                    ease: "power1.out",
                    duration: 0.5
                });
            }
        }
    }
});


// Locomotive JS
const scroll = new LocomotiveScroll({
    el: document.querySelector('[.cover_main]'),
    smooth: true
});