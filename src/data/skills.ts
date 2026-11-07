// ─── Skills Data ─────────────────────────────────────────────────────────────
// Add, edit, or remove skills and categories here.
// Displayed on the About page.

import type { SkillCategory } from '../types/experience';

export const skillCategories: SkillCategory[] = [
  {
    id: '3d-tools',
    label: '3D & Visual Production',
    skills: [
      { name: 'Blender', level: 'proficient' },
      { name: 'Unreal Engine', level: 'familiar' },
      { name: 'Unity', level: 'familiar' },
    ],
  },
  {
    id: 'web-dev',
    label: 'Web & Interactive',
    skills: [
      { name: 'Three.js', level: 'familiar' },
      { name: 'Babylon.js', level: 'familiar' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'TypeScript', level: 'learning' },
      { name: 'React', level: 'learning' },
      { name: 'HTML & CSS', level: 'proficient' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    skills: [
      { name: 'Flutter', level: 'familiar' },
      { name: 'Firebase', level: 'familiar' },
    ],
  },
  {
    id: 'xr',
    label: 'XR & Immersive',
    skills: [
      { name: 'Meta Quest / WebXR', level: 'familiar' },
      { name: 'HoloLens 2', level: 'familiar' },
      { name: '360° Media Production', level: 'familiar' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI & Creative Tools',
    skills: [
      { name: 'AI Image Generation', level: 'familiar' },
      { name: 'Wit.ai (Voice AI)', level: 'familiar' },
      { name: 'CapCut', level: 'proficient' },
    ],
  },
  {
    id: 'design',
    label: 'Design & Production',
    skills: [
      { name: 'Adobe Photoshop', level: 'familiar' },
      { name: 'Video Editing', level: 'familiar' },
      { name: 'Projection Mapping', level: 'familiar' },
    ],
  },
];
