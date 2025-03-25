// Card plastic effect script
document.addEventListener('DOMContentLoaded', function() {
    // Get all cards that should have the plastic effect
    const cards = document.querySelectorAll('.benefit-card, .testimonial-card');
    
    // Add mouse move event listener to each card
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            // Get the position of the mouse relative to the card
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate the percentage position
            const xPercent = Math.floor((x / rect.width) * 100);
            const yPercent = Math.floor((y / rect.height) * 100);
            
            // Update the CSS variables for the gradient position
            this.style.setProperty('--x', `${xPercent}%`);
            this.style.setProperty('--y', `${yPercent}%`);
            
            // Add a subtle transform based on mouse position
            const rotateX = (y - rect.height / 2) / 20;
            const rotateY = (rect.width / 2 - x) / 20;
            
            this.style.transform = `perspective(800px) translateZ(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        // Reset the transform when mouse leaves the card
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(800px) translateZ(-10px)';
        });
    });
});