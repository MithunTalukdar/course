import {
  FiAward,
  FiBriefcase,
  FiClock,
  FiDownloadCloud,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiMessageSquare,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiVideo
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Course', href: '#course' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export const stats = [
  { value: 5400, suffix: '+', label: 'Learners trained' },
  { value: 54, suffix: '+', label: 'Live cohort sessions' },
  { value: 24, suffix: '+', label: 'Drafting projects' },
  { value: 4.9, suffix: '/5', label: 'Average rating' }
];

export const trustLogos = ['Google', 'Amazon', 'Deloitte', 'EY', 'PwC', 'KPMG', 'Microsoft', 'Accenture'];

export const highlights = [
  { icon: FiClock, title: '6-month cohort', text: 'A guided expert-level track with weekly live sessions and structured practice.' },
  { icon: FiFileText, title: '24+ contracts', text: 'Draft employment, SaaS, vendor, founder, licensing, and commercial agreements.' },
  { icon: FiLayers, title: 'Template vault', text: 'Premium clauses, checklists, negotiation notes, and redline-ready frameworks.' },
  { icon: FiAward, title: 'Verified certificate', text: 'A polished credential for your portfolio, LinkedIn, and client proposals.' },
  { icon: FiVideo, title: 'Live masterclasses', text: 'Interactive workshops, drafting labs, review rooms, and office hours.' },
  { icon: FiDownloadCloud, title: 'Lifetime access', text: 'Revisit recordings, notes, examples, and upgrades after your cohort ends.' },
  { icon: FiBriefcase, title: 'Client projects', text: 'Build a portfolio that mirrors real commercial drafting assignments.' },
  { icon: FiMessageSquare, title: 'Mentorship', text: 'Get practical feedback from legal professionals who draft for business.' }
];

export const benefits = [
  { icon: FiTarget, title: 'Draft with commercial judgment', text: 'Move beyond templates and learn how risk, incentives, and leverage shape each clause.' },
  { icon: FiShield, title: 'Spot hidden liabilities', text: 'Understand indemnity, limitation of liability, termination, dispute, and confidentiality traps.' },
  { icon: FiTrendingUp, title: 'Build a freelance pipeline', text: 'Package drafting services, scope work clearly, price retainers, and communicate like a pro.' },
  { icon: FiGlobe, title: 'Work across industries', text: 'Practice legal documents used in startups, agencies, creators, technology, and consulting.' }
];

export const outcomes = [
  'Convert business facts into clear contract structures.',
  'Draft strong clauses for payment, IP, confidentiality, termination, and liability.',
  'Review third-party contracts with a negotiation-first mindset.',
  'Create client proposals, statements of work, and freelance delivery systems.',
  'Assemble a portfolio of polished, recruiter-ready drafting projects.'
];

export const curriculum = [
  {
    number: '01',
    title: 'Contract Architecture & Drafting Logic',
    duration: '2 weeks',
    lessons: ['Anatomy of commercial contracts', 'Definitions and interpretation', 'Plain language drafting', 'Risk mapping worksheet'],
    project: 'Rewrite a weak services agreement into a clean deal structure.'
  },
  {
    number: '02',
    title: 'Commercial Clauses That Matter',
    duration: '4 weeks',
    lessons: ['Payment and taxes', 'Representations and warranties', 'Indemnity and liability caps', 'Termination and dispute resolution'],
    project: 'Draft a clause bank with fallback positions.'
  },
  {
    number: '03',
    title: 'Startup, SaaS & IP Agreements',
    duration: '5 weeks',
    lessons: ['SaaS terms', 'Founders and advisors', 'IP assignment', 'Data protection basics'],
    project: 'Create a SaaS customer agreement and redline memo.'
  },
  {
    number: '04',
    title: 'Employment, Vendor & Creator Contracts',
    duration: '5 weeks',
    lessons: ['Employment terms', 'Consulting retainers', 'Vendor onboarding', 'Influencer and creator deals'],
    project: 'Build a client-ready vendor agreement pack.'
  },
  {
    number: '05',
    title: 'Negotiation, Redlining & Review',
    duration: '4 weeks',
    lessons: ['Redline strategy', 'Issue lists', 'Negotiation emails', 'Client advisory notes'],
    project: 'Complete a simulated counterparty negotiation.'
  },
  {
    number: '06',
    title: 'Freelancing Systems for Legal Work',
    duration: '4 weeks',
    lessons: ['Niche selection', 'Pricing and proposals', 'Client onboarding', 'Delivery workflows'],
    project: 'Launch a freelance drafting offer with portfolio assets.'
  }
];

export const testimonials = [
  {
    name: 'Ananya S.',
    role: 'Corporate Law Associate',
    quote: 'The drafting labs helped me stop sounding academic and start writing documents clients can actually use.',
    rating: 5
  },
  {
    name: 'Rohan M.',
    role: 'Final-year Law Student',
    quote: 'I used the portfolio projects during interviews. The feedback on my redlines was the difference-maker.',
    rating: 5
  },
  {
    name: 'Meera K.',
    role: 'Freelance Legal Consultant',
    quote: 'The course gave me a repeatable workflow for discovery calls, pricing, drafting, and delivery.',
    rating: 5
  }
];

export const faqs = [
  {
    question: 'Who is this program for?',
    answer: 'Law students, lawyers, founders, consultants, and legal freelancers who want practical commercial drafting skills with guided projects and templates.'
  },
  {
    question: 'Do I need prior contract drafting experience?',
    answer: 'No. The program starts with structure and drafting logic, then moves into advanced clauses, redlining, negotiation, and client delivery.'
  },
  {
    question: 'Are sessions live or recorded?',
    answer: 'The cohort includes live workshops and review sessions. Recordings, notes, templates, and assignments remain available for revision.'
  },
  {
    question: 'Will I get templates?',
    answer: 'Yes. You receive clause banks, checklists, sample agreements, redline examples, proposal assets, and project briefs.'
  },
  {
    question: 'Is there a refund guarantee?',
    answer: 'The landing page includes a 7-day satisfaction guarantee badge. Replace this with your final commercial policy before launch.'
  }
];

export const pricingFeatures = [
  '6-month expert cohort access',
  '54+ live workshops and office hours',
  '24+ drafting assignments and templates',
  'Portfolio-ready capstone projects',
  'Certificate and lifetime resource access',
  'Mentor feedback and peer community'
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'YouTube', href: 'https://www.youtube.com' }
];
