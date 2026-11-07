import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/project';
import { ProjectImage } from './ProjectImage';

interface CinematicProjectGalleryProps {
  projects: Project[];
}

interface ProjectTrainCardProps {
  project: Project;
  index: number;
  total: number;
  width: number | string;
  selected: boolean;
  entering: boolean;
  dimmed: boolean;
  staticLayout?: boolean;
  onSelect: (id: string | null) => void;
  onEnter: (event: React.MouseEvent<HTMLAnchorElement>, project: Project) => void;
  edgeOpacity?: MotionValue<number>;
}

function ProjectTrainCard({
  project,
  index,
  total,
  width,
  selected,
  entering,
  dimmed,
  staticLayout = false,
  onSelect,
  onEnter,
  edgeOpacity,
}: ProjectTrainCardProps) {
  const image =
    project.heroImage ||
    project.thumbnail ||
    project.thumbnailSlides?.[0] ||
    project.gallery?.find((media) => media.type === 'image')?.src ||
    '';
  const offset = staticLayout ? 0 : [18, -28, 36, -8, 24][index % 5];
  const tilt = staticLayout ? 0 : [-1.4, 1.1, -0.8, 1.5, -1][index % 5];

  return (
    <motion.article
      className="project-train-card"
      style={{ width, opacity: edgeOpacity }}
      initial={false}
      animate={{
        y: entering ? -12 : selected ? -26 : offset,
        rotate: entering || selected ? 0 : tilt,
        scale: entering ? 1.09 : selected ? 1.045 : dimmed ? 0.94 : 1,
        filter: dimmed ? 'blur(2px)' : 'blur(0px)',
        zIndex: entering ? 100 : selected ? 50 : total - index,
      }}
      transition={{ type: 'spring', stiffness: 190, damping: 24, mass: 0.8 }}
      onMouseEnter={() => onSelect(project.id)}
      onMouseLeave={() => {
        if (!entering && window.matchMedia('(hover: hover)').matches) onSelect(null);
      }}
      onFocus={() => onSelect(project.id)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onSelect(null);
        }
      }}
    >
      <Link
        to={`/projects/${project.slug}`}
        onClick={(event) => onEnter(event, project)}
        className="project-train-link"
        aria-label={`Open project ${project.title}`}
      >
        <motion.div
          layoutId={`project-visual-${project.slug}`}
          className="project-train-art"
        >
          <ProjectImage
            src={image}
            title={project.title}
            index={index}
            alt={`${project.title} project preview`}
            loading={index < 3 ? 'eager' : 'lazy'}
            decoding="async"
            className="project-train-image"
          />
          <div className="project-train-art-shade" aria-hidden="true" />
          <span className="project-train-count">
            {String(index + 1).padStart(2, '0')} <span>/</span> {String(total).padStart(2, '0')}
          </span>
          <span className="project-train-open" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
          <div className="project-train-caption">
            <span className="project-train-category">{project.categories[0] ?? 'Selected work'}</span>
            <span className="project-train-title">{project.title}</span>
            <span className="project-train-description">{project.shortDescription}</span>
          </div>
        </motion.div>
        <span className="sr-only">View details for {project.title}</span>
      </Link>
    </motion.article>
  );
}

interface MovingProjectTrainCardProps extends ProjectTrainCardProps {
  scrollProgress: MotionValue<number>;
  fadeRange: [number, number, number, number];
}

function MovingProjectTrainCard({
  scrollProgress,
  fadeRange,
  ...cardProps
}: MovingProjectTrainCardProps) {
  const fadeProgress = useTransform(scrollProgress, fadeRange, [0, 1, 1, 0]);
  const edgeOpacity = useTransform(fadeProgress, (opacity) => opacity ** 3);
  return <ProjectTrainCard {...cardProps} edgeOpacity={edgeOpacity} />;
}

