document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Helper to open or close the menu consistently.
    function setMenuState(isOpen) {
        hamburger.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    }

    // Close the menu when a navigation item is clicked.
    function closeMenu() {
        setMenuState(false);
    }

    // Toggle the menu state when the hamburger button is clicked.
    function toggleMenu(event) {
        event.stopPropagation();
        const isOpen = navMenu.classList.contains('active');
        setMenuState(!isOpen);
    }

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu if the user clicks outside the navigation area.
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && event.target !== hamburger) {
            closeMenu();
        }
    });

    // Allow Escape to close the menu for keyboard users.
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});
