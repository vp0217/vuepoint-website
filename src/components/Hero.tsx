import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-28 pb-8 md:pb-0 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Developing Highly{" "}
              <span className="text-secondary">Skilled</span>{" "}
              <span className="text-secondary">Tech</span> Talents
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              At Vuepoint, we are turning individuals without tech skills into
              world-class Tech Talents
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Learn More
              </Button>
              <Button variant="heroOutline" size="lg">
                Apply Now
              </Button>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="bg-muted rounded-lg px-4 py-3 flex items-center gap-3">
                <span className="font-heading font-bold text-sm text-foreground">
                  CISCO Partner
                </span>
              </div>
              <div className="bg-muted rounded-lg px-4 py-3">
                <span className="font-heading font-bold text-xs text-foreground uppercase leading-tight block">
                  Accredited by the American Council of Training and Development
                </span>
              </div>
            </div>
          </div>

          {/* Right - Alumni Card + Image */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={heroImage}
                alt="Students learning tech skills at Vuepoint"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Alumni overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-background rounded-xl shadow-xl p-5 border border-border">
                <p className="text-sm text-muted-foreground">Sarah Adebayo</p>
                <p className="font-heading font-bold text-foreground text-lg">
                  UI/UX Designer
                </p>
                <span className="inline-block mt-1 text-xs font-semibold text-secondary border border-secondary rounded-full px-3 py-0.5">
                  Alumni
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
