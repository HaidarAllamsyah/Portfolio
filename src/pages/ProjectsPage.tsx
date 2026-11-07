// ─── Projects Page ────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX } from 'lucide-react';

import { projects } from '../data/projects';
import { getAllCategories, filterProjects } from '../utils/projectFilters';
import type { ProjectFilters } from '../types/project';

import { CinematicProjectGallery } from '../components/projects/CinematicProjectGallery';
import { ProjectFilters as ProjectFiltersPanel } from '../components/projects/ProjectFilters';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PageContainer } from '../components/layout/PageContainer';

// ─── Empty State ──────────────────────────────────────────────────────────────

interface EmptyStateProps {
  onClear: () => void;
}

function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center py-28 text-center"
    >
      {/* Icon bubble */}
      <div className="project-empty-icon mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08]">
        <SearchX size={36} className="text-white/20" />
      </div>

      <h3 className="project-empty-title mb-2 text-xl font-semibold text-white/80">
        No projects found
      </h3>
      <p className="project-empty-copy mb-8 max-w-xs text-sm leading-relaxed text-white/40">
        Try adjusting your search or filters to find what you're looking for.
      </p>

      <button
        onClick={onClear}
        className={[
          'inline-flex items-center gap-2 rounded-xl px-5 py-2.5',
          'bg-[#a8ff3e]/10 border border-[#a8ff3e]/30 text-[#a8ff3e]',
          'text-sm font-medium',
          'hover:bg-[#a8ff3e]/20 hover:border-[#a8ff3e]/50',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff3e]',
        ].join(' ')}
      >
        Clear filters
      </button>
    </motion.div>
  );
}

// ─── Projects Page ────────────────────────────────────────────────────────────

const DEFAULT_FILTERS: ProjectFilters = {
  categories: [],
  search: '',
  sort: 'featured',
};

export default function ProjectsPage() {
  // ── Filter state ────────────────────────────────────────────────────────────
  const [filters, setFilters] = useState<ProjectFilters>(DEFAULT_FILTERS);

  // ── Derived data ────────────────────────────────────────────────────────────
  const allCategories = useMemo(() => getAllCategories(projects), []);
  const filteredProjects = useMemo(
    () => filterProjects(projects, filters),
    [filters]
  );

  const handleClearFilters = () => setFilters(DEFAULT_FILTERS);

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <PageContainer className="projects-theme">
      {/* ── Hero / Heading ───────────────────────────────────────────────── */}
      <section className="pt-24 pb-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <SectionHeading
              className="projects-heading"
              eyebrow="All Work"
              title="Project"
              titleAccent="Gallery"
              subtitle="A collection of 3D art, games, interactive experiences, and more."
            />
          </motion.div>
        </Container>
      </section>

      {/* ── Filters ─────────────────────────────────────────────────────── */}
      <section className="project-filters-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="project-filters">
              <ProjectFiltersPanel
                categories={allCategories}
                filters={filters}
                onFiltersChange={setFilters}
                totalCount={projects.length}
                filteredCount={filteredProjects.length}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Project Grid / Empty State ───────────────────────────────────── */}
      <section className="project-gallery-section mt-10 pb-24">
        <Container>
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <EmptyState key="empty-state" onClear={handleClearFilters} />
            ) : (
              <motion.div
                key="project-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <CinematicProjectGallery projects={filteredProjects} />
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </PageContainer>
  );
}
