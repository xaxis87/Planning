// Planering med Burak Ünal - JavaScript för navigation och interaktivitet

document.addEventListener('DOMContentLoaded', function() {
    // Mobilmeny toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = mainNav.classList.toggle('active');

            // Uppdatera aria-expanded
            this.setAttribute('aria-expanded', isActive);

            // Ändra ikonen
            const icon = this.querySelector('span');
            if (icon) {
                icon.textContent = isActive ? '✕' : '☰';
            }
        });
    }

    // Dropdown för mobil
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');

        // För mobil: klick för att öppna/stänga dropdown
        if (window.innerWidth <= 768) {
            dropdownLink.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });

    // Stäng mobilmeny när man klickar på en länk
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && !this.parentElement.classList.contains('dropdown')) {
                mainNav.classList.remove('active');
                if (mobileMenuToggle) {
                    const icon = mobileMenuToggle.querySelector('span');
                    if (icon) icon.textContent = '☰';
                }
            }
        });
    });

    // Markera aktiv sida i navigationen
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = 'var(--soft-yellow)';
            link.style.color = 'var(--background-black)';
        }
    });

    // Smooth scroll för interna länkar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Lägg till fade-in animation när sidan laddas
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }

    // Hantera fönsterstorlek-ändringar
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Om man ändrar till desktop-läge, stäng mobilmenyn
            if (window.innerWidth > 768) {
                mainNav.classList.remove('active');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }, 250);
    });

    // Keyboard navigation support - ESC to close menus
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            // Stäng mobilmeny
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    const icon = mobileMenuToggle.querySelector('span');
                    if (icon) icon.textContent = '☰';
                }
            }

            // Stäng dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        // Visa/dölj knappen baserat på scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // Scrolla till toppen när knappen klickas
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Funktion för att visa/dölja innehåll
function toggleContent(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Funktion för att scrolla till toppen
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
