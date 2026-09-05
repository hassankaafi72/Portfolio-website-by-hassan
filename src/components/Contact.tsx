import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "../data/config";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
    const mailto = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setStatus("sent");
    setForm(INITIAL_STATE);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          align="center"
          title="Have a project in mind?"
          description="Let's build something useful."
        />

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 cursor-pointer"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 cursor-pointer"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent/90 cursor-pointer"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-border bg-surface p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="mt-2 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
                placeholder="Your name"
              />
              {errors.name ? (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="mt-2 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
                placeholder="you@example.com"
              />
              {errors.email ? (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="subject" className="block text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={handleChange("subject")}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className="mt-2 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
              placeholder="What's this about?"
            />
            {errors.subject ? (
              <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                {errors.subject}
              </p>
            ) : null}
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="mt-2 w-full resize-none rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
              placeholder="Tell me about your project..."
            />
            {errors.message ? (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent/90 cursor-pointer sm:w-auto"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </button>

          <p role="status" aria-live="polite" className="mt-4 text-sm text-muted">
            {status === "sent" ? "Your email client should now be open with your message ready to send." : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
