// Email handler for NUrecicla contact form

// Initialize EmailJS with your public key
// You'll need to sign up at https://www.emailjs.com/ and get your own public key
const initEmailJS = () => {
    // Replace with your actual EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");
};

// Function to send email using EmailJS
const sendEmail = (formData) => {
    // Show loading state
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    
    // Get current language for success/error messages
    const currentLang = getCurrentLanguage();
    
    // Create parameters for EmailJS
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'nurecicla@outlook.com'
    };
    
    // Add loading indicator
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${originalBtnText}`;
    
    // Send the email using EmailJS
    // Replace with your actual service ID and template ID from EmailJS dashboard
    emailjs.send('service_id', 'template_id', templateParams)
        .then(() => {
            // Show success message
            showFormMessage('success', translations[currentLang]['contact_success']);
            // Reset form
            document.querySelector('.contact-form form').reset();
        })
        .catch((error) => {
            console.error('Email sending failed:', error);
            // Show error message
            showFormMessage('error', translations[currentLang]['contact_error'] || 'Failed to send message. Please try again later.');
        })
        .finally(() => {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        });
};

// Function to display success or error messages
const showFormMessage = (type, message) => {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}-message`;
    messageElement.textContent = message;
    
    // Style based on message type
    if (type === 'success') {
        messageElement.style.color = 'var(--primary-color)';
    } else {
        messageElement.style.color = '#e53e3e'; // Error red color
    }
    
    messageElement.style.padding = '15px 0';
    messageElement.style.fontWeight = '500';
    messageElement.style.marginBottom = '15px';
    
    // Add message to the form
    const form = document.querySelector('.contact-form form');
    form.insertBefore(messageElement, form.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
};

// Export functions for use in main script
window.emailHandler = {
    init: initEmailJS,
    send: sendEmail,
    showMessage: showFormMessage
};