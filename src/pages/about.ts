// Vedica Spring — About / Our Story Page
import { ScrollReveal, initCounters } from '../utils/animations';


export async function renderAboutPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <!-- HERO -->
        <section class="relative min-h-[70vh] flex items-end pb-20 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #1a3a5c 60%, #2e5f8a 100%); padding-top: 120px;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 30% 60%, rgba(0,92,171,0.2) 0%, transparent 60%);"></div>
            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Our Story</span>
                </div>
                <h1 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(48px, 8vw, 96px); color: #fff; font-weight: 300; line-height: 1.05; max-width: 18ch;">
                    A spring discovered.<br>A <em style="color: var(--vedica-yellow);">legacy</em> born.
                </h1>
                <p class="fade-up delay-200 font-inter max-w-xl" style="color: rgba(168,200,222,0.7); font-size: 17px; line-height: 1.75;">
                    In 2018, a conservation expedition deep in the upper Himalayas discovered something extraordinary — a natural artesian spring of unparalleled purity. Vedica Spring was born that day.
                </p>
            </div>
        </section>

        <!-- FOUNDING STORY -->
        <section class="py-32 px-6" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div class="slide-left">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">The Beginning</span>
                    </div>
                    <h2 style="font-family: var(--serif); font-size: clamp(36px, 4vw, 54px); color: var(--vedica-deep); font-weight: 400; line-height: 1.1; margin-bottom: 24px;">
                        Found at 3,200 metres.<br>Shared with the <em>world.</em>
                    </h2>
                    <p class="font-inter text-base leading-relaxed mb-6" style="color: rgba(10,26,42,0.6);">
                        Kavita Sharma, our founder, had spent a decade working in Himalayan conservation. On a research expedition in 2018, her team discovered a natural artesian spring — geologically unique, chemically pristine, and utterly unlike any water source they had encountered.
                    </p>
                    <p class="font-inter text-base leading-relaxed mb-6" style="color: rgba(10,26,42,0.55);">
                        Working with hydrogeologist Dr. Arun Bose, Kavita spent two years studying the spring's mineral composition, geological origins, and sustainable yield. What they found was remarkable: water that had travelled through five geological strata over 200+ years, emerging in perfect natural balance.
                    </p>
                    <p class="font-inter text-base leading-relaxed" style="color: rgba(10,26,42,0.5);">
                        In 2020, Vedica Spring was officially incorporated with a singular mission: to share this extraordinary water with the world — sustainably, responsibly, and with the reverence it deserves.
                    </p>
                </div>

                <!-- Stats Grid -->
                <div class="slide-right grid grid-cols-2 gap-5">
                    ${[
                        { value: 2018, suffix: '', label: 'Year Founded', sub: 'Discovered by expedition' },
                        { value: 3200, suffix: 'm', label: 'Source Altitude', sub: 'Upper Himalayas' },
                        { value: 200,  suffix: '+', label: 'Years Filtration', sub: 'Ancient geological cycle' },
                        { value: 127,  suffix: '', label: 'Quality Checks', sub: 'Per batch' },
                    ].map((stat, i) => `
                        <div class="fade-up rounded-2xl p-7 text-center" style="animation-delay:${i*100}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 16px rgba(0,92,171,0.06);">
                            <div style="font-family: var(--serif); font-size: 44px; color: var(--vedica-blue); font-weight: 400; line-height: 1;" data-counter="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
                            <div class="font-inter font-semibold mt-2 mb-1" style="color: var(--vedica-deep); font-size: 15px;">${stat.label}</div>
                            <div class="font-inter text-xs" style="color: rgba(10,26,42,0.45);">${stat.sub}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- SUSTAINABILITY PROMISE -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold"></div>
                        <span class="eyebrow">Sustainability Promise</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: #fff; font-weight: 400;">
                        We give back more<br>than we <em style="color: var(--vedica-yellow);">take</em>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${[
                        { icon: '🌱', title: 'Carbon Neutral', desc: 'All operations — from source collection to delivery — are certified carbon neutral. We offset what we cannot yet eliminate.', badge: 'Certified 2022' },
                        { icon: '♻️', title: 'Zero Waste Packaging', desc: '100% recyclable bottles and packaging. Our 2026 goal: fully circular packaging with zero virgin plastic in our supply chain.', badge: 'On Track for 2026' },
                        { icon: '🌲', title: 'Himalayan Reforestation', desc: 'For every litre sold, we plant a tree in the Himalayan foothills. To date, over 120,000 trees planted in partnership with local communities.', badge: '120,000+ Trees' },
                    ].map((item, i) => `
                        <div class="fade-up glass rounded-2xl p-8" style="animation-delay:${i*120}ms;">
                            <div class="text-5xl mb-5">${item.icon}</div>
                            <div class="eyebrow-gold mb-3">${item.badge}</div>
                            <h3 class="font-inter font-semibold mb-3 text-lg" style="color: #fff;">${item.title}</h3>
                            <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>


        <!-- VALUES -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="fade-up" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: #fff; font-weight: 400;">
                        Our <em style="color: var(--vedica-yellow);">values</em>
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${[
                        { num: '01', title: 'Purity Above All', desc: 'We will never compromise the purity of Vedica Spring. No additives. No treatment. The water is sacred.' },
                        { num: '02', title: 'Sustainability First', desc: 'Every decision — from our extraction rate to our packaging — is guided by the principle of leaving the Himalayas better than we found them.' },
                        { num: '03', title: 'Transparency Always', desc: 'We publish our full mineral analysis, extraction methodology, and sustainability reports publicly. Our customers deserve to know exactly what they\'re drinking.' },
                    ].map((v, i) => `
                        <div class="fade-up glass rounded-2xl p-8 text-center" style="animation-delay:${i*120}ms;">
                            <div style="font-family: var(--serif); font-size: 56px; color: rgba(252,220,0,0.2); font-weight: 400; line-height: 1; margin-bottom: 16px;">${v.num}</div>
                            <h3 class="font-inter font-semibold text-white mb-4 text-lg">${v.title}</h3>
                            <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${v.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-28 px-6 text-center" style="background: #F7F8FB;">
            <div class="max-w-2xl mx-auto">
                <h2 class="fade-up mb-6" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 54px); color: var(--vedica-deep); font-weight: 400;">
                    Join the Vedica<br><em>community</em>
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center fade-up delay-200">
                    <a href="/contact" class="btn-primary rounded-sm">Order Now</a>
                    <a href="/wellness" class="btn-outline-blue rounded-sm">Wellness Benefits</a>
                </div>
            </div>
        </section>
    `;

    const reveal = new ScrollReveal(0.12);
    reveal.observeAll('.fade-up', '.slide-left', '.slide-right');
    initCounters();
}
