import './style.css';
import { router } from './router';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Loader } from './components/loader';
import { renderHomePage } from './pages/home';
import { renderAboutPage } from './pages/about';
import { renderOurWaterPage } from './pages/our-water';
import { renderWellnessPage } from './pages/wellness';
import { renderGalleryPage } from './pages/gallery';
import { renderContactPage } from './pages/contact';
import { renderSustainabilityPage } from './pages/sustainability';
import { render404Page } from './pages/404';

// Initialize loader
const loader = new Loader();

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize navbar and footer
    new Navbar();
    new Footer();

    // Register routes — Vedica Spring
    router.register('/', 'Vedica Spring | Pure Himalayan Natural Spring Water', renderHomePage);
    router.register('/about', 'Our Story | Vedica Spring', renderAboutPage);
    router.register('/our-water', 'Our Water — Five Chapters | Vedica Spring', renderOurWaterPage);
    router.register('/wellness', 'Wellness Benefits | Vedica Spring', renderWellnessPage);
    router.register('/sustainability', 'Sustainability & CSR | Vedica Spring', renderSustainabilityPage);
    router.register('/gallery', 'Gallery | Vedica Spring', renderGalleryPage);
    router.register('/contact', 'Contact & Order | Vedica Spring', renderContactPage);
    router.register('/404', '404 Not Found | Vedica Spring', render404Page);

    // Initialize router
    router.init();

    // Hide loader after initial load
    setTimeout(() => {
        loader.hide();
    }, 1800);
});
