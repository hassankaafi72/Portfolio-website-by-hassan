import { BrainCircuit, Code2, Database, Megaphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const FOCUS_AREAS = [
  { icon: BrainCircuit, label: "AI & Machine Learning" },
  { icon: Code2, label: "Software Engineering" },
  { icon: Database, label: "Data Science" },
  { icon: Megaphone, label: "Digital Strategy" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="About" title="Grounded in engineering, driven by curiosity" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              I am a full-stack developer and AI researcher focused on building reliable, scalable digital
              experiences. With a strong foundation in Computer Applications and hands-on experience across backend
              systems, machine learning architectures, and content strategy, I design end-to-end solutions that solve
              real-world problems.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {FOCUS_AREAS.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl border border-border bg-surface p-4 text-center">
                  <Icon className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Background</p>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-muted">Institution</dt>
                <dd className="mt-1 text-base font-medium text-foreground">Jamhuriya University</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Field of Study</dt>
                <dd className="mt-1 text-base font-medium text-foreground">
                  Information Technology / Computer Science
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Duration</dt>
                <dd className="mt-1 text-base font-medium text-foreground">2022 &ndash; Aug 2026</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Location</dt>
                <dd className="mt-1 text-base font-medium text-foreground">Somalia</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
