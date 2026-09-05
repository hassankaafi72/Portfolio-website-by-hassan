import { SectionHeading } from "./SectionHeading";
import { SKILL_GROUPS } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Tools & technologies I build with"
          description="A practical toolkit across AI/ML, full-stack development, mobile, and data, backed by hands-on project work."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
