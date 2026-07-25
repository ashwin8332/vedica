// Vedica Spring — Premium Loader

export class Loader {
    private el: HTMLElement | null = null;

    constructor() {
        this.render();
    }

    private render() {
        const html = `
            <div id="vedica-loader" class="vedica-loader" role="progressbar" aria-label="Loading Vedica Spring">
                <!-- Background gradient -->
                <div class="absolute inset-0" style="background: linear-gradient(180deg, #0A1A2A 0%, #0D2540 100%);"></div>

                <!-- Animated water drop -->
                <div class="relative z-10 flex flex-col items-center gap-8">
                    <div class="relative" style="width: 64px; height: 64px;">
                        <!-- Outer ring -->
                        <div class="absolute inset-0 rounded-full border border-vedica-blue/20 animate-ping" style="animation-duration: 2s;"></div>
                        <div class="absolute inset-0 rounded-full border border-vedica-blue/10 animate-ping" style="animation-duration: 2s; animation-delay: 0.5s;"></div>

                        <!-- SVG Drop Icon -->
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full animate-breathe">
                            <path d="M32 6C32 6 10 30 10 42C10 54.15 20.074 62 32 62C43.926 62 54 54.15 54 42C54 30 32 6 32 6Z"
                                fill="#005CAB" fill-opacity="0.7" stroke="#3A8AD1" stroke-width="1"/>
                            <path d="M32 18C32 18 18 34 18 43C18 50.18 24.268 56 32 56C39.732 56 46 50.18 46 43C46 34 32 18 32 18Z"
                                fill="#A8C8DE" fill-opacity="0.5"/>
                            <path d="M32 28C32 28 24 38 24 44C24 48.418 27.582 52 32 52C36.418 52 40 48.418 40 44C40 38 32 28 32 28Z"
                                fill="white" fill-opacity="0.85"/>
                            <circle cx="32" cy="14" r="6" fill="#FCDC00" fill-opacity="0.9"/>
                            <path d="M28 10 L32 4 L36 10" stroke="#FCDC00" stroke-width="1" stroke-opacity="0.5" fill="none"/>
                        </svg>
                    </div>

                    <!-- Brand Name -->
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-white font-inter font-semibold text-xl tracking-[0.25em] uppercase">Vedica</span>
                        <span class="text-vedica-glacial font-inter font-light text-xs tracking-[0.4em] uppercase">Spring</span>
                    </div>

                    <!-- Progress Line -->
                    <div class="relative w-48 h-[1px] overflow-hidden" style="background: rgba(255,255,255,0.08);">
                        <div id="loader-progress" class="absolute inset-y-0 left-0 transition-all duration-300" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-yellow)); width: 0%;"></div>
                    </div>

                    <p class="text-white/30 font-inter text-[10px] tracking-[0.32em] uppercase animate-pulse">Born in the Himalayas</p>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', html);
        this.el = document.getElementById('vedica-loader');
        this.animateProgress();
    }

    private animateProgress() {
        const bar = document.getElementById('loader-progress');
        if (!bar) return;
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            bar.style.width = `${progress}%`;
        }, 120);
    }

    hide() {
        if (!this.el) return;
        this.el.style.opacity = '0';
        this.el.style.visibility = 'hidden';
        setTimeout(() => {
            this.el?.remove();
        }, 700);
    }
}
