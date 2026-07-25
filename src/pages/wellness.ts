// Vedica Spring — Wellness Page
import { ScrollReveal } from '../utils/animations';
import { features } from '../data/features';

export async function renderWellnessPage() {
    const app = document.getElementById('app');
    if (!app) return;

    const wellnessBenefits = [
        {
            title: 'Superior Hydration',
            desc: 'Vedica\'s optimal mineral balance — especially magnesium and calcium — ensures your cells absorb water more efficiently than ordinary drinking water.',
            metric: '38%', metricLabel: 'Better cellular absorption'
        },
        {
            title: 'Skin Radiance',
            desc: 'Naturally high in silica, Vedica Spring supports collagen synthesis and skin elasticity. Wellness practitioners regularly cite visible skin improvements within 30 days.',
            metric: '68mg/L', metricLabel: 'Natural silica content'
        },
        {
            title: 'Energy & Clarity',
            desc: 'Proper hydration with balanced electrolytes directly supports cognitive function, energy levels, and metabolic rate. Vedica\'s minerality makes every sip count.',
            metric: '7.4', metricLabel: 'pH — naturally alkaline'
        },
        {
            title: 'Digestive Wellness',
            desc: 'The natural alkalinity of Vedica Spring (pH 7.4) helps neutralize excess stomach acid and supports a healthy digestive environment.',
            metric: '180mg/L', metricLabel: 'Natural bicarbonate'
        },
        {
            title: 'Athletic Performance',
            desc: 'Athletes who hydrate with mineral-rich spring water show improved recovery times and endurance. Vedica\'s natural electrolyte profile makes it the professional\'s choice.',
            metric: '24mg/L', metricLabel: 'Natural magnesium'
        },
        {
            title: 'Mindful Living',
            desc: 'In Ayurvedic tradition, the quality of water is foundational to wellness. Vedica Spring, born from Himalayan sources, carries the prana — the life force — of the mountains.',
            metric: '200+', metricLabel: 'Years of natural maturation'
        },
    ];

    app.innerHTML = `
        <!-- HERO -->
        <section class="relative min-h-[75vh] flex items-end pb-20 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 50%, #1a3a5c 100%); padding-top: 120px;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 60% 50%, rgba(0,92,171,0.2) 0%, transparent 65%);"></div>

            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Wellness Philosophy</span>
                </div>
                <h1 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(48px, 8vw, 92px); color: #fff; font-weight: 300; line-height: 1.05; max-width: 18ch;">
                    Water is the<br>foundation of <em style="color: var(--vedica-yellow);">all</em> wellness
                </h1>
                <p class="fade-up delay-200 font-inter max-w-xl" style="color: rgba(168,200,222,0.7); font-size: 17px; line-height: 1.75;">
                    In Ayurveda, in modern science, in lived experience — the quality of your water determines the quality of your life. Vedica Spring exists for those who understand this.
                </p>
            </div>
        </section>

        <!-- WELLNESS BENEFITS -->
        <section class="py-32 px-6" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Health Benefits</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        Six ways Vedica<br><em>transforms</em> your wellbeing
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${wellnessBenefits.map((b, i) => `
                        <div class="fade-up rounded-2xl overflow-hidden" style="animation-delay:${i*100}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <!-- Metric banner -->
                            <div class="px-7 py-5 flex items-center gap-4" style="background: linear-gradient(135deg, #EAF2F8, #F7FBFE); border-bottom: 1px solid rgba(0,92,171,0.08);">
                                <div>
                                    <div style="font-family: var(--serif); font-size: 32px; color: var(--vedica-blue); font-weight: 400; line-height: 1;">${b.metric}</div>
                                    <div class="eyebrow" style="color: rgba(10,26,42,0.45); font-size: 8px; margin-top: 2px;">${b.metricLabel}</div>
                                </div>
                            </div>
                            <div class="p-7">
                                <h3 class="font-inter font-semibold mb-3" style="color: var(--vedica-deep); font-size: 18px;">${b.title}</h3>
                                <p class="font-inter text-sm leading-relaxed" style="color: rgba(10,26,42,0.6);">${b.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- AYURVEDA SECTION -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div class="slide-left">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold"></div>
                            <span class="eyebrow">Ancient Wisdom</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(36px, 4vw, 56px); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 24px;">
                            Vedic traditions<br>meet modern <em style="color: var(--vedica-yellow);">science</em>
                        </h2>
                        <p class="font-inter text-base leading-relaxed mb-6" style="color: rgba(168,200,222,0.65);">
                            In Ayurvedic medicine, Himalayan spring water has been revered for millennia as the highest form of water — carrying the prana (life force) of the sacred mountains.
                        </p>
                        <p class="font-inter text-base leading-relaxed mb-10" style="color: rgba(168,200,222,0.5);">
                            Modern hydrochemistry now confirms what ancient practitioners understood intuitively: water that passes through diverse geological strata acquires a mineral complexity that supports human health in ways that treated tap water or artificially mineralized water never can.
                        </p>
                        <div class="flex flex-col gap-4">
                            ${['Zero artificial mineralization', 'No UV or chemical treatment', 'Collected at natural artesian spring', 'Sealed at source — nothing added'].map(point => `
                                <div class="flex items-center gap-3">
                                    <div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(252,220,0,0.15); border: 1px solid rgba(252,220,0,0.4);">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#FCDC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <span class="font-inter text-sm" style="color: rgba(168,200,222,0.75);">${point}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Right: Quote Card -->
                    <div class="slide-right">
                        <div class="glass-dark rounded-2xl p-10 relative" style="border-color: rgba(252,220,0,0.15);">
                            <div style="font-family: var(--serif); font-size: 80px; color: var(--vedica-yellow); line-height: 0.5; opacity: 0.3; position: absolute; top: 24px; left: 32px;">"</div>
                            <blockquote class="relative z-10" style="font-family: var(--serif); font-size: clamp(22px, 3vw, 32px); color: #fff; font-weight: 300; font-style: italic; line-height: 1.45; margin-bottom: 24px;">
                                Water is the driving force of all nature. It is the source of all life.
                            </blockquote>
                            <div class="flex items-center gap-3">
                                <div class="rule-gold"></div>
                                <span class="eyebrow" style="color: var(--vedica-glacial);">Leonardo da Vinci</span>
                            </div>

                            <!-- Decorative water drop -->
                            <div class="absolute bottom-6 right-8 opacity-20">
                                <svg width="60" height="75" viewBox="0 0 60 75" fill="none">
                                    <path d="M30 3C30 3 6 35 6 50C6 63.807 16.745 74 30 74C43.255 74 54 63.807 54 50C54 35 30 3 30 3Z" stroke="#FCDC00" stroke-width="1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURES (compact) -->
        <section class="py-20 px-6" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${features.slice(0, 4).map((f, i) => `
                        <div class="text-center fade-up" style="animation-delay: ${i*100}ms;">
                            <div class="mb-5 flex items-center justify-center w-12 h-12 rounded-xl mx-auto" style="background: rgba(0,92,171,0.06);">${f.svgIcon}</div>
                            <h3 class="font-inter font-semibold mb-2" style="color: var(--vedica-deep); font-size: 15px;">${f.title}</h3>
                            <p class="font-inter text-xs leading-relaxed" style="color: rgba(10,26,42,0.55);">${f.subtitle}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-28 px-6 text-center" style="background: var(--vedica-deep);">
            <div class="max-w-2xl mx-auto">
                <h2 class="fade-up mb-6" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 54px); color: #fff; font-weight: 400;">
                    Begin your<br><em style="color: var(--vedica-yellow);">wellness journey</em>
                </h2>
                <p class="fade-up delay-100 font-inter mb-10" style="color: rgba(168,200,222,0.6); font-size: 16px; line-height: 1.7;">
                    Make Vedica Spring part of your daily wellness practice. Your body will know the difference.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center fade-up delay-200">
                    <a href="/contact" class="btn-primary rounded-sm">Order Vedica Spring</a>
                    <a href="/our-water" class="btn-ghost rounded-sm">Our Water Story</a>
                </div>
            </div>
        </section>
    `;

    const reveal = new ScrollReveal(0.12);
    reveal.observeAll('.fade-up', '.slide-left', '.slide-right');
}
