interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Page-level section titles use "h1"; secondary sections keep "h2". */
  as?: "h1" | "h2";
}

const SectionTitle = ({ title, subtitle, centered = true, as: Heading = "h2" }: SectionTitleProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <Heading className="text-3xl lg:text-4xl font-serif font-semibold text-primary mb-3">{title}</Heading>
    {subtitle && (
      <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className={`mt-4 h-px w-16 bg-accent ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionTitle;
