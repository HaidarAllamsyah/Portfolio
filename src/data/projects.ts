// Project content is centralized here so cards, filters, and detail routes stay in sync.
// Add media to public/images/projects/<slug>/ and reference it with a /images/... path.

import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'red-threshold',
    slug: 'red-threshold',
    title: 'Red Threshold',
    shortDescription: 'A 3D game project focused on an immersive environment and level design.',
    overview:
      'Red Threshold is a 3D game project developed with Unreal Engine. The work focused on building an immersive game environment and preparing assets to support the intended gameplay experience.',
    categories: ['Game Development', '3D Environment Art'],
    technologies: ['Unreal Engine'],
    role: 'Environment and level design contributor',
    contributions: [
      'Built the game map and level layout.',
      'Prepared the assets required for the game.',
      'Integrated assets into the game environment.',
      'Worked on the visual environment to support its atmosphere and player experience.',
    ],
    detailSections: [
      {
        heading: 'Environment and Level Design',
        body: 'Built the game map and level layout, prepared assets, and integrated them into the environment.',
      },
    ],
    thumbnail: '/images/projects/red-threshold/Thumbnail_Red.jpeg',
    heroImage: '/images/projects/red-threshold/Thumbnail_Red.jpeg',
    gallery: [
      {
        type: 'embed',
        src: 'https://www.instagram.com/p/C7Bxr2Cr5Ew/',
        alt: 'Red Threshold game environment',
        caption: 'red threshold game environment',
      },
      {
        type: 'embed',
        src: 'https://www.instagram.com/p/C3MzIGGLtWV/',
        alt: 'Red Threshold game environment',
        caption: 'red threshold game environment',
      },
    ],
    featured: true,
    featuredOrder: 1,
    sortOrder: 1,
    coverStyle: 'dark',
  },
  {
    id: 'lho-awas',
    slug: 'lho-awas',
    title: 'Lho Awas',
    shortDescription: 'An interactive game project combining Unity development with voice recognition.',
    overview:
      'Lho Awas is an interactive game project that incorporates voice recognition through Wit.ai, bringing game development together with voice-based interaction.',
    categories: ['Game Development', 'Interactive Experience'],
    technologies: ['Unity', 'Wit.ai'],
    role: 'Game development contributor',
    contributions: [
      'Worked on developing the interactive game with Unity.',
      'Integrated voice-recognition functionality using Wit.ai.',
      'Contributed to implementing voice-based interaction in the game.',
    ],
    thumbnail: '',
    gallery: [],
    featured: true,
    featuredOrder: 4,
    sortOrder: 2,
    coverStyle: 'dark',
  },
  {
    id: 'virtucare',
    slug: 'virtucare',
    title: 'VirtuCare',
    shortDescription: 'A virtual-reality environment with 3D assets and object interactions.',
    overview:
      'VirtuCare is a VR project built around an interactive virtual environment featuring a room and healthcare-related equipment. It combines 3D asset creation, browser-based 3D technology, and VR interaction.',
    categories: ['Virtual Reality', 'Interactive Experience', '3D Art & Modeling'],
    technologies: ['Babylon.js', 'JavaScript', 'HTML', 'Meta Quest'],
    role: '3D asset and interaction contributor',
    contributions: [
      'Created 3D assets for the virtual room and its equipment.',
      'Developed object interactions, including grabbing and releasing objects.',
      'Contributed to the interactive VR experience using Babylon.js.',
    ],
    thumbnail: '',
    gallery: [
      {
        type: 'embed',
        src: 'https://www.instagram.com/p/DR59Q2REoHz/',
        alt: 'VirtuCare project on Instagram',
        caption: 'VirtuCare',
      },
    ],
    featured: true,
    featuredOrder: 3,
    sortOrder: 3,
    coverStyle: 'dark',
  },
  {
    id: 'galaxy-mall-treasure-hunt',
    slug: 'galaxy-mall-treasure-hunt',
    title: 'Galaxy Mall Treasure Hunt',
    shortDescription: 'A HoloLens 2 mixed-reality treasure-hunt experience with a real-time dashboard.',
    overview:
      'Galaxy Mall Treasure Hunt is a mixed-reality project built around an interactive treasure-hunt experience using HoloLens 2. Related work included a real-time dashboard for managing or displaying information about players, objects, stores, scores, locations, and leaderboard data.',
    categories: ['Augmented Reality & Mixed Reality', 'Interactive Experience'],
    technologies: ['HoloLens 2', 'Unity', 'Firebase', 'HTML'],
    contributions: [],
    thumbnail: '',
    gallery: [],
    featured: true,
    featuredOrder: 5,
    sortOrder: 4,
    coverStyle: 'dark',
  },
  {
    id: 'antigravity-marketplace',
    slug: 'antigravity-marketplace',
    title: 'Antigravity Marketplace / Lapak 3D',
    shortDescription: 'A 3D marketplace prototype with interactive product viewing and a simulated transaction flow.',
    overview:
      'An interactive 3D marketplace concept that presents products through three-dimensional models users can rotate and explore in the browser. The prototype includes product presentation pages, login and registration interfaces, and a simulated transaction flow; it does not use a database.',
    categories: ['Interactive Web', '3D Web Experience'],
    technologies: ['Three.js', 'JavaScript', 'HTML'],
    role: 'Interactive marketplace contributor',
    contributions: [
      'Worked on developing the interactive marketplace prototype.',
      'Implemented or contributed to the interactive presentation of 3D product models.',
    ],
    thumbnail: '/images/projects/lapak-3d/Screenshot 2026-11-07 215413.png',
    gallery: [
      {
        type: 'image',
        src: '/images/projects/lapak-3d/Screenshot 2026-11-07 215424.png',
        alt: 'Halaman produk pada Antigravity Marketplace',
        caption: 'Product listing',
      },
      {
        type: 'image',
        src: '/images/projects/lapak-3d/Screenshot 2026-11-07 215520.png',
        alt: 'Halaman detail produk pada Antigravity Marketplace',
        caption: 'Product detail',
      },
      {
        type: 'image',
        src: '/images/projects/lapak-3d/Screenshot 2026-11-07 215539.png',
        alt: 'Halaman produk 3D pada Antigravity Marketplace',
        caption: '3D product presentation',
      },
    ],
    featured: false,
    sortOrder: 5,
    coverStyle: 'lime',
  },
  {
    id: 'gotcha',
    slug: 'gotcha',
    title: 'Gotcha',
    shortDescription: 'A mobile cafe-ordering application for browsing products and placing orders.',
    overview:
      'Gotcha is a mobile cafe-ordering application designed to provide a digital interface for browsing products and placing orders.',
    categories: ['Mobile Applications', 'UI Development'],
    technologies: ['Flutter', 'Firebase'],
    role: 'Mobile application developer',
    contributions: [
      'Developed the cafe-ordering application.',
      'Worked with Flutter for the mobile application.',
      'Used Firebase as part of the application implementation.',
    ],
    thumbnail: '/images/projects/gotcha/banner_1.jpg',
    thumbnailSlides: [
      '/images/projects/gotcha/banner_1.jpg',
      '/images/projects/gotcha/banner_2.jpg',
    ],
    gallery: [
      {
        type: 'image',
        src: '/images/projects/gotcha/Screenshot 2026-06-01 120838.png',
        alt: 'Tampilan detail minuman di aplikasi Gotcha',
        caption: 'Product customization',
      },
      {
        type: 'image',
        src: '/images/projects/gotcha/Screenshot 2026-06-01 121418.png',
        alt: 'Halaman profil pengguna aplikasi Gotcha',
        caption: 'User profile',
      },
      {
        type: 'image',
        src: '/images/projects/gotcha/Screenshot 2026-06-01 121503.png',
        alt: 'Daftar pesanan di aplikasi Gotcha',
        caption: 'Order list',
      },
      {
        type: 'image',
        src: '/images/projects/gotcha/Screenshot 2026-06-01 121524.png',
        alt: 'Dashboard admin aplikasi Gotcha',
        caption: 'Admin dashboard',
      },
    ],
    featured: false,
    sortOrder: 6,
    coverStyle: 'dark',
  },
  {
    id: 'nasihat-mau-di-pos-ronda',
    slug: 'nasihat-mau-di-pos-ronda',
    title: 'Nasihat Mau di Pos Ronda',
    shortDescription: 'A collaborative 3D animation project set in an Indonesian neighborhood.',
    overview:
      'Nasihat Mau di Pos Ronda is a 3D animation project featuring an Indonesian neighborhood and a security-post environment. The project was completed by a five-person team.',
    categories: ['Animation & Visual Production', '3D Art & Modeling', 'Character Animation'],
    technologies: ['Blender', 'CapCut'],
    role: '3D artist and animator on a five-person team',
    contributions: [
      'Created the Pak Agus character model.',
      'Modeled the surrounding environment, including a house and an electricity pole.',
      'Worked on character rigging and animation.',
      'Set up the nighttime lighting.',
      'Handled rendering and final video production.',
    ],
    thumbnail: '/images/projects/nasihat-mau-di-pos-ronda/image.png',
    gallery: [
      {
        type: 'image',
        src: '/images/projects/nasihat-mau-di-pos-ronda/image.png',
        alt: 'Adegan animasi Nasihat Mau di Pos Ronda',
        caption: 'Suasana ronda malam',
      },
      {
        type: 'image',
        src: '/images/projects/nasihat-mau-di-pos-ronda/image copy.png',
        alt: 'Karakter berkumpul di pos ronda',
        caption: 'Karakter dan lingkungan',
      },
      {
        type: 'embed',
        src: 'https://drive.google.com/file/d/1SvGyR-AOeFctsXXxCmARRSQ0vnR4wPkn/preview',
        alt: 'Video Nasihat Mau di Pos Ronda',
        caption: 'Animasi Nasihat Mau di Pos Ronda',
      },
    ],
    featured: true,
    featuredOrder: 2,
    sortOrder: 7,
    coverStyle: 'dark',
  },
  {
    id: 'cut-nyak-dien-projection-mapping',
    slug: 'cut-nyak-dien-projection-mapping',
    title: 'Cut Nyak Dien — Projection Mapping',
    shortDescription: 'A visual production project for a projection-mapping presentation about Cut Nyak Dien.',
    overview:
      'A visual production project created for a projection-mapping presentation based on the historical figure Cut Nyak Dien.',
    categories: ['Projection Mapping', 'Animation & Visual Production'],
    technologies: [],
    contributions: [],
    thumbnail: '',
    gallery: [],
    featured: false,
    sortOrder: 8,
    coverStyle: 'dark',
  },
  {
    id: 'taman-harmoni-virtual-tour',
    slug: 'taman-harmoni-virtual-tour',
    title: '360° Virtual Tour — Taman Harmoni',
    shortDescription: 'A 360-degree virtual tour documenting Taman Harmoni in Surabaya across more than 30 location points.',
    overview:
      'A 360-degree virtual tour project documenting Taman Harmoni in Surabaya. The project involved more than 30 location points.',
    categories: ['Virtual Tour', 'Immersive Media', '360° Video'],
    technologies: [],
    contributions: [],
    thumbnail: '',
    gallery: [],
    featured: false,
    sortOrder: 9,
    coverStyle: 'dark',
  },
  {
    id: '3d-product-modeling-bottle-tumbler',
    slug: '3d-product-modeling-bottle-tumbler',
    title: '3D Product Modeling — Bottle / Tumbler',
    shortDescription: 'A personal 3D product-modeling exploration of a bottle or tumbler and its cap details.',
    overview:
      'A personal 3D product-modeling project focused on creating a bottle or tumbler model from scratch, with custom cap details and a mechanism inspired by motorcycle keyless systems.',
    categories: ['3D Art & Modeling', '3D Product Modeling', '3D Visualization'],
    technologies: ['Blender'],
    role: '3D artist',
    contributions: [
      'Modeled the product from the beginning.',
      'Designed the details of the cap.',
      'Explored a cap mechanism inspired by the keyless mechanism found on motorcycles.',
    ],
    thumbnail: '/images/projects/3d-product-bottle/1.png',
    gallery: [
      {
        type: 'image',
        src: '/images/projects/3d-product-bottle/2.png',
        alt: 'Tampilan alternatif model botol',
        caption: 'Product view',
      },
      {
        type: 'image',
        src: '/images/projects/3d-product-bottle/3.png',
        alt: 'Detail model botol dan tutup',
        caption: 'Cap detail',
      },
      {
        type: 'image',
        src: '/images/projects/3d-product-bottle/4.png',
        alt: 'Eksplorasi bentuk model botol',
        caption: 'Form exploration',
      },
      {
        type: 'image',
        src: '/images/projects/3d-product-bottle/5.png',
        alt: 'Tampilan model botol dari sudut berbeda',
        caption: 'Alternate angle',
      },
    ],
    featured: true,
    featuredOrder: 6,
    sortOrder: 10,
    coverStyle: 'dark',
  },
  {
    id: 'smk-senopati-ai-promo',
    slug: 'smk-senopati-ai-promo',
    title: 'SMK Senopati — AI Promotional Video',
    shortDescription: 'An AI-assisted promotional-video concept with an animated paper-origami visual style.',
    overview:
      'A promotional video concept for SMK Senopati using an AI-generated paper-origami animation style to present the school’s programs and educational identity.',
    categories: ['AI Visuals', 'Animation & Visual Production', 'Promotional Video'],
    technologies: ['AI-assisted visual generation', 'Video editing tools'],
    role: 'AI-assisted visual-content contributor',
    contributions: [
      'Developed the visual direction around animated paper-origami aesthetics.',
      'Used AI-assisted visual creation in the promotional-video workflow.',
      'Worked on the visual presentation and final video content.',
    ],
    thumbnail: '',
    gallery: [],
    featured: false,
    sortOrder: 11,
    coverStyle: 'dark',
  },
];

const seenIds = new Set<string>();
const seenSlugs = new Set<string>();
for (const project of projects) {
  if (seenIds.has(project.id)) {
    throw new Error(`Duplicate project id: "${project.id}"`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug) || seenSlugs.has(project.slug)) {
    throw new Error(`Invalid or duplicate project slug: "${project.slug}"`);
  }
  seenIds.add(project.id);
  seenSlugs.add(project.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? a.sortOrder ?? 999) - (b.featuredOrder ?? b.sortOrder ?? 999));
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => {
      const aShared =
        a.categories.filter((category) => current.categories.includes(category)).length +
        a.technologies.filter((technology) => current.technologies.includes(technology)).length;
      const bShared =
        b.categories.filter((category) => current.categories.includes(category)).length +
        b.technologies.filter((technology) => current.technologies.includes(technology)).length;
      return bShared - aShared;
    })
    .filter(
      (project) =>
        project.categories.some((category) => current.categories.includes(category)) ||
        project.technologies.some((technology) => current.technologies.includes(technology))
    )
    .slice(0, limit);
}
