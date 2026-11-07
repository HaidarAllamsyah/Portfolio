// ─── Site Configuration ───────────────────────────────────────────────────────
// Edit this file to update personal information across the entire website.
// All pages pull from this single source of truth.

export const siteConfig = {
  // ── Personal Info ──────────────────────────────────────────────────────────
  name: 'Haidar Allamsyah',
  firstName: 'Haidar',
  lastName: 'Allamsyah',

  // Displayed title beneath the name
  title: '3D Artist / 3D Generalist',

  // Short tagline / hero subtitle
  tagline: 'Exploring immersive digital worlds through 3D visuals, interactive technology, and AI-assisted creativity.',

  // Hero headline — can include line breaks via array
  heroHeadline: ['Shaping', 'Realities', 'in 3D.'],

  // Extended bio for About page
  bio: `I'm a Multimedia Engineering student at Politeknik Elektronika Negeri Surabaya (PENS), passionate about building immersive digital experiences at the intersection of 3D art, game development, interactive technology, and AI-assisted visual creation.

I'm interested in 3D modeling, animation, game development, interactive web, and immersive VR/AR experiences. My creative approach brings visual storytelling together with technology as I continue developing my practice across these areas.`,

  // Education
  education: {
    degree: 'D4 — Teknologi Rekayasa Multimedia (Multimedia Engineering Technology)',
    institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    location: 'Surabaya, Indonesia',
    expectedGraduation: '',
  },

  // ── Areas of Interest ───────────────────────────────────────────────────────
  interests: [
    '3D Modeling & Environment Art',
    'Animation & Visual Production',
    'Game Development',
    'Interactive Web Experiences',
    'VR / AR / Mixed Reality',
    'AI-Assisted Visual Creation',
  ],

  // ── Contact Info ────────────────────────────────────────────────────────────
  email: 'haidarallamsyahh@gmail.com',

  // ── Social Links ─────────────────────────────────────────────────────────────
  social: {
    github: '',
    linkedin: '',
    instagram: '@haidarallamsyah_',                       // Optional
    behance: '',                                        // Optional
    artstation: '',                                     // Optional
  },

  // ── CV ───────────────────────────────────────────────────────────────────────
  cvPath: '',

  // ── Site Meta ────────────────────────────────────────────────────────────────
  siteUrl: '',
  siteTitle: 'Haidar Allamsyah — 3D Artist / 3D Generalist',
  siteDescription:
    'Portfolio of Haidar Allamsyah — Multimedia Engineering student exploring 3D art and immersive digital experiences.',
  ogImage: '',

  // ── Navigation Links ─────────────────────────────────────────────────────────
  navLinks: [
    { label: 'Home',       href: '/' },
    { label: 'Projects',   href: '/projects' },
    { label: 'About',      href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact',    href: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