function getCardFadeRange(
  index: number,
  cardWidth: number,
  gap: number,
  sidePadding: number,
  viewportWidth: number,
  travel: number
): [number, number, number, number] {
  if (travel === 0) return [-2, -1, 1, 2];

  const center = sidePadding + index * (cardWidth + gap) + cardWidth / 2;
  const fade = Math.min(cardWidth * 0.65, viewportWidth * 0.32);
  return [
    (center - viewportWidth - fade) / travel,
    (center - viewportWidth + fade) / travel,
    (center - fade) / travel,
    (center + fade) / travel,
  ];
}

export function CinematicProjectGallery({ projects }: CinematicProjectGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [viewportWidth, setViewportWidth] = useState(
    () => (typeof window === 'undefined' ? 1280 : window.innerWidth)
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [enteringId, setEnteringId] = useState<string | null>(null);
  const entryTimeout = useRef<number | null>(null);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', updateViewport, { passive: true });
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(
    () => () => {
      if (entryTimeout.current !== null) window.clearTimeout(entryTimeout.current);
    },
    []
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const easedProgress = useSpring(scrollYProgress, {
    stiffness: 62,
    damping: 22,
    mass: 0.7,
  });

  const cardWidth = Math.min(
    320,
    Math.max(
      240,
      viewportWidth * (viewportWidth < 640 ? 0.68 : viewportWidth < 1024 ? 0.34 : 0.25)
    )
  );
  const gap = viewportWidth < 640 ? 18 : 32;
  const sidePadding = Math.max(20, (viewportWidth - cardWidth) / 2);
  const trackWidth = sidePadding * 2 + projects.length * cardWidth + Math.max(0, projects.length - 1) * gap;
  const travel = Math.max(0, trackWidth - viewportWidth);
  const trackX = useTransform(easedProgress, [0, 1], [0, -travel]);
  const progressBar = useTransform(easedProgress, [0, 1], ['0%', '100%']);
  const sectionHeight = Math.max(220, 130 + projects.length * 20);

  const handleEnter = (event: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch && selectedId !== project.id) {
      event.preventDefault();
      setSelectedId(project.id);
      return;
    }

    if (reduceMotion) return;
    event.preventDefault();
    if (entryTimeout.current !== null) window.clearTimeout(entryTimeout.current);
    setSelectedId(project.id);
    setEnteringId(project.id);
    entryTimeout.current = window.setTimeout(() => {
      navigate(`/projects/${project.slug}`);
    }, 420);
  };

  if (reduceMotion) {
    return (
      <div className="project-train-static">
        {projects.map((project, index) => (
          <ProjectTrainCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            width="100%"
            selected={selectedId === project.id}
            entering={false}
            dimmed={false}
            staticLayout
            onSelect={setSelectedId}
            onEnter={handleEnter}
          />
        ))}
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="project-train-section"
      style={{ height: `${sectionHeight}vh` }}
      aria-label="Interactive project gallery"
    >
      <div className="project-train-stage">
        <div className="project-train-stage-top">
          <span>Selected work</span>
          <span>Scroll to explore <span aria-hidden="true">↓</span></span>
        </div>
        <div className="project-train-window">
          <motion.div
            className="project-train-track"
            style={{ x: trackX, gap, paddingLeft: sidePadding, paddingRight: sidePadding }}
          >
            {projects.map((project, index) => (
              <MovingProjectTrainCard
                key={project.id}
                project={project}
                index={index}
                total={projects.length}
                width={cardWidth}
                selected={selectedId === project.id}
                entering={enteringId === project.id}
                dimmed={Boolean(enteringId && enteringId !== project.id)}
                onSelect={setSelectedId}
                onEnter={handleEnter}
                scrollProgress={easedProgress}
                fadeRange={getCardFadeRange(index, cardWidth, gap, sidePadding, viewportWidth, travel)}
              />
            ))}
          </motion.div>
        </div>
        <div className="project-train-stage-bottom" aria-hidden="true">
          <span>01</span>
          <span className="project-train-progress"><motion.span style={{ width: progressBar }} /></span>
          <span>{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
