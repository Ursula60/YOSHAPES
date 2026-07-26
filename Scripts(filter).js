document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const carousel = document.getElementById('catalog');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Gestion du clic sur le lien "Collections" du menu
    const collectionsNavBtn = document.querySelector('a[href="#collections"]');
    const collectionsSection = document.querySelector('.filter-section');

    if (collectionsNavBtn && collectionsSection) {
        collectionsNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            collectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Filtrage par catégorie
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Défilement horizontal du carrousel
    if (carousel && scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }
});
