interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary mb-3">{title}</h2>
    {subtitle && (
      <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className={`mt-4 h-px w-16 bg-accent ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionTitle;
