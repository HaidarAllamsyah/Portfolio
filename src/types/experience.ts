// ─── Experience Types ─────────────────────────────────────────────────────────

export type ExperienceType =
  | 'internship'
  | 'organization'
  | 'event'
  | 'volunteer'
  | 'freelance'
  | 'academic';

export interface Experience {
  id: string;
  type: ExperienceType;
  position: string;
  organization: string;
  location?: string;
  startDate: string; // ISO date string or "Month Year"
  endDate?: string;  // Omit if still ongoing
  current?: boolean;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
  logo?: string; // path relative to /public
  tags?: string[];
}

// ─── Skill Types ─────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  level?: 'learning' | 'familiar' | 'proficient' | 'advanced';
}

export interface SkillCategory {
  id: string;
  label: string;
  icon?: string;
  skills: Skill[];
}
