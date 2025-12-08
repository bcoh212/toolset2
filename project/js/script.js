// header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) { 
        header.classList.add('fixed');
    } else { 
        header.classList.remove('fixed');
    }
});

const menuLinks = document.querySelectorAll('nav ul li a');
const menuItems = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section[id],  div[id]');

function updateActive() {
    const scrollPos = window.scrollY + 90; 
    let currentIndex = 0;

    sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;

    if (scrollPos >= sectionTop) {
        currentIndex = index;
    }
});

menuItems.forEach(li => li.classList.remove('active'));
menuItems[currentIndex].classList.add('active');
}

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#','');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', updateActive);
window.addEventListener('load', updateActive);

// 제품의 재순환 효과
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".bottom-box-wrapper strong");

    const options = {
        threshold: 0.5 
    };

    const startCounter = (entry) => {
        const el = entry.target;
        const targetText = el.childNodes[0].nodeValue.trim();
        const target = parseInt(targetText.replace(/,/g, ""), 10); 
        let current = 0;
        const duration = 2200; 
        const stepTime = Math.max(Math.floor(duration / target), 20);

        const timer = setInterval(() => {
        current += Math.ceil(target / (duration / stepTime));
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.childNodes[0].nodeValue = current.toLocaleString(); 
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            startCounter(entry);
            obs.unobserve(entry.target); 
        }
        });
    }, options);

    counters.forEach((counter) => observer.observe(counter));
});



// news
const newsSwiper = new Swiper(".news.swiper", {
    slidesPerView: 1.2,   
    spaceBetween: 16,     
    pagination: {
        el: ".swiper-pagination.news-pg",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
        slidesPerView: 2.5,
        spaceBetween: 16,
        },
        1024: {
        slidesPerView: 3.2,
        spaceBetween: 18,
        },
        1440: {
        slidesPerView: 3,   
        spaceBetween: 20,    
        },
    },
});



// youtube
const youtubeSwiper = new Swiper(".youtube.swiper", {
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: true, 
    loop: true,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination.youtube-pg",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        768: {
            slidesPerView: 2,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        1024: {
            slidesPerView: 2.6,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        1440: {
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
    },
});