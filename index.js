// index.js

/* let currentIndex = 0;
const imagesContainer = document.querySelector(".carousel-images");
const dots = document.querySelectorAll(".carousel-dots .dot");

function showSlide(index) {
    imagesContainer.style.transform = `translateX(-${index * 1025}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);
setInterval(nextSlide, 3000); // Change image every 3 seconds

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
}); 

*************************************************************/

// index.js

const imagesContainer = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const dots = document.querySelectorAll(".carousel-dots .dot");

let currentIndex = 1; // Start at the first "real" image
const totalImages = images.length;

// Clone the first and last images
const firstClone = images[0].cloneNode(true);
const lastClone = images[totalImages - 1].cloneNode(true);

// Add clones to the DOM
imagesContainer.appendChild(firstClone);
imagesContainer.insertBefore(lastClone, images[0]);

// Adjust container width to account for clones
imagesContainer.style.width = `${(totalImages + 2) * 1025}px`; 

// Update the current slide view with a smooth transition
function showSlide(index) {
    imagesContainer.style.transition = "transform 1s ease-in-out";
    imagesContainer.style.transform = `translateX(-${index * 1025}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (index === 0) {
        dots[dots.length - 1].classList.add("active");
    } else if (index === totalImages + 1) {
        dots[0].classList.add("active");
    } else {
        dots[index - 1].classList.add("active");
    }
}

// Function to handle the seamless looping effect
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);

    // Reset to the start or end without a transition after reaching a clone
    imagesContainer.addEventListener("transitionend", () => {
        if (currentIndex === totalImages + 1) {
            imagesContainer.style.transition = "none";
            currentIndex = 1;
            imagesContainer.style.transform = `translateX(-${currentIndex * 1025}px)`;
        } else if (currentIndex === 0) {
            imagesContainer.style.transition = "none";
            currentIndex = totalImages;
            imagesContainer.style.transform = `translateX(-${currentIndex * 1025}px)`;
        }
    });
}

// Initialize the carousel
showSlide(currentIndex);
setInterval(nextSlide, 4000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index + 1;
        showSlide(currentIndex);
    });
});










// index.js

/*
const navbar = document.querySelector('.navbar');
const logoImage = document.createElement('img');
logoImage.src = 'horizontal-logo.png'; // Replace with your horizontal logo path
logoImage.classList.add('navbar-logo');

window.addEventListener('scroll', () => {
    if (window.scrollY >= navbar.offsetTop) {
        navbar.classList.add('scrolled');
        if (!navbar.contains(logoImage)) {
            navbar.insertBefore(logoImage, navbar.firstChild); // Add logo if not already added
        }
    } else {
        navbar.classList.remove('scrolled');
        if (navbar.contains(logoImage)) {
            navbar.removeChild(logoImage); // Remove logo if already added
        }
    }
});
*/




// index.js

// index.js

// index.js

const mainNavbar = document.querySelector('.navbar');
const stickyNavbar = document.querySelector('.sticky-navbar');
const mainNavbarHeight = mainNavbar.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= mainNavbar.offsetTop + mainNavbarHeight) {
        stickyNavbar.classList.add('show');
    } else {
        stickyNavbar.classList.remove('show');
    }
});



// index.js

// Select the like action item
const likeButton = document.querySelector('.action-item.like');
const likeCount = likeButton.querySelector('.count');

likeButton.addEventListener('click', () => {
    // Increment the like count
    likeCount.textContent = parseInt(likeCount.textContent) + 1;

    // Add the "clicked" class to trigger animation
    likeButton.classList.add('clicked');

    // Remove the "clicked" class after animation ends to reset it
    setTimeout(() => {
        likeButton.classList.remove('clicked');
    }, 200); // Duration matches the CSS transition time
});

