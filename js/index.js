/* ======= start typed js animation ==========*/
var typed = new Typed(".auto-type", {
  strings: ["Designer", "Developer", "Photographer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

/* ======= End typed js animation ==========*/

/* ======== Arrow-top =======  */

// Get the button element
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the page, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the page smoothly
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ============== change navbar color on scroll ===============*/





