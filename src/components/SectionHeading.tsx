interface SectionHeadingProps {
  title: string;
  gradient?: string; // Kept as optional to avoid breaking existing usages
  textGradient: string;
  shadowColor: string;
}

export function SectionHeading({ title, textGradient, shadowColor }: SectionHeadingProps) {
  return (
    <div className="section-heading-container">
      <span 
        className="heading-shadow-text"
        style={{ color: shadowColor }}
      >
        {title.toUpperCase()}
      </span>
      <span 
        className="heading-gradient-text"
        style={{ 
          background: textGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {title.toUpperCase()}
      </span>
    </div>
  );
}
