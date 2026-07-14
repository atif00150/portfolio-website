
// MOBILE MENU


const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

// Close menu after clicking any link

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


// TYPEWRITER EFFECT


const words = [

    "Frontend Developer",

    "JavaScript Developer",

    "Web Designer",

    "Video Editor",

    "Software Engineering Student"

];

const typingText = document.querySelector(".typing");

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// STICKY NAVBAR EFFECT


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.padding = "14px 35px";

        navbar.style.background = "rgba(0,0,0,.75)";

        navbar.style.backdropFilter = "blur(20px)";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";

    } else {

        navbar.style.padding = "18px 35px";

        navbar.style.background = "rgba(255,255,255,.08)";

        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    }

});



// BUTTON RIPPLE EFFECT


const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");

        button.style.setProperty("--y", y + "px");

    });

});



// FLOATING IMAGE


const image = document.querySelector(".image-box");

let angle = 0;

function floatingImage() {

    angle += 0.01;

    image.style.transform =
        `translateY(${Math.sin(angle) * 10}px)`;

    requestAnimationFrame(floatingImage);

}

floatingImage();



// CONSOLE MESSAGE


console.log("%cPortfolio V2.0",
"color:#00ff99;font-size:24px;font-weight:bold");

console.log("%cDeveloped by Muhammad Atif",
"color:white;font-size:16px;");


// SCROLL TO TOP BUTTON


// Create Button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

// Show / Hide

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

// Scroll Top

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// SCROLL PROGRESS BAR


const progressBar = document.createElement("div");

progressBar.className = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


// ACTIVE NAVIGATION


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// REVEAL ELEMENTS

const revealElements = document.querySelectorAll(

".hero-content,.hero-image"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: .3

});

revealElements.forEach(el => observer.observe(el));



// SIMPLE PRELOADER


window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



// KEYBOARD SHORTCUT


document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        mobileMenu.classList.remove("active");

    }

});


// ============================================
// DISABLE RIGHT CLICK (OPTIONAL)
// ============================================

// Uncomment if needed

/*
document.addEventListener("contextmenu", e => {

    e.preventDefault();

});
*/


/*====================================
        THEME TOGGLE
====================================*/

const themeSwitch = document.getElementById("themeSwitch");

// Check saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

// Toggle Theme
themeSwitch.addEventListener("click", () => {

    document.body.classList.toggle("light");
    console.log(document.body.className);

    // Save Theme
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

});


// ============================================
// PERFORMANCE
// ============================================

console.log("Portfolio Loaded Successfully 🚀");ss

