import { FileText, PenTool, Search, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon } from "./icons/BrandIcons";

const PHARMAGUARD_GITHUB_URL = "https://github.com/hassankaafi72/pharmaguard-ai-";

const BEYOND_CODE = [
  "Technical Writing",
  "Documentary Research",
  "Scriptwriting",
  "Graphic Design",
  "Branding",
  "Digital Marketing",
  "Technology & AI Content",
];

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Research",
    description: "Investigate the problem space, gather data, and understand the real constraints before writing code.",
  },
  {
    icon: Wrench,
    title: "Build",
    description: "Turn findings into working software: models, applications, and systems that solve the problem.",
  },
  {
    icon: PenTool,
    title: "Explain",
    description: "Communicate the work clearly through writing and content so it's understood beyond the codebase.",
  },
];

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="06" eyebrow="Research" title="Research & thesis work" />

        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
              <FileText className="h-6 w-6 text-accent" aria-hidden="true" />
            </span>
            <div>
              <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Thesis / Graduation Project
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                PharmaGuard AI &mdash; AI-Driven Packaging Authentication
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                A computer vision and deep learning framework for pharmaceutical packaging authentication, developed
                as a graduation research project. It explores detecting counterfeit packaging patterns; it has not
                been deployed in the field and makes no claims about real-world detection outcomes.
              </p>
              <a
                href={PHARMAGUARD_GITHUB_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground cursor-pointer"
              >
                <GithubIcon className="h-4 w-4" />
                View Source
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Beyond Code</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {BEYOND_CODE.map((item) => (
              <span key={item} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PROCESS_STEPS.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="relative rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <h4 className="text-base font-semibold text-foreground">{title}</h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
                {index < PROCESS_STEPS.length - 1 ? (
                  <span
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-mono text-accent sm:block"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
