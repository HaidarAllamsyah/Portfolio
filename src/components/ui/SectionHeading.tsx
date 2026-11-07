import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string; // Part of the title shown in lime
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

/**
 * Reusable section heading with optional eyebrow label and
 * accent-colored title fragment.
 */
export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('flex flex-col gap-3', alignClasses[align], className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#a8ff3e]">
          <span className="lime-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
        {title}
        {titleAccent && (
          <span className="text-gradient-lime"> {titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
