interface SkillBadgeProps {
  name: string;
  className?: string;
}

/**
 * SkillBadge — pill-shaped badge used in the Skills section.
 */
export default function SkillBadge({ name, className = '' }: SkillBadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border border-border bg-bg-card px-3 py-1.5',
        'text-sm font-medium text-text-secondary transition-all duration-200',
        'hover:border-accent-blue/50 hover:bg-bg-card-hover hover:text-text-primary',
        className,
      ].join(' ')}
    >
      {name}
    </span>
  );
}
