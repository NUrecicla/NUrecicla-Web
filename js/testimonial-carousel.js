// Testimonial Carousel with modern slide effect
document.addEventListener('DOMContentLoaded', function() {
    // Get the testimonials elements
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const thumbnailsContainer = document.querySelector('.testimonial-thumbnails');
    
    if (!testimonialsSlider || !testimonialSlides.length) return;
    
    let currentIndex = 0;
    const totalSlides = testimonialSlides.length;
    
    // Function to create thumbnails
    function createThumbnails() {
        testimonialSlides.forEach((slide, index) => {
            // Get the author image from the slide
            const authorImg = slide.querySelector('.testimonial-author img');
            if (!authorImg) return;
            
            // Create thumbnail element
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.setAttribute('data-index', index);
            
            // Create image element for thumbnail
            const img = document.createElement('img');
            img.src = authorImg.src;
            img.alt = authorImg.alt;
            
            // Add image to thumbnail and thumbnail to container
            thumbnail.appendChild(img);
            thumbnailsContainer.appendChild(thumbnail);
            
            // Add click event to thumbnail
            thumbnail.addEventListener('click', () => {
                goToSlide(index);
            });
        });
    }
    
    // Function to update active slide
    function updateActiveSlide() {
        // Update slides
        testimonialSlides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Update thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            if (index === currentIndex) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }
    
    // Function to go to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateActiveSlide();
    }
    
    // Function to go to the next slide
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateActiveSlide();
    }
    
    // Function to go to the previous slide
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateActiveSlide();
    }
    
    // Add event listeners to navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNextSlide);
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
    
    // Auto-rotate slides every 5 seconds
    let autoRotateInterval = setInterval(goToNextSlide, 5000);
    
    // Pause auto-rotation when hovering over the slider
    testimonialsSlider.addEventListener('mouseenter', () => {
        clearInterval(autoRotateInterval);
    });
    
    // Resume auto-rotation when mouse leaves the slider
    testimonialsSlider.addEventListener('mouseleave', () => {
        autoRotateInterval = setInterval(goToNextSlide, 5000);
    });
    
    // Initialize thumbnails
    createThumbnails();
    
    // Set the first slide as active
    updateActiveSlide();
});