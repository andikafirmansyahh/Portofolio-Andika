// ===============================
// TEXT SWITCH SMOOTH
// ===============================
const textElement = document.querySelector(".hero-left h2");

const texts = [
    "Mahasiswa Informatika",
    "Web Developer",
    "UI/UX Enthusiast"
];

let currentIndex = 0;

function changeText() {
    textElement.style.opacity = "0";

    setTimeout(() => {
        textElement.textContent = texts[currentIndex];
        textElement.style.opacity = "1";
        currentIndex = (currentIndex + 1) % texts.length;
    }, 300);
}

changeText();
setInterval(changeText, 2500);

// ===============================
// ANIMASI SAAT SCROLL
// ===============================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});


// ===============================
// NAVBAR ACTIVE LINK
// ===============================
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
