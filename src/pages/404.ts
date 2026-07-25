// Vedica Spring — 404 Page

export async function render404Page() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <section class="min-h-screen flex items-center justify-center px-6 text-center overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 50%, #1a3a5c 100%);">
            <!-- Decorative rings -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="rounded-full" style="width: 600px; height: 600px; border: 1px solid rgba(0,92,171,0.12); position: absolute;"></div>
                <div class="rounded-full" style="width: 400px; height: 400px; border: 1px solid rgba(0,92,171,0.16); position: absolute;"></div>
                <div class="rounded-full" style="width: 220px; height: 220px; border: 1px solid rgba(0,92,171,0.2); position: absolute;"></div>
            </div>

            <div class="relative z-10 flex flex-col items-center gap-6">
                <!-- Drop icon -->
                <svg width="64" height="80" viewBox="0 0 64 80" fill="none" class="animate-breathe opacity-60">
                    <path d="M32 4C32 4 8 38 8 56C8 69.255 18.745 78 32 78C45.255 78 56 69.255 56 56C56 38 32 4 32 4Z" stroke="#A8C8DE" stroke-width="1.5" fill="none"/>
                </svg>

                <div style="font-family: var(--serif); font-size: clamp(80px, 15vw, 140px); color: rgba(255,255,255,0.08); font-weight: 400; line-height: 1; position: absolute; top: 0; left: 50%; transform: translateX(-50%);">404</div>

                <div class="relative">
                    <p class="eyebrow mb-4" style="color: var(--vedica-glacial);">Lost in the Himalayas</p>
                    <h1 style="font-family: var(--serif); font-size: clamp(36px, 5vw, 60px); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 16px;">
                        This spring has<br><em style="color: var(--vedica-yellow);">run dry</em>
                    </h1>
                    <p class="font-inter max-w-md mx-auto mb-8" style="color: rgba(168,200,222,0.6); font-size: 16px; line-height: 1.7;">
                        The page you're looking for has moved or doesn't exist. Let us guide you back to the source.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a href="/" class="btn-primary rounded-sm">Return Home</a>
                        <a href="/contact" class="btn-ghost rounded-sm">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}
