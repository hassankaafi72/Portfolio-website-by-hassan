import { useMemo, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS, PROJECT_FILTERS, type ProjectStatus } from "../data/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Completed: "text-success border-success/30 bg-success/10",
  Research: "text-accent-2 border-accent-2/30 bg-accent-2/10",
  Academic: "text-accent border-accent/30 bg-accent/10",
  Concept: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Selected work"
          description="A mix of completed builds, academic work, research, and concepts in progress. Statuses are labeled explicitly below."
        />

        <div role="tablist" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-surface text-muted hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7 transition-colors duration-200 hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${STATUS_STYLES[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="mt-8 text-center text-sm text-muted">No projects in this category yet.</p>
        ) : null}
      </div>
    </section>
  );
}
