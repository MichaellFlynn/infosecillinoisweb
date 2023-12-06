const navbar = document.getElementById('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0074cc'; // Change to blue when scrolled 50px
    } else {
        navbar.style.backgroundColor = 'transparent'; // Reset to transparent
    }
});
