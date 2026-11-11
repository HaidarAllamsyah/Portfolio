import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Box,
  Sparkles,
  Gamepad2,
  Globe,
  Glasses,
  Wand2,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { PageContainer } from '../components/layout/PageContainer';
import { getFeaturedProjects } from '../data/projects';
import { experiences } from '../data/experience';
import { siteConfig } from '../config/site';
import { cn } from '../utils/cn';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Expertise Data ───────────────────────────────────────────────────────────

const interestDetails: Record<string, { icon: LucideIcon; description: string }> = {
  '3D Modeling & Environment Art': {
    icon: Box,
    description: 'Exploring 3D assets, environments, and product models through hands-on projects.',
  },
  'Animation & Visual Production': {
    icon: Sparkles,
    description: 'Working across character and environment modeling, rigging, animation, lighting, and rendering.',
  },
  'Game Development': {
    icon: Gamepad2,
    description: 'Contributing to game environments and interactive projects built with Unreal Engine and Unity.',
  },
  'Interactive Web Experiences': {
    icon: Globe,
    description: 'Building browser-based 3D interactions with tools such as Three.js and Babylon.js.',
  },
  'VR / AR / Mixed Reality': {
    icon: Glasses,
    description: 'Exploring VR and mixed-reality experiences for Meta Quest and HoloLens 2.',
  },
  'AI-Assisted Visual Creation': {
    icon: Wand2,
    description: 'Exploring AI-assisted tools and workflows for visual creation.',
  },
};

// ─── Bio paragraphs ───────────────────────────────────────────────────────────

const bioParagraphs = siteConfig.bio.trim().split('\n\n').slice(0, 2);

// ─── HeroSection ─────────────────────────────────────────────────────────────

function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-80"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 30% 25%, rgba(168,255,62,0.2), transparent 34%), radial-gradient(circle at 78% 72%, rgba(97,129,255,0.2), transparent 38%)',
        }}
      />
      <span
        className="pointer-events-none absolute h-32 w-32 rounded-full border border-white/[0.08] sm:h-40 sm:w-40"
        aria-hidden="true"
      />
      {/* Background radial gradients */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Left lime glow */}
        <div
          className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(168,255,62,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Right purple glow */}
        <div
          className="absolute -right-32 bottom-1/4 h-[700px] w-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(130,80,255,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container className="relative z-10 py-20 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: Content ── */}
          <div className="hero-content flex min-w-0 flex-col gap-6 sm:gap-8">
            {/* Headline with staggered word animation */}
            <motion.div
              className="flex flex-col gap-1"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {siteConfig.heroHeadline.map((word, i) => (
                <div key={i} className="overflow-visible">
                  <motion.span
                    className={cn(
                      'block text-[clamp(3.15rem,13vw,6rem)] sm:text-8xl md:text-9xl font-black tracking-tight leading-[1.05] pb-1',
                      word === 'in 3D.'
                        ? 'text-gradient-lime'
                        : 'text-white'
                    )}
                    variants={wordReveal}
                    custom={i * 0.1}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              {siteConfig.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
            >
              <Button
                as={Link}
                to="/projects"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="secondary"
                size="lg"
              >
                About Me
              </Button>
            </motion.div>
          </div>

          {/* ── Right: Animated character visual ── */}
          <motion.div
            className="relative flex w-full items-center justify-center py-4 sm:py-6 lg:py-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex w-full max-w-[33rem] items-center justify-center sm:max-w-[39rem] lg:-ml-[7.5%] lg:w-[115%] lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-[12%] rounded-full"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(168,255,62,0.13) 0%, rgba(97,129,255,0.08) 42%, transparent 72%)',
                  filter: 'blur(22px)',
                }}
              />
              <motion.img
                src="/images/profile/Gemini_Generated_Image_w74yiow74yiow74y-cutout.png"
                alt="Stylized 3D character sitting on a bench and holding a cup"
                className="relative z-10 h-[32rem] w-full object-contain drop-shadow-[0_16px_30px_rgba(70,75,43,0.2)] sm:h-[38rem] lg:h-[44rem] xl:h-[48rem]"
                fetchPriority="high"
                animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, 0.6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Floating badge chips */}
              <motion.div
                className={cn(
                  'absolute left-[22%] top-[3%] z-20 rounded-full px-4 py-2 text-sm font-semibold sm:left-[25%] sm:top-[4%] sm:px-6 sm:py-3 sm:text-base',
                  'glass border border-white/[0.12] text-white/80 backdrop-blur-xl'
                )}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                3D Art
              </motion.div>

              <motion.div
                className={cn(
                  'absolute right-[6%] top-[47%] z-20 rounded-full px-4 py-2 text-sm font-semibold sm:right-[5%] sm:px-6 sm:py-3 sm:text-base',
                  'glass border border-[#a8ff3e]/20 text-[#a8ff3e] backdrop-blur-xl'
                )}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                Game Dev
              </motion.div>

              <motion.div
                className={cn(
                  'absolute bottom-[1%] left-1/2 z-20 -translate-x-1/2 rounded-full px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3 sm:text-base',
                  'glass border border-white/[0.12] text-white/80 backdrop-blur-xl'
                )}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                Immersive XR
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── FeaturedProjectsSection ──────────────────────────────────────────────────

