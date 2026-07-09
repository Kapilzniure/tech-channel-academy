import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Episodes", to: "/episodes" as const },
  { label: "Topics", to: "/#topics" as const },
  { label: "Academy", to: "/#academy" as const },
  { label: "About", to: "/#about" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary font-semibold">
            T
          </span>
          <span className="font-semibold tracking-tight">Technology Channel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.to}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
          <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
            Book Training
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join Free
          </Button>
        </div>

        <button
          className="md:hidden grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-secondary"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.to}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" className="flex-1">Book Training</Button>
              <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Join Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
