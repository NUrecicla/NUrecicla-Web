document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS if available
    if (window.emailHandler && typeof emailjs !== 'undefined') {
        window.emailHandler.init();
    }
    // Typing animation for hero section
    const typingText = document.getElementById('typing-text');
    const words = ['recicla', 'reduzi', 'reutiliza', 'ganha'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Base typing speed in milliseconds
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            // Typing text
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal speed when typing
        }
        
        // If word is complete, start deleting after a pause
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at the end of the word
        }
        
        // If word is deleted, move to next word
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop through words
            typingSpeed = 300; // Pause before starting new word
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typing animation
    if (typingText) {
        setTimeout(typeEffect, 1000); // Start after a 1-second delay
    }
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Add scroll animation for elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.benefit-card, .testimonial, .about-image, .impact-image, .section-header').forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    })
    
    // Testimonial Slider is handled by testimonial-carousel.js
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            // Send email using EmailJS
            if (window.emailHandler) {
                window.emailHandler.send({
                    name: name,
                    email: email,
                    message: message
                });
            } else {
                console.error('Email handler not initialized');
                
                // Fallback to show success message if email handler is not available
                this.reset();
                
                // Get success message from translations based on current language
                const currentLang = getCurrentLanguage();
                const formGroup = this.querySelector('.form-group');
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = translations[currentLang]['contact_success'];
                
                successMessage.style.color = 'var(--primary-color)';
                successMessage.style.padding = '15px 0';
                successMessage.style.fontWeight = '500';
                
                this.insertBefore(successMessage, formGroup);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.add('active');
            } else {
                document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Theme toggle functionality
        const themeToggleBtn = document.getElementById("theme-toggle-btn");
        const moonIcon = document.querySelector(".moon-icon");
        const sunIcon = document.querySelector(".sun-icon");

        // Verifica o tema preferido na primeira vez que o site for carregado
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-theme");
            moonIcon.style.display = "none";
            sunIcon.style.display = "inline";
        } else {
            document.body.classList.add("light-theme");
            moonIcon.style.display = "inline";
            sunIcon.style.display = "none";
        }

        // Adiciona o evento de clique para alternar o tema
        themeToggleBtn.addEventListener("click", () => {
            if (document.body.classList.contains("dark-theme")) {
                // Muda para tema light
                document.body.classList.remove("dark-theme");
                document.body.classList.add("light-theme");
                moonIcon.style.display = "inline";
                sunIcon.style.display = "none";
                localStorage.setItem("theme", "light"); // Salva a preferência do tema
            } else {
                // Muda para tema dark
                document.body.classList.remove("light-theme");
                document.body.classList.add("dark-theme");
                moonIcon.style.display = "none";
                sunIcon.style.display = "inline";
                localStorage.setItem("theme", "dark"); // Salva a preferência do tema
            }
        });
    
    // Language switcher functionality
    const languageToggleBtn = document.getElementById('language-toggle-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.lang-option');
    const currentLanguageSpan = document.querySelector('.current-language');
    
    // Function to get current language from localStorage or default to 'en'
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'en';
    }
    
    // Initialize language based on saved preference
    function initializeLanguage() {
        const currentLang = getCurrentLanguage();
        currentLanguageSpan.textContent = currentLang.toUpperCase();
        applyTranslations(currentLang);
    }
    
    // Call the initialization function when the page loads
    initializeLanguage();
    
    // Define the language cycle order
    const languageCycle = ['en', 'pt', 'es', 'fr'];
    
    // Handle language switching on button click
    if (languageToggleBtn) {
        languageToggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Get current language
            const currentLang = getCurrentLanguage();
            
            // Find current index in the cycle
            const currentIndex = languageCycle.indexOf(currentLang);
            
            // Get next language in the cycle
            const nextIndex = (currentIndex + 1) % languageCycle.length;
            const nextLang = languageCycle[nextIndex];
            
            // Update language
            localStorage.setItem('language', nextLang);
            
            // Add a brief animation to indicate language change
            currentLanguageSpan.style.transform = 'scale(1.2)';
            setTimeout(() => {
                currentLanguageSpan.style.transform = 'scale(1)';
                currentLanguageSpan.textContent = nextLang.toUpperCase();
            }, 150);
            
            // Apply translations
            applyTranslations(nextLang);
        });
    }
    
    // Apply translations to all elements with data-i18n attribute
    function applyTranslations(lang) {
        if (!translations[lang]) {
            console.error(`Translations for language '${lang}' not found`);
            return;
        }
        
        // Navigation links
        document.querySelectorAll('.nav-links li a').forEach((el, index) => {
            const keys = ['nav_about', 'nav_benefits', 'nav_testimonials', 'nav_contact'];
            if (index < keys.length) {
                el.textContent = translations[lang][keys[index]];
            }
        });
        
        // Hero section
        const heroBadge = document.querySelector('.hero-badge');
        if (heroBadge) heroBadge.textContent = translations[lang]['hero_badge'];
        
        const heroDesc = document.querySelector('.hero-content > p');
        if (heroDesc) heroDesc.textContent = translations[lang]['hero_description'];
        
        const googleBtn = document.querySelector('.hero-content .btn-primary');
        if (googleBtn) googleBtn.textContent = translations[lang]['hero_btn_google'];
        
        const appleBtn = document.querySelector('.hero-content .btn-secondary');
        if (appleBtn) appleBtn.textContent = translations[lang]['hero_btn_apple'];
        
        // About section
        const aboutTitle = document.querySelector('#about .section-header h2');
        if (aboutTitle) aboutTitle.textContent = translations[lang]['about_title'];
        
        const aboutSubtitle = document.querySelector('#about .section-header p');
        if (aboutSubtitle) aboutSubtitle.textContent = translations[lang]['about_subtitle'];
        
        const aboutP1 = document.querySelector('.about-text p:first-child');
        if (aboutP1) aboutP1.textContent = translations[lang]['about_p1'];
        
        const aboutP2 = document.querySelector('.about-text p:last-child');
        if (aboutP2) aboutP2.textContent = translations[lang]['about_p2'];
        
        // Benefits section
        const benefitsTitle = document.querySelector('#benefits .section-header h2');
        if (benefitsTitle) benefitsTitle.textContent = translations[lang]['benefits_title'];
        
        const benefitsSubtitle = document.querySelector('#benefits .section-header p');
        if (benefitsSubtitle) benefitsSubtitle.textContent = translations[lang]['benefits_subtitle'];
        
        const benefitCards = document.querySelectorAll('.benefit-card');
        if (benefitCards.length >= 4) {
            const benefitTitles = ['benefit1_title', 'benefit2_title', 'benefit3_title', 'benefit4_title'];
            const benefitDescs = ['benefit1_desc', 'benefit2_desc', 'benefit3_desc', 'benefit4_desc'];
            
            benefitCards.forEach((card, index) => {
                if (index < 4) {
                    const title = card.querySelector('h3');
                    const desc = card.querySelector('p');
                    
                    if (title) title.textContent = translations[lang][benefitTitles[index]];
                    if (desc) desc.textContent = translations[lang][benefitDescs[index]];
                }
            });
        }
        
        // Impact section
        const impactTitle = document.querySelector('.impact-text h2');
        if (impactTitle) impactTitle.textContent = translations[lang]['impact_title'];
        
        const impactSubtitle = document.querySelector('.impact-text > p');
        if (impactSubtitle) impactSubtitle.textContent = translations[lang]['impact_subtitle'];
        
        const impactStats = document.querySelectorAll('.stat p');
        if (impactStats.length >= 3) {
            const statLabels = ['impact_users', 'impact_actions', 'impact_centers'];
            impactStats.forEach((stat, index) => {
                if (index < 3) {
                    stat.textContent = translations[lang][statLabels[index]];
                }
            });
        }
        
        // Testimonials section
        const testimonialsTitle = document.querySelector('#testimonials .section-header h2');
        if (testimonialsTitle) testimonialsTitle.textContent = translations[lang]['testimonials_title'];
        
        const testimonialsSubtitle = document.querySelector('#testimonials .section-header p');
        if (testimonialsSubtitle) testimonialsSubtitle.textContent = translations[lang]['testimonials_subtitle'];
        
        const testimonials = document.querySelectorAll('.testimonial');
        if (testimonials.length >= 3) {
            const testimonialContents = ['testimonial1', 'testimonial2', 'testimonial3'];
            const testimonialNames = ['testimonial1_name', 'testimonial2_name', 'testimonial3_name'];
            const testimonialRoles = ['testimonial1_role', 'testimonial2_role', 'testimonial3_role'];
            
            testimonials.forEach((testimonial, index) => {
                if (index < 3) {
                    const content = testimonial.querySelector('.testimonial-content p');
                    const name = testimonial.querySelector('.author-info h4');
                    const role = testimonial.querySelector('.author-info p');
                    
                    if (content) content.textContent = translations[lang][testimonialContents[index]];
                    if (name) name.textContent = translations[lang][testimonialNames[index]];
                    if (role) role.textContent = translations[lang][testimonialRoles[index]];
                }
            });
        }
        
        // Download section
        const downloadTitle = document.querySelector('#download .section-header h2');
        if (downloadTitle) downloadTitle.textContent = translations[lang]['download_title'];
        
        const downloadDesc = document.querySelector('#download .section-header p');
        if (downloadDesc) downloadDesc.textContent = translations[lang]['download_desc'];
        
        // Contact section
        const contactTitle = document.querySelector('#contact .section-header h2');
        if (contactTitle) contactTitle.textContent = translations[lang]['contact_title'];
        
        const contactSubtitle = document.querySelector('#contact .section-header p');
        if (contactSubtitle) contactSubtitle.textContent = translations[lang]['contact_subtitle'];
        
        // Form labels and placeholders
        const nameLabel = document.querySelector('label[for="name"]');
        if (nameLabel) nameLabel.textContent = translations[lang]['contact_name'];
        
        const emailLabel = document.querySelector('label[for="email"]');
        if (emailLabel) emailLabel.textContent = translations[lang]['contact_email'];
        
        const messageLabel = document.querySelector('label[for="message"]');
        if (messageLabel) messageLabel.textContent = translations[lang]['contact_message'];
        
        const nameInput = document.querySelector('#name');
        if (nameInput) nameInput.placeholder = translations[lang]['contact_name_placeholder'];
        
        const emailInput = document.querySelector('#email');
        if (emailInput) emailInput.placeholder = translations[lang]['contact_email_placeholder'];
        
        const messageInput = document.querySelector('#message');
        if (messageInput) messageInput.placeholder = translations[lang]['contact_message_placeholder'];
        
        const submitBtn = document.querySelector('.contact-form button[type="submit"]');
        if (submitBtn) submitBtn.textContent = translations[lang]['contact_submit'];
        
        // Footer
        const footerTagline = document.querySelector('.footer-tagline');
        if (footerTagline) footerTagline.textContent = translations[lang]['footer_tagline'];
        
        const quickLinksTitle = document.querySelector('.footer-links h3');
        if (quickLinksTitle) quickLinksTitle.textContent = translations[lang]['footer_quick_links'];
        
        const legalTitle = document.querySelector('.footer-legal h3');
        if (legalTitle) legalTitle.textContent = translations[lang]['footer_legal'];
        
        const privacyLink = document.querySelector('.footer-legal a[href*="privacy"]');
        if (privacyLink) privacyLink.textContent = translations[lang]['footer_privacy'];
        
        const termsLink = document.querySelector('.footer-legal a[href*="terms"]');
        if (termsLink) termsLink.textContent = translations[lang]['footer_terms'];
        
        const cookieLink = document.querySelector('.footer-legal a[href*="cookie"]');
        if (cookieLink) cookieLink.textContent = translations[lang]['footer_cookie'];
        
        const copyright = document.querySelector('.footer-copyright');
        if (copyright) copyright.textContent = translations[lang]['footer_copyright'];
    }
}); // End of DOMContentLoaded event listener
