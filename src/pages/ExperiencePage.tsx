import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, CalendarDays, ChevronDown, Sparkles } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { experiences } from '../data/experience';

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id ?? null);
  const reduceMotion = useReducedMotion();

  return (
    <PageContainer className="experience-theme">
      <section className="experience-section">
        <Container>
          <div className="experience-intro">
            <p className="experience-eyebrow"><span aria-hidden="true" /> Background / 01—04</p>
            <h1 className="experience-title">Experience<span>.</span></h1>
            <p className="experience-lede">
              Leadership, media production, and event work shaped by creative collaboration.
            </p>
          </div>

          <ol className="experience-list">
            {experiences.map((experience, index) => {
              const isExpanded = expandedId === experience.id;
              const panelId = `experience-details-${experience.id}`;
              const period = experience.current
                ? `${experience.startDate} – Present`
                : experience.endDate
                  ? `${experience.startDate} – ${experience.endDate}`
                  : experience.startDate;

              return (
                <motion.li
                  key={experience.id}
                  className={`experience-item${index === 0 ? ' experience-item-featured' : ''}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: index * 0.06 }}
                >
                  <span className="experience-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <article className="experience-card">
                    <button
                      type="button"
                      className="experience-toggle"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => setExpandedId(isExpanded ? null : experience.id)}
                    >
                      <span className="experience-card-main">
                        <span className="experience-period">
                          <CalendarDays size={14} aria-hidden="true" />
                          {period}
                        </span>
                        <span className="experience-position">{experience.position}</span>
                        <span className="experience-organization">{experience.organization}</span>
                        {experience.description && (
                          <span className="experience-summary">{experience.description}</span>
                        )}
                      </span>
                      <span className={`experience-expand-icon${isExpanded ? ' is-expanded' : ''}`}>
                        <ChevronDown size={18} aria-hidden="true" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={panelId}
                          className="experience-details"
                          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="experience-details-inner">
                            {experience.responsibilities && experience.responsibilities.length > 0 && (
                              <ul className="experience-responsibilities">
                                {experience.responsibilities.map((responsibility) => (
                                  <li key={responsibility}>{responsibility}</li>
                                ))}
                              </ul>
                            )}
                            {experience.tags && experience.tags.length > 0 && (
                              <div className="experience-tags" aria-label="Experience highlights">
                                <span className="experience-tags-label">
                                  <Sparkles size={13} aria-hidden="true" />
                                  Focus
                                </span>
                                {experience.tags.map((tag) => (
                                  <span className="experience-tag" key={tag}>{tag}</span>
                                ))}
                              </div>
                            )}
                            <span className="experience-detail-mark" aria-hidden="true">
                              <ArrowDownRight size={17} />
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </Container>
      </section>
    </PageContainer>
  );
}