function FeaturedProjectsSection() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <section className="section-padding relative" aria-labelledby="featured-heading">
      <Container>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Heading row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured"
              titleAccent="Projects"
            />
            <Link
              to="/projects"
              className={cn(
                'group inline-flex items-center gap-2 text-sm font-medium',
                'text-white/50 hover:text-[#a8ff3e] transition-colors duration-200',
                'shrink-0 self-end sm:self-auto pb-1'
              )}
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Project grid */}
          <ProjectGrid projects={featured} variant="featured" />
        </motion.div>
      </Container>
    </section>
  );
}

// ─── ExpertiseSection ─────────────────────────────────────────────────────────

function ExpertiseSection() {
  return (
    <section className="section-padding relative" aria-labelledby="expertise-heading">
      {/* Subtle top border separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-0" />

      <Container>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <SectionHeading
            eyebrow="Interests"
            title="Areas of"
            titleAccent="Interest"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {siteConfig.interests.map((interest) => {
            const details = interestDetails[interest];
            const Icon = details?.icon ?? Sparkles;
            return (
              <motion.div
                key={interest}
                variants={cardReveal}
                className={cn(
                  'group flex flex-col gap-4 p-6 rounded-2xl',
                  'bg-white/[0.04] border border-white/[0.08]',
                  'hover:bg-white/[0.06] hover:border-white/[0.12]',
                  'transition-all duration-300',
                  'hover:shadow-[0_8px_32px_rgba(168,255,62,0.06)]'
                )}
              >
                {/* Icon badge */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(168,255,62,0.1)' }}
                >
                  <Icon className="w-5 h-5 text-[#a8ff3e]" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-semibold text-sm leading-snug">
                    {interest}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {details?.description ?? 'An area of interest and ongoing exploration.'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

// ─── AboutSnippetSection ──────────────────────────────────────────────────────

function AboutSnippetSection() {
  return (
    <section className="section-padding relative" aria-labelledby="about-heading">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-0" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── Left: Text content ── */}
          <motion.div
            className="flex flex-col gap-6"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Student &"
              titleAccent="Creator"
            />

            <div className="flex flex-col gap-4">
              {bioParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-white/60 text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/about"
                className={cn(
                  'group inline-flex items-center gap-2 text-sm font-medium',
                  'text-[#a8ff3e] hover:text-white transition-colors duration-200'
                )}
              >
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {siteConfig.cvPath && (
                <a
                  href={siteConfig.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg',
                    'glass border border-white/[0.1] text-white/70',
                    'hover:bg-white/[0.08] hover:text-white hover:border-white/20',
                    'transition-all duration-200'
                  )}
                >
                  Download CV
                </a>
              )}
            </div>
          </motion.div>

          {/* ── Right: Glass info card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.15}
          >
            <GlassCard className="p-6 flex flex-col gap-6">
              {/* Education */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#a8ff3e]">
                  Currently Studying
                </span>

                <div className="flex flex-col gap-1">
                  <p className="text-white font-semibold text-sm leading-snug">
                    {siteConfig.education.degree}
                  </p>
                  <p className="text-white/60 text-sm">
                    {siteConfig.education.institution}
                  </p>
                  <p className="text-white/40 text-xs">
                    {siteConfig.education.location}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.08]" />

              {/* Interests */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/40">
                  Interests
                </span>

                <ul className="flex flex-col gap-2">
                  {siteConfig.interests.slice(0, 4).map((interest) => (
                    <li
                      key={interest}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] shrink-0"
                        style={{ boxShadow: '0 0 6px #a8ff3e' }}
                        aria-hidden="true"
                      />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ─── ExperienceHighlightsSection ──────────────────────────────────────────────

function ExperienceHighlightsSection() {
  const highlights = experiences.slice(0, 2);

  return (
    <section className="section-padding border-t border-white/[0.06]">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Background"
            title="Experience."
            subtitle="Selected roles, collaborations, and event work."
          />
          <Link
            to="/experience"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-[#a8ff3e]"
          >
            View experience
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {highlights.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((experience) => (
              <GlassCard key={experience.id} className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#a8ff3e]">
                  {experience.type}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {experience.position}
                </h3>
                <p className="mt-1 text-sm text-white/50">{experience.organization}</p>
              </GlassCard>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-sm text-white/45">
            No experience entries are listed yet.
          </p>
        )}
      </Container>
    </section>
  );
}

// ─── ContactCTASection ────────────────────────────────────────────────────────

function ContactCTASection() {
  const socials = [
    {
      href: siteConfig.social.github,
      Icon: Github,
      label: 'GitHub',
    },
    {
      href: siteConfig.social.linkedin,
      Icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: siteConfig.social.instagram,
      Icon: Instagram,
      label: 'Instagram',
    },
    {
      href: siteConfig.email ? `mailto:${siteConfig.email}` : '',
      Icon: Mail,
      label: 'Email',
    },
  ].filter(({ href }) => href);

  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle lime radial glow centered */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="w-[600px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(168,255,62,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Top separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-0" />

      <Container className="relative z-10">
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#a8ff3e]">
            <span className="lime-dot" aria-hidden="true" />
            Get In Touch
          </span>

          {/* Big headline */}
          <div className="flex flex-col gap-1">
            <h2 className="text-[clamp(1.8rem,7.5vw,4.5rem)] font-black tracking-tight leading-[1.05] text-white">
              Let's Create Something
            </h2>
            <span className="text-[clamp(1.8rem,7.5vw,4.5rem)] font-black tracking-tight leading-[1.05] text-gradient-lime">
              Together.
            </span>
          </div>

          {/* Description */}
          <p className="text-white/50 text-lg max-w-lg leading-relaxed">
            Have a project in mind, a collaboration idea, or just want to say hello?
            I'd love to hear from you.
          </p>

          {/* CTA button */}
          <Button
            as={Link}
            to="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Start a conversation
          </Button>

          {/* Social icons */}
          {socials.length > 0 && (
            <div className="flex items-center gap-4 pt-2">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center',
                    'glass border border-white/[0.1] text-white/50',
                    'hover:text-white hover:border-white/20 hover:bg-white/[0.08]',
                    'transition-all duration-200'
                  )}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

// ─── HomePage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <PageContainer className="home-theme">
      <HeroSection />
      <FeaturedProjectsSection />
      <ExpertiseSection />
      <AboutSnippetSection />
      <ExperienceHighlightsSection />
      <ContactCTASection />
    </PageContainer>
  );
}
