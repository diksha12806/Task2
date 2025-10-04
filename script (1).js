document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar ul li a');

    // Add a class to the nav link when it's clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove 'active' class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked link
            event.target.classList.add('active');
        });
    });

    // Optional: Add a class to the body on scroll to change navbar style
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});