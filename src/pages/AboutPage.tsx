// ─── About Page ───────────────────────────────────────────────────────────────

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram, GraduationCap, MapPin, User } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { GlassTag } from '../components/ui/GlassTag';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../config/site';
import { skillCategories } from '../data/skills';
import type { Skill } from '../types/experience';
import { cn } from '../utils/cn';

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Skill level helpers ───────────────────────────────────────────────────────

function getSkillVariant(level: Skill['level']): 'lime' | 'default' | 'muted' {
  if (level === 'advanced') return 'lime';
  if (level === 'proficient') return 'default';
  return 'muted';
}

function getSkillLevelLabel(level: Skill['level']): string {
  switch (level) {
    case 'advanced':   return 'Advanced';
    case 'proficient': return 'Proficient';
    case 'familiar':   return 'Familiar';
    case 'learning':   return 'Learning';
    default:           return '';
  }
}

function getSkillTextClass(level: Skill['level']): string {
  switch (level) {
    case 'advanced':   return 'text-[#a8ff3e]';
    case 'proficient': return 'text-white/80';
    case 'familiar':   return 'text-white/50';
    case 'learning':   return 'text-white/30';
    default:           return 'text-white/40';
  }
}

// ── Level legend ──────────────────────────────────────────────────────────────

const skillLevels: Array<{ level: Skill['level']; label: string }> = [
  { level: 'advanced',   label: 'Advanced' },
  { level: 'proficient', label: 'Proficient' },
  { level: 'familiar',   label: 'Familiar' },
  { level: 'learning',   label: 'Learning' },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const bioParagraphs = siteConfig.bio.split('\n\n').filter(Boolean);

  return (
    <PageContainer>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, #a8ff3e 0%, transparent 70%)' }}
        />

        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
          >
            {/* Left — heading & tagline */}
            <motion.div variants={fadeUp} className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#a8ff3e] mb-4">
                <span className="lime-dot" aria-hidden="true" />
                Portfolio
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                About{' '}
                <span className="text-gradient-lime">Me.</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
                {siteConfig.tagline}
              </p>
            </motion.div>

            {/* Right — profile glass card */}
            <motion.div variants={fadeUp} className="w-full lg:w-80 shrink-0">
              <GlassCard className="p-6">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center mb-5">
                  <User className="w-9 h-9 text-white/40" />
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{siteConfig.name}</h2>
                <p className="text-[#a8ff3e] text-sm font-medium mb-4">{siteConfig.title}</p>

                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-start gap-2 text-white/60">
                    <GraduationCap className="w-4 h-4 shrink-0 mt-0.5 text-white/40" />
                    <span>{siteConfig.education.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <MapPin className="w-4 h-4 shrink-0 text-white/40" />
                    <span>{siteConfig.education.location}</span>
                  </div>
                </div>

                {/* Interests */}
                <div className="mt-5 pt-5 border-t border-white/[0.08]">
                  <p className="text-xs text-white/40 font-medium uppercase tracking-widest mb-3">
                    Interests
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {siteConfig.interests.map((interest) => (
                      <GlassTag key={interest} variant="muted" size="sm">
                        {interest}
                      </GlassTag>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── Bio ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Who I am"
                title="A little bit"
                titleAccent="about me."
                className="mb-8"
              />
            </motion.div>

            {bioParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-white/70 text-base md:text-lg leading-relaxed mb-5 last:mb-0"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionHeading
                eyebrow="Toolkit"
                title="Skills &"
                titleAccent="Technologies."
              />
            </motion.div>

            {/* Level legend */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              {skillLevels.map(({ level, label }) => (
                <div key={level} className="flex items-center gap-2 text-xs">
                  <span
                    className={cn(
                      'w-2 h-2 rounded-full',
                      level === 'advanced'   && 'bg-[#a8ff3e]',
                      level === 'proficient' && 'bg-white/80',
                      level === 'familiar'   && 'bg-white/50',
                      level === 'learning'   && 'bg-white/30',
                    )}
                  />
                  <span className="text-white/50">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Categories grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <motion.div key={category.id} variants={fadeUp}>
                  <GlassCard className="h-full">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#a8ff3e] mb-4">
                      {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <GlassTag
                          key={skill.name}
                          variant={getSkillVariant(skill.level)}
                          size="sm"
                          className="transition-colors"
                        >
                          <span className={getSkillTextClass(skill.level)}>{skill.name}</span>
                          {skill.level && (
                            <span
                              className={cn(
                                'ml-1.5 text-[10px]',
                                getSkillTextClass(skill.level),
                              )}
                            >
                              · {getSkillLevelLabel(skill.level)}
                            </span>
                          )}
                        </GlassTag>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Education ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <SectionHeading eyebrow="Academic" title="Education." />
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-2xl">
              <GlassCard hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#a8ff3e]/10 border border-[#a8ff3e]/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#a8ff3e]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-lg leading-snug mb-1">
                      {siteConfig.education.degree}
                    </h3>
                    <p className="text-[#a8ff3e] text-sm font-medium mb-2">
                      {siteConfig.education.institution}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/50">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {siteConfig.education.location}
                      </span>
                      {siteConfig.education.expectedGraduation && (
                        <span className="flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5" />
                          {siteConfig.education.expectedGraduation}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── CTA & Social ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {siteConfig.cvPath && (
              <motion.div variants={fadeUp}>
                <Button
                  as="a"
                  href={siteConfig.cvPath}
                  download
                  variant="primary"
                  size="lg"
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Download CV
                </Button>
              </motion.div>
            )}

            <motion.div variants={fadeUp}>
              <Button as={Link} to="/contact" variant="secondary" size="lg">
                Contact me
              </Button>
            </motion.div>

            {/* Social links */}
            {(siteConfig.social.github || siteConfig.social.linkedin || siteConfig.social.instagram) && (
              <motion.div variants={fadeUp} className="flex items-center gap-3">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.14] transition-all duration-200"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.14] transition-all duration-200"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.14] transition-all duration-200"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              )}
              </motion.div>
            )}
          </motion.div>
        </Container>
      </section>
    </PageContainer>
  );
}
