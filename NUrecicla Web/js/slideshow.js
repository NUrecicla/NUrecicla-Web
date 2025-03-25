// Slideshow functionality for the About section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slideshow-image");
        
        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Move to next slide
        slideIndex++;
        
        // Reset to first slide if at the end
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        // Display current slide
        slides[slideIndex-1].style.display = "block";
        
        // Change image every 4 seconds
        setTimeout(showSlides, 4000);
    }
});