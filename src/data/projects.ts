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
    thumbnail: '/images/projects/lho-awas/THUMBNAIL.jpg',
    gallery: [
      {
        type: 'image',
        src: '/images/projects/lho-awas/IMG_8414.jpg',
        alt: 'Gameplay dan setup interaktif game Lho Awas',
        caption: 'Gameplay & setup interaktif',
      },
      {
        type: 'image',
        src: '/images/projects/lho-awas/IMG_8415.jpg',
        alt: 'Demonstrasi interaksi berbasis suara pada Lho Awas',
        caption: 'Voice interaction demonstration',
      },
      {
        type: 'image',
        src: '/images/projects/lho-awas/IMG_8370.jpg',
        alt: 'Tampilan antarmuka game Lho Awas',
        caption: 'Antarmuka permainan',
      },
      {
        type: 'image',
        src: '/images/projects/lho-awas/IMG_8394.jpg',
        alt: 'Sesi pengujian game Lho Awas',
        caption: 'Testing & gameplay session',
      },
      {
        type: 'image',
        src: '/images/projects/lho-awas/IMG_8410.jpg',
        alt: 'Dokumentasi interaksi pemain pada game Lho Awas',
        caption: 'Player interaction documentation',
      },
      {
        type: 'image',
        src: '/images/projects/lho-awas/IMG_8437.jpg',
        alt: 'Tampilan visual game Lho Awas',
        caption: 'Game visual showcase',
      },
      {
        type: 'video',
        src: '/images/projects/lho-awas/THUMBNAIL.mp4',
        alt: 'Video dokumentasi gameplay Lho Awas',
        caption: 'Gameplay documentation video',
        poster: '/images/projects/lho-awas/IMG_8414.jpg',
      },
    ],
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
    thumbnail: '/images/projects/virtucare/DetakJantung.png',
    thumbnailSlides: [
      '/images/projects/virtucare/DetakJantung.png',
      '/images/projects/virtucare/TekananDarah.png',
      '/images/projects/virtucare/SuhuTubuh.png',
    ],
    gallery: [
      {
        type: 'embed',
        src: 'https://www.instagram.com/p/DR59Q2REoHz/',
        alt: 'VirtuCare project showcase di Instagram',
        caption: 'Showcase interaktif VirtuCare (Instagram)',
      },
      {
        type: 'image',
        src: '/images/projects/virtucare/DetakJantung.png',
        alt: 'Aset antarmuka sensor monitor detak jantung pada simulasi VR VirtuCare',
        caption: 'Vitals Monitor UI - Detak Jantung',
      },
      {
        type: 'image',
        src: '/images/projects/virtucare/TekananDarah.png',
        alt: 'Aset antarmuka sensor tensimeter tekanan darah pada simulasi VR VirtuCare',
        caption: 'Vitals Monitor UI - Tekanan Darah',
      },
      {
        type: 'image',
        src: '/images/projects/virtucare/SuhuTubuh.png',
        alt: 'Aset antarmuka sensor termometer suhu tubuh pada simulasi VR VirtuCare',
        caption: 'Vitals Monitor UI - Suhu Tubuh',
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
    thumbnail: '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153530.png',
    thumbnailSlides: [
      '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153530.png',
      '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153557.png',
      '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153724.png',
      '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153812.png',
    ],
    gallery: [
      {
        type: 'image',
        src: '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153530.png',
        alt: 'Tampilan lingkungan Mixed Reality Galaxy Mall Treasure Hunt',
        caption: 'Mixed reality environment',
      },
      {
        type: 'image',
        src: '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153557.png',
        alt: 'Interaksi objek pada HoloLens 2 Galaxy Mall Treasure Hunt',
        caption: 'HoloLens 2 interaction',
      },
      {
        type: 'image',
        src: '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153724.png',
        alt: 'Dashboard monitoring dan leaderboard real-time Galaxy Mall',
        caption: 'Real-time dashboard & leaderboard',
      },
      {
        type: 'image',
        src: '/images/projects/galaxy-mall-treasure-hunt/Screenshot 2026-11-11 153812.png',
        alt: 'Tampilan data dan lokasi objek pada dashboard Galaxy Mall',
        caption: 'Object & location tracking view',
      },
    ],
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
    thumbnailSlides: [
      '/images/projects/lapak-3d/Screenshot 2026-11-07 215413.png',
      '/images/projects/lapak-3d/Screenshot 2026-11-07 215424.png',
      '/images/projects/lapak-3d/Screenshot 2026-11-07 215520.png',
      '/images/projects/lapak-3d/Screenshot 2026-11-07 215539.png',
    ],
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
        src: '/images/projects/gotcha/banner_2.jpg',
        alt: 'Banner promosi minuman Gotcha',
        caption: 'Promotional banner',
      },
      {
        type: 'image',
        src: '/images/projects/gotcha/Screenshot 2026-06-01 120659.png',
        alt: 'Halaman utama aplikasi Gotcha',
        caption: 'Home & product catalog',
      },
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
    thumbnailSlides: [
      '/images/projects/nasihat-mau-di-pos-ronda/image.png',
      '/images/projects/nasihat-mau-di-pos-ronda/image copy.png',
    ],
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
        type: 'video',
        src: '/images/projects/nasihat-mau-di-pos-ronda/jadi nichh.mp4',
        alt: 'Video animasi final Nasihat Mau di Pos Ronda',
        caption: 'Video Animasi Final (MP4)',
        poster: '/images/projects/nasihat-mau-di-pos-ronda/image.png',
      },
      {
        type: 'embed',
        src: 'https://drive.google.com/file/d/1SvGyR-AOeFctsXXxCmARRSQ0vnR4wPkn/preview',
        alt: 'Video Nasihat Mau di Pos Ronda',
        caption: 'Animasi Nasihat Mau di Pos Ronda (Drive)',
      },
    ],
    featured: true,
    featuredOrder: 2,
    sortOrder: 7,
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
    thumbnailSlides: [
      '/images/projects/3d-product-bottle/1.png',
      '/images/projects/3d-product-bottle/2.png',
      '/images/projects/3d-product-bottle/3.png',
      '/images/projects/3d-product-bottle/4.png',
      '/images/projects/3d-product-bottle/5.png',
    ],
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
    sortOrder: 8,
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
    technologies: ['Generative AI', 'ElevenLabs (Voice AI)', 'FilmCraft', 'CapCut'],
    role: 'AI-assisted visual-content contributor',
    contributions: [
      'Developed the visual direction around animated paper-origami aesthetics.',
      'Used AI-assisted visual creation in the promotional-video workflow.',
      'Worked on the visual presentation and final video content.',
    ],
    thumbnail: '/images/projects/smk-senopati-ai-promo/thumbnail_smk_senopati.jpg',
    thumbnailSlides: [
      '/images/projects/smk-senopati-ai-promo/thumbnail_smk_senopati.jpg',
      '/images/projects/smk-senopati-ai-promo/paper_student_laptop.jpg',
      '/images/projects/smk-senopati-ai-promo/paper_student_camera.jpg',
      '/images/projects/smk-senopati-ai-promo/paper_student_motorcycle.jpg',
      '/images/projects/smk-senopati-ai-promo/paper_students_thumbsup.jpg',
    ],
    gallery: [
      {
        type: 'video',
        src: '/images/projects/smk-senopati-ai-promo/Promosi_Senopati.mp4',
        alt: 'Video Promosi SMK Senopati dengan gaya animasi paper-origami AI',
        caption: 'Video Promosi Final (AI Papercraft MP4)',
        poster: '/images/projects/smk-senopati-ai-promo/thumbnail_smk_senopati.jpg',
      },
      {
        type: 'image',
        src: '/images/projects/smk-senopati-ai-promo/thumbnail_smk_senopati.jpg',
        alt: 'Model gedung sekolah SMK Senopati dalam gaya papercraft 3D',
        caption: 'Gedung Sekolah Papercraft 3D',
      },
      {
        type: 'image',
        src: '/images/projects/smk-senopati-ai-promo/paper_student_laptop.jpg',
        alt: 'Siswa menggunakan laptop dalam visual origami papercraft',
        caption: 'Jurusan Teknologi & Komputer',
      },
      {
        type: 'image',
        src: '/images/projects/smk-senopati-ai-promo/paper_student_camera.jpg',
        alt: 'Siswa memegang kamera dalam visual origami papercraft',
        caption: 'Jurusan Multimedia & Kreatif',
      },
      {
        type: 'image',
        src: '/images/projects/smk-senopati-ai-promo/paper_student_motorcycle.jpg',
        alt: 'Siswa memeriksa mesin motor papercraft',
        caption: 'Jurusan Teknik Otomotif',
      },
      {
        type: 'image',
        src: '/images/projects/smk-senopati-ai-promo/paper_students_thumbsup.jpg',
        alt: 'Siswa SMK Senopati memberikan jempol',
        caption: 'Representasi Siswa SMK Senopati',
      },
      {
        type: 'embed',
        src: 'https://drive.google.com/file/d/1pE6Tyu6BJ9-ya6ki7AX4iak9qvM4fDUA/preview',
        alt: 'Video Promosi SMK Senopati di Google Drive',
        caption: 'Mirror Video (Google Drive)',
      },
    ],
    featured: false,
    sortOrder: 9,
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
