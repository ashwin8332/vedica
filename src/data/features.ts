// Vedica Spring — Wellness Features with Clean SVG Icons (No Emojis)
export interface Feature {
    svgIcon: string;
    title: string;
    subtitle: string;
    description: string;
}

export const features: Feature[] = [
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M8 3L4 11H8L6 17L14 7H9L12 3H8Z"/><path d="M12 21L15 14H12L14 9"/></svg>`,
        title: 'Himalayan Origin',
        subtitle: 'Born at 3,200m altitude',
        description: 'Our water originates from pristine glacial snowfields in the upper Himalayas, where the air is pure and untouched by civilization.',
    },
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
        title: 'Natural Filtration',
        subtitle: '200+ years of purification',
        description: 'Over two centuries, rainwater percolates through five distinct geological layers — each adding essential minerals in perfect balance.',
    },
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M8 12h8"/></svg>`,
        title: 'Perfect Minerality',
        subtitle: '7.4 pH · Balanced TDS',
        description: 'Naturally optimized mineral composition with calcium, magnesium, and silica — exactly as nature intended. No treatment, no additives.',
    },
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title: 'Zero Processing',
        subtitle: 'Nature does the work',
        description: 'We never alter what nature perfects. Vedica Spring is collected at source, tested for purity, and sealed — nothing added, nothing removed.',
    },
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>`,
        title: 'Sustainable Stewardship',
        subtitle: 'Carbon-neutral certified',
        description: 'Our extraction rate is a fraction of natural recharge. Certified carbon-neutral operations, 100% recyclable packaging, and reforestation pledges.',
    },
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
        title: 'Lab-Verified Purity',
        subtitle: '127 quality checkpoints',
        description: 'Every batch passes 127 quality checkpoints at our Himalayan facility and third-party labs before it reaches you.',
    },
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 3v18M3 12h18M6.3 6.3l11.4 11.4M6.3 17.7L17.7 6.3"/></svg>`,
        title: 'Silica-Rich',
        subtitle: 'Youth-supporting mineral',
        description: 'Naturally high in silica — a rare mineral found in premium spring waters, known to support skin health and cellular wellness.',
    },
    {
        svgIcon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
        title: 'Ancient Source',
        subtitle: 'Discovered 1952',
        description: 'The spring source was discovered by conservationists in 1952. It has been flowing continuously since before recorded memory — a living legacy.',
    },
];
