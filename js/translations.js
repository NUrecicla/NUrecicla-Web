// Language translations for NUrecicla website

// Available languages
const languages = {
    en: { code: 'en', name: 'English', flag: '🇬🇧' },
    pt: { code: 'pt', name: 'Português', flag: '🇵🇹' },
    es: { code: 'es', name: 'Español', flag: '🇪🇸' },
    fr: { code: 'fr', name: 'Français', flag: '🇫🇷' }
};

// Translations for all text content
const translations = {
    // English translations (default)
    en: {
        // Navigation
        'nav_about': 'About',
        'nav_benefits': 'Benefits',
        'nav_testimonials': 'Testimonials',
        'nav_contact': 'Contact',
        
        // Hero section
        'hero_badge': 'Eco-friendly Solution',
        'hero_description': 'Join the sustainable revolution with NUrecicla - mapping recycling points, tracking your impact, and earning rewards while saving the planet.',
        'hero_btn_google': 'Get on Google Play',
        'hero_btn_apple': 'Download on App Store',
        
        // About section
        'about_title': 'About NUrecicla',
        'about_subtitle': 'Empowering communities in Cabo Verde through sustainable recycling solutions',
        'about_p1': 'NUrecicla is a pioneering platform dedicated to transforming waste management and promoting sustainability across Cabo Verde. Our mission is to create a cleaner, greener future by making recycling accessible, rewarding, and educational for everyone.',
        'about_p2': 'Through our innovative mobile application, we connect users with recycling points, track environmental impact, and foster a community committed to positive change.',
        
        // Benefits section
        'benefits_title': 'Key Benefits',
        'benefits_subtitle': 'Discover how NUrecicla makes sustainability simple and rewarding',
        'benefit1_title': 'Recycling Point Mapping',
        'benefit1_desc': 'Easily locate the nearest recycling points across Cabo Verde with our interactive map feature.',
        'benefit2_title': 'QR Code Registration',
        'benefit2_desc': 'Simply scan QR codes to register your recycling activities and track your environmental contribution.',
        'benefit3_title': 'Rewards System',
        'benefit3_desc': 'Earn points and rewards for your recycling efforts, redeemable with our partner businesses.',
        'benefit4_title': 'Environmental Education',
        'benefit4_desc': 'Access educational resources about sustainability and proper recycling practices.',
        
        // Impact section
        'impact_title': 'Our Impact',
        'impact_subtitle': 'Together, we\'re making a difference in Cabo Verde\'s environment',
        'impact_users': 'Active Users',
        'impact_actions': 'Recycling Actions',
        'impact_centers': 'Recycling Centers',
        
        // Testimonials section
        'testimonials_title': 'What People Say',
        'testimonials_subtitle': 'Hear from our users and partners about their NUrecicla experience',
        'testimonial1': 'NUrecicla has transformed how our community approaches recycling. The app makes it easy to find recycling points and the rewards system keeps everyone motivated!',
        'testimonial1_name': 'Maria Silva',
        'testimonial1_role': 'Praia Resident',
        'testimonial2': 'As a business partner, joining NUrecicla\'s reward program has been great for our brand image and has brought in environmentally conscious customers.',
        'testimonial2_name': 'João Santos',
        'testimonial2_role': 'Local Business Owner',
        'testimonial3': 'The educational resources on NUrecicla have helped our school teach students about sustainability in a practical, engaging way.',
        'testimonial3_name': 'Ana Ferreira',
        'testimonial3_role': 'School Teacher',
        
        // Download section
        'download_title': 'Ready to Start Your Recycling Journey?',
        'download_desc': 'Download the NUrecicla app today and join our community of eco-conscious individuals making a difference in Cabo Verde.',
        
        // Contact section
        'contact_title': 'Get in Touch',
        'contact_subtitle': 'Have questions or suggestions? We\'d love to hear from you!',
        'contact_name': 'Name',
        'contact_email': 'Email',
        'contact_message': 'Message',
        'contact_name_placeholder': 'Your name',
        'contact_email_placeholder': 'Your email address',
        'contact_message_placeholder': 'Your message',
        'contact_submit': 'Send Message',
        'contact_success': 'Thank you for your message! We\'ll get back to you soon.',
        'contact_error': 'Failed to send message. Please try again later.',
        
        // Footer
        'footer_tagline': 'Making sustainability accessible in Cabo Verde',

        'footer_quick_links': 'Quick Links',
        'footer_legal': 'Legal',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms of Service',
        'footer_cookie': 'Cookie Policy',
        'footer_copyright': '© 2025 NUrecicla. All rights reserved.'
    },
    
    // Portuguese translations
    pt: {
        // Navigation
        'nav_about': 'Sobre',
        'nav_benefits': 'Benefícios',
        'nav_testimonials': 'Depoimentos',
        'nav_contact': 'Contato',
        
        // Hero section
        'hero_badge': 'Solução Ecológica',
        'hero_description': 'Junte-se à revolução sustentável com NUrecicla - mapeando pontos de reciclagem, acompanhando seu impacto e ganhando recompensas enquanto salva o planeta.',
        'hero_btn_google': 'Obter no Google Play',
        'hero_btn_apple': 'Baixar na App Store',
        
        // About section
        'about_title': 'Sobre NUrecicla',
        'about_subtitle': 'Capacitando comunidades em Cabo Verde através de soluções sustentáveis de reciclagem',
        'about_p1': 'NUrecicla é uma plataforma pioneira dedicada a transformar a gestão de resíduos e promover a sustentabilidade em Cabo Verde. Nossa missão é criar um futuro mais limpo e verde tornando a reciclagem acessível, gratificante e educativa para todos.',
        'about_p2': 'Através do nosso aplicativo móvel inovador, conectamos usuários com pontos de reciclagem, rastreamos o impacto ambiental e promovemos uma comunidade comprometida com a mudança positiva.',
        
        // Benefits section
        'benefits_title': 'Principais Benefícios',
        'benefits_subtitle': 'Descubra como NUrecicla torna a sustentabilidade simples e gratificante',
        'benefit1_title': 'Mapeamento de Pontos de Reciclagem',
        'benefit1_desc': 'Localize facilmente os pontos de reciclagem mais próximos em Cabo Verde com nosso recurso de mapa interativo.',
        'benefit2_title': 'Registro por Código QR',
        'benefit2_desc': 'Simplesmente escaneie códigos QR para registrar suas atividades de reciclagem e acompanhar sua contribuição ambiental.',
        'benefit3_title': 'Sistema de Recompensas',
        'benefit3_desc': 'Ganhe pontos e recompensas pelos seus esforços de reciclagem, resgatáveis com nossos parceiros comerciais.',
        'benefit4_title': 'Educação Ambiental',
        'benefit4_desc': 'Acesse recursos educacionais sobre sustentabilidade e práticas adequadas de reciclagem.',
        
        // Impact section
        'impact_title': 'Nosso Impacto',
        'impact_subtitle': 'Juntos, estamos fazendo a diferença no meio ambiente de Cabo Verde',
        'impact_users': 'Usuários Ativos',
        'impact_actions': 'Ações de Reciclagem',
        'impact_centers': 'Centros de Reciclagem',
        
        // Testimonials section
        'testimonials_title': 'O Que as Pessoas Dizem',
        'testimonials_subtitle': 'Ouça nossos usuários e parceiros sobre sua experiência com NUrecicla',
        'testimonial1': 'NUrecicla transformou a forma como nossa comunidade aborda a reciclagem. O aplicativo facilita encontrar pontos de reciclagem e o sistema de recompensas mantém todos motivados!',
        'testimonial1_name': 'Maria Silva',
        'testimonial1_role': 'Residente de Praia',
        'testimonial2': 'Como parceiro comercial, participar do programa de recompensas da NUrecicla tem sido ótimo para a imagem da nossa marca e atraiu clientes ambientalmente conscientes.',
        'testimonial2_name': 'João Santos',
        'testimonial2_role': 'Proprietário de Negócio Local',
        'testimonial3': 'Os recursos educacionais da NUrecicla ajudaram nossa escola a ensinar os alunos sobre sustentabilidade de uma maneira prática e envolvente.',
        'testimonial3_name': 'Ana Ferreira',
        'testimonial3_role': 'Professora',
        
        // Download section
        'download_title': 'Pronto para Iniciar Sua Jornada de Reciclagem?',
        'download_desc': 'Baixe o aplicativo NUrecicla hoje e junte-se à nossa comunidade de indivíduos ecologicamente conscientes fazendo a diferença em Cabo Verde.',
        
        // Contact section
        'contact_title': 'Entre em Contato',
        'contact_subtitle': 'Tem perguntas ou sugestões? Adoraríamos ouvir de você!',
        'contact_name': 'Nome',
        'contact_email': 'Email',
        'contact_message': 'Mensagem',
        'contact_name_placeholder': 'Seu nome',
        'contact_email_placeholder': 'Seu endereço de email',
        'contact_message_placeholder': 'Sua mensagem',
        'contact_submit': 'Enviar Mensagem',
        'contact_success': 'Obrigado pela sua mensagem! Entraremos em contato em breve.',
        'contact_error': 'Falha ao enviar mensagem. Por favor, tente novamente mais tarde.',
        
        // Footer
        'footer_tagline': 'Tornando a sustentabilidade acessível em Cabo Verde',

        'footer_quick_links': 'Links Rápidos',
        'footer_legal': 'Legal',
        'footer_privacy': 'Política de Privacidade',
        'footer_terms': 'Termos de Serviço',
        'footer_cookie': 'Política de Cookies',
        'footer_copyright': '© 2025 NUrecicla. Todos os direitos reservados.'
    },
    
    // French translations
    fr: {
        // Navigation
        'nav_about': 'À propos',
        'nav_benefits': 'Avantages',
        'nav_testimonials': 'Témoignages',
        'nav_contact': 'Contact',
        
        // Hero section
        'hero_badge': 'Solution Écologique',
        'hero_description': 'Rejoignez la révolution durable avec NUrecicla - cartographiez les points de recyclage, suivez votre impact et gagnez des récompenses tout en sauvant la planète.',
        'hero_btn_google': 'Obtenir sur Google Play',
        'hero_btn_apple': 'Télécharger sur l\'App Store',
        
        // About section
        'about_title': 'À propos de NUrecicla',
        'about_subtitle': 'Autonomiser les communautés au Cabo Verde grâce à des solutions de recyclage durables',
        'about_p1': 'NUrecicla est une plateforme pionnière dédiée à la transformation de la gestion des déchets et à la promotion de la durabilité à travers le Cabo Verde. Notre mission est de créer un avenir plus propre et plus vert en rendant le recyclage accessible, gratifiant et éducatif pour tous.',
        'about_p2': 'Grâce à notre application mobile innovante, nous connectons les utilisateurs avec des points de recyclage, suivons l\'impact environnemental et favorisons une communauté engagée dans le changement positif.',
        
        // Benefits section
        'benefits_title': 'Avantages Clés',
        'benefits_subtitle': 'Découvrez comment NUrecicla rend la durabilité simple et gratifiante',
        'benefit1_title': 'Cartographie des Points de Recyclage',
        'benefit1_desc': 'Localisez facilement les points de recyclage les plus proches à travers le Cabo Verde avec notre fonction de carte interactive.',
        'benefit2_title': 'Enregistrement par Code QR',
        'benefit2_desc': 'Scannez simplement les codes QR pour enregistrer vos activités de recyclage et suivre votre contribution environnementale.',
        'benefit3_title': 'Système de Récompenses',
        'benefit3_desc': 'Gagnez des points et des récompenses pour vos efforts de recyclage, échangeables auprès de nos entreprises partenaires.',
        'benefit4_title': 'Éducation Environnementale',
        'benefit4_desc': 'Accédez à des ressources éducatives sur la durabilité et les pratiques de recyclage appropriées.',
        
        // Impact section
        'impact_title': 'Notre Impact',
        'impact_subtitle': 'Ensemble, nous faisons une différence dans l\'environnement du Cabo Verde',
        'impact_users': 'Utilisateurs Actifs',
        'impact_actions': 'Actions de Recyclage',
        'impact_centers': 'Centres de Recyclage',
        
        // Testimonials section
        'testimonials_title': 'Ce Que Disent les Gens',
        'testimonials_subtitle': 'Écoutez nos utilisateurs et partenaires parler de leur expérience avec NUrecicla',
        'testimonial1': 'NUrecicla a transformé la façon dont notre communauté aborde le recyclage. L\'application facilite la recherche de points de recyclage et le système de récompenses maintient tout le monde motivé!',
        'testimonial1_name': 'Maria Silva',
        'testimonial1_role': 'Résidente de Praia',
        'testimonial2': 'En tant que partenaire commercial, rejoindre le programme de récompenses de NUrecicla a été excellent pour l\'image de notre marque et a attiré des clients soucieux de l\'environnement.',
        'testimonial2_name': 'João Santos',
        'testimonial2_role': 'Propriétaire d\'Entreprise Locale',
        'testimonial3': 'Les ressources éducatives de NUrecicla ont aidé notre école à enseigner aux élèves la durabilité d\'une manière pratique et engageante.',
        'testimonial3_name': 'Ana Ferreira',
        'testimonial3_role': 'Enseignante',
        
        // Download section
        'download_title': 'Prêt à Commencer Votre Parcours de Recyclage?',
        'download_desc': 'Téléchargez l\'application NUrecicla aujourd\'hui et rejoignez notre communauté d\'individus éco-conscients qui font une différence au Cabo Verde.',
        
        // Contact section
        'contact_title': 'Contactez-Nous',
        'contact_subtitle': 'Vous avez des questions ou des suggestions? Nous aimerions avoir de vos nouvelles!',
        'contact_name': 'Nom',
        'contact_email': 'Email',
        'contact_message': 'Message',
        'contact_name_placeholder': 'Votre nom',
        'contact_email_placeholder': 'Votre adresse email',
        'contact_message_placeholder': 'Votre message',
        'contact_submit': 'Envoyer le Message',
        'contact_success': 'Merci pour votre message! Nous vous répondrons bientôt.',
        'contact_error': 'Échec de l\'envoi du message. Veuillez réessayer plus tard.',
        
        // Footer
        'footer_tagline': 'Rendre la durabilité accessible au Cabo Verde',
        'footer_quick_links': 'Liens Rapides',
        'footer_legal': 'Légal',
        'footer_privacy': 'Politique de Confidentialité',
        'footer_terms': 'Conditions d\'Utilisation',
        'footer_cookie': 'Politique de Cookies',
        'footer_copyright': '© 2025 NUrecicla. Tous droits réservés.'
    },
    
    // Spanish translations
    es: {
        // Navigation
        'nav_about': 'Acerca de',
        'nav_benefits': 'Beneficios',
        'nav_testimonials': 'Testimonios',
        'nav_contact': 'Contacto',
        
        // Hero section
        'hero_badge': 'Solución Ecológica',
        'hero_description': 'Únete a la revolución sostenible con NUrecicla - mapeando puntos de reciclaje, rastreando tu impacto y ganando recompensas mientras salvas el planeta.',
        'hero_btn_google': 'Obtener en Google Play',
        'hero_btn_apple': 'Descargar en App Store',
        
        // About section
        'about_title': 'Acerca de NUrecicla',
        'about_subtitle': 'Empoderando comunidades en Cabo Verde a través de soluciones sostenibles de reciclaje',
        'about_p1': 'NUrecicla es una plataforma pionera dedicada a transformar la gestión de residuos y promover la sostenibilidad en todo Cabo Verde. Nuestra misión es crear un futuro más limpio y verde haciendo que el reciclaje sea accesible, gratificante y educativo para todos.',
        'about_p2': 'A través de nuestra innovadora aplicación móvil, conectamos a los usuarios con puntos de reciclaje, rastreamos el impacto ambiental y fomentamos una comunidad comprometida con el cambio positivo.',
        
        // Benefits section
        'benefits_title': 'Beneficios Clave',
        'benefits_subtitle': 'Descubre cómo NUrecicla hace que la sostenibilidad sea simple y gratificante',
        'benefit1_title': 'Mapeo de Puntos de Reciclaje',
        'benefit1_desc': 'Localiza fácilmente los puntos de reciclaje más cercanos en todo Cabo Verde con nuestra función de mapa interactivo.',
        'benefit2_title': 'Registro por Código QR',
        'benefit2_desc': 'Simplemente escanea códigos QR para registrar tus actividades de reciclaje y rastrear tu contribución ambiental.',
        'benefit3_title': 'Sistema de Recompensas',
        'benefit3_desc': 'Gana puntos y recompensas por tus esfuerzos de reciclaje, canjeables con nuestras empresas asociadas.',
        'benefit4_title': 'Educación Ambiental',
        'benefit4_desc': 'Accede a recursos educativos sobre sostenibilidad y prácticas adecuadas de reciclaje.',
        
        // Impact section
        'impact_title': 'Nuestro Impacto',
        'impact_subtitle': 'Juntos, estamos marcando la diferencia en el medio ambiente de Cabo Verde',
        'impact_users': 'Usuarios Activos',
        'impact_actions': 'Acciones de Reciclaje',
        'impact_centers': 'Centros de Reciclaje',
        
        // Testimonials section
        'testimonials_title': 'Lo Que Dice la Gente',
        'testimonials_subtitle': 'Escucha a nuestros usuarios y socios sobre su experiencia con NUrecicla',
        'testimonial1': 'NUrecicla ha transformado la forma en que nuestra comunidad aborda el reciclaje. ¡La aplicación facilita encontrar puntos de reciclaje y el sistema de recompensas mantiene a todos motivados!',
        'testimonial1_name': 'Maria Silva',
        'testimonial1_role': 'Residente de Praia',
        'testimonial2': 'Como socio comercial, unirse al programa de recompensas de NUrecicla ha sido excelente para la imagen de nuestra marca y ha atraído a clientes conscientes del medio ambiente.',
        'testimonial2_name': 'João Santos',
        'testimonial2_role': 'Propietario de Negocio Local',
        'testimonial3': 'Los recursos educativos de NUrecicla han ayudado a nuestra escuela a enseñar a los estudiantes sobre sostenibilidad de una manera práctica y atractiva.',
        'testimonial3_name': 'Ana Ferreira',
        'testimonial3_role': 'Profesora',
        
        // Download section
        'download_title': '¿Listo para Comenzar Tu Viaje de Reciclaje?',
        'download_desc': 'Descarga la aplicación NUrecicla hoy y únete a nuestra comunidad de personas ecológicamente conscientes que están marcando la diferencia en Cabo Verde.',
        
        // Contact section
        'contact_title': 'Ponte en Contacto',
        'contact_subtitle': '¿Tienes preguntas o sugerencias? ¡Nos encantaría saber de ti!',
        'contact_name': 'Nombre',
        'contact_email': 'Correo Electrónico',
        'contact_message': 'Mensaje',
        'contact_name_placeholder': 'Tu nombre',
        'contact_email_placeholder': 'Tu dirección de correo electrónico',
        'contact_message_placeholder': 'Tu mensaje',
        'contact_submit': 'Enviar Mensaje',
        'contact_success': 'Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
        'contact_error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        
        // Footer
        'footer_tagline': 'Haciendo la sostenibilidad accesible en Cabo Verde',
        'footer_quick_links': 'Enlaces Rápidos',
        'footer_legal': 'Legal',
        'footer_privacy': 'Política de Privacidad',
        'footer_terms': 'Términos de Servicio',
        'footer_cookie': 'Política de Cookies',
        'footer_copyright': '© 2025 NUrecicla. Todos los derechos reservados.'
    }
};
