import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Code, ArrowRight } from "lucide-react";
import BootcampCountdown from "@/components/BootcampCountdown";
import { HOLIDAY_BOOTCAMP_START_LABEL } from "@/lib/holiday-bootcamp";

const TwoWeeksFreePromo = () => {
  return (
    <section className="relative overflow-hidden bg-foreground border-y border-primary/30">
      {/* Accent glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative z-10 py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 max-w-[100vw] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-primary font-bold text-sm uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" /> Holiday bootcamp
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-background leading-tight">
                  Become a Certified Frontend Engineer in 1 Month
                </h2>
                <p className="text-background/80 mt-1 text-sm md:text-base">
                  Master HTML, CSS, JavaScript & React.js. Starts {HOLIDAY_BOOTCAMP_START_LABEL}. Special holiday price — ₦68,500.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-4 sm:items-end">
              <BootcampCountdown variant="compact" />
              <Link href="/events">
                <Button variant="hero" size="lg" className="gap-2 w-full sm:w-auto">
                  Enroll now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWeeksFreePromo;
