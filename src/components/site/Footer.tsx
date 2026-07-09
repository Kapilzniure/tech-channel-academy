import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary font-semibold">
              T
            </span>
            <span className="font-semibold tracking-tight">Technology Channel</span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            Practical guides to master AI, automation, self-hosting and development —
            made simple by Bishworaj Poudel.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/episodes" className="hover:text-foreground">Episodes</Link></li>
            <li><a href="/#topics" className="hover:text-foreground">Topics</a></li>
            <li><a href="/#academy" className="hover:text-foreground">Academy</a></li>
            <li><a href="/#about" className="hover:text-foreground">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">YouTube</a></li>
            <li><a href="#" className="hover:text-foreground">Newsletter</a></li>
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Book Training</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Technology Channel. All rights reserved.</p>
          <p>Made with care in Nepal.</p>
        </div>
      </div>
    </footer>
  );
}
