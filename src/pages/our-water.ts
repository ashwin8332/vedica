// Vedica Spring — Our Water Page (Five Chapters Deep Dive)
import { ScrollReveal, initCounters, animateMineralBars } from '../utils/animations';
import { chapters, products } from '../data/products';

export async function renderOurWaterPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <!-- HERO -->
        <section class="relative min-h-[80vh] flex items-end pb-24 overflow-hidden" style="background: linear-gradient(180deg, #1a3a5c 0%, #2e5f8a 30%, #4a80a8 60%, #c8dce9 100%); padding-top: 120px;">
            <!-- Vignette -->
            <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(180deg, rgba(10,26,42,0.6) 0%, transparent 40%, rgba(10,26,42,0.2) 100%);"></div>

            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">The Vedica Water Journey</span>
                </div>
                <h1 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(48px, 8vw, 100px); color: #fff; font-weight: 300; line-height: 1.05; max-width: 16ch;">
                    Five chapters.<br>One <em style="color: var(--vedica-yellow);">perfect</em> water.
                </h1>
                <p class="fade-up delay-200 font-inter max-w-xl" style="color: rgba(255,255,255,0.65); font-size: 17px; line-height: 1.75;">
                    From the glacial snowfields of the upper Himalayas to your glass — the complete story of how Vedica Spring comes to be.
                </p>
            </div>

            <!-- Scroll cue -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3" style="font-family: var(--sans); font-size:9px; letter-spacing:0.32em; text-transform:uppercase; color:rgba(255,255,255,0.5);">
                <div class="scroll-cue-line"></div>
                <span>Discover</span>
            </div>
        </section>

        <!-- FIVE CHAPTERS — Full narrative -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-5xl mx-auto">
                ${chapters.map((ch, i) => `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 ${i !== chapters.length - 1 ? 'border-b border-white/8' : ''}">
                        ${i % 2 === 0 ? `
                            <!-- Content Left, Visual Right -->
                            <div class="fade-up">
                                <div class="eyebrow-gold mb-4">Chapter ${String(i + 1).padStart(2, '0')}</div>
                                <h2 style="font-family: var(--serif); font-size: clamp(40px, 5vw, 64px); color: #fff; font-weight: 400; line-height: 1.05; margin-bottom: 16px;">${ch.name}</h2>
                                <p style="font-family: var(--sans); font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 20px;">${ch.subtitle}</p>
                                <p class="font-inter text-base leading-relaxed" style="color: rgba(168,200,222,0.65);">${getChapterBody(i)}</p>
                            </div>
                            <div class="fade-up delay-200 flex items-center justify-center">
                                ${getChapterVisual(i, ch)}
                            </div>
                        ` : `
                            <!-- Visual Left, Content Right -->
                            <div class="fade-up flex items-center justify-center lg:order-1">
                                ${getChapterVisual(i, ch)}
                            </div>
                            <div class="fade-up delay-200 lg:order-2">
                                <div class="eyebrow-gold mb-4">Chapter ${String(i + 1).padStart(2, '0')}</div>
                                <h2 style="font-family: var(--serif); font-size: clamp(40px, 5vw, 64px); color: #fff; font-weight: 400; line-height: 1.05; margin-bottom: 16px;">${ch.name}</h2>
                                <p style="font-family: var(--sans); font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 20px;">${ch.subtitle}</p>
                                <p class="font-inter text-base leading-relaxed" style="color: rgba(168,200,222,0.65);">${getChapterBody(i)}</p>
                            </div>
                        `}
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- MINERAL COMPOSITION -->
        <section class="py-32 px-6" style="background: #F7F8FB;">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Mineral Composition</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 56px); color: var(--vedica-deep); font-weight: 400;">
                        Nature's perfect <em>recipe</em>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${products.map((p, i) => `
                        <div class="rounded-2xl overflow-hidden fade-up" style="animation-delay: ${i*150}ms; background: white; border: 1px solid rgba(0,92,171,0.1); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <div class="px-6 py-5" style="background: linear-gradient(135deg, #EAF2F8, #F7FBFE);">
                                <div class="eyebrow mb-2" style="color: var(--vedica-blue); font-size: 9px;">${p.chapter}</div>
                                <h3 style="font-family: var(--serif); font-size: 28px; color: var(--vedica-deep);">${p.name}</h3>
                            </div>
                            <div class="p-6">
                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    ${[
                                        { label: 'pH', value: p.ph },
                                        { label: 'TDS', value: p.tds },
                                        { label: 'Calcium', value: i===0?'52 mg/L': i===1?'68 mg/L':'84 mg/L' },
                                        { label: 'Silica', value: i===0?'28 mg/L': i===1?'38 mg/L':'52 mg/L' },
                                    ].map(stat => `
                                        <div class="text-center p-3 rounded-lg" style="background: rgba(0,92,171,0.04);">
                                            <div style="font-family: var(--serif); font-size: 20px; color: var(--vedica-blue);">${stat.value}</div>
                                            <div class="eyebrow" style="color: rgba(10,26,42,0.4); font-size: 8px; margin-top: 2px;">${stat.label}</div>
                                        </div>
                                    `).join('')}
                                </div>
                                <a href="/contact" class="btn-outline-blue w-full justify-center rounded-sm text-[10px] py-3">Order ${p.name}</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-28 px-6 text-center" style="background: var(--vedica-deep);">
            <div class="max-w-2xl mx-auto">
                <h2 class="fade-up mb-6" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 54px); color: #fff; font-weight: 400;">
                    Ready to experience<br><em style="color: var(--vedica-yellow);">true purity?</em>
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center fade-up delay-200">
                    <a href="/contact" class="btn-primary rounded-sm">Order Vedica Spring</a>
                    <a href="/wellness" class="btn-ghost rounded-sm">Wellness Benefits</a>
                </div>
            </div>
        </section>
    `;

    const reveal = new ScrollReveal(0.12);
    reveal.observeAll('.fade-up', '.slide-left', '.slide-right');
    initCounters();
    animateMineralBars();
}

function getChapterBody(i: number): string {
    return [
        'High in the upper Himalayas, winter brings glacial snowfall of extraordinary purity. At 3,200 metres, above the clouds and far from any human settlement, this snow accumulates season by season — the beginning of Vedica\'s journey.',
        'As the mountain warms, the snow begins its unhurried descent through fissures and channels carved over millennia. In this profound silence — no roads, no industry, no interference — the water moves as nature intended, undisturbed.',
        'The water\'s slow journey through five distinct geological strata is where Vedica\'s mineral character is born. Limestone, granite, quartz, clay, and volcanic rock — each layer contributes essential minerals in precise, natural proportion.',
        'After two centuries of slow filtration, Vedica Spring emerges at a natural artesian spring, perfectly balanced at pH 7.4, carrying the mineral fingerprint of every geological layer it has touched. This is the water as nature delivers it.',
        'Beneath the visible spring lies an ancient aquifer — water that has rested deep within the mountain for over 200 years, accumulating rare minerals and a depth of character found in no other spring water in India.',
    ][i] || '';
}

function getChapterVisual(i: number, ch: { name: string }): string {
    const icons = ['❄️', '🌬️', '🪨', '💧', '🏺'];
    const colors = ['#A8C8DE', '#3A8AD1', '#5790bb', '#005CAB', '#FCDC00'];
    return `
        <div class="relative flex items-center justify-center" style="width: 280px; height: 280px;">
            <div class="absolute inset-0 rounded-full" style="border: 1px solid ${colors[i]}20;"></div>
            <div class="absolute rounded-full" style="inset: 20px; border: 1px solid ${colors[i]}30;"></div>
            <div class="absolute rounded-full" style="inset: 40px; border: 1px solid ${colors[i]}40;"></div>
            <div class="glass rounded-full flex flex-col items-center justify-center gap-3" style="width: 160px; height: 160px; border-color: ${colors[i]}40;">
                <span style="font-size: 52px;">${icons[i]}</span>
                <span style="font-family: var(--serif); font-size: 16px; color: ${colors[i]};">${ch.name}</span>
            </div>
        </div>
    `;
}
