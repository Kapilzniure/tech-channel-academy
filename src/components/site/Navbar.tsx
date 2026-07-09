import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinModal } from "./JoinModal";
import { BookModal } from "./BookModal";

const nav = [
  { label: "Transmissions", to: "/episodes" as const, isLink: true },
  { label: "Frequencies", to: "/#topics", isLink: false },
  { label: "Academy", to: "/#academy", isLink: false },
  { label: "The Studio", to: "/#about", isLink: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border/50 bg-[oklch(0.1_0.028_258/0.92)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rounded-md bg-primary/20 group-hover:bg-primary/30 transition-colors" />
              <Radio className="h-4 w-4 text-primary relative z-10" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-sm font-bold tracking-wide text-foreground">
                THE TRANSMISSION
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.map((n) =>
              n.isLink ? (
                <Link
                  key={n.label}
                  to={n.to as "/episodes"}
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.to}
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  {n.label}
                </a>
              ),
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setBookOpen(true)}
            >
              Book Training
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold font-display gap-1.5"
              onClick={() => setJoinOpen(true)}
            >
              <Radio className="h-3.5 w-3.5" />
              Join Free
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-secondary transition-colors"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border/50 bg-[oklch(0.12_0.026_258/0.97)] backdrop-blur-xl">
            <div className="container-page py-5 flex flex-col gap-1">
              {nav.map((n) =>
                n.isLink ? (
                  <Link
                    key={n.label}
                    to={n.to as "/episodes"}
                    className="py-2.5 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a
                    key={n.label}
                    href={n.to}
                    className="py-2.5 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                ),
              )}
              <div className="flex gap-2 pt-3 border-t border-border/50 mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-muted-foreground"
                  onClick={() => {
                    setBookOpen(true);
                    setOpen(false);
                  }}
                >
                  Book Training
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  onClick={() => {
                    setJoinOpen(true);
                    setOpen(false);
                  }}
                >
                  Join Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <JoinModal open={joinOpen} onOpenChange={setJoinOpen} />
      <BookModal open={bookOpen} onOpenChange={setBookOpen} />
    </>
  );
}
