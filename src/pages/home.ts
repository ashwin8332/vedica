// Vedica Spring — Home Page (Cinematic + Scroll Canvas Sequence)
import { ScrollReveal, initCounters, animateMineralBars } from '../utils/animations';
import { products, chapters } from '../data/products';
import { features } from '../data/features';
import { testimonials } from '../data/testimonials';
import { VedicaScrollCanvas } from '../canvas';

export async function renderHomePage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `

        <!-- ══════════════════════════════════════════
             SCROLL CANVAS SEQUENCE — Sticky Himalayan Reveal
             The user scrolls through 51 frames:
             frames 1-12  : Himalayan mountains
             frames 13-25 : Water splash studio
             frames 26-51 : Bottle reveal with mountain backdrop
        ══════════════════════════════════════════ -->
        <section id="canvas-sequence" class="relative" style="height: 600vh;">
            <!-- Sticky wrapper — canvas stays fixed as user scrolls -->
            <div id="canvas-sticky" class="sticky top-0 w-full overflow-hidden" style="height: 100vh;">
                <!-- The canvas fills full viewport -->
                <canvas id="vedica-canvas" class="absolute inset-0 w-full h-full" style="background: #0A1A2A;"></canvas>

                <!-- Dark vignette for text readability -->
                <div id="canvas-vignette" class="absolute inset-0 pointer-events-none transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(10,26,42,0.45) 0%, transparent 30%, transparent 60%, rgba(10,26,42,0.65) 100%);"></div>

                <!-- Loading overlay — shown while images load -->
                <div id="canvas-loading" class="absolute inset-0 flex items-center justify-center" style="background: #0A1A2A; z-index: 10; transition: opacity 0.8s ease;">
                    <div class="flex flex-col items-center gap-5">
                        <svg width="56" height="70" viewBox="0 0 56 70" fill="none" class="animate-breathe">
                            <path d="M28 3C28 3 5 35 5 49C5 61.7 15.5 70 28 70C40.5 70 51 61.7 51 49C51 35 28 3 28 3Z" fill="#005CAB" fill-opacity="0.7"/>
                            <path d="M28 16C28 16 14 38 14 50C14 57.7 20.3 64 28 64C35.7 64 42 57.7 42 50C42 38 28 16 28 16Z" fill="#A8C8DE" fill-opacity="0.5"/>
                            <path d="M28 28C28 28 20 42 20 51C20 55.4 23.6 59 28 59C32.4 59 36 55.4 36 51C36 42 28 28 28 28Z" fill="white" fill-opacity="0.85"/>
                        </svg>
                        <div class="flex flex-col items-center gap-1">
                            <span class="text-white font-inter font-semibold text-base tracking-[0.25em] uppercase">Vedica</span>
                            <span class="font-inter font-light text-[9px] tracking-[0.4em] uppercase" style="color: var(--vedica-glacial);">Loading the Himalayas…</span>
                        </div>
                        <div class="relative w-40 h-[1px] overflow-hidden" style="background: rgba(255,255,255,0.08);">
                            <div id="canvas-load-bar" class="absolute inset-y-0 left-0 transition-all duration-300" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-yellow)); width: 0%;"></div>
                        </div>
                    </div>
                </div>

                <!-- ── Phase 1: Mountains text (frames 1-15) ── -->
                <div id="seq-phase-mountains" class="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center z-10 pointer-events-none transition-opacity duration-700 opacity-0 px-6">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="rule-gold"></div>
                        <span class="eyebrow" style="color:rgba(255,255,255,0.8);">The Himalayas · 3,200m</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h1 style="font-family: var(--serif); font-size: clamp(52px, 9vw, 120px); font-weight: 300; color: #fff; line-height: 1.0; text-shadow: 0 4px 40px rgba(10,26,42,0.5);">
                        Born at the<br><em style="color: var(--vedica-yellow);">top of the world</em>
                    </h1>
                    <p class="mt-5 font-inter font-light max-w-md" style="color:rgba(255,255,255,0.65); font-size: 17px; line-height:1.7;">
                        Where glacial snowfields begin their 200-year journey to your glass
                    </p>
                </div>

                <!-- ── Phase 2: Water studio text (frames 16-35) ── -->
                <div id="seq-phase-water" class="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none transition-opacity duration-700 opacity-0 px-6">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="rule-gold"></div>
                        <span class="eyebrow" style="color:rgba(255,255,255,0.8);">Pure · Natural · Alive</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 style="font-family: var(--serif); font-size: clamp(44px, 8vw, 100px); font-weight: 300; color: #fff; line-height: 1.0; text-shadow: 0 4px 40px rgba(10,26,42,0.4);">
                        Water as nature<br><em style="color: var(--vedica-yellow);">intended</em>
                    </h2>
                    <p class="mt-5 font-inter font-light max-w-md" style="color:rgba(255,255,255,0.65); font-size: 17px; line-height:1.7;">
                        Zero treatment. Zero additives. Pure Himalayan spring water — nothing more.
                    </p>
                </div>

                <!-- ── Phase 3: Bottle reveal text (frames 36-51) ── -->
                <div id="seq-phase-bottle" class="absolute inset-0 flex flex-col items-start justify-end pb-20 z-10 pointer-events-none transition-opacity duration-700 opacity-0 px-10 md:px-20">
                    <div class="max-w-xl">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="rule-gold"></div>
                            <span class="eyebrow" style="color:rgba(255,255,255,0.8);">Vedica Spring · Himalayan Spring Water</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(44px, 7vw, 90px); font-weight: 300; color: #fff; line-height: 1.0; text-shadow: 0 4px 40px rgba(10,26,42,0.5);">
                            <em style="color: var(--vedica-yellow);">Vedica</em><br>Spring
                        </h2>
                        <div class="flex flex-wrap gap-5 mt-5 mb-7 text-white/55 font-inter" style="font-size: 11px; letter-spacing:0.22em; text-transform:uppercase;">
                            <span>pH 7.4</span>
                            <span class="dot-sep"></span>
                            <span>TDS 142 mg/L</span>
                            <span class="dot-sep"></span>
                            <span>200+ Year Filtration</span>
                        </div>
                        <div class="pointer-events-auto flex gap-4 flex-wrap">
                            <a href="/our-water" class="btn-primary rounded-sm">Discover Our Water</a>
                            <a href="/contact" class="btn-ghost rounded-sm">Order Now</a>
                        </div>
                    </div>
                </div>

                <!-- Scroll indicator (only shown at start) -->
                <div id="scroll-cue" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-opacity duration-500 pointer-events-none" style="font-family: var(--sans); font-size:9px; letter-spacing:0.32em; text-transform:uppercase; color:rgba(255,255,255,0.6);">
                    <div class="scroll-cue-line"></div>
                    <span>Scroll to reveal</span>
                </div>

                <!-- Sequence progress bar (thin gold line at bottom) -->
                <div class="absolute bottom-0 left-0 h-[2px] w-full z-20 pointer-events-none" style="background: rgba(255,255,255,0.07);">
                    <div id="seq-progress-bar" class="h-full transition-none" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-yellow)); width: 0%;"></div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             STORY STRIP — Chapter names ticker
        ══════════════════════════════════════════ -->
        <section class="relative py-6 overflow-hidden" style="background: linear-gradient(90deg, #0A1A2A 0%, #0D2540 50%, #0A1A2A 100%);">
            <div class="flex items-center gap-12 px-8 overflow-x-auto no-scrollbar" style="scrollbar-width: none;">
                ${chapters.map((ch) => `
                    <div class="flex items-center gap-4 flex-shrink-0">
                        <div class="rule-gold"></div>
                        <span class="eyebrow text-white/50">${ch.name}</span>
                        <span class="text-white/25 font-inter text-xs">—</span>
                        <span class="text-white/40 font-inter text-xs">${ch.subtitle}</span>
                    </div>
                `).join('')}
                <div class="flex items-center gap-4 flex-shrink-0">
                    <div class="rule-gold"></div>
                    <span class="eyebrow text-white/50">Snow</span>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             BRAND STORY — Himalayan Origin
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.04]" style="border: 1px solid #005CAB;"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06]" style="border: 1px solid #005CAB;"></div>

            <div class="relative max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div class="flex items-center gap-4 mb-8 slide-left">
                            <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                            <span style="font-family: var(--sans); font-size:10px; letter-spacing:0.32em; text-transform:uppercase; color: var(--vedica-blue);">Our Origin Story</span>
                        </div>
                        <h2 class="slide-left delay-100 mb-8" style="font-family: var(--serif); font-size: clamp(38px, 5vw, 62px); font-weight: 400; color: var(--vedica-deep); line-height: 1.1;">
                            Where water begins<br>its <em>two-century</em> journey
                        </h2>
                        <p class="slide-left delay-200 leading-relaxed mb-6 font-inter" style="color: rgba(10,26,42,0.6); font-size: 16px; line-height: 1.75;">
                            High in the upper Himalayas, at an elevation of 3,200 metres, glacial snowfields begin their slow, sacred descent. Vedica Spring captures this water at its most pure — before civilization, before treatment, before compromise.
                        </p>
                        <p class="slide-left delay-300 leading-relaxed mb-10 font-inter" style="color: rgba(10,26,42,0.5); font-size: 15px; line-height: 1.75;">
                            Over two centuries, the water percolates through five distinct geological strata — each layer a gift from the mountain, imparting calcium, magnesium, silica, and trace minerals in perfect natural balance.
                        </p>
                        <a href="/our-water" class="slide-left delay-400 btn-outline-blue rounded-sm inline-flex">
                            Read the Full Story
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                    </div>

                    <div class="slide-right relative">
                        <div class="relative mx-auto" style="max-width: 420px;">
                            <div class="rounded-2xl overflow-hidden shadow-2xl" style="background: linear-gradient(180deg, #1a3a5c 0%, #2e5f8a 30%, #4a80a8 60%, #c8dce9 100%); min-height: 480px; position: relative;">
                                <svg viewBox="0 0 420 480" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full">
                                    <defs>
                                        <linearGradient id="snowGrad2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stop-color="white" stop-opacity="0.95"/>
                                            <stop offset="100%" stop-color="white" stop-opacity="0.3"/>
                                        </linearGradient>
                                        <linearGradient id="mountainGrad2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stop-color="#1a3a5c"/>
                                            <stop offset="100%" stop-color="#4a80a8"/>
                                        </linearGradient>
                                    </defs>
                                    <rect width="420" height="480" fill="url(#mountainGrad2)"/>
                                    <circle cx="80" cy="40" r="1.2" fill="white" opacity="0.7"/>
                                    <circle cx="150" cy="25" r="0.8" fill="white" opacity="0.5"/>
                                    <circle cx="320" cy="35" r="1.5" fill="white" opacity="0.6"/>
                                    <circle cx="380" cy="55" r="0.9" fill="white" opacity="0.4"/>
                                    <circle cx="240" cy="18" r="1" fill="white" opacity="0.65"/>
                                    <path d="M0 280 L80 180 L160 240 L240 160 L320 220 L420 140 L420 480 L0 480 Z" fill="#2e5f8a" opacity="0.5"/>
                                    <path d="M40 340 L210 80 L380 320 L420 340 L420 480 L0 480 Z" fill="#1a3a5c" opacity="0.9"/>
                                    <path d="M210 80 L155 170 L210 155 L265 170 Z" fill="url(#snowGrad2)"/>
                                    <circle cx="210" cy="60" r="18" fill="#FCDC00" fill-opacity="0.85"/>
                                    <circle cx="210" cy="60" r="24" fill="#FCDC00" fill-opacity="0.2"/>
                                    <circle cx="210" cy="180" r="3" fill="#A8C8DE" fill-opacity="0.7"/>
                                    <circle cx="205" cy="220" r="2.5" fill="#A8C8DE" fill-opacity="0.6"/>
                                    <circle cx="212" cy="260" r="3.5" fill="#A8C8DE" fill-opacity="0.5"/>
                                    <circle cx="207" cy="300" r="2" fill="#A8C8DE" fill-opacity="0.4"/>
                                    <ellipse cx="210" cy="420" rx="140" ry="24" fill="#A8C8DE" fill-opacity="0.3"/>
                                </svg>
                                <div class="absolute inset-0 flex flex-col justify-end p-8">
                                    <div class="flex flex-col gap-3">
                                        ${[
                                            { label: 'Altitude', value: '3,200 m', color: '#FCDC00' },
                                            { label: 'Filtration Time', value: '200+ Years', color: '#A8C8DE' },
                                            { label: 'Geological Layers', value: '5 Strata', color: '#fff' },
                                        ].map(stat => `
                                            <div class="flex items-center justify-between glass rounded-lg px-4 py-3">
                                                <span style="font-family: var(--sans); font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.6);">${stat.label}</span>
                                                <span style="font-family: var(--serif); font-size:18px; color: ${stat.color}; font-weight:500;">${stat.value}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                            <div class="absolute -top-6 -right-6 glass-dark rounded-2xl px-5 py-4 text-center" style="border-color: rgba(252,220,0,0.2);">
                                <div style="font-family: var(--serif); font-size: 32px; color: var(--vedica-yellow); font-weight: 400; line-height: 1;">7.4</div>
                                <div class="eyebrow" style="color: rgba(255,255,255,0.6); margin-top:2px;">pH Balance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             STATS — Animated Counters
        ══════════════════════════════════════════ -->
        <section class="relative py-24 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, rgba(0,92,171,0.12) 0%, transparent 65%);"></div>
            <div class="relative max-w-6xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                    ${[
                        { value: 200, suffix: '+', label: 'Years of Filtration', sublabel: 'Ancient geological journey' },
                        { value: 7.4, suffix: '',  label: 'pH Balance',          sublabel: 'Naturally alkaline' },
                        { value: 5,   suffix: '',  label: 'Mineral Layers',      sublabel: 'Geological strata' },
                        { value: 127, suffix: '',  label: 'Quality Checks',      sublabel: 'Per batch tested' },
                    ].map((stat, i) => `
                        <div class="text-center fade-up" style="animation-delay: ${i * 120}ms;">
                            <div class="mb-2" style="font-family: var(--serif); font-size: clamp(40px, 6vw, 72px); color: var(--vedica-yellow); font-weight: 400; line-height: 1;">
                                <span data-counter="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</span>
                            </div>
                            <div class="text-white text-base mb-1 font-inter font-medium">${stat.label}</div>
                            <div class="font-inter text-sm" style="color: rgba(168,200,222,0.6);">${stat.sublabel}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             PRODUCT SHOWCASE — Three Expressions
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden section-water-light">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Three Expressions</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        One source. Three <em>stories.</em>
                    </h2>
                    <p class="fade-up delay-200 mt-4 font-inter max-w-xl mx-auto" style="color: rgba(10,26,42,0.55); font-size: 16px; line-height: 1.7;">
                        Each Vedica expression captures a different chapter of the Himalayan water journey, with its own character and mineral fingerprint.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${products.map((product, i) => `
                        <div class="product-card-vedica rounded-2xl overflow-hidden fade-up" style="animation-delay: ${i * 150}ms;">
                            <div class="relative h-64 overflow-hidden" style="background: linear-gradient(145deg, ${product.id === 'snow' ? '#EAF4FA, #F7FBFE' : product.id === 'spring' ? '#D4E8F5, #EAF2F9' : '#BDD8ED, #D4E8F5'});">
                                <div class="absolute top-5 left-5">
                                    <span class="eyebrow" style="color: var(--vedica-blue); font-size: 9px;">${product.chapter}</span>
                                </div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="relative">
                                        <div class="absolute inset-0 rounded-full" style="border: 1px solid ${product.accentColor}30; width: 140px; height: 140px; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
                                        <div class="absolute inset-0 rounded-full" style="border: 1px solid ${product.accentColor}20; width: 190px; height: 190px; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
                                        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-breathe" style="animation-delay: ${i * 200}ms;">
                                            <path d="M45 5C45 5 10 50 10 70C10 90.987 25.744 105 45 105C64.256 105 80 90.987 80 70C80 50 45 5 45 5Z" fill="${product.accentColor}" fill-opacity="${product.id === 'snow' ? '0.35' : product.id === 'spring' ? '0.55' : '0.65'}"/>
                                            <path d="M45 25C45 25 22 58 22 72C22 84.15 32.297 94 45 94C57.703 94 68 84.15 68 72C68 58 45 25 45 25Z" fill="${product.accentColor}" fill-opacity="${product.id === 'snow' ? '0.25' : '0.35'}"/>
                                            <path d="M45 42C45 42 32 62 32 74C32 80.627 37.816 86 45 86C52.184 86 58 80.627 58 74C58 62 45 42 45 42Z" fill="white" fill-opacity="0.65"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 h-16" style="background: linear-gradient(0deg, rgba(255,255,255,0.8), transparent);"></div>
                            </div>
                            <div class="p-7">
                                <div class="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 style="font-family: var(--serif); font-size: 28px; color: var(--vedica-deep); font-weight: 400; line-height: 1;">${product.name}</h3>
                                        <p style="font-family: var(--sans); font-size: 11px; letter-spacing:0.18em; text-transform:uppercase; color: var(--vedica-blue); margin-top: 4px;">${product.tagline}</p>
                                    </div>
                                    <span class="px-3 py-1 rounded-full text-[9px] font-inter font-semibold tracking-wider uppercase" style="background: rgba(0,92,171,0.08); color: var(--vedica-blue);">${product.badgeText}</span>
                                </div>
                                <p class="text-sm font-inter leading-relaxed mb-5" style="color: rgba(10,26,42,0.6);">${product.description}</p>
                                <div class="flex items-center gap-4 mb-5 pb-5" style="border-bottom: 1px solid rgba(0,92,171,0.1);">
                                    <div class="text-center">
                                        <div style="font-family: var(--serif); font-size: 22px; color: var(--vedica-blue);">${product.ph}</div>
                                        <div class="eyebrow" style="color: rgba(10,26,42,0.45); font-size: 8px;">pH</div>
                                    </div>
                                    <div style="width: 1px; height: 32px; background: rgba(0,92,171,0.15);"></div>
                                    <div class="text-center">
                                        <div style="font-family: var(--serif); font-size: 22px; color: var(--vedica-blue);">${product.tds.split(' ')[0]}</div>
                                        <div class="eyebrow" style="color: rgba(10,26,42,0.45); font-size: 8px;">mg/L TDS</div>
                                    </div>
                                    <div style="width: 1px; height: 32px; background: rgba(0,92,171,0.15);"></div>
                                    <div class="flex-1">
                                        <div class="eyebrow mb-1" style="color: rgba(10,26,42,0.45); font-size: 8px;">Volume</div>
                                        <div style="font-family: var(--sans); font-size: 11px; color: rgba(10,26,42,0.65);">${product.volume}</div>
                                    </div>
                                </div>
                                <a href="/contact" class="btn-outline-blue w-full justify-center rounded-sm text-[10px] py-3">Order ${product.name}</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             FIVE CHAPTERS TIMELINE
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(135deg, rgba(0,92,171,0.06) 0%, transparent 50%, rgba(0,92,171,0.06) 100%);"></div>
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold"></div>
                        <span class="eyebrow">The Five Chapters</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: #fff; font-weight: 400;">
                        A journey <em style="color: var(--vedica-yellow);">200 years</em> in the making
                    </h2>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px" style="background: linear-gradient(180deg, transparent, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent); transform: translateX(-50%);"></div>
                    <div class="flex flex-col gap-0">
                        ${chapters.map((ch, i) => `
                            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 fade-up" style="animation-delay: ${i * 100}ms;">
                                ${i % 2 === 0 ? `
                                    <div class="md:text-right md:pr-16">
                                        <span class="eyebrow mb-3 block" style="color: var(--vedica-yellow);">${String(i + 1).padStart(2, '0')}</span>
                                        <h3 style="font-family: var(--serif); font-size: clamp(28px, 3vw, 42px); color: #fff; font-weight: 400; margin-bottom: 12px;">${ch.name}</h3>
                                        <p style="font-family: var(--sans); font-size: 11px; letter-spacing:0.18em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 12px;">${ch.subtitle}</p>
                                        <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${ch.desc}</p>
                                    </div>
                                    <div class="hidden md:flex items-center justify-start md:col-start-2 md:pl-16 relative">
                                        <div class="absolute left-0 -translate-x-[calc(50%+0.5px)] w-4 h-4 rounded-full" style="background: var(--vedica-yellow); box-shadow: 0 0 0 4px rgba(252,220,0,0.2), 0 0 20px rgba(252,220,0,0.3);"></div>
                                        <div class="glass rounded-xl px-5 py-4 ml-6">
                                            <div style="font-family: var(--serif); font-size: 24px; color: var(--vedica-yellow); font-weight:600;">0${i+1}</div>
                                        </div>
                                    </div>
                                ` : `
                                    <div class="md:pl-16 md:col-start-2 md:row-start-1">
                                        <span class="eyebrow mb-3 block" style="color: var(--vedica-yellow);">${String(i + 1).padStart(2, '0')}</span>
                                        <h3 style="font-family: var(--serif); font-size: clamp(28px, 3vw, 42px); color: #fff; font-weight: 400; margin-bottom: 12px;">${ch.name}</h3>
                                        <p style="font-family: var(--sans); font-size: 11px; letter-spacing:0.18em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 12px;">${ch.subtitle}</p>
                                        <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${ch.desc}</p>
                                    </div>
                                    <div class="hidden md:flex items-center justify-end md:pr-16 md:col-start-1 md:row-start-1 relative">
                                        <div class="glass rounded-xl px-5 py-4 mr-6">
                                            <div style="font-family: var(--serif); font-size: 24px; color: var(--vedica-yellow); font-weight:600;">0${i+1}</div>
                                        </div>
                                        <div class="absolute right-0 translate-x-[calc(50%+0.5px)] w-4 h-4 rounded-full" style="background: var(--vedica-yellow); box-shadow: 0 0 0 4px rgba(252,220,0,0.2), 0 0 20px rgba(252,220,0,0.3);"></div>
                                    </div>
                                `}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="text-center mt-16 fade-up">
                    <a href="/our-water" class="btn-primary rounded-sm">
                        Explore All Five Chapters
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             WELLNESS FEATURES GRID
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">What Makes Vedica Different</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        Nature's <em>perfection</em>,<br>untouched
                    </h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${features.map((f, i) => `
                        <div class="fade-up group" style="animation-delay: ${i * 80}ms;">
                            <div class="rounded-2xl p-7 h-full transition-all duration-500 hover:-translate-y-2" style="background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 20px rgba(0,92,171,0.06);" onmouseenter="this.style.boxShadow='0 20px 40px rgba(0,92,171,0.15)'" onmouseleave="this.style.boxShadow='0 4px 20px rgba(0,92,171,0.06)'">
                                <div class="mb-5 flex items-center justify-center w-12 h-12 rounded-xl" style="background: rgba(0,92,171,0.06);">${f.svgIcon}</div>
                                <div class="eyebrow mb-2" style="color: var(--vedica-blue); font-size: 9px;">${f.subtitle}</div>
                                <h3 class="mb-3 font-inter font-semibold" style="color: var(--vedica-deep); font-size: 16px;">${f.title}</h3>
                                <p class="font-inter text-sm leading-relaxed" style="color: rgba(10,26,42,0.55);">${f.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             MINERAL COMPOSITION
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-16">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold"></div>
                        <span class="eyebrow">Mineral Profile</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 50px); color: #fff; font-weight: 400;">
                        Nature's <em style="color: var(--vedica-glacial);">mineral recipe</em>
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div class="flex flex-col gap-8 slide-left">
                        ${[
                            { name: 'Calcium',      width: 78, unit: '68 mg/L' },
                            { name: 'Magnesium',    width: 56, unit: '24 mg/L' },
                            { name: 'Silica',       width: 65, unit: '38 mg/L' },
                            { name: 'Potassium',    width: 38, unit: '12 mg/L' },
                            { name: 'Bicarbonate',  width: 88, unit: '180 mg/L' },
                        ].map(mineral => `
                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="font-inter text-sm font-medium text-white/80">${mineral.name}</span>
                                    <span class="font-inter text-xs" style="color: var(--vedica-glacial);">${mineral.unit}</span>
                                </div>
                                <div class="h-[3px] rounded-full overflow-hidden" style="background: rgba(255,255,255,0.08);">
                                    <div class="mineral-bar h-full rounded-full" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-glacial)); width: ${mineral.width}%;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="slide-right flex flex-col items-center gap-8">
                        <div class="relative glass rounded-full flex items-center justify-center" style="width: 220px; height: 220px;">
                            <div class="absolute inset-2 rounded-full" style="border: 1px solid rgba(252,220,0,0.2);"></div>
                            <div class="text-center">
                                <div style="font-family: var(--serif); font-size: 64px; color: var(--vedica-yellow); font-weight: 400; line-height: 1;">7.4</div>
                                <div class="eyebrow" style="color: rgba(168,200,222,0.7);">pH Level</div>
                                <div class="font-inter text-xs mt-1" style="color: rgba(255,255,255,0.4);">Naturally Alkaline</div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="h-3 rounded-full mb-2 relative" style="background: linear-gradient(90deg, #ff6b6b 0%, #ffd700 50%, #51cf66 100%);">
                                <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-vedica-yellow shadow-lg" style="left: calc(74% - 8px);"></div>
                            </div>
                            <div class="flex justify-between font-inter text-[10px]" style="color: rgba(255,255,255,0.35);">
                                <span>0 Acidic</span>
                                <span>7 Neutral</span>
                                <span>14 Alkaline</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             TESTIMONIALS
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">From Our Community</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        What those who<br><em>truly taste</em> say
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${testimonials.map((t, i) => `
                        <div class="fade-up rounded-2xl p-7" style="animation-delay: ${i * 100}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <div class="flex gap-1 mb-5">
                                ${'★'.repeat(t.rating).split('').map(() => `<span style="color: var(--vedica-yellow); font-size: 14px;">★</span>`).join('')}
                            </div>
                            <blockquote class="font-inter text-sm leading-relaxed mb-6" style="color: rgba(10,26,42,0.65); font-style: italic;">"${t.content}"</blockquote>
                            <div class="flex items-center gap-4 pt-4" style="border-top: 1px solid rgba(0,92,171,0.08);">
                                <div class="w-10 h-10 rounded-full flex items-center justify-center font-inter font-semibold text-sm" style="background: linear-gradient(135deg, var(--vedica-blue), var(--vedica-blue-soft)); color: white;">${t.initials}</div>
                                <div>
                                    <div class="font-inter font-semibold text-sm" style="color: var(--vedica-deep);">${t.name}</div>
                                    <div class="font-inter text-xs" style="color: rgba(10,26,42,0.45);">${t.role}, ${t.company}</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             FINAL CTA
        ══════════════════════════════════════════ -->
        <section class="relative py-40 px-6 overflow-hidden flex items-center justify-center text-center" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 40%, #1a3a5c 100%); min-height: 60vh;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 100%, rgba(0,92,171,0.25) 0%, transparent 60%);"></div>
            <div class="absolute inset-0 pointer-events-none overflow-hidden">
                <div class="ripple-circle absolute" style="width: 400px; height: 400px; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: 0s; animation-duration: 4s;"></div>
                <div class="ripple-circle absolute" style="width: 400px; height: 400px; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: 1.5s; animation-duration: 4s;"></div>
                <div class="ripple-circle absolute" style="width: 400px; height: 400px; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: 3s; animation-duration: 4s;"></div>
            </div>
            <div class="relative z-10 max-w-3xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Experience Vedica</span>
                    <div class="rule-gold"></div>
                </div>
                <h2 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(40px, 6vw, 72px); color: #fff; font-weight: 300; line-height: 1.1;">
                    Taste water as<br>nature <em style="color: var(--vedica-yellow);">intended</em>
                </h2>
                <p class="fade-up delay-200 font-inter mb-12 max-w-lg mx-auto" style="color: rgba(168,200,222,0.7); font-size: 16px; line-height: 1.7;">
                    Order Vedica Spring for your home, restaurant, or wellness centre. Wholesale and retail available across India.
                </p>
                <div class="fade-up delay-300 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <a href="/contact" class="btn-primary rounded-sm">
                        Order Vedica Spring
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                    <a href="/our-water" class="btn-ghost rounded-sm">Explore Our Water</a>
                </div>
            </div>
        </section>
    `;

    // ── Init Scroll Canvas ──────────────────────────────────────────────────
    initScrollCanvas();

    // ── Init rest of page ───────────────────────────────────────────────────
    const reveal = new ScrollReveal(0.12);
    reveal.observeAll('.fade-up', '.slide-left', '.slide-right', '.fade-in');
    initCounters();
    animateMineralBars();
}

// ─────────────────────────────────────────────────────────────────────────────
// Scroll Canvas Controller
// ─────────────────────────────────────────────────────────────────────────────
function initScrollCanvas() {
    const TOTAL_FRAMES = 51;
    const canvas = new VedicaScrollCanvas('vedica-canvas', TOTAL_FRAMES);

    const loadingEl   = document.getElementById('canvas-loading')!;
    const loadBar     = document.getElementById('canvas-load-bar')!;
    const scrollCue   = document.getElementById('scroll-cue')!;
    const progressBar = document.getElementById('seq-progress-bar')!;

    const phaseMountains = document.getElementById('seq-phase-mountains')!;
    const phaseWater     = document.getElementById('seq-phase-water')!;
    const phaseBottle    = document.getElementById('seq-phase-bottle')!;

    // Animate load bar during preload
    let fakeProgress = 0;
    const loadInterval = setInterval(() => {
        fakeProgress = Math.min(fakeProgress + Math.random() * 12, 90);
        loadBar.style.width = fakeProgress + '%';
    }, 150);

    canvas.whenReady(() => {
        clearInterval(loadInterval);
        loadBar.style.width = '100%';
        setTimeout(() => {
            loadingEl.style.opacity = '0';
            loadingEl.style.pointerEvents = 'none';
            // Show first phase after load
            phaseMountains.style.opacity = '1';
        }, 400);
    });

    // ── Scroll handler ─────────────────────────────────────────────────
    const section = document.getElementById('canvas-sequence')!;

    function onScroll() {
        if (!section) return;

        const rect   = section.getBoundingClientRect();
        const total  = section.offsetHeight - window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(1, scrolled / total);

        // Update canvas frame
        canvas.update(progress);

        // Update progress bar
        progressBar.style.width = (progress * 100) + '%';

        // Hide scroll cue after 5%
        scrollCue.style.opacity = progress > 0.05 ? '0' : '1';

        // Phase thresholds (based on frame distribution):
        // 0–0.28  → Mountains (frames 1-15)
        // 0.28–0.65 → Water splash (frames 16-35)
        // 0.65–1.0  → Bottle reveal (frames 36-51)
        const p = progress;

        if (p < 0.28) {
            phaseMountains.style.opacity = String(Math.min(1, p / 0.08));
            phaseWater.style.opacity    = '0';
            phaseBottle.style.opacity   = '0';
        } else if (p < 0.35) {
            // Cross-fade mountains → water
            const t = (p - 0.28) / 0.07;
            phaseMountains.style.opacity = String(1 - t);
            phaseWater.style.opacity    = String(t);
            phaseBottle.style.opacity   = '0';
        } else if (p < 0.62) {
            phaseMountains.style.opacity = '0';
            phaseWater.style.opacity    = '1';
            phaseBottle.style.opacity   = '0';
        } else if (p < 0.70) {
            // Cross-fade water → bottle
            const t = (p - 0.62) / 0.08;
            phaseMountains.style.opacity = '0';
            phaseWater.style.opacity    = String(1 - t);
            phaseBottle.style.opacity   = String(t);
        } else {
            phaseMountains.style.opacity = '0';
            phaseWater.style.opacity    = '0';
            phaseBottle.style.opacity   = '1';
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run once on init
}
