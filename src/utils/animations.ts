// Vedica Spring — Scroll & Interaction Animations

export class ScrollReveal {
    private observer: IntersectionObserver;

    constructor(threshold = 0.15) {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Don't unobserve — keep visible
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );
    }

    observe(selector: string) {
        document.querySelectorAll(selector).forEach((el) => {
            this.observer.observe(el);
        });
    }

    observeAll(...selectors: string[]) {
        selectors.forEach((sel) => this.observe(sel));
    }

    disconnect() {
        this.observer.disconnect();
    }
}

// Legacy alias for backward compatibility
export class ScrollAnimator {
    private observer: IntersectionObserver;

    constructor(threshold = 0.1) {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible', 'animate-in');
                    }
                });
            },
            { threshold }
        );
    }

    observeAll(selector: string) {
        document.querySelectorAll(selector).forEach((el) => {
            this.observer.observe(el);
        });
    }
}

// Animate a numeric counter from start → end
export function animateCounter(
    el: HTMLElement,
    start: number,
    end: number,
    duration = 2000,
    suffix = '',
    prefix = ''
): void {
    const startTime = performance.now();
    const isFloat = !Number.isInteger(end);

    function step(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * eased;
        el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toString()) + suffix;
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

// Stagger animate a group of elements
export function staggerReveal(selector: string, delayStep = 100): void {
    const els = document.querySelectorAll<HTMLElement>(selector);
    els.forEach((el, i) => {
        el.style.transitionDelay = `${i * delayStep}ms`;
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
}

// Animate mineral bars when in view
export function animateMineralBars(): void {
    const bars = document.querySelectorAll<HTMLElement>('.mineral-bar');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );
    bars.forEach((bar) => observer.observe(bar));
}

// Observe counters and animate when visible
export function initCounters(): void {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    const target = parseFloat(el.dataset.counter || '0');
                    const suffix = el.dataset.suffix || '';
                    const prefix = el.dataset.prefix || '';
                    animateCounter(el, 0, target, 2200, suffix, prefix);
                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll('[data-counter]').forEach((el) => observer.observe(el));
}

// Parallax effect for hero sections
export function initParallax(selector: string, speed = 0.3): void {
    const els = document.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        els.forEach((el) => {
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }, { passive: true });
}

// Smooth hover magnetic effect
export function initMagnetic(selector: string, strength = 0.3): void {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            el.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
        });
    });
}
