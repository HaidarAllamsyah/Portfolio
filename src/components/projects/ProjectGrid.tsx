import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types/project';
import { cn } from '../../utils/cn';

interface ProjectGridProps {
  projects: Project[];
  variant?: 'gallery' | 'featured';
  className?: string;
}

/**
 * Responsive project grid with optional asymmetric featured layout.
 */
export function ProjectGrid({ projects, variant = 'gallery', className }: ProjectGridProps) {
  if (projects.length === 0) return null;

  if (variant === 'featured') {
    return (
      <div className={cn('grid gap-6', className)}>
        {/* Large feature card */}
        {projects[0] && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2 lg:col-span-1">
              <ProjectCard project={projects[0]} variant="featured" index={0} />
            </div>
            {/* Two smaller cards beside or below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {projects.slice(1, 3).map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i + 1} />
              ))}
            </div>
          </div>
        )}

        {/* Remaining cards in 3-column grid */}
        {projects.length > 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(3).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 3} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Standard gallery grid
  return (
    <div
      className={cn(
        'project-gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
        className
      )}
    >
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} variant="gallery" index={i} />
      ))}
    </div>
  );
}
