let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Handle loop boundaries
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Add active class to current slide (triggers CSS animation)
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-play slider every 5 seconds
setInterval(nextSlide, 5000);



// ... (keep existing slider code) ...

// Auto-play slider every 5 seconds
setInterval(nextSlide, 5000);

// --- NEW: Pricing Tabs Logic ---
function openPackage(evt, packageName) {
    // 1. Hide all package content panels
    const packageContents = document.getElementsByClassName("package-content");
    for (let i = 0; i < packageContents.length; i++) {
        packageContents[i].classList.remove("active-panel");
    }

    // 2. Remove "active" class from all tab buttons
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // 3. Show the selected package content and mark the clicked button as active
    document.getElementById(packageName).classList.add("active-panel");
    evt.currentTarget.classList.add("active");
}


// ... existing code ...

// --- Accordion Logic for Pricing Features ---
document.addEventListener('DOMContentLoaded', () => {
    // Select all feature items
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle the 'expanded' class on the clicked item
            this.classList.toggle('expanded');
        });
    });
});



/* --- Mobile Menu Toggle Logic --- */
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Hamburger to X
            burger.classList.toggle('toggle');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }
}

// Run the function
navSlide();