// Vedica Spring — Premium Footer

export class Footer {
    constructor() {
        this.render();
        this.attachEventListeners();
    }

    private render() {
        const footerHTML = `
            <footer class="relative z-20 overflow-hidden" style="background: #050E1A;">
                <!-- Top decorative wave -->
                <div class="w-full overflow-hidden" style="margin-bottom: -2px; line-height: 0;">
                    <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="display:block; width:100%; height:48px;">
                        <path d="M0 48 Q360 0 720 24 Q1080 48 1440 8 L1440 48 Z" fill="#050E1A"/>
                        <path d="M0 48 Q360 16 720 32 Q1080 48 1440 20 L1440 48 Z" fill="#050E1A" opacity="0.5"/>
                    </svg>
                </div>

                <div class="max-w-7xl mx-auto px-8 md:px-12 pt-12 pb-8">
                    <!-- Top Section -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                        <!-- Brand Column -->
                        <div class="lg:col-span-2">
                            <!-- Logo -->
                            <a href="/" class="inline-flex items-center mb-6 group">
                                <img src="/vedica-logo.svg" alt="Vedica Logo" class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                            </a>

                            <p class="text-white/40 text-sm leading-relaxed mb-8 max-w-xs font-inter">
                                Pure Himalayan spring water, naturally filtered through five geological layers over two centuries. Water as nature intended — perfect in every sense.
                            </p>

                            <!-- Social Links -->
                            <div class="flex gap-3">
                                ${[
                                    { label: 'Instagram', icon: '<path d="M16 3.5C9.1 3.5 3.5 9.1 3.5 16S9.1 28.5 16 28.5 28.5 22.9 28.5 16 22.9 3.5 16 3.5zM16 20.5C13.5 20.5 11.5 18.5 11.5 16S13.5 11.5 16 11.5 20.5 13.5 20.5 16 18.5 20.5 16 20.5z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="22" cy="10" r="1.5" fill="currentColor"/>' },
                                    { label: 'X / Twitter', icon: '<path d="M4 4l7.5 10L4 22h3l5.5-6.5L18 22h5l-8-10.5L22 4h-3l-5 5.5L8 4H4z" fill="currentColor"/>' },
                                    { label: 'LinkedIn', icon: '<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 10v8M8 7v.5M12 18v-5a2 2 0 014 0v5M12 13h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
                                    { label: 'YouTube', icon: '<rect x="2" y="6" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor"/>' },
                                ].map(s => `
                                    <a href="#" aria-label="${s.label}" class="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-vedica-yellow transition-all duration-300" style="border: 1px solid rgba(255,255,255,0.1);" onmouseenter="this.style.borderColor='rgba(252,220,0,0.5)'; this.style.background='rgba(252,220,0,0.08)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='transparent'">
                                        <svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${s.icon}</svg>
                                    </a>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Our Water -->
                        <div>
                            <h4 class="eyebrow-gold mb-6">Our Water</h4>
                            <ul class="space-y-3">
                                ${[
                                    { href: '/our-water', label: 'The Five Chapters' },
                                    { href: '/our-water', label: 'Snow Collection' },
                                    { href: '/our-water', label: 'Spring Expression' },
                                    { href: '/our-water', label: 'Source Reserve' },
                                    { href: '/our-water', label: 'Mineral Composition' },
                                ].map(item => `
                                    <li><a href="${item.href}" class="text-white/40 hover:text-white text-sm font-inter transition-colors duration-300 hover:translate-x-1 inline-block transition-transform">${item.label}</a></li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Company -->
                        <div>
                            <h4 class="eyebrow-gold mb-6">Company</h4>
                            <ul class="space-y-3">
                                ${[
                                    { href: '/about', label: 'Our Story' },
                                    { href: '/wellness', label: 'Wellness' },
                                    { href: '/sustainability', label: 'Sustainability' },
                                    { href: '/gallery', label: 'Gallery' },
                                    { href: '/contact', label: 'Wholesale' },
                                    { href: '/contact', label: 'Contact Us' },
                                ].map(item => `
                                    <li><a href="${item.href}" class="text-white/40 hover:text-white text-sm font-inter transition-colors duration-300">${item.label}</a></li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Newsletter -->
                        <div>
                            <h4 class="eyebrow-gold mb-6">Stay Connected</h4>
                            <p class="text-white/40 text-sm font-inter mb-5 leading-relaxed">Join our wellness community. Stories from the source, seasonal updates, and exclusive offers.</p>
                            <form id="footer-newsletter" class="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    class="vedica-input text-sm"
                                    required
                                    id="footer-email"
                                />
                                <button type="submit" class="btn-primary justify-center text-[10px] py-3">
                                    Subscribe
                                </button>
                            </form>
                            <p class="text-white/25 text-[11px] font-inter mt-3 leading-relaxed">No spam, ever. Unsubscribe anytime.</p>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent); margin-bottom: 28px;"></div>

                    <!-- Bottom Bar -->
                    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-white/25 text-xs font-inter tracking-wide">© 2026 Vedica Spring Waters Pvt. Ltd. All rights reserved.</p>

                        <div class="flex items-center gap-2 text-white/20 text-[11px] font-inter">
                            <span class="dot-sep"></span>
                            <span class="tracking-widest uppercase">Born in the Himalayas</span>
                            <span class="dot-sep"></span>
                        </div>

                        <div class="flex gap-6">
                            ${['Privacy Policy', 'Terms of Use', 'Legal'].map(label => `
                                <a href="#" class="text-white/25 hover:text-white/60 text-xs font-inter tracking-wide transition-colors duration-300">${label}</a>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Back to Top -->
                <button
                    id="back-to-top"
                    aria-label="Back to top"
                    class="fixed bottom-8 right-8 w-11 h-11 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-500 z-50 rounded-full"
                    style="background: var(--vedica-yellow); color: var(--vedica-deep);"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                </button>
            </footer>
        `;

        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    private attachEventListeners() {
        // Newsletter
        const form = document.getElementById('footer-newsletter');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
            const original = btn.textContent;
            btn.textContent = '✓ Subscribed!';
            btn.style.background = '#3A8AD1';
            setTimeout(() => {
                btn.textContent = original;
                btn.style.background = '';
                (form as HTMLFormElement).reset();
            }, 3000);
        });

        // Back to Top
        const backToTop = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                backToTop?.classList.remove('opacity-0', 'pointer-events-none');
                backToTop?.classList.add('opacity-100');
            } else {
                backToTop?.classList.add('opacity-0', 'pointer-events-none');
                backToTop?.classList.remove('opacity-100');
            }
        }, { passive: true });

        backToTop?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
