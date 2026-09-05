import { ArrowRight, Download, Sparkles } from "lucide-react";
import { RESUME_URL } from "../data/config";

const CODE_LINES = [
  { indent: 0, text: "class Engineer:", color: "text-accent-2" },
  { indent: 1, text: "domain = [\"web\", \"ml\", \"content\"]", color: "text-muted" },
  { indent: 1, text: "", color: "" },
  { indent: 1, text: "def build(self, problem):", color: "text-accent-2" },
  { indent: 2, text: "model = train(problem.data)", color: "text-foreground" },
  { indent: 2, text: "api = ship(model, stack=\"React+TS\")", color: "text-foreground" },
  { indent: 2, text: "return explain(api)", color: "text-foreground" },
  { indent: 1, text: "", color: "" },
  { indent: 0, text: "# status: production-ready", color: "text-muted" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Open to opportunities &amp; collaborations
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hassan Abdifatah Mohamud
          </h1>

          <p className="mt-6 text-xl font-medium text-gradient sm:text-2xl">
            Building Intelligent Web Applications &amp; Machine Learning Solutions
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I bridge the gap between robust web development, applied artificial intelligence, and impactful digital
            communication.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent/90 cursor-pointer"
            >
              View My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/40 cursor-pointer"
            >
              Let&apos;s Connect
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-muted transition-colors duration-200 hover:text-foreground cursor-pointer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/10 to-accent-2/10 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted">
                <Sparkles className="h-3 w-3 text-accent" aria-hidden="true" />
                engineer.py
              </span>
            </div>
            <pre className="overflow-x-auto px-6 py-6 font-mono text-sm leading-relaxed">
              <code>
                {CODE_LINES.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }} className={line.color || "text-muted"}>
                    {line.text || " "}
                    {i === CODE_LINES.length - 1 ? <span className="animate-blink text-accent">▍</span> : null}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
