document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer para entrada suave
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card-servico, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Inércia de rolagem apenas para roda do mouse
    let isScrolling = false;
    window.addEventListener('wheel', (e) => {
        if (e.deltaMode === 1 || (Math.abs(e.wheelDeltaY) > 0 && Math.abs(e.deltaY) > 10)) {
            if (!isScrolling) {
                isScrolling = true;
                setTimeout(() => { isScrolling = false; }, 100);
            }
        }
    }, { passive: true });
});