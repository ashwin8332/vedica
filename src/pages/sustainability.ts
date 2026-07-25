// Vedica Spring — Sustainability Page
import { ScrollReveal, initCounters } from '../utils/animations';

export async function renderSustainabilityPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <!-- ══════════════════════════════════════════
             HERO — Full-bleed ambient video (ambient-video_tcpgcp.mp4)
        ══════════════════════════════════════════ -->
        <section class="relative overflow-hidden flex items-center justify-center" style="height:100vh; min-height:600px; background:#0A1A2A;">
            <!-- Ambient video background -->
            <video class="absolute inset-0 w-full h-full object-cover z-0" autoplay loop muted playsinline
                style="object-position: center 50%; filter: saturate(0.9) contrast(1.02);">
                <source src="/gallery/ambient-video_tcpgcp.mp4" type="video/mp4" />
            </video>

            <!-- Cinematic vignettes -->
            <div class="absolute inset-0 z-10 pointer-events-none" style="background: linear-gradient(180deg, rgba(8,22,40,0.35) 0%, rgba(8,22,40,0.12) 30%, transparent 55%);"></div>
            <div class="absolute inset-0 z-10 pointer-events-none" style="background: linear-gradient(0deg, rgba(8,22,40,0.65) 0%, rgba(8,22,40,0.2) 20%, transparent 45%);"></div>
            <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(ellipse at center, transparent 40%, rgba(8,22,40,0.18) 80%);"></div>

            <!-- Film grain overlay -->
            <div class="absolute inset-0 z-10 pointer-events-none" style="opacity:0.08; mix-blend-mode:overlay; background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\");"></div>

            <!-- Edge hairlines -->
            <div class="hidden md:block absolute top-32 bottom-32 left-12 w-px pointer-events-none z-20" style="background: rgba(255,255,255,0.2);"></div>
            <div class="hidden md:block absolute top-32 bottom-32 right-12 w-px pointer-events-none z-20" style="background: rgba(255,255,255,0.2);"></div>

            <!-- Hero Content -->
            <div class="relative z-30 text-center px-6 max-w-4xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-8">
                    <div class="rule-gold"></div>
                    <span class="eyebrow" style="color:rgba(255,255,255,0.8);">Bisleri · Greener Promise</span>
                    <div class="rule-gold"></div>
                </div>
                <h1 style="font-family: var(--serif); font-size: clamp(48px, 9vw, 110px); font-weight: 300; color: #fff; line-height: 1.0;">
                    Sustainability<br><em style="color: var(--vedica-yellow);">at our heart</em>
                </h1>
                <p class="mt-8 font-inter font-light max-w-xl mx-auto" style="color:rgba(255,255,255,0.65); font-size: 18px; line-height: 1.75;">
                    We take more than water from the mountain. We take a responsibility — to protect it, restore it, and leave it better than we found it.
                </p>
                <!-- Scroll cue -->
                <div class="flex flex-col items-center gap-3 mt-12" style="font-family: var(--sans); font-size:9px; letter-spacing:0.32em; text-transform:uppercase; color:rgba(255,255,255,0.55);">
                    <div class="scroll-cue-line"></div>
                    <span>Scroll to explore</span>
                </div>
            </div>

            <!-- Bottom spec strip -->
            <div class="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-10 pointer-events-none"
                style="font-family: var(--sans); font-size:10px; letter-spacing:0.28em; text-transform:uppercase; color:rgba(255,255,255,0.65);">
                <span>Recyclable Packaging</span>
                <span class="w-1.5 h-1.5 rounded-full" style="background: var(--vedica-yellow);"></span>
                <span>Bottles for Change</span>
                <span class="w-1.5 h-1.5 rounded-full" style="background: var(--vedica-yellow);"></span>
                <span>Carbon Conscious</span>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             MAIN SUSTAINABILITY — Split Layout (mirrors original)
        ══════════════════════════════════════════ -->
        <section id="sustain" class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 30% 50%, rgba(0,92,171,0.05) 0%, transparent 55%);"></div>
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <!-- Left: Content -->
                    <div class="slide-left">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                            <span class="eyebrow" style="color: var(--vedica-blue);">Our Green Commitment</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400; line-height: 1.1; margin-bottom: 24px;">
                            Sustainability<br><em>at our heart</em>
                        </h2>

                        <!-- Bisleri Greener Promise badge -->
                        <div class="flex items-center gap-4 mb-8 px-5 py-4 rounded-xl" style="background: linear-gradient(135deg, #EAF4FA, #F0F8FD); border: 1px solid rgba(0,92,171,0.12);">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style="background: #005CAB;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="#FCDC00"/>
                                </svg>
                            </div>
                            <div>
                                <div class="font-inter font-semibold text-sm" style="color: var(--vedica-deep);">Bisleri's Greener Promise</div>
                                <div class="font-inter text-xs" style="color: rgba(10,26,42,0.55);">Recycling more plastic than we put out</div>
                            </div>
                        </div>

                        <p class="font-inter leading-relaxed mb-6" style="color: rgba(10,26,42,0.65); font-size: 16px; line-height: 1.8;">
                            Vedica is part of Bisleri's Greener Promise — a commitment to recycle more plastic than we put out, ensuring a positive impact on the planet. Through initiatives like <strong style="color: var(--vedica-blue);">Bottles for Change</strong>, we champion responsible recycling and circular use of resources.
                        </p>
                        <p class="font-inter leading-relaxed mb-10" style="color: rgba(10,26,42,0.55); font-size: 15px; line-height: 1.8;">
                            With eco-friendly glass and fully recyclable PET packaging, Vedica reflects our vision to leave a cleaner, more sustainable world for generations to come.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="https://bisleri.com/greener-promise" target="_blank" rel="noopener" class="btn-primary rounded-sm">
                                Learn More
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <a href="/contact" class="btn-outline-blue rounded-sm">Partner With Us</a>
                        </div>
                    </div>

                    <!-- Right: Recycling GIF from official site -->
                    <div class="slide-right flex items-center justify-center">
                        <div class="relative">
                            <!-- Glow ring behind GIF -->
                            <div class="absolute inset-0 -m-8 rounded-full pointer-events-none"
                                style="background: radial-gradient(ellipse at center, rgba(0,92,171,0.12) 0%, transparent 70%); filter: blur(20px);"></div>
                            <img src="https://cdn.prod.website-files.com/69413f11814a3c1222a049cd/69afbd8ab2440beefdf5bb96_b4a7590654fc72d23f832ec23ec1422a_vedica_sus.gif"
                                alt="Vedica Sustainability — Bottles for Change"
                                class="relative z-10 w-full max-w-md"
                                style="filter: drop-shadow(0 20px 40px rgba(0,92,171,0.2));" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             SUSTAINABILITY STATS — Animated Counters
        ══════════════════════════════════════════ -->
        <section class="relative py-24 px-6" style="background: var(--vedica-deep);">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, rgba(0,92,171,0.15) 0%, transparent 60%);"></div>
            <div class="relative max-w-5xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    ${[
                        { value: 100, suffix: '%', label: 'Recyclable Packaging', sub: 'Glass & PET' },
                        { value: 120, suffix: 'K+', label: 'Trees Planted', sub: 'Himalayan reforestation' },
                        { value: 0,   suffix: '', label: 'Artificial Additives', sub: 'Always pure' },
                        { value: 50,  suffix: '+', label: 'Years of Green Pledge', sub: 'Bisleri commitment' },
                    ].map((s, i) => `
                        <div class="fade-up" style="animation-delay:${i*120}ms;">
                            <div style="font-family: var(--serif); font-size: clamp(40px, 6vw, 68px); color: var(--vedica-yellow); font-weight:400; line-height:1;">
                                <span data-counter="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span>
                            </div>
                            <div class="text-white font-inter font-medium mt-2 text-base">${s.label}</div>
                            <div class="font-inter text-xs mt-1" style="color: rgba(168,200,222,0.6);">${s.sub}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             THREE PILLARS — Packaging, Initiative, Planet
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Three Pillars of our Promise</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 52px); color: var(--vedica-deep); font-weight:400;">
                        The <em>greener</em> way forward
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${[
                        {
                            num: '01',
                            title: 'Recyclable Packaging',
                            desc: 'Our glass bottles and PET containers are 100% recyclable. Every form of Vedica packaging is designed to complete its lifecycle responsibly.',
                            tag: 'Eco-Friendly Glass · PET',
                        },
                        {
                            num: '02',
                            title: 'Bottles for Change',
                            desc: 'We actively participate in India\'s largest plastic recycling initiative — turning used bottles into usable materials through community-level collection drives.',
                            tag: 'Circular Economy',
                        },
                        {
                            num: '03',
                            title: 'Greener Promise',
                            desc: 'As part of Bisleri\'s commitment, Vedica pledges to recycle more plastic than it puts out — creating a net-positive environmental footprint.',
                            tag: 'Net Positive Impact',
                        },
                    ].map((p, i) => `
                        <div class="fade-up rounded-2xl p-8" style="animation-delay:${i*140}ms; background:white; border:1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <div style="font-family: var(--serif); font-size: 52px; color: var(--vedica-blue); font-weight:400; line-height:1; margin-bottom:12px;">${p.num}</div>
                            <h3 class="font-inter font-semibold text-lg mb-3" style="color: var(--vedica-deep);">${p.title}</h3>
                            <p class="font-inter text-sm leading-relaxed mb-5" style="color: rgba(10,26,42,0.55);">${p.desc}</p>
                            <div class="inline-block px-3 py-1 rounded-full text-xs font-inter" style="background: rgba(0,92,171,0.08); color: var(--vedica-blue); letter-spacing:0.05em;">${p.tag}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             CSR — Be Kind to Every Kind (Video section)
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="slide-left">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold"></div>
                            <span class="eyebrow" style="color: rgba(255,255,255,0.7);">CSR Initiative</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(32px, 4vw, 52px); color: #fff; font-weight:400; margin-bottom: 20px;">
                            Be Kind to<br><em style="color: var(--vedica-yellow);">Every Kind</em>
                        </h2>
                        <p class="font-inter leading-relaxed mb-8" style="color: rgba(168,200,222,0.7); font-size:16px; line-height:1.8;">
                            At Vedica Himalayan Spring Water, kindness towards animals is more than a belief — it's a responsibility. Through our initiative, we support organisations working tirelessly to rescue, shelter and care for animals across India.
                        </p>
                        <div class="flex flex-col gap-4">
                            ${[
                                'Rescue & rehabilitation support',
                                'Shelter care funding',
                                'Animal welfare awareness campaigns',
                                'Partnering with NGOs across India',
                            ].map(item => `
                                <div class="flex items-center gap-3">
                                    <div class="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style="background: rgba(252,220,0,0.15); border: 1px solid rgba(252,220,0,0.35);">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#FCDC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <span class="font-inter text-sm" style="color: rgba(255,255,255,0.7);">${item}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- CSR Vedica bottle reference video -->
                    <div class="slide-right">
                        <div class="relative rounded-2xl overflow-hidden" style="box-shadow: 0 24px 60px rgba(0,0,0,0.4);">
                            <video class="w-full object-cover" autoplay loop muted playsinline style="max-height: 500px; object-position: center;">
                                <source src="/gallery/Exact_Vedica_bottle_reference.mp4" type="video/mp4" />
                            </video>
                            <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(0deg, rgba(10,26,42,0.4) 0%, transparent 40%);"></div>
                            <div class="absolute bottom-6 left-6">
                                <div class="eyebrow mb-1" style="color:rgba(255,255,255,0.6);">Vedica Spring</div>
                                <div style="font-family:var(--serif); font-size:22px; color:#fff; font-weight:400;">Pure. Natural. Alive.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             SOCIAL FEED — Stories in Every Drop
             EmbedSocial hashtag widget from vedicaspring.com
        ══════════════════════════════════════════ -->
        <section id="stories" class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Stories in Every Drop</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 5vw, 54px); color: var(--vedica-deep); font-weight:400;">
                        From the community,<br><em>for the community</em>
                    </h2>
                    <p class="fade-up delay-200 font-inter max-w-lg mx-auto mt-4" style="color: rgba(10,26,42,0.55); font-size:16px; line-height:1.7;">
                        From the stillness of peaks to the rhythm of life — echoes of Vedica's journey on social.
                    </p>
                </div>

                <!-- Instagram Embed — Official EmbedSocial widget from vedicaspring.com -->
                <div class="fade-up mb-12" style="min-height:400px;">
                    <div class="embedsocial-hashtag" data-ref="93273814acdcb0fe25fbd7b48513b268ce73b84f"></div>
                </div>

                <!-- Social Links — animated pill buttons (matching original style) -->
                <div class="flex items-center justify-center flex-wrap gap-4 mt-10 fade-up delay-200">
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/vedicaspring/?hl=en" target="_blank" rel="noopener"
                        class="social-pill-btn group"
                        style="display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; border:1px solid rgba(0,92,171,0.2); background:white; text-decoration:none; transition: all 0.4s ease; box-shadow: 0 2px 12px rgba(0,92,171,0.08);"
                        onmouseenter="this.style.background='#18307a'; this.style.borderColor='#18307a'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#fff')); this.querySelector('.social-label').style.color='#fff';"
                        onmouseleave="this.style.background='white'; this.style.borderColor='rgba(0,92,171,0.2)'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#18307A')); this.querySelector('.social-label').style.color='#18307A';">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M10.125 0H3.375C1.512 0 0 1.512 0 3.375V10.125C0 11.988 1.512 13.5 3.375 13.5H10.125C11.988 13.5 13.5 11.988 13.5 10.125V3.375C13.5 1.512 11.988 0 10.125 0ZM6.75 10.125C4.887 10.125 3.375 8.613 3.375 6.75C3.375 4.887 4.887 3.375 6.75 3.375C8.613 3.375 10.125 4.887 10.125 6.75C10.125 8.613 8.613 10.125 6.75 10.125ZM10.3613 3.7935C9.99 3.7935 9.68625 3.48975 9.68625 3.1185C9.68625 2.74725 9.99 2.4435 10.3613 2.4435C10.7325 2.4435 11.0363 2.74725 11.0363 3.1185C11.0363 3.48975 10.7325 3.7935 10.3613 3.7935Z" fill="#18307A"/><path d="M6.7501 8.77461C7.86847 8.77461 8.7751 7.86799 8.7751 6.74961C8.7751 5.63123 7.86847 4.72461 6.7501 4.72461C5.63172 4.72461 4.7251 5.63123 4.7251 6.74961C4.7251 7.86799 5.63172 8.77461 6.7501 8.77461Z" fill="#18307A"/></svg>
                        <span class="social-label font-inter font-semibold text-sm" style="color: #18307A; transition: color 0.3s;">Instagram</span>
                    </a>

                    <!-- YouTube -->
                    <a href="https://www.youtube.com/@vedicaspring1633" target="_blank" rel="noopener"
                        class="social-pill-btn"
                        style="display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; border:1px solid rgba(0,92,171,0.2); background:white; text-decoration:none; transition: all 0.4s ease; box-shadow: 0 2px 12px rgba(0,92,171,0.08);"
                        onmouseenter="this.style.background='#18307a'; this.style.borderColor='#18307a'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#fff')); this.querySelector('.social-label').style.color='#fff';"
                        onmouseleave="this.style.background='white'; this.style.borderColor='rgba(0,92,171,0.2)'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#18307A')); this.querySelector('.social-label').style.color='#18307A';">
                        <svg width="22" height="14" viewBox="0 0 18 12" fill="none"><path d="M17.0593 3.21687C16.9536 2.19651 16.7262 1.06854 15.8892 0.475765C15.2409 0.0160819 14.3888-0.000912106 13.5933 3.18009e-05C11.9118 3.18009e-05 10.2293 0.00286721 8.54772 0.00381112C6.93034 0.00569893 5.31296 0.00664169 3.69558 0.0085295C3.01994 0.0085295 2.36317-0.0433865 1.73566 0.249225C1.19684 0.500304 0.775042 0.977925 0.521206 1.50934C0.169232 2.24842 0.0956324 3.08567 0.053169 3.90309C-0.0251522 5.39163-0.0166595 6.88395 0.0767598 8.37155C0.145645 9.45704 0.320213 10.6567 1.1591 11.3486C1.90268 11.9612 2.95199 11.9914 3.91638 11.9924C6.97752 11.9952 10.0396 11.998 13.1017 11.9999C13.4942 12.0009 13.9038 11.9933 14.3039 11.9499C15.0908 11.8649 15.841 11.6394 16.3468 11.056C16.8573 10.468 16.9885 9.6496 17.0659 8.87465C17.2546 6.99439 17.2527 5.09619 17.0593 3.21687ZM6.77747 8.63584V3.36412L11.3409 5.99951L6.77747 8.63584Z" fill="#18307A"/></svg>
                        <span class="social-label font-inter font-semibold text-sm" style="color:#18307A; transition:color 0.3s;">YouTube</span>
                    </a>

                    <!-- Facebook -->
                    <a href="https://www.facebook.com/VedicaSpring/" target="_blank" rel="noopener"
                        class="social-pill-btn"
                        style="display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; border:1px solid rgba(0,92,171,0.2); background:white; text-decoration:none; transition: all 0.4s ease; box-shadow: 0 2px 12px rgba(0,92,171,0.08);"
                        onmouseenter="this.style.background='#18307a'; this.style.borderColor='#18307a'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#fff')); this.querySelector('.social-label').style.color='#fff';"
                        onmouseleave="this.style.background='white'; this.style.borderColor='rgba(0,92,171,0.2)'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#18307A')); this.querySelector('.social-label').style.color='#18307A';">
                        <svg width="10" height="18" viewBox="0 0 8 14" fill="none"><path d="M4.96317 3.15463V5.12843H7.40413L7.01761 7.78723H4.96317V13.913C4.55126 13.9702 4.12984 14 3.70207 14C3.20829 14 2.7234 13.9606 2.2512 13.8845V7.78723H0V5.12843H2.2512V2.71341C2.2512 1.21513 3.46533 0 4.9638 0V0.00127097C4.96825 0.00127097 4.97205 0 4.9765 0H7.40477V2.29948H5.81808C5.34651 2.29948 4.9638 2.6823 4.9638 3.154L4.96317 3.15463Z" fill="#18307A"/></svg>
                        <span class="social-label font-inter font-semibold text-sm" style="color:#18307A; transition:color 0.3s;">Facebook</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             VEDICA — Life Full of Altitude (YouTube Embed)
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <!-- YouTube embed -->
                    <div class="slide-left">
                        <div class="relative rounded-2xl overflow-hidden" style="padding-top: 56.25%; box-shadow: 0 24px 60px rgba(0,0,0,0.5);">
                            <iframe
                                class="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/B6PLJzSFLb0?rel=0&controls=1&autoplay=0&mute=0"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                                title="A Life Full Of Altitude | ft Rana Daggubati | Vedica Spring">
                            </iframe>
                        </div>
                    </div>

                    <!-- Quote / editorial -->
                    <div class="slide-right text-white">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold"></div>
                            <span class="eyebrow" style="color: rgba(255,255,255,0.7);">A Life Full of Altitude</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); font-weight:300; line-height:1.1; margin-bottom:20px;">
                            <em style="color: var(--vedica-yellow);">Vedica</em><br>a life full<br>of altitude
                        </h2>
                        <p class="font-inter leading-relaxed mb-8" style="color: rgba(168,200,222,0.7); font-size:16px; line-height:1.8;">
                            Featuring Rana Daggubati — a new expression of the good life, high above the world, where every sip carries the soul of the Himalayas.
                        </p>
                        <blockquote class="glass rounded-xl p-6 mb-8" style="border-left: 3px solid var(--vedica-yellow);">
                            <p style="font-family: var(--serif); font-size: 22px; font-style:italic; color:#fff; line-height:1.5;">
                                "Where silence holds the sky, a snowflake remembers its first breath."
                            </p>
                            <cite class="font-inter text-xs mt-3 block" style="color: rgba(168,200,222,0.6); letter-spacing:0.15em; text-transform:uppercase;">— Chapter 01 · Snow</cite>
                        </blockquote>
                        <a href="https://www.youtube.com/@vedicaspring1633" target="_blank" rel="noopener" class="btn-primary rounded-sm">
                            Watch on YouTube
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             CTA
        ══════════════════════════════════════════ -->
        <section class="py-28 px-6 text-center" style="background: linear-gradient(145deg, #EAF4FA, #F7F8FB);">
            <div class="max-w-2xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-8 fade-up">
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    <span class="eyebrow" style="color: var(--vedica-blue);">Together, We Can Do More</span>
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                </div>
                <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 52px); color: var(--vedica-deep); font-weight:400; margin-bottom:20px;">
                    Be part of the<br><em>greener promise</em>
                </h2>
                <div class="fade-up delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://bisleri.com/greener-promise" target="_blank" rel="noopener" class="btn-primary rounded-sm">Bisleri Greener Promise</a>
                    <a href="/contact" class="btn-outline-blue rounded-sm">Order Vedica Spring</a>
                </div>
            </div>
        </section>
    `;

    // Load EmbedSocial widget
    loadEmbedSocial();

    // Animations
    const reveal = new ScrollReveal(0.1);
    reveal.observeAll('.fade-up', '.slide-left', '.slide-right');
    initCounters();
}

function loadEmbedSocial() {
    if (document.getElementById('EmbedSocialHashtagScript')) return;
    const script = document.createElement('script');
    script.id = 'EmbedSocialHashtagScript';
    script.src = 'https://embedsocial.com/cdn/ht.js';
    document.head.appendChild(script);
}
