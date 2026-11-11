import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Play,
  FileText,
  Globe,
  Maximize2,
  X,
} from 'lucide-react';

import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { GlassTag } from '../components/ui/GlassTag';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectImage } from '../components/projects/ProjectImage';

import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
  getRelatedProjects,
} from '../data/projects';
import type { ProjectLink, ProjectMedia } from '../types/project';
import { extractImageAccentColor } from '../utils/media';

const PROJECT_THEME_ACCENTS: Record<string, string> = {
  'red-threshold': '#b83236',
  'lho-awas': '#0284c7',
  virtucare: '#0d9488',
  'galaxy-mall-treasure-hunt': '#9333ea',
  'antigravity-marketplace': '#7044a5',
  gotcha: '#4b7118',
  'nasihat-mau-di-pos-ronda': '#a9c5ff',
  '3d-product-modeling-bottle-tumbler': '#246d90',
  'smk-senopati-ai-promo': '#d97706',
};

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Link Icon Helper ──────────────────────────────────────────────────────────

function linkIcon(type: ProjectLink['type']) {
  switch (type) {
    case 'github':
      return <Github size={15} />;
    case 'demo':
      return <Globe size={15} />;
    case 'video':
      return <Play size={15} />;
    case 'article':
      return <FileText size={15} />;
    default:
      return <ExternalLink size={15} />;
  }
}

