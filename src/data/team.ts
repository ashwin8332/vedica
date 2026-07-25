// Vedica Spring — Leadership Team
export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    initials: string;
}

export const team: TeamMember[] = [
    {
        name: 'Kavita Sharma',
        role: 'Founder & CEO',
        bio: 'A decade in Himalayan conservation. Discovered the Vedica source spring during a research expedition in 2018.',
        image: '',
        initials: 'KS',
    },
    {
        name: 'Dr. Arun Bose',
        role: 'Chief Hydrogeologist',
        bio: 'Former ISRO scientist. Expert in glacial aquifer systems and natural spring water composition.',
        image: '',
        initials: 'AB',
    },
    {
        name: 'Nisha Patel',
        role: 'Head of Sustainability',
        bio: 'Led carbon-neutral certification programs for three Fortune 500 companies before joining Vedica Spring.',
        image: '',
        initials: 'NP',
    },
    {
        name: 'Rajan Mehrotra',
        role: 'Chief Brand Officer',
        bio: 'Former creative director at Diageo and Tata Luxury. Crafted the Vedica Spring brand language from the ground up.',
        image: '',
        initials: 'RM',
    },
];
