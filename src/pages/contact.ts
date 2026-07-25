// Vedica Spring — Contact Page
import { ScrollReveal } from '../utils/animations';

export async function renderContactPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <!-- HERO -->
        <section class="relative flex items-end pb-20 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 60%, #1a3a5c 100%); padding-top: 160px; padding-bottom: 80px;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 70% 50%, rgba(0,92,171,0.18) 0%, transparent 60%);"></div>
            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Get in Touch</span>
                </div>
                <h1 class="fade-up delay-100 mb-4" style="font-family: var(--serif); font-size: clamp(44px, 7vw, 86px); color: #fff; font-weight: 300; line-height: 1.05;">
                    Let's talk<br><em style="color: var(--vedica-yellow);">water</em>
                </h1>
                <p class="fade-up delay-200 font-inter" style="color: rgba(168,200,222,0.7); font-size: 17px; max-width: 480px; line-height: 1.7;">
                    Whether you're ordering for home, enquiring about wholesale, or simply want to learn more — we'd love to hear from you.
                </p>
            </div>
        </section>

        <!-- MAIN CONTACT SECTION -->
        <section class="py-24 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- Left: Form -->
                <div class="slide-left">
                    <h2 class="mb-8" style="font-family: var(--serif); font-size: 36px; color: #fff; font-weight: 400;">Send us a message</h2>

                    <form id="contact-form" class="flex flex-col gap-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label class="eyebrow text-white/50 block mb-2" for="contact-name">Your Name</label>
                                <input type="text" id="contact-name" class="vedica-input" placeholder="First Last" required>
                            </div>
                            <div>
                                <label class="eyebrow text-white/50 block mb-2" for="contact-email">Email Address</label>
                                <input type="email" id="contact-email" class="vedica-input" placeholder="you@example.com" required>
                            </div>
                        </div>

                        <div>
                            <label class="eyebrow text-white/50 block mb-2" for="contact-phone">Phone (Optional)</label>
                            <input type="tel" id="contact-phone" class="vedica-input" placeholder="+91 xxxxxxxxxx">
                        </div>

                        <div>
                            <label class="eyebrow text-white/50 block mb-2" for="contact-type">Enquiry Type</label>
                            <select id="contact-type" class="vedica-input" style="appearance: none; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'rgba(255,255,255,0.4)\\' stroke-width=\\'2\\'><path d=\\'M6 9l6 6 6-6\\'/></svg>'); background-repeat: no-repeat; background-position: right 14px center; cursor: pointer;">
                                <option value="">Select enquiry type</option>
                                <option value="retail">Retail Order (Home Delivery)</option>
                                <option value="wholesale">Wholesale / Bulk Supply</option>
                                <option value="hospitality">Hospitality Partnership</option>
                                <option value="media">Media & Press</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label class="eyebrow text-white/50 block mb-2" for="contact-message">Your Message</label>
                            <textarea id="contact-message" class="vedica-input" placeholder="Tell us what you need..." rows="5" style="resize: vertical;" required></textarea>
                        </div>

                        <button type="submit" id="contact-submit" class="btn-primary justify-center rounded-sm mt-2">
                            <span id="submit-text">Send Message</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>

                        <!-- Success message (hidden) -->
                        <div id="form-success" class="hidden rounded-xl p-5 text-center" style="background: rgba(0,92,171,0.15); border: 1px solid rgba(0,92,171,0.3);">
                            <div class="text-3xl mb-2">💧</div>
                            <p class="font-inter font-semibold text-white mb-1">Message sent!</p>
                            <p class="font-inter text-sm" style="color: rgba(168,200,222,0.7);">We'll be in touch within 24 hours.</p>
                        </div>
                    </form>
                </div>

                <!-- Right: Info -->
                <div class="slide-right flex flex-col gap-8">
                    <!-- Contact Info Cards -->
                    ${[
                        { icon: '📍', title: 'Headquarters', lines: ['Vedica Spring Waters Pvt. Ltd.', '42 Himalayan Business Park', 'Dehradun, Uttarakhand 248001', 'India'] },
                        { icon: '📞', title: 'Phone', lines: ['+91 135 266 0000', '+91 98765 43210 (Wholesale)'] },
                        { icon: '✉️', title: 'Email', lines: ['hello@vedicaspring.com', 'wholesale@vedicaspring.com'] },
                        { icon: '⏰', title: 'Hours', lines: ['Monday – Saturday', '9:00 AM – 6:00 PM IST'] },
                    ].map(info => `
                        <div class="glass rounded-2xl p-6 flex gap-5">
                            <div class="text-3xl flex-shrink-0">${info.icon}</div>
                            <div>
                                <h3 class="eyebrow-gold mb-3">${info.title}</h3>
                                ${info.lines.map(line => `<p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.7);">${line}</p>`).join('')}
                            </div>
                        </div>
                    `).join('')}

                    <!-- Wholesale CTA Card -->
                    <div class="rounded-2xl p-7 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(0,92,171,0.25), rgba(0,92,171,0.1)); border: 1px solid rgba(0,92,171,0.3);">
                        <div class="eyebrow-gold mb-3">Wholesale Partner Program</div>
                        <h3 class="font-inter font-semibold text-white mb-3 text-lg">Hotels, restaurants & wellness centres</h3>
                        <p class="font-inter text-sm leading-relaxed mb-5" style="color: rgba(168,200,222,0.65);">
                            Join 200+ premium hospitality partners across India. Volume pricing, white-label options, and dedicated account support available.
                        </p>
                        <a href="mailto:wholesale@vedicaspring.com" class="btn-primary rounded-sm inline-flex text-[10px] py-2.5 px-5">
                            Wholesale Enquiry
                        </a>
                        <!-- Decorative drop -->
                        <div class="absolute -bottom-4 -right-4 opacity-10">
                            <svg width="100" height="125" viewBox="0 0 80 100" fill="none">
                                <path d="M40 4C40 4 8 46 8 65C8 84.33 22.33 97 40 97C57.67 97 72 84.33 72 65C72 46 40 4 40 4Z" stroke="#FCDC00" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- LOCATIONS MAP PLACEHOLDER -->
        <section class="py-24 px-6" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Where to Find Us</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 50px); color: var(--vedica-deep); font-weight: 400;">
                        Vedica Spring is available<br>across <em>India</em>
                    </h2>
                </div>

                <!-- Availability Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${[
                        { city: 'Delhi NCR', status: 'Available', count: '40+ stockists' },
                        { city: 'Mumbai', status: 'Available', count: '35+ stockists' },
                        { city: 'Bangalore', status: 'Available', count: '28+ stockists' },
                        { city: 'Hyderabad', status: 'Available', count: '22+ stockists' },
                        { city: 'Chennai', status: 'Available', count: '18+ stockists' },
                        { city: 'Kolkata', status: 'Available', count: '15+ stockists' },
                        { city: 'Pune', status: 'Available', count: '20+ stockists' },
                        { city: 'Dehradun', status: 'Source City', count: 'HQ & Direct' },
                    ].map((loc, i) => `
                        <div class="fade-up rounded-xl p-5 text-center" style="animation-delay:${i*60}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 2px 12px rgba(0,92,171,0.06);">
                            <div style="font-size: 24px; margin-bottom: 8px;">${loc.city === 'Dehradun' ? '🏔️' : '📍'}</div>
                            <div class="font-inter font-semibold mb-1" style="color: var(--vedica-deep); font-size: 15px;">${loc.city}</div>
                            <div class="eyebrow mb-2" style="color: ${loc.status === 'Source City' ? '#FCDC00' : 'var(--vedica-blue)'}; font-size: 8px;">${loc.status}</div>
                            <div class="font-inter text-xs" style="color: rgba(10,26,42,0.45);">${loc.count}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    const reveal = new ScrollReveal(0.12);
    reveal.observeAll('.fade-up', '.slide-left', '.slide-right');

    // Form submission
    const form = document.getElementById('contact-form') as HTMLFormElement;
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('contact-submit') as HTMLButtonElement;
        const text = document.getElementById('submit-text');
        const success = document.getElementById('form-success');

        btn.disabled = true;
        if (text) text.textContent = 'Sending...';

        setTimeout(() => {
            form.reset();
            btn.style.display = 'none';
            success?.classList.remove('hidden');
        }, 1500);
    });
}
