// Vedica Spring — Scroll Canvas (Image Sequence, Zonda-style)
// Uses 51 frames from /vedica/ezgif-frame-001.jpg to ezgif-frame-051.jpg

export class VedicaScrollCanvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private images: HTMLImageElement[] = [];
    private frameCount: number;
    private currentFrame = 0;
    private onReady: (() => void) | null = null;
    private isReady = false;

    constructor(canvasId: string, frameCount: number) {
        this.frameCount = frameCount;
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.resize();
        window.addEventListener('resize', () => this.resize(), { passive: true });
        this.preload();
    }

    private framePath(index: number): string {
        const n = String(index + 1).padStart(3, '0');
        return `/vedica/ezgif-frame-${n}.jpg`;
    }

    private preload() {
        // Load first frame immediately so something shows instantly
        const first = new Image();
        first.src = this.framePath(0);
        first.onload = () => {
            this.images[0] = first;
            this.drawFrame(0);
            // Then load the rest in background
            this.preloadRest();
        };
    }

    private preloadRest() {
        let loaded = 1;
        for (let i = 1; i < this.frameCount; i++) {
            const img = new Image();
            img.src = this.framePath(i);
            img.onload = () => {
                this.images[i] = img;
                loaded++;
                if (loaded >= this.frameCount) {
                    this.isReady = true;
                    this.onReady?.();
                }
            };
        }
    }

    public whenReady(cb: () => void) {
        if (this.isReady) cb();
        else this.onReady = cb;
    }

    private resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Redraw current frame on resize
        if (this.images[this.currentFrame]) {
            this.drawFrame(this.currentFrame);
        }
    }

    private drawFrame(index: number) {
        const img = this.images[index];
        if (!img) return;

        const cw = this.canvas.width;
        const ch = this.canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // Cover: fill canvas while keeping aspect ratio, center-cropped
        const scale = Math.max(cw / iw, ch / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const sx = (cw - sw) / 2;
        const sy = (ch - sh) / 2;

        this.ctx.clearRect(0, 0, cw, ch);
        this.ctx.drawImage(img, sx, sy, sw, sh);
    }

    /** Call with progress 0–1 to scrub to the right frame */
    public update(progress: number) {
        const idx = Math.min(
            this.frameCount - 1,
            Math.max(0, Math.floor(progress * (this.frameCount - 1)))
        );
        if (idx === this.currentFrame) return;
        this.currentFrame = idx;
        this.drawFrame(idx);
    }
}
