import { SITE_NAME, SITE_ROLE } from "../data/config";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
        <p className="text-sm font-semibold text-foreground">{SITE_NAME}</p>
        <p className="text-xs text-muted">{SITE_ROLE}</p>
        <p className="mt-4 text-xs text-muted">&copy; 2026 {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
