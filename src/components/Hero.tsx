import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-28 pb-8 md:pb-0 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Developing Highly{" "}
              <span className="text-secondary">Skilled</span>{" "}
              <span className="text-secondary">Tech</span> Talents
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              At Vuepoint, we are turning individuals without tech skills into
              world-class Tech Talents
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/why-vuepoint">
                <Button variant="hero" size="lg">Learn More</Button>
              </Link>
              <Link href="/apply">
                <Button variant="heroOutline" size="lg">Apply Now</Button>
              </Link>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
              <div className="bg-muted rounded-lg px-3 py-2.5 sm:px-4 sm:py-3">
                <p className="text-xl sm:text-2xl font-bold text-primary">50+</p>
                <p className="font-heading font-bold text-xs text-foreground">Developers trained</p>
              </div>
              <div className="bg-muted rounded-lg px-4 py-3">
                <p className="text-2xl font-bold text-primary">30+</p>
                <p className="font-heading font-bold text-xs text-foreground">Projects delivered</p>
              </div>
              <div className="bg-muted rounded-lg px-4 py-3">
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="font-heading font-bold text-xs text-foreground">Hiring partners</p>
              </div>
            </div>
          </div>

          {/* Right - Image + teaser card */}
          <div className="relative hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={typeof heroImage === "string" ? heroImage : heroImage.src}
                alt="Students learning tech skills at Vuepoint"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Free event teaser card */}
              <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-background rounded-xl shadow-xl p-4 sm:p-5 border border-border w-[calc(100%-2rem)] sm:max-w-[220px]">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Free event</p>
                <p className="font-heading font-bold text-foreground text-base sm:text-lg mt-1">
                  2 Weeks — HTML & CSS
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Build your first website</p>
                <Link href="/events" className="inline-block mt-2 sm:mt-3 text-sm font-semibold text-primary hover:underline">
                  Join free →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
