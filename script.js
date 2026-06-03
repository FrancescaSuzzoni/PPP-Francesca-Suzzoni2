document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animation d'apparition au scroll (Effet Motion Design)
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15, // L'animation se déclenche quand 15% de l'élément est visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Arrête d'observer une fois animé
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 2. Navigation fluide (Smooth Scrolling) pour les liens du menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajustement pour la barre de navigation fixe
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Animation d'entrée pour le Hero Header
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200); // Petit délai pour laisser la page charger
});