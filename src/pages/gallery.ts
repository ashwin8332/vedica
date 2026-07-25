// Vedica Spring — Gallery Page
import { ScrollReveal } from '../utils/animations';

export async function renderGalleryPage() {
    const app = document.getElementById('app');
    if (!app) return;

    // Actual Vedica sequence frames from /public/vedica/ for an authentic visual gallery
    const galleryItems = [
        { title: 'The Source Spring', subtitle: 'Upper Himalayas · 3,200m', img: '/vedica/ezgif-frame-001.jpg', size: 'col-span-2 row-span-2', category: 'The Source' },
        { title: 'Glacial Snowfields', subtitle: 'Chapter I · Winter', img: '/vedica/ezgif-frame-006.jpg', size: '', category: 'The Source' },
        { title: 'Geological Strata', subtitle: 'Chapter III · Stone', img: '/vedica/ezgif-frame-012.jpg', size: '', category: 'The Journey' },
        { title: 'Mountain Silence', subtitle: 'Chapter II · Dawn', img: '/vedica/ezgif-frame-018.jpg', size: '', category: 'The Journey' },
        { title: 'Water Splash Studio', subtitle: 'Chapter IV · Emergence', img: '/vedica/ezgif-frame-025.jpg', size: '', category: 'Products' },
        { title: 'Pure Himalayan Droplet', subtitle: 'Pure & Alive', img: '/vedica/ezgif-frame-032.jpg', size: '', category: 'Products' },
        { title: 'Vedica Spring Bottle', subtitle: 'Vedica Himalayan Water', img: '/vedica/ezgif-frame-051.jpg', size: 'col-span-2', category: 'Products' },
        { title: 'Glacial Purity', subtitle: 'The Journey Begins', img: '/vedica/ezgif-frame-040.jpg', size: '', category: 'The Journey' },
        { title: 'Green Sustainability', subtitle: 'Sustainability · Greener Promise', img: '/vedica/ezgif-frame-045.jpg', size: '', category: 'Sustainability' },
    ];

    app.innerHTML = `
        <!-- HERO -->
        <section class="relative min-h-[50vh] flex items-end pb-16 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #1a3a5c 60%, #2e5f8a 100%); padding-top: 120px;">
            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Visual Story</span>
                </div>
                <h1 class="fade-up delay-100 mb-4" style="font-family: var(--serif); font-size: clamp(44px, 8vw, 88px); color: #fff; font-weight: 300; line-height: 1.05;">
                    The world of<br><em style="color: var(--vedica-yellow);">Vedica Spring</em>
                </h1>
                <p class="fade-up delay-200 font-inter" style="color: rgba(168,200,222,0.7); font-size: 17px; max-width: 480px; line-height: 1.7;">
                    From the glacial peaks of the Himalayas to your glass — an authentic visual story captured across 51 frames.
                </p>
            </div>
        </section>

        <!-- GALLERY MASONRY -->
        <section class="py-20 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <!-- Category Filters -->
                <div class="flex flex-wrap gap-3 mb-12 fade-up" id="gallery-filters">
                    ${['All', 'The Source', 'The Journey', 'Sustainability', 'Products'].map((cat, i) => `
                        <button class="gallery-filter font-inter text-xs tracking-[0.18em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-vedica-yellow text-vedica-deep font-semibold' : ''}" style="${i !== 0 ? 'border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);' : ''}" data-filter="${cat}">
                            ${cat}
                        </button>
                    `).join('')}
                </div>

                <!-- Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[240px] gap-4" id="gallery-grid">
                    ${galleryItems.map((item, i) => `
                        <div class="gallery-item fade-up rounded-2xl overflow-hidden relative group cursor-pointer ${item.size}" data-category="${item.category}" style="animation-delay: ${i * 80}ms; transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);" onmouseenter="this.style.transform='scale(1.02)'" onmouseleave="this.style.transform='scale(1)'">
                            <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                            <!-- Overlay -->
                            <div class="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300" style="background: linear-gradient(0deg, rgba(10,26,42,0.85) 0%, transparent 60%);">
                                <h3 class="font-inter font-semibold text-white mb-1" style="font-size: 15px;">${item.title}</h3>
                                <p class="eyebrow" style="color: rgba(255,255,255,0.6); font-size: 9px;">${item.subtitle}</p>
                            </div>

                            <!-- Hover zoom icon -->
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: rgba(0,92,171,0.25);">
                                <div class="w-12 h-12 rounded-full glass flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- INSTAGRAM SOCIAL FEED -->
        <section class="py-20 px-6 text-center" style="background: #F7F8FB;">
            <div class="max-w-4xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    <span class="eyebrow" style="color: var(--vedica-blue);">Community Stories</span>
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                </div>
                <h2 class="fade-up delay-100 mb-4" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 50px); color: var(--vedica-deep); font-weight: 400;">
                    Share your Vedica<br><em>moment</em>
                </h2>
                <p class="fade-up delay-200 font-inter mb-10" style="color: rgba(10,26,42,0.55); font-size: 16px; line-height: 1.7;">
                    Use #VedicaSpring and tag us @vedicaspring — your moments become part of our Himalayan story.
                </p>

                <!-- EmbedSocial Hashtag widget -->
                <div class="fade-up mb-10">
                    <div class="embedsocial-hashtag" data-ref="93273814acdcb0fe25fbd7b48513b268ce73b84f"></div>
                </div>

                <div class="fade-up delay-300 flex gap-4 justify-center flex-wrap">
                    <a href="https://www.instagram.com/vedicaspring/?hl=en" target="_blank" rel="noopener" class="btn-outline-blue rounded-full text-xs px-6 py-2.5">Follow on Instagram</a>
                    <a href="https://www.youtube.com/@vedicaspring1633" target="_blank" rel="noopener" class="btn-outline-blue rounded-full text-xs px-6 py-2.5">Watch on YouTube</a>
                </div>
            </div>
        </section>
    `;

    const reveal = new ScrollReveal(0.12);
    reveal.observeAll('.fade-up');

    // Filter functionality
    const filterBtns = document.querySelectorAll<HTMLButtonElement>('.gallery-filter');
    const items = document.querySelectorAll<HTMLElement>('.gallery-item');

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach((b) => {
                b.classList.remove('bg-vedica-yellow', 'text-vedica-deep', 'font-semibold');
                b.style.border = '1px solid rgba(255,255,255,0.15)';
                b.style.color = 'rgba(255,255,255,0.6)';
            });

            btn.classList.add('bg-vedica-yellow', 'text-vedica-deep', 'font-semibold');
            btn.style.border = 'none';
            btn.style.color = '';

            items.forEach((item) => {
                const category = item.getAttribute('data-category');
                if (filter === 'All' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // EmbedSocial Script
    if (!document.getElementById('EmbedSocialHashtagScript')) {
        const script = document.createElement('script');
        script.id = 'EmbedSocialHashtagScript';
        script.src = 'https://embedsocial.com/cdn/ht.js';
        document.head.appendChild(script);
    }
}
