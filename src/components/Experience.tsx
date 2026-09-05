import { SectionHeading } from "./SectionHeading";

const FOCUS_AREAS = [
  "Software Development",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Flutter",
  "AI Research",
  "Digital Content",
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" eyebrow="Experience" title="Experience & Journey" />

        <div className="relative border-l border-border pl-8">
          <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" aria-hidden="true" />
          <p className="font-mono text-sm text-accent">2022 &ndash; Present</p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            Computer Science / Information Technology
          </h3>
          <p className="mt-1 text-sm text-muted">Jamhuriya University</p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Since starting my studies, I&apos;ve built hands-on experience across software development, machine
            learning, data science, mobile development, AI research, and digital content, applying coursework to
            real, self-directed projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <span key={area} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
