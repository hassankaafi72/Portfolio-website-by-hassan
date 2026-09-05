import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/nav";
import { GITHUB_URL, LINKEDIN_URL, SITE_NAME } from "../data/config";
import { ThemeToggle } from "./ThemeToggle";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-3 font-semibold text-foreground cursor-pointer"
          aria-label={`${SITE_NAME}, back to top`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface font-mono text-sm text-accent">
            HM
          </span>
          <span className="hidden text-sm sm:inline">{SITE_NAME}</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors duration-200 hover:text-foreground hover:border-accent/40 cursor-pointer"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors duration-200 hover:text-foreground hover:border-accent/40 cursor-pointer"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground cursor-pointer"
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground cursor-pointer"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground cursor-pointer"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
