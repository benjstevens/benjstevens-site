/**
 * BEN J STEVENS MINISTRY - SCRIPT.JS
 * Minimal JavaScript for static site functionality
 */

// === Utility Functions ===
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// === Toast Notifications ===
function showToast(title, message) {
    const container = $('#toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// === Header Scroll Effect ===
function initHeaderScroll() {
    const header = $('#main-header');
    if (!header) return;
    
    // Check if header should always be solid (inner pages)
    if (header.classList.contains('header-solid')) return;
    
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initial check
}

// === Mobile Menu ===
function initMobileMenu() {
    const menuBtn = $('#mobile-menu-btn');
    const closeBtn = $('#mobile-menu-close');
    const mobileMenu = $('#mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.id = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
    
    function openMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
        }
    });
}

// === Form Handling ===
function initForms() {
    // Newsletter forms
    $$('#footer-newsletter-form, #blog-newsletter-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                showToast('Thank you for subscribing!', 'You will receive our latest updates and teachings.');
                form.reset();
            }
        });
    });
    
    // Contact form
    const contactForm = $('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Message Sent!', 'Thank you for reaching out. We will respond as soon as possible.');
            contactForm.reset();
        });
    }
    
    // Booking form
    const bookingForm = $('#booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Booking Request Submitted!', 'Thank you for your interest. We will be in touch within 48 hours.');
            bookingForm.reset();
            closeBookingModal();
        });
    }
}

// === Booking Modal ===
function initBookingModal() {
    const modal = $('#booking-modal');
    const openBtns = $$('#open-booking-modal, #open-booking-modal-2');
    const closeBtn = $('#close-booking-modal');
    
    if (!modal) return;
    
    function openModal() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    
    window.closeBookingModal = function() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };
    
    openBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBookingModal);
    }
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBookingModal();
        }
    });
    
    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeBookingModal();
        }
    });
}

// === Sermon Filters ===
function initSermonFilters() {
    const filterBtns = $$('.filter-btn');
    const sermonCards = $$('.sermon-card');
    
    if (!filterBtns.length || !sermonCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter cards
            sermonCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// === Set Current Year ===
function setCurrentYear() {
    $$('#current-year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });
}

// === Load More Buttons (Placeholder) ===
function initLoadMore() {
    const loadMoreSermons = $('#load-more-sermons');
    const loadMorePosts = $('#load-more-posts');
    
    if (loadMoreSermons) {
        loadMoreSermons.addEventListener('click', () => {
            showToast('Loading...', 'More sermons would load here in a full implementation.');
        });
    }
    
    if (loadMorePosts) {
        loadMorePosts.addEventListener('click', () => {
            showToast('Loading...', 'More articles would load here in a full implementation.');
        });
    }
}

// === Initialize Everything ===
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initForms();
    initBookingModal();
    initSermonFilters();
    setCurrentYear();
    initLoadMore();
});
