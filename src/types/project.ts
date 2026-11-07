// ─── Project Types ───────────────────────────────────────────────────────────

export type ProjectCategory =
  | '3D Art & Modeling'
  | '3D Environment Art'
  | '3D Product Modeling'
  | '3D Visualization'
  | '3D Web Experience'
  | 'Animation & Visual Production'
  | 'Character Animation'
  | 'Game Development'
  | 'Interactive Experience'
  | 'Interactive Web'
  | 'Mobile Applications'
  | 'UI Development'
  | 'Virtual Reality'
  | 'Augmented Reality & Mixed Reality'
  | 'Projection Mapping'
  | 'Virtual Tour'
  | 'Immersive Media'
  | '360° Video'
  | 'AI Visuals'
  | 'Promotional Video';

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface ProjectMedia {
  type: 'image' | 'video' | 'embed';
  src: string;
  alt?: string;
  caption?: string;
  poster?: string; // For videos, an image poster
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'video' | 'article' | 'other';
}

export interface ProjectDetailSection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription?: string;
  overview?: string;
  year?: number | string;
  categories: ProjectCategory[];
  technologies: string[];
  role?: string;
  contributions?: string[];
  thumbnail: string; // path relative to /public
  thumbnailSlides?: string[];
  heroImage?: string;
  gallery?: ProjectMedia[];
  video?: string;
  videoThumbnail?: string;
  featured: boolean;
  featuredOrder?: number; // lower = higher priority in featured list
  sortOrder?: number;
  status?: ProjectStatus;
  externalLinks?: ProjectLink[];
  detailSections?: ProjectDetailSection[];
  process?: string;
  outcome?: string;
  challenge?: string;
  objective?: string;
  collaborators?: string[];
  coverStyle?: 'dark' | 'light' | 'lime'; // for card accent
}

// ─── Filter Types ────────────────────────────────────────────────────────────

export type SortOption = 'featured' | 'newest' | 'oldest' | 'alphabetical';

export interface ProjectFilters {
  categories: ProjectCategory[];
  search: string;
  sort: SortOption;
}
