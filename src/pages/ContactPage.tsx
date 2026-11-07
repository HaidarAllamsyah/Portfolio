import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteConfig } from '../config/site';

const socialLinks = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { label: 'GitHub', href: siteConfig.social.github, icon: Github },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { label: 'Behance', href: siteConfig.social.behance, icon: ArrowUpRight },
  { label: 'ArtStation', href: siteConfig.social.artstation, icon: ArrowUpRight },
].filter((link) => link.href);

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!siteConfig.email) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageContainer>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 top-0 h-[34rem] w-[34rem] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a8ff3e 0%, transparent 70%)' }}
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Say hello"
              title="Let's make"
              titleAccent="something."
              subtitle="For project conversations, collaborations, or professional opportunities, send a note."
            />
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <GlassCard className="h-fit p-6 md:p-8">
              <h2 className="text-lg font-semibold text-white">Contact details</h2>
              <p className="mt-3 leading-relaxed text-white/50">
                Reach out by email or connect through a professional profile.
              </p>

              {siteConfig.email ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-[#a8ff3e] transition-colors hover:text-white"
                >
                  <Mail size={17} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              ) : (
                <p className="mt-6 text-sm text-white/40">
                  Add an email address in <code className="text-white/60">src/config/site.ts</code> to enable direct contact.
                </p>
              )}

              {socialLinks.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-sm text-white/60 transition-colors hover:border-[#a8ff3e]/30 hover:text-[#a8ff3e]"
                    >
                      <Icon size={15} aria-hidden="true" />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <h2 className="text-lg font-semibold text-white">Write a message</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                Submitting opens your email app with the message filled in. This website does not send or store messages.
              </p>
              <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-white/60">
                    Your name
                    <input
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="rounded-xl border border-white/[0.1] bg-black/20 px-4 py-3 text-white placeholder:text-white/25 focus:border-[#a8ff3e]/50 focus:outline-none"
                      placeholder="Name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-white/60">
                    Your email
                    <input
                      autoComplete="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="rounded-xl border border-white/[0.1] bg-black/20 px-4 py-3 text-white placeholder:text-white/25 focus:border-[#a8ff3e]/50 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-white/60">
                  Message
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="resize-y rounded-xl border border-white/[0.1] bg-black/20 px-4 py-3 text-white placeholder:text-white/25 focus:border-[#a8ff3e]/50 focus:outline-none"
                    placeholder="Tell me a little about what you have in mind..."
                  />
                </label>
                <button
                  type="submit"
                  disabled={!siteConfig.email}
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#a8ff3e] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#c4ff6e] disabled:cursor-not-allowed disabled:bg-[#dfe8cf] disabled:text-[#62665b] disabled:opacity-100"
                >
                  Open email app
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
                {!siteConfig.email && (
                  <p className="text-xs text-white/35">
                    The form is unavailable until an email address is added to the site configuration.
                  </p>
                )}
              </form>
            </GlassCard>
          </div>
        </Container>
      </section>
    </PageContainer>
  );
}
