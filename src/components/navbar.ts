// Vedica Spring — Premium Navbar

export class Navbar {
    private navbar: HTMLElement | null = null;
    private mobileMenu: HTMLElement | null = null;
    private isMenuOpen = false;


    constructor() {
        this.render();
        this.attachEventListeners();
    }

    private render() {
        const navbarHTML = `
            <nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-500" aria-label="Main navigation">
                <div class="absolute inset-0 transition-all duration-500" id="nav-bg" style="background: transparent;"></div>
                <div class="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center h-[72px]">

                    <!-- Logo -->
                    <a href="/" class="flex items-center group py-1" aria-label="Vedica Spring Home">
                        <img src="/vedica-logo.svg" alt="Vedica Logo" class="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </a>

                    <!-- Desktop Nav Links -->
                    <div class="hidden lg:flex items-center gap-8" id="nav-links">
                        <a href="/" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Home</a>
                        <a href="/our-water" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Our Water</a>
                        <a href="/wellness" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Wellness</a>
                        <a href="/sustainability" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Sustainability</a>
                        <a href="/about" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Our Story</a>
                        <a href="/gallery" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Gallery</a>
                        <a href="/contact" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Contact</a>
                    </div>

                    <!-- CTA Button -->
                    <div class="hidden lg:flex items-center gap-4">
                        <a href="/contact" class="btn-primary text-[10px] py-2.5 px-6 rounded-sm">
                            <span>Order Now</span>
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="lg:hidden flex flex-col gap-[5px] p-2 group" aria-label="Toggle menu" aria-expanded="false">
                        <span class="menu-bar block w-6 h-[1.5px] bg-white transition-all duration-300 group-hover:bg-vedica-yellow"></span>
                        <span class="menu-bar block w-4 h-[1.5px] bg-white transition-all duration-300 group-hover:bg-vedica-yellow" style="margin-left: auto;"></span>
                        <span class="menu-bar block w-6 h-[1.5px] bg-white transition-all duration-300 group-hover:bg-vedica-yellow"></span>
                    </button>
                </div>

                <!-- Mobile Menu Overlay -->
                <div id="mobile-menu" class="lg:hidden fixed inset-0 z-40 transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" aria-hidden="true">
                    <div class="absolute inset-0" style="background: rgba(10, 26, 42, 0.97); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"></div>
                    <div class="relative h-full flex flex-col justify-center items-center gap-2 px-8 pt-20 pb-16">
                        <!-- Mobile Logo -->
                        <div class="absolute top-6 left-6 flex items-center gap-2">
                            <span class="text-white font-inter font-semibold text-base tracking-[0.18em] uppercase">Vedica <span class="text-vedica-yellow">Spring</span></span>
                        </div>
                        <!-- Close Button -->
                        <button id="mobile-close-btn" class="absolute top-5 right-6 w-10 h-10 flex items-center justify-center" aria-label="Close menu">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </button>

                        <div class="flex flex-col items-center gap-6 w-full max-w-sm">
                            <a href="/" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Home</a>
                            <a href="/our-water" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Our Water</a>
                            <a href="/wellness" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Wellness</a>
                            <a href="/sustainability" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Sustainability</a>
                            <a href="/about" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Our Story</a>
                            <a href="/gallery" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Gallery</a>
                            <a href="/contact" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Contact</a>
                            <a href="/contact" class="mobile-nav-link btn-primary w-full justify-center text-xs mt-4 rounded-sm">Order Vedica Spring</a>
                        </div>
                        <!-- Decorative -->
                        <div class="absolute bottom-8 flex flex-col items-center gap-2 opacity-40">
                            <div class="scroll-cue-line" style="height: 32px;"></div>
                            <span style="font-family: var(--sans); font-size:9px; letter-spacing:0.28em; text-transform:uppercase; color: rgba(255,255,255,0.5);">Born in the Himalayas</span>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        this.navbar = document.getElementById('navbar');
        this.mobileMenu = document.getElementById('mobile-menu');
    }

    private attachEventListeners() {
        // Mobile menu toggle
        document.getElementById('mobile-menu-btn')?.addEventListener('click', () => this.openMobileMenu());
        document.getElementById('mobile-close-btn')?.addEventListener('click', () => this.closeMobileMenu());

        // Close on link click
        document.querySelectorAll('.mobile-nav-link').forEach((link) => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Scroll handler
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        this.handleScroll();

        // Active link
        this.updateActiveLink();
        window.addEventListener('popstate', () => this.updateActiveLink());
    }

    private openMobileMenu() {
        this.isMenuOpen = true;
        this.mobileMenu?.classList.remove('translate-x-full');
        this.mobileMenu?.setAttribute('aria-hidden', 'false');
        document.getElementById('mobile-menu-btn')?.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    private closeMobileMenu() {
        this.isMenuOpen = false;
        this.mobileMenu?.classList.add('translate-x-full');
        this.mobileMenu?.setAttribute('aria-hidden', 'true');
        document.getElementById('mobile-menu-btn')?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    private handleScroll() {
        const scrollY = window.scrollY;
        const navBg = document.getElementById('nav-bg');
        if (!navBg) return;

        if (scrollY > 60) {
            navBg.style.background = 'rgba(10, 26, 42, 0.88)';
            navBg.style.backdropFilter = 'blur(16px)';
            (navBg.style as unknown as Record<string, string>)['webkitBackdropFilter'] = 'blur(16px)';
            navBg.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
        } else {
            navBg.style.background = 'transparent';
            navBg.style.backdropFilter = 'none';
            (navBg.style as unknown as Record<string, string>)['webkitBackdropFilter'] = 'none';
            navBg.style.borderBottom = 'none';
        }

    }

    private updateActiveLink() {
        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach((link) => {
            const href = link.getAttribute('href');
            if (href === currentPath || (href !== '/' && currentPath.startsWith(href || ''))) {
                link.classList.add('text-vedica-yellow', '!text-vedica-yellow');
                link.classList.remove('text-white/80');
            } else {
                link.classList.remove('text-vedica-yellow', '!text-vedica-yellow');
                link.classList.add('text-white/80');
            }
        });
    }

    public destroy() {
        this.navbar?.remove();
        if (this.isMenuOpen) document.body.style.overflow = '';
    }
}
