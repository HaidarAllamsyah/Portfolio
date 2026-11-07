import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { Project } from '../../types/project';
import { GlassTag } from '../ui/GlassTag';
import { ProjectImage } from './ProjectImage';
import { cn } from '../../utils/cn';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured' | 'compact' | 'gallery';
  index?: number;
}

export function ProjectCard({ project, variant = 'default', index = 0 }: ProjectCardProps) {
  const isLarge = variant === 'featured' && index === 0;
  const slides = project.thumbnailSlides?.length
    ? project.thumbnailSlides
    : [project.thumbnail];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [project.id, slides.length]);

  return (
    <motion.article
      className={variant === 'gallery' ? 'project-gallery-card' : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff3e] rounded-2xl"
        aria-label={`View project: ${project.title}`}
      >
        <div
          className={cn(
            'project-card-shell relative h-full rounded-2xl overflow-hidden',
            'border border-black/10',
            'bg-[#fbfaf6]',
            'transition-all duration-500',
            'group-hover:border-black/20',
            'group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_30px_rgba(168,255,62,0.08)]',
            'group-hover:-translate-y-1',
          )}
        >
          {/* Thumbnail */}
          <motion.div
            layoutId={`project-visual-${project.slug}`}
            className={cn(
              'project-card-thumbnail project-gallery-card-art relative overflow-hidden',
              isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'
            )}
          >
            {slides.length > 1 ? (
              <>
                <div className="absolute inset-0 bg-[#f5f4ec]" aria-hidden="true" />
                {slides.map((src, slideIndex) => (
                  <ProjectImage
                    key={src}
                    src={src}
                    title={project.title}
                    index={slideIndex}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      'absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ease-in-out',
                      activeSlide === slideIndex ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                ))}
                <div
                  className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
                  aria-hidden="true"
                >
                  {slides.map((src, slideIndex) => (
                    <span
                      key={src}
                      className={cn(
                        'h-1.5 rounded-full transition-all duration-300',
                        activeSlide === slideIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/55'
                      )}
                    />
                  ))}
                </div>
              </>
            ) : (
              <ProjectImage
                src={project.thumbnail}
                title={project.title}
                index={index}
                alt={`${project.title} thumbnail`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Featured badge */}
            {project.featured && (
              <span className="project-featured-badge absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#a8ff3e]/20 border border-[#a8ff3e]/40 text-[#a8ff3e] text-xs font-semibold backdrop-blur-sm">
                Featured
              </span>
            )}

            {/* Arrow icon on hover */}
            <span
              className={cn(
                'project-card-open-icon',
                'absolute top-3 right-3 p-2 rounded-lg',
                'bg-black/40 backdrop-blur-md border border-white/10',
                'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0',
                'transition-all duration-300'
              )}
              aria-hidden="true"
            >
              <ArrowUpRight size={14} className="text-white" />
            </span>
          </motion.div>

          {/* Content */}
          <div className="project-card-content p-5">
            {/* Category tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.categories.slice(0, 2).map((cat) => (
                <GlassTag key={cat} className="project-card-tag" variant="muted" size="sm">
                  {cat}
                </GlassTag>
              ))}
              {project.year && (
                <span className="ml-auto text-xs text-white/30 font-medium self-center">
                  {project.year}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className={cn(
              'font-bold text-white mb-2 leading-tight tracking-tight',
              'transition-colors duration-200 group-hover:text-[#a8ff3e]',
              isLarge ? 'text-xl md:text-2xl' : 'text-lg'
            )}>
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
              {project.shortDescription}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <GlassTag key={tech} className="project-card-tag" size="sm">
                  {tech}
                </GlassTag>
              ))}
              {project.technologies.length > 4 && (
                <GlassTag className="project-card-tag" size="sm" variant="muted">
                  +{project.technologies.length - 4}
                </GlassTag>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
