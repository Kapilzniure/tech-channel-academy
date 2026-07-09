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
import { Check, Calendar, Users, Clock } from "lucide-react";

interface BookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sessions = [
  {
    id: "automation",
    title: "Automation Strategy",
    duration: "60 min",
    description: "Map out your first automation workflows with expert guidance.",
    price: "NPR 5,000",
  },
  {
    id: "n8n",
    title: "n8n Deep Dive",
    duration: "90 min",
    description: "Hands-on session building real workflows in n8n on your infrastructure.",
    price: "NPR 7,000",
  },
  {
    id: "team",
    title: "Team Training",
    duration: "Half-day",
    description: "On-site or remote training for your entire team on automation and AI tools.",
    price: "Custom",
  },
];

export function BookModal({ open, onOpenChange }: BookModalProps) {
  const [step, setStep] = useState<"select" | "details" | "done">("select");
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setStep("done");
  };

  const reset = () => {
    setStep("select");
    setSelected(null);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) reset();
        onOpenChange(v);
      }}
    >
      <DialogContent className="bg-[oklch(0.13_0.025_258)] border-border/60 max-w-lg p-0 overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="p-7">
          <DialogHeader className="mb-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-3">
              <Calendar className="h-3.5 w-3.5" />
              Book a Session
            </div>
            <DialogTitle className="font-display text-2xl font-bold tracking-tight">
              Work With Bishworaj
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
              One-on-one training and strategy sessions — built around your actual goals.
            </DialogDescription>
          </DialogHeader>

          {step === "select" && (
            <div className="space-y-3">
              {sessions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`w-full text-left rounded-xl border p-4 transition-all ${
                    selected === s.id
                      ? "border-primary/60 bg-primary/8"
                      : "border-border/60 bg-secondary/30 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm text-foreground">{s.title}</h3>
                        <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {s.duration}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-sm font-semibold text-primary">{s.price}</span>
                      {selected === s.id && (
                        <div className="mt-1 flex justify-end">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                            <Check className="h-3 w-3 text-primary" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}

              <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                All sessions are conducted via Zoom or in-person in Kathmandu.
              </div>

              <Button
                disabled={!selected}
                onClick={() => setStep("details")}
                className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold font-display mt-2"
              >
                Continue →
              </Button>
            </div>
          )}

          {step === "details" && (
            <form onSubmit={handleBook} className="space-y-3">
              <button
                type="button"
                onClick={() => setStep("select")}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors mb-1"
              >
                ← Back
              </button>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-11 bg-secondary/60 border-border text-sm"
              />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-11 bg-secondary/60 border-border text-sm"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your goals or what you'd like to work on…"
                rows={3}
                className="w-full rounded-md border border-border bg-secondary/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 resize-none"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold font-display"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                    Sending…
                  </span>
                ) : (
                  "Book Session"
                )}
              </Button>
            </form>
          )}

          {step === "done" && (
            <div className="py-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold">Request received.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bishworaj will reach out within 24 hours to confirm your session.
              </p>
              <Button
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onOpenChange(false)}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
