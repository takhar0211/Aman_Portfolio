interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * SectionHeading — consistent section title + optional subtitle used across all sections.
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      )}
      {/* Accent underline */}
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-accent-blue ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
