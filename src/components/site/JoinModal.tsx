import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Radio, Zap } from "lucide-react";

interface JoinModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const benefits = [
  "Free Starter Guide on your first email",
  "Weekly practical guide — no fluff, no hype",
  "Early access to new transmissions & courses",
  "Exclusive tools and workflow templates",
];

export function JoinModal({ open, onOpenChange }: JoinModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[oklch(0.13_0.025_258)] border-border/60 max-w-md p-0 overflow-hidden">
        {/* Top glow bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="p-7">
          <DialogHeader className="mb-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-3">
              <Radio className="h-3.5 w-3.5 animate-pulse" />
              Join the Frequency
            </div>
            <DialogTitle className="font-display text-2xl font-bold tracking-tight text-foreground">
              Tune in to The Transmission
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
              One signal per week. Practical AI, automation, and self-hosting guides straight to your inbox.
            </DialogDescription>
          </DialogHeader>

          {!submitted ? (
            <>
              <ul className="space-y-2.5 mb-6">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-11 bg-secondary/60 border-border focus-visible:ring-primary/40 text-sm"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold font-display"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      Connecting…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Join the Frequency — Free
                    </span>
                  )}
                </Button>
                <p className="text-[11px] text-muted-foreground text-center">
                  Joining 2,000+ practitioners. No spam. Unsubscribe anytime.
                </p>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold">You're on the frequency.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Check your inbox for the Starter Guide. See you in the next transmission.
              </p>
              <Button
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onOpenChange(false)}
              >
                Start Exploring
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
