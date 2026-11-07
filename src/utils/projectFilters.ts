// ─── Project Filter Utilities ────────────────────────────────────────────────

import type { Project, ProjectCategory, ProjectFilters, SortOption } from '../types/project';

/** Filter and sort a list of projects based on active filter state. */
export function filterProjects(
  projects: Project[],
  filters: ProjectFilters
): Project[] {
  let result = [...projects];

  // Category filter
  if (filters.categories.length > 0) {
    result = result.filter((p) =>
      p.categories.some((cat) => filters.categories.includes(cat))
    );
  }

  // Search filter — matches project content, categories, or technologies.
  if (filters.search.trim().length > 0) {
    const q = filters.search.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        (p.overview ?? p.fullDescription ?? '').toLowerCase().includes(q) ||
        (p.role ?? '').toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
    );
  }

  // Sort
  result = sortProjects(result, filters.sort);

  return result;
}

/** Sort projects by the given option. */
export function sortProjects(projects: Project[], sort: SortOption): Project[] {
  const clone = [...projects];

  switch (sort) {
    case 'featured':
      return clone.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        const orderA = a.featured
          ? a.featuredOrder ?? a.sortOrder ?? 999
          : a.sortOrder ?? 999;
        const orderB = b.featured
          ? b.featuredOrder ?? b.sortOrder ?? 999
          : b.sortOrder ?? 999;
        return orderA - orderB;
      });

    case 'newest':
      return clone.sort((a, b) => {
        const ya = typeof a.year === 'number' ? a.year : 0;
        const yb = typeof b.year === 'number' ? b.year : 0;
        return yb - ya;
      });

    case 'oldest':
      return clone.sort((a, b) => {
        const ya = typeof a.year === 'number' ? a.year : 9999;
        const yb = typeof b.year === 'number' ? b.year : 9999;
        return ya - yb;
      });

    case 'alphabetical':
      return clone.sort((a, b) => a.title.localeCompare(b.title));

    default:
      return clone;
  }
}

/** Get all unique categories from a project list. */
export function getAllCategories(projects: Project[]): ProjectCategory[] {
  const set = new Set<ProjectCategory>();
  for (const p of projects) {
    for (const cat of p.categories) {
      set.add(cat);
    }
  }
  return Array.from(set).sort();
}
