// src/appData/index.ts
// import Head from 'next/head'
import {
  JavaScriptIcon,
  NextjsIcon,
  // NodejsIcon,
  ReactIcon,
  TailwindCSS,
  TypescriptIcon,
  WordpressIcon,
  GraphqlIcon,
  ElementorIcon,
  HeadlessIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Percoid Academy',
    shortDescription:
    'Percoid Academy of Technology, an initiative of Percoid IT Solutions, is established to bridge the gap between engineering graduates and IT industry.',
    cover: '/images/projects/percoid-academy.webp',
    livePreview: 'https://academy.percoidit.com/',
    type: 'WordPress Site',
    siteAge: '3 month old',
  },
  {
    priority: 2,
    title: 'Budget Hotel',
    shortDescription: 'Hotel booking and accommodation platform.',
    cover: '/images/projects/budget-hotel.webp',
    livePreview: 'https://wordpress.org/themes/budget-hotel/',
    type: 'WordPress.org  approved theme',
    visitors: 'Wordpress.org',
    earned: '100+ Active installations'
  },
  {
    priority: 3,
    title: 'Biryani Bistro',
    shortDescription: 'Restaurant management and menu display platform.',
    cover: '/images/projects/biryani-bistro.webp',
    livePreview: 'https://biryanibistro.com.np/',
    type: 'WordPress Site',
    siteAge: '1 month old',
    visitors: '1K Visitors'
    
  },
  {
    priority: 4,
    title: 'DFW',
    shortDescription: 'DFW Ecommerce platform for racks.',
    cover: '/images/projects/dfw.webp',
    livePreview: 'https://dfwfixture.com/',
    type: 'WordPress Site',
    siteAge: 'Ecommerce Business',
    visitors: 'Products Showcase',
    earned: '3k Unique Visitors'
  },
  {
    priority: 5,
    title: 'LNB Consulting',
    shortDescription:
    'LNB Consulting is a team of dedicated and result-driven financial professionals committed to empowering individuals and businesses across Nepal.',
    cover: '/images/projects/lnb.webp',
    livePreview: 'https://lnbconsulting.com.np/',
    visitors: '8K Visitors'
  },
  {
    priority: 6,
    title: 'Club Denovo',
    shortDescription: 'Hospitality and club management site.',
    cover: '/images/projects/club-denovo.webp',
    livePreview: 'https://clubdenovo.com.np/',
    type: 'WordPress Site',
    siteAge: '1 month old',
    visitors: '1K Visitors',
    earned: '100+ Unique Visitors'
  },
  {
    priority: 7,
    title: 'Skyline Construction',
    shortDescription: 'Construction company portfolio showcase.',
    cover: '/images/projects/construction.webp',
    livePreview: 'https://wordpress.org/themes/skyline-construction/',
    type: 'WordPress.org  approved theme',
    visitors: 'Wordpress.org',
    earned: '20+ Active installations'
  },
  {
    priority: 8,
    title: 'Dalaila',
    shortDescription: 'Brand web experience and agency layout.',
    cover: '/images/projects/dalaila.webp',
    livePreview: 'https://dalailaboutiquehotel.com/',
    type: 'WordPress Site',
    siteAge: 'Boutique Hotel',
    visitors: '1K Visitors',
    earned: '100+ Bookings'
  },
  {
    priority: 9,
    title: 'Axiom Nepal',
    shortDescription: 'Axiom corporate website and web solutions.',
    cover: '/images/projects/axiom.webp',
    livePreview: 'https://axiomnepal.com/',
    type: 'WordPress Site',
    siteAge: '2 month old',
    visitors: '5K Visitors'
  },
  {
    priority: 10,
    title: 'ESN',
    shortDescription: 'Electrical Services Nepal.',
    cover: '/images/projects/esn.webp',
    livePreview: 'https://electricalservicesnepal.com/',
    type: 'WordPress Site',
    siteAge: 'Portfolio Business',
    visitors: '1K Visitors',
    earned: '100+ Unique clients'
  },
  {
    priority: 11,
    title: 'Everest Clinic',
    shortDescription: 'Healthcare service and medical appointment site.',
    cover: '/images/projects/everest-clinic.webp',
    livePreview: 'https://everesteclinic.com/',
    type: 'WordPress Site',
    siteAge: '1 month old',
    visitors: 'E-Clinic',
    earned: '3k Unique Visitors'
  },
  {
    priority: 12,
    title: 'Foreign Business',
    shortDescription: 'Consultancy and foreign studies guidance portal.',
    cover: '/images/projects/foreignb.webp',
    livePreview: 'https://foreignbusiness.com.au/',
    type: 'WordPress Site',
    siteAge: 'Financial Consultancy',
    visitors: '1K Visitors',
    earned: '100+ Unique Visitors'
  },
  {
    priority: 13,
    title: 'Healthy World',
    shortDescription: 'Health, wellness, and lifestyle content site.',
    cover: '/images/projects/healthy-world.webp',
    livePreview: 'https://healthy-world.com.au/',
    type: 'WordPress Site',
    siteAge: 'Ecommerce Business',
    
  },
  {
    priority: 14,
    title: 'Next Portfolio',
    shortDescription: 'Personal portfolio built using Next.js framework.',
    cover: '/images/projects/next-portfolio.webp',
    livePreview: 'https://xitizkhanal.netlify.app/',
    type: 'Next.js Site',
    siteAge: '1 month old'
  },
  {
    priority: 15,
    title: 'One Step',
    shortDescription: 'Educational and training institute portal.',
    cover: '/images/projects/one-step.webp',
    livePreview: 'https://onestepfoundation.org/',
    type: 'WordPress Site',
    siteAge: 'Non-profit Organization',
    visitors: '2k+ Visitors',
    earned: '100+ Unique Visitors'
  },
  {
    priority: 16,
    title: 'Portfolio',
    shortDescription: 'Custom web portfolio design.',
    cover: '/images/projects/portfolio.webp',
    livePreview: 'https://github.com/Xitiz01/portfolio-theme',
    type: 'GitHub Repository'
  },
  {
    priority: 17,
    title: 'Radiant Migration',
    shortDescription: 'Business corporate Consultancy.',
    cover: '/images/projects/radiant.webp',
    livePreview: 'https://radiantmigration.com.au/',
    type: 'WordPress Site',
    siteAge: 'Consultancy Business',
    visitors: '2K Visitors',
    earned: '100+ Unique Visitors'
  },
  {
    priority: 18,
    title: 'Tidal Law',
    shortDescription: 'Legal firm professional web presence.',
    cover: '/images/projects/tidal-law.webp',
    livePreview: 'https://tidallaw.ca/',
    type: 'WordPress Site',
    siteAge: 'Law Firm'
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: WordpressIcon,
    title: 'Web Development',
    shortDescription: 'Developing scalable applications using WordPress',
  },
  {
    icon: ElementorIcon,
    title: 'Custom Elementor Development',
    shortDescription: 'Developing scalable applications using Elementor',
  },
  {
    icon: HeadlessIcon,
    title: 'Custom Headless CMS Development',
    shortDescription: 'Developing scalable applications using Next.js, React and WordPress using GraphQL and REST API',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'WordPress', icon: WordpressIcon },
  { name: 'GraphQL', icon: GraphqlIcon },
  { name: 'Elementor', icon: ElementorIcon },
  { name: 'Headless CMS', icon: HeadlessIcon },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Blogs', href: '#blogs' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En']