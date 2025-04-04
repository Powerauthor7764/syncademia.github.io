document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded");

    // Smooth scrolling for all navigation links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Particle Background Effect
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            size: { value: 3 },
            move: { speed: 1.5, direction: "none", random: true, out_mode: "out" },
            line_linked: { enable: true, opacity: 0.5 },
        },
        interactivity: {
            events: { onclick: { enable: true, mode: "push" }, resize: true },
            modes: { push: { particles_nb: 3 } }
        }
    });

    // Reveal sections on scroll
    const sections = document.querySelectorAll(".content");
    const revealOnScroll = () => {
        sections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // FAQ Toggle
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            let answer = button.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // Navbar Active Section Highlight
    const navbarLinks = document.querySelectorAll("nav a");
    const setActiveSection = () => {
        let scrollPosition = window.scrollY;
        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
                navbarLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav a[href="#${section.id}"]`).classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", setActiveSection);

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑";
    backToTop.id = "backToTop";
    document.body.appendChild(backToTop);
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 500 ? "block" : "none";
    });

    // Animated Counter for Stats
    const counters = document.querySelectorAll(".counter");
    let countersStarted = false;

    const startCounters = () => {
        if (countersStarted) return;
        countersStarted = true;
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;
            let increment = target / 100;
            let updateCounter = () => {
                count += increment;
                counter.textContent = Math.floor(count);
                if (count < target) requestAnimationFrame(updateCounter);
                else counter.textContent = target;
            };
            updateCounter();
        });
    };

    window.addEventListener("scroll", () => {
        if (document.querySelector("#stats").getBoundingClientRect().top < window.innerHeight - 100) {
            startCounters();
        }
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "🌙";
    darkModeToggle.id = "darkModeToggle";
    document.body.appendChild(darkModeToggle);
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Contact Form Submission (Simulated)
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("input[name='name']").value;
            const email = document.querySelector("input[name='email']").value;
            const message = document.querySelector("textarea[name='message']").value;

            if (!name || !email || !message) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            document.querySelector("#form-response").textContent = `Thank you, ${name}! Your message has been sent.`;
            document.querySelector("#form-response").style.display = "block";
            contactForm.reset();
        });
    }

    // Hamburger Menu for Mobile
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = `<div></div><div></div><div></div>`;
    document.body.appendChild(hamburger);

    const nav = document.querySelector("nav");
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.getElementById("explore-btn");
    const autoSyncSection = document.getElementById("auto-sync");

    if (exploreBtn && autoSyncSection) {
        exploreBtn.addEventListener("click", () => {
            autoSyncSection.classList.remove("hidden");
            autoSyncSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
