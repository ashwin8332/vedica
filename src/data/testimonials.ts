// Vedica Spring — Testimonials
export interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    initials: string;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Ananya Krishnamurthy',
        role: 'Wellness Coach',
        company: 'Serenity Collective, Bangalore',
        content: 'The moment I tasted Vedica Spring, I understood what "perfect water" means. The minerality is extraordinary — smooth, clean, with a depth that no other water I\'ve tried can replicate.',
        rating: 5,
        initials: 'AK',
    },
    {
        name: 'Dr. Rohan Mehta',
        role: 'Integrative Medicine Physician',
        company: 'Apollo Wellness, Mumbai',
        content: 'I recommend Vedica Spring to every wellness-focused patient. The natural mineral composition — particularly the silica and calcium balance — is precisely what the body needs for optimal hydration.',
        rating: 5,
        initials: 'RM',
    },
    {
        name: 'Priya Singhania',
        role: 'Executive Director',
        company: 'Oberoi Hotels & Resorts',
        content: 'We serve Vedica Spring across all our premium properties. Our guests consistently comment on the quality. It\'s the only water that matches the experience we strive to create.',
        rating: 5,
        initials: 'PS',
    },
    {
        name: 'Vikram Sethi',
        role: 'Yoga Master & Retreat Founder',
        company: 'Rishikesh Retreat Centre',
        content: 'Water is the essence of life, and Vedica Spring embodies that truth. At our retreat, we believe you can taste the Himalayas in every sip — pure, ancient, and alive with energy.',
        rating: 5,
        initials: 'VS',
    },
    {
        name: 'Meera Nair',
        role: 'Chef & Restaurateur',
        company: 'Atelier by Meera, Delhi',
        content: 'In fine dining, water is the unsung hero. Vedica Spring\'s clean finish enhances every dish — never competing, always complementing. It\'s the only water I use in my kitchen.',
        rating: 5,
        initials: 'MN',
    },
    {
        name: 'Arjun Kapoor',
        role: 'Olympic Athlete',
        company: 'Team India Athletics',
        content: 'Hydration is everything for performance. I\'ve tried every premium water on the market. Vedica Spring is different — the mineral balance genuinely supports recovery in a way I can feel.',
        rating: 5,
        initials: 'AK',
    },
];
