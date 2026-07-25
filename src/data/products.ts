// Vedica Spring — Product Variants (No Emojis)
export interface VedicaProduct {
    id: string;
    chapter: string;
    name: string;
    tagline: string;
    description: string;
    volume: string;
    ph: string;
    tds: string;
    color: string;
    accentColor: string;
    badgeText: string;
}

export const products: VedicaProduct[] = [
    {
        id: 'snow',
        chapter: 'Chapter I',
        name: 'Snow',
        tagline: 'The First Touch',
        description: 'Collected from freshly melted glacial snow at 3,200m. The purest expression of Vedica — light, almost weightless, with a delicate minerality.',
        volume: '200ml · 500ml · 1L',
        ph: '7.2',
        tds: '85 mg/L',
        color: 'from-blue-50 to-white',
        accentColor: '#A8C8DE',
        badgeText: 'Pure Glacial',
    },
    {
        id: 'spring',
        chapter: 'Chapter II',
        name: 'Spring',
        tagline: 'The Living Water',
        description: 'Our signature expression. Balanced minerality, smooth finish, and perfect 7.4 pH — everything a living spring water should be. The heart of Vedica.',
        volume: '330ml · 750ml · 1.5L',
        ph: '7.4',
        tds: '142 mg/L',
        color: 'from-blue-100 to-blue-50',
        accentColor: '#005CAB',
        badgeText: 'Signature',
    },
    {
        id: 'source',
        chapter: 'Chapter III',
        name: 'Source',
        tagline: 'The Deep Mineral',
        description: 'Drawn from the deepest aquifer layer where water has rested for over two centuries. Rich in silica and trace minerals. For those who seek depth.',
        volume: '500ml · 1L',
        ph: '7.6',
        tds: '210 mg/L',
        color: 'from-indigo-100 to-blue-50',
        accentColor: '#3A7AAF',
        badgeText: 'Deep Reserve',
    },
];

// Vedica Five Chapters (from brand narrative)
export const chapters = [
    { id: 0, name: 'Snow',    subtitle: 'The First Touch',     desc: 'Glacial snowfields at altitude — where Vedica begins.' },
    { id: 1, name: 'Silence', subtitle: 'The Sacred Descent',  desc: 'Water descends through undisturbed mountain silence.' },
    { id: 2, name: 'Stone',   subtitle: 'The Mineral Journey', desc: 'Five geological layers impart perfect natural minerality.' },
    { id: 3, name: 'Spring',  subtitle: 'The Living Water',    desc: 'Vedica emerges — balanced, alive, and ready.' },
    { id: 4, name: 'Source',  subtitle: 'The Ancient Memory',  desc: 'Ancient aquifer waters carry centuries of Himalayan wisdom.' },
];
