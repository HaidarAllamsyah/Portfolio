// ─── Experience Data ───────────────────────────────────────────────────────────
// Add, edit, or remove experience entries here.
// Each entry appears automatically in the Experience timeline.

import type { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: 'immersive-fiesta-2026-chair',
    type: 'event',
    position: 'Ketua Pelaksana — Immersive Fiesta 2026',
    organization: 'Teknologi Rekayasa Multimedia, PENS',
    startDate: '2026',
    description:
      'Memimpin pelaksanaan acara tahunan Immersive Fiesta 2026 yang mencakup kompetisi, workshop, dan pameran karya multimedia.',
    responsibilities: [
      'Mengoordinasikan sekitar 50 anggota panitia yang terbagi dalam 6 divisi.',
      'Mengelola koordinasi tim, kebutuhan operasional, dan persiapan pelaksanaan acara.',
      'Acara melibatkan 104 peserta kompetisi dan 120 peserta workshop.',
    ],
    achievements: ['Leadership', 'Team Coordination', 'Event Management', 'Project Management'],
    tags: ['Leadership', 'Team Coordination', 'Event Management', 'Project Management'],
  },
  {
    id: '3mt-media-management-leader',
    type: 'organization',
    position: 'Leader — Multimedia Engineering Media Management Team (3MT)',
    organization: 'Teknologi Rekayasa Multimedia, PENS',
    startDate: '2026',
    endDate: '2027',
    description:
      'Memimpin tim pengelolaan media dan informasi program studi Teknologi Rekayasa Multimedia.',
    responsibilities: [
      'Mengoordinasikan pengelolaan dan publikasi informasi kegiatan program studi.',
      'Mengarahkan tim dalam penyampaian informasi melalui kanal media yang digunakan program studi.',
    ],
    achievements: ['Team Leadership', 'Content Coordination', 'Media Management', 'Information Publication'],
    tags: ['Team Leadership', 'Content Coordination', 'Media Management', 'Information Publication'],
  },
  {
    id: 'immersive-fiesta-2025-vice-chair',
    type: 'event',
    position: 'Wakil Ketua Pelaksana — Immersive Fiesta 2025',
    organization: 'Teknologi Rekayasa Multimedia, PENS',
    startDate: '2025',
    description:
      'Mendukung ketua pelaksana dalam koordinasi panitia dan pelaksanaan acara.',
    responsibilities: [
      'Membantu memastikan persiapan dan kebutuhan kegiatan berjalan sesuai rencana.',
    ],
    tags: [],
  },
  {
    id: 'cv-new-idea-videographer-editor-intern',
    type: 'internship',
    position: 'Videographer & Video Editor Intern',
    organization: 'CV New Idea Indonesia',
    startDate: 'September 2022',
    endDate: 'March 2023',
    description:
      'Memproduksi dokumentasi video untuk kegiatan sekolah dan berbagai acara.',
    responsibilities: [
      'Mengerjakan virtual tour untuk jenjang SD, SMP, dan SMA di wilayah Sidoarjo.',
      'Melakukan pengambilan gambar dan penyuntingan video untuk kegiatan khusus di beberapa sekolah.',
      'Menangani dokumentasi Sarasehan Temu Karya Budhayana Nasional 2022 selama beberapa hari secara mandiri sebagai videographer sekaligus editor.',
    ],
    achievements: ['Videography', 'Video Editing', 'Visual Storytelling', 'Field Production'],
    tags: ['Videography', 'Video Editing', 'Visual Storytelling', 'Field Production'],
  },
];