function getEmbedSrc(src: string) {
  const instagramPost = src.match(
    /^https?:\/\/(?:www\.)?instagram\.com\/(p|reel|tv)\/([^/?#]+)/i
  );
  if (instagramPost) {
    return `https://www.instagram.com/${instagramPost[1]}/${instagramPost[2]}/embed`;
  }
  return src;
}

// ─── Content Section ───────────────────────────────────────────────────────────

interface ContentSectionProps {
  label: string;
  children: React.ReactNode;
  delay?: number;
}

function ContentSection({ label, children, delay = 0 }: ContentSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      variants={fadeUp}
      className="flex flex-col gap-3"
    >
      <h3 className="project-accent text-xs font-semibold tracking-[0.18em] uppercase text-[#a8ff3e]">
        {label}
      </h3>
      <div className="text-white/70 text-base leading-relaxed">{children}</div>
    </motion.div>
  );
}

function ProjectVideo({
  media,
}: {
  media: ProjectMedia;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center">
        <p className="text-sm text-white/60">Video tidak dapat diputar di browser ini.</p>
        <a
          href={media.src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#a8ff3e] underline underline-offset-4 hover:text-white"
        >
          Buka file video
        </a>
      </div>
    );
  }

  return (
    <video
      src={media.src}
      poster={media.poster}
      controls
      preload="metadata"
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  );
}

// ─── Sidebar Meta Row ──────────────────────────────────────────────────────────

interface MetaRowProps {
  label: string;
  children: React.ReactNode;
}

function MetaRow({ label, children }: MetaRowProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold tracking-[0.14em] uppercase text-white/35">
        {label}
      </span>
      <div className="text-white/80 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [projectPalette, setProjectPalette] = useState<{ slug: string; accent: string } | null>(null);

  const project = getProjectBySlug(slug);
  const projectAccent = project
    ? PROJECT_THEME_ACCENTS[project.slug] ??
      (projectPalette?.slug === project.slug ? projectPalette.accent : '#a8ff3e')
    : '#a8ff3e';
  const { prev, next } = getAdjacentProjects(slug);
  const related = getRelatedProjects(slug, 3);
  const gallery: ProjectMedia[] = [
    ...(project?.gallery ?? []),
    ...(project?.video
      ? [{
          type: 'video' as const,
          src: project.video,
          poster: project.videoThumbnail,
        }]
      : []),
  ];
  const imageGallery = gallery.flatMap((media, index) =>
    media.type === 'image' ? [{ media, index }] : []
  );

  useEffect(() => {
    let active = true;
    const imageSrc =
      project?.heroImage ||
      project?.thumbnail ||
      project?.thumbnailSlides?.[0] ||
      project?.gallery?.find((media) => media.type === 'image')?.src ||
      '';

    void extractImageAccentColor(imageSrc).then((accent) => {
      if (active && accent && project && !PROJECT_THEME_ACCENTS[project.slug]) {
        setProjectPalette({ slug: project.slug, accent });
      }
    });

    return () => {
      active = false;
    };
  }, [project]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const currentImage = imageGallery.findIndex((item) => item.index === lightboxIndex);
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const nextImage = (currentImage + direction + imageGallery.length) % imageGallery.length;
        setLightboxIndex(imageGallery[nextImage]?.index ?? null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageGallery, lightboxIndex]);

  // ── 404 State ─────────────────────────────────────────────────────────────
  if (!project) {
    return (
      <PageContainer>
        <section className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[#a8ff3e] text-xs font-semibold tracking-[0.2em] uppercase">
              404
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Project not found
            </h1>
            <p className="text-white/50 text-lg max-w-md">
              The project you're looking for doesn't exist or may have been moved.
            </p>
            <Link
              to="/projects"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#a8ff3e] text-black font-semibold text-sm hover:bg-[#c4ff6e] transition-colors duration-200"
            >
              <ArrowLeft size={15} />
              Back to Projects
            </Link>
          </motion.div>
        </section>
      </PageContainer>
    );
  }

  const heroSrc = project.heroImage || project.thumbnail;
  const hasGallery = gallery.length > 0;
  const hasRelated = related.length > 0;
  const hasNav = prev !== null || next !== null;
  const hasMetadata = Boolean(
    project.role || project.technologies.length > 0 || project.year || project.status
  );

  return (
    <PageContainer
      className={`project-detail-theme project-theme-${project.slug}`}
      style={{
        '--project-accent': projectAccent,
      } as React.CSSProperties}
    >
      {/* ── Project cover and editorial details ──────────────────────────── */}
      <section className="project-detail-hero py-8 md:py-12">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.8fr)] lg:gap-12">
            <motion.div
              layoutId={`project-visual-${project.slug}`}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="project-detail-art glass-card relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[16/10]"
            >
              <ProjectImage
                src={heroSrc}
                title={project.title}
                alt={`${project.title} project cover`}
                index={0}
                className="h-full w-full object-cover"
              />
              <div className="project-art-glass absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-xl">
                <span className="truncate text-xs font-medium uppercase tracking-[0.16em] text-white/75">
                  {project.categories[0] ?? 'Project'}
                </span>
                <span className="shrink-0 text-xs tabular-nums text-white/60">
                  {String(project.sortOrder ?? 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex flex-col"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/45">
                  <Link to="/projects" className="transition-colors hover:text-white">Projects</Link>
                  <ChevronRight size={13} aria-hidden="true" />
                  <span className="max-w-40 truncate text-white/70">{project.title}</span>
                </nav>
                <Link
                  to="/projects"
                  aria-label="Close project and return to project gallery"
                  className="rounded-full border border-white/15 bg-white/[0.06] p-2.5 text-white/75 backdrop-blur-xl transition-colors hover:bg-white/15 hover:text-white"
                >
                  <X size={18} />
                </Link>
              </div>

              <p className="project-accent mb-3 text-xs font-medium uppercase tracking-[0.18em]">
                {project.sortOrder ? `${String(project.sortOrder).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')} · ` : ''}
                {project.categories[0] ?? 'Selected work'}
              </p>
              <h1 className="mb-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
                {project.title}
              </h1>
              <p className="mb-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                {project.shortDescription}
              </p>

              <dl className="mb-7 border-y border-white/15">
                {project.role && (
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 py-3">
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-white/45">Role</dt>
                    <dd className="max-w-[65%] text-right text-sm text-white/85">{project.role}</dd>
                  </div>
                )}
                {project.year && (
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3">
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-white/45">Year</dt>
                    <dd className="text-sm text-white/85">{project.year}</dd>
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 py-3">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-white/45">Tools</dt>
                  <dd className="max-w-[70%] text-right text-sm text-white/85">
                    {project.technologies.length ? project.technologies.join(' · ') : '—'}
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  to={prev ? `/projects/${prev.slug}` : `/projects/${projects[projects.length - 1].slug}`}
                  aria-label={`Previous project: ${prev?.title ?? projects[projects.length - 1].title}`}
                  className="rounded-full border border-white/15 bg-white/[0.04] p-3 text-white/80 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                >
                  <ArrowLeft size={17} />
                </Link>
                <Link
                  to={next ? `/projects/${next.slug}` : `/projects/${projects[0].slug}`}
                  aria-label={`Next project: ${next?.title ?? projects[0].title}`}
                  className="rounded-full border border-white/15 bg-white/[0.04] p-3 text-white/80 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                >
                  <ArrowRight size={17} />
                </Link>
                <Button
                  as={Link}
                  to="/contact"
                  size="md"
                  className="project-primary-action ml-1 rounded-full"
                >
                  Start a project
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <section className="bg-white/[0.02] border-t border-white/[0.06] py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">

            {/* ── Left Column (2/3) ──────────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {(project.overview || project.fullDescription) && (
                <ContentSection label="Overview" delay={0}>
                  <p>{project.overview || project.fullDescription}</p>
                </ContentSection>
              )}

              {project.objective && (
                <ContentSection label="Objective" delay={0.05}>
                  <p>{project.objective}</p>
                </ContentSection>
              )}

              {project.challenge && (
                <ContentSection label="Challenge" delay={0.1}>
                  <p>{project.challenge}</p>
                </ContentSection>
              )}

              {project.contributions && project.contributions.length > 0 && (
                <ContentSection label="My Contributions" delay={0.12}>
                  <ul className="flex flex-col gap-2.5 mt-1">
                    {project.contributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#a8ff3e]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ContentSection>
              )}

              {project.process && (
                <ContentSection label="Process" delay={0.15}>
                  <p>{project.process}</p>
                </ContentSection>
              )}

              {project.detailSections?.map((section, index) => (
                <ContentSection
                  key={section.heading}
                  label={section.heading}
                  delay={0.16 + index * 0.03}
                >
                  <p>{section.body}</p>
                </ContentSection>
              ))}

              {project.outcome && (
                <ContentSection label="Outcome" delay={0.18}>
                  <p>{project.outcome}</p>
                </ContentSection>
              )}
            </div>

            {/* ── Right Column (1/3) — Sidebar ──────────────────────────── */}
            <aside className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-24">
              {hasMetadata && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                >
                  <GlassCard padding="lg" className="flex flex-col gap-6">
                    {project.role && (
                      <MetaRow label="Role">
                        <span>{project.role}</span>
                      </MetaRow>
                    )}

                    {project.technologies.length > 0 && (
                      <MetaRow label="Technologies">
                        <div className="flex flex-wrap gap-1.5 mt-0.5">
                          {project.technologies.map((tech) => (
                            <GlassTag key={tech} size="sm">
                              {tech}
                            </GlassTag>
                          ))}
                        </div>
                      </MetaRow>
                    )}

                    {project.year && (
                      <MetaRow label="Year">
                        <span>{project.year}</span>
                      </MetaRow>
                    )}

                    {project.status && (
                      <MetaRow label="Status">
                        <span className="capitalize">{project.status}</span>
                      </MetaRow>
                    )}
                  </GlassCard>
                </motion.div>
              )}

              {/* External Links */}
              {project.externalLinks && project.externalLinks.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={0.1}
                  variants={fadeUp}
                  className="flex flex-col gap-2.5"
                >
                  {project.externalLinks.map((link) => (
                    <Button
                      key={link.url}
                      as="a"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={link.type === 'github' ? 'secondary' : 'glass'}
                      size="md"
                      leftIcon={linkIcon(link.type)}
                      className="w-full justify-center"
                    >
                      {link.label}
                    </Button>
                  ))}
                </motion.div>
              )}

              {/* Back to Projects */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={0.14}
                variants={fadeUp}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<ArrowLeft size={14} />}
                  className="text-white/40 hover:text-white/70 w-full justify-center"
                  onClick={() => navigate('/projects')}
                >
                  All Projects
                </Button>
              </motion.div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      {hasGallery && (
        <section className="py-16 md:py-20 border-t border-white/[0.06]">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="mb-10"
            >
              <SectionHeading
                eyebrow="Visuals"
                title="Project Gallery"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((media, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.08] bg-[#080a0d] group"
                >
                  {media.type === 'image' ? (
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      aria-label={`Maximize ${media.alt ?? `${project.title} gallery image ${i + 1}`}`}
                      className="absolute inset-0 flex h-full w-full cursor-zoom-in items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a8ff3e]"
                    >
                      <ProjectImage
                        src={media.src}
                        title={project.title}
                        index={i}
                        alt={media.alt ?? `${project.title} gallery image ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <span className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/55 p-2 text-white/80 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                        <Maximize2 size={16} aria-hidden="true" />
                      </span>
                    </button>
                  ) : media.type === 'video' ? (
                    <ProjectVideo media={media} />
                  ) : (
                    <iframe
                      src={getEmbedSrc(media.src)}
                      title={media.alt ?? media.caption ?? `${project.title} video`}
                      loading="lazy"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  )}
                  {media.caption && (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white/60 text-xs">{media.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {lightboxIndex !== null && imageGallery.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightboxIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close expanded image"
            className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff3e] sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {imageGallery.length > 1 && (
            <button
              type="button"
              onClick={() => {
                const currentImage = imageGallery.findIndex((item) => item.index === lightboxIndex);
                const previousImage = (currentImage - 1 + imageGallery.length) % imageGallery.length;
                setLightboxIndex(imageGallery[previousImage].index);
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff3e] sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <figure className="flex max-h-full max-w-full flex-col items-center gap-4">
            <ProjectImage
              src={imageGallery.find((item) => item.index === lightboxIndex)?.media.src ?? ''}
              title={project.title}
              index={lightboxIndex}
              alt={
                imageGallery.find((item) => item.index === lightboxIndex)?.media.alt ??
                `${project.title} gallery image`
              }
              className="max-h-[calc(100vh-8rem)] max-w-[min(90vw,90rem)] object-contain"
            />
            {imageGallery.find((item) => item.index === lightboxIndex)?.media.caption && (
              <figcaption className="max-w-[min(90vw,60rem)] text-center text-sm text-white/70">
                {imageGallery.find((item) => item.index === lightboxIndex)?.media.caption}
              </figcaption>
            )}
          </figure>

          {imageGallery.length > 1 && (
            <button
              type="button"
              onClick={() => {
                const currentImage = imageGallery.findIndex((item) => item.index === lightboxIndex);
                const nextImage = (currentImage + 1) % imageGallery.length;
                setLightboxIndex(imageGallery[nextImage].index);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff3e] sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <span className="absolute bottom-4 text-xs text-white/45">
            {imageGallery.findIndex((item) => item.index === lightboxIndex) + 1} / {imageGallery.length}
            {' · '}Esc untuk menutup · ← → untuk berpindah
          </span>
        </div>
      )}

      {/* ── Related Projects ──────────────────────────────────────────────── */}
      {hasRelated && (
        <section className="py-16 md:py-20 border-t border-white/[0.06]">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="mb-10"
            >
              <SectionHeading
                eyebrow="See Also"
                title="Related Projects"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((relProject, i) => (
                <ProjectCard key={relProject.id} project={relProject} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Prev / Next Navigation ────────────────────────────────────────── */}
      {hasNav && (
        <section className="py-10 md:py-14 border-t border-white/[0.08]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Previous */}
              {prev ? (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                >
                  <Link
                    to={`/projects/${prev.slug}`}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff3e] rounded-2xl"
                    aria-label={`Previous project: ${prev.title}`}
                  >
                    <GlassCard
                      hover
                      padding="lg"
                      className="flex items-center gap-4"
                    >
                      <span className="shrink-0 p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] group-hover:border-[#a8ff3e]/30 group-hover:bg-[#a8ff3e]/[0.07] transition-all duration-300">
                        <ArrowLeft
                          size={16}
                          className="text-white/40 group-hover:text-[#a8ff3e] transition-colors duration-300"
                        />
                      </span>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30">
                          Previous
                        </span>
                        <span className="text-white font-semibold text-sm leading-snug truncate group-hover:text-[#a8ff3e] transition-colors duration-200">
                          {prev.title}
                        </span>
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          {prev.categories.slice(0, 2).map((cat) => (
                            <GlassTag key={cat} variant="muted" size="sm">
                              {cat}
                            </GlassTag>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ) : (
                <div />
              )}

              {/* Next */}
              {next ? (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={0.08}
                  variants={fadeUp}
                >
                  <Link
                    to={`/projects/${next.slug}`}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a8ff3e] rounded-2xl"
                    aria-label={`Next project: ${next.title}`}
                  >
                    <GlassCard
                      hover
                      padding="lg"
                      className="flex items-center justify-end gap-4 text-right"
                    >
                      <div className="flex flex-col gap-1 min-w-0 items-end">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30">
                          Next
                        </span>
                        <span className="text-white font-semibold text-sm leading-snug truncate group-hover:text-[#a8ff3e] transition-colors duration-200">
                          {next.title}
                        </span>
                        <div className="flex flex-wrap gap-1 justify-end mt-0.5">
                          {next.categories.slice(0, 2).map((cat) => (
                            <GlassTag key={cat} variant="muted" size="sm">
                              {cat}
                            </GlassTag>
                          ))}
                        </div>
                      </div>
                      <span className="shrink-0 p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] group-hover:border-[#a8ff3e]/30 group-hover:bg-[#a8ff3e]/[0.07] transition-all duration-300">
                        <ArrowRight
                          size={16}
                          className="text-white/40 group-hover:text-[#a8ff3e] transition-colors duration-300"
                        />
                      </span>
                    </GlassCard>
                  </Link>
                </motion.div>
              ) : (
                <div />
              )}

            </div>
          </Container>
        </section>
      )}
    </PageContainer>
  );
}
