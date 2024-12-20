let lastScrollTop = 0; // Position précédente du scroll
const navbar = document.querySelector('.fixed-navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Si on défile vers le bas, cache la navbar
        navbar.classList.add('hidden');
    } else {
        // Si on défile vers le haut, affiche la navbar
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Gère les valeurs négatives
});