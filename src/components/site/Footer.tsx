import { Link } from "@tanstack/react-router";
import { Radio, Youtube, Mail, ArrowUpRight } from "lucide-react";

const explore = [
  { label: "Transmissions", href: "/episodes", isLink: true },
  { label: "Frequencies", href: "/#topics", isLink: false },
  { label: "Academy", href: "/#academy", isLink: false },
  { label: "The Studio", href: "/#about", isLink: false },
];

const connect = [
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Newsletter", href: "/#community", icon: Mail },
  { label: "Book Training", href: "#", icon: ArrowUpRight },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40 bg-[oklch(0.09_0.026_258)]">
      {/* Top section */}
      <div className="container-page py-14">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/20">
                <Radio className="h-4 w-4 text-primary" />
              </div>
              <span className="font-display text-sm font-bold tracking-wide text-foreground">
                THE TRANSMISSION
              </span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              Practical guides to master AI, automation, self-hosting and development —
              made simple by Bishworaj Poudel from Kathmandu, Nepal.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Broadcasting weekly</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  {item.isLink ? (
                    <Link
                      to={item.href as "/episodes"}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Technology Channel by Bishworaj Poudel. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-primary/60" />
            Signal transmitted from Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
