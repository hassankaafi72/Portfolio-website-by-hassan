interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ index, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-14 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 font-mono text-sm text-accent ${isCenter ? "justify-center" : ""}`}>
        <span>{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span className="uppercase tracking-[0.2em] text-muted">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
