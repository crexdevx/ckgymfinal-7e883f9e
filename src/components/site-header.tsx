import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/ck-gym-logo.png";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, WA_JOIN, openWhatsApp } from "@/lib/ck-gym";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-5">
        <a href="#top" aria-label="CK Gym — home" className="flex min-w-0 items-center">
          <img
            src={logoImage}
            alt="CK Gym Strength & Fitness logo"
            width={160}
            height={160}
            className="h-11 w-auto shrink-0 object-contain sm:h-12"
          />
        </a>

        <nav className="hidden justify-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="transition-colors hover:text-primary" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button variant="hero" size="sm" asChild>
            <a href={WA_JOIN} target="_blank" rel="noopener noreferrer" onClick={openWhatsApp(WA_JOIN)}>
              Join now
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-10 shrink-0 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-background/90 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 origin-top border-b border-primary/30 bg-card px-5 pb-8 pt-4 shadow-panel transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <img
              src={logoImage}
              alt="CK Gym logo"
              width={160}
              height={160}
              className="h-11 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 font-display text-2xl uppercase tracking-wide text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button variant="hero" size="xl" className="mt-6 w-full" asChild>
            <a href={WA_JOIN} target="_blank" rel="noopener noreferrer" onClick={(e) => { setOpen(false); openWhatsApp(WA_JOIN)(e); }}>
              Join now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
