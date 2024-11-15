function goBack() {
    window.history.back();
}

// Show/hide header on scroll
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add("header-hidden");
    } else {
        // Scrolling up
        header.classList.remove("header-hidden");
    }
    lastScrollTop = scrollTop;
});
