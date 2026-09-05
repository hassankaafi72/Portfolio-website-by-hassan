import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const COURSEWORK = [
  "Advanced Java",
  "React",
  "Computer Organization",
  "Research Methodology",
  "MIS",
  "Linux",
  "Data Science",
  "PHP",
  "Flutter",
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" eyebrow="Education" title="Academic foundation" />

        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
                <GraduationCap className="h-6 w-6 text-accent" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Jamhuriya University</h3>
                <p className="mt-1 text-sm text-muted">
                  Bachelor&apos;s Degree &mdash; Information Technology / Computer Science
                </p>
              </div>
            </div>
            <p className="font-mono text-sm text-accent">2022 &ndash; Present</p>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Relevant Coursework</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {COURSEWORK.map((course) => (
                <span
                  key={course}
                  className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
