// carousel effect for my project
const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 1,
    perView: 3,
    focusAt: 'center',
    breakpoints: {
        1200: {
            perView: 2
        },
        800: {
            perView: 1
        }
    }
});

document.querySelector('.glide__arrowleft').addEventListener('click', function() {
    const glideContainer = document.querySelector('.glide');
    glideContainer.classList.add('no-transition');
    setTimeout(() => {
        glideContainer.classList.remove('no-transition');
    }, 300); // Match the duration with the transition duration
});

glide.on('move.after', () => {
    const slides = document.querySelectorAll('.glide__slide');
    const activeIndex = glide.index % slides.length;
    slides.forEach((slide, index) => {
        if (index === activeIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
});

glide.mount();

// for elipsis
document.addEventListener('DOMContentLoaded', () => {
    const ellipsisIcon = document.querySelector('.ellipsis-icon');
    const container = document.querySelector('.container');

    ellipsisIcon.addEventListener('click', () => {
        container.classList.toggle('reveal');
    });
});


// for side bar 
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    const body = document.body;
    navLinks.classList.toggle('show-nav');
    body.classList.toggle('show-nav');
}

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside && navLinks.classList.contains('show-nav')) {
        toggleNav();
    }
});


// swiping right effect for my educ and skills 
document.getElementById('education-link').addEventListener('click', function(event) {
    event.preventDefault();
    const educationSection = document.getElementById('education-details');
    const experienceSection = document.getElementById('experience-details');

    educationSection.classList.add('swipeRight');
    educationSection.classList.add('visible');

    experienceSection.classList.remove('swipeRight');
});

document.getElementById('experience-link').addEventListener('click', function(event) {
    event.preventDefault();
    const educationSection = document.getElementById('education-details');
    const experienceSection = document.getElementById('experience-details');

    experienceSection.classList.add('swipeRight');
    experienceSection.classList.add('visible');
    educationSection.classList.remove('swipeRight');
});


// Ensure the initial active class is set correctly
document.querySelectorAll('.glide__slide').forEach((slide, index) => {
    if (index === glide.index % glide.length) {
        slide.classList.add('active');
    } else {
        slide.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const educationLink = document.getElementById("education-link");
    const experienceLink = document.getElementById("experience-link");
    const educationSection = document.getElementById("education-details");
    const experienceSection = document.getElementById("experience-details");

    educationLink.addEventListener("click", function(event) {
        event.preventDefault();
        educationSection.style.display = 'block';
        experienceSection.style.display = 'none';
        educationLink.classList.add('active-link');
        experienceLink.classList.remove('active-link');
    });

    experienceLink.addEventListener("click", function(event) {
        event.preventDefault();
        educationSection.style.display = 'none';
        experienceSection.style.display = 'block';
        educationLink.classList.remove('active-link');
        experienceLink.classList.add('active-link');
    });
});

//Typing effect for my name
document.addEventListener("DOMContentLoaded", function() {
    const educationLink = document.getElementById("education-link");
    const experienceLink = document.getElementById("experience-link");
    const educationSection = document.getElementById("education-details");
    const experienceSection = document.getElementById("experience-details");

    educationLink.addEventListener("click", function(event) {
        event.preventDefault();
        educationSection.style.display = 'block';
        experienceSection.style.display = 'none';
        educationLink.classList.add('active-link');
        experienceLink.classList.remove('active-link');
    });

    experienceLink.addEventListener("click", function(event) {
        event.preventDefault();
        educationSection.style.display = 'none';
        experienceSection.style.display = 'block';
        educationLink.classList.remove('active-link');
        experienceLink.classList.add('active-link');
    });

    // Typing effect for "Nicole Patrice Torrero" and "web buddy" in a loop
    const names = ["Nicole Patrice Torrero", "Web Developer"];
    const typedNameElement = document.getElementById("typed-name");
    let nameIndex = 0; 
    let charIndex = 0; 

    function typeText() {
        let currentName = names[nameIndex];
        if (charIndex < currentName.length) {
            typedNameElement.textContent += currentName.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        let currentName = names[nameIndex];
        if (charIndex > 0) {
            typedNameElement.textContent = currentName.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            nameIndex = (nameIndex + 1) % names.length;
            setTimeout(typeText, 500); 
        }
    }
    setTimeout(typeText, 1200);
});


// to swipe left my picture and text within my homapge
document.addEventListener("DOMContentLoaded", function() {
    const picElement = document.querySelector(".pic");
    picElement.classList.add("animated");

    const textElement = document.querySelector(".h1-text");
    textElement.classList.add("animated");
});


let currentSlide = 1; 

function showSlide() {
    document.getElementById('project1').classList.remove('active');
    document.getElementById('project2').classList.remove('active');
    document.getElementById('project3').classList.remove('active');

    if (currentSlide === 1) {
        document.getElementById('project1').classList.add('active');
    } else if (currentSlide === 2) {
        document.getElementById('project2').classList.add('active');
    } else if (currentSlide === 3) {
        document.getElementById('project3').classList.add('active');
    }
}

function nextSlide() {
    currentSlide++;
    if (currentSlide > 3) {
        currentSlide = 1; 
    }
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = 3; 
    }
    showSlide();
}
showSlide();