import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Vuepoint Academy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get Skilled. Get Hired.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vuepoint Academy is instituted to give you high level tech skills to fill
              the technical skill shortage gap in the fast-growing tech industry. We focus
              on giving you Job Ready Skills that give you the opportunity to grow your
              career faster. Best of all, you pay as you learn with our flexible monthly
              payment plan. Our curriculums are designed to take you from novice to
              advanced skills level — no experience is needed to enrol.
            </p>
            <Button variant="hero" size="lg">
              Apply Now
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Students learning at Vuepoint"
              className="rounded-2xl shadow-xl w-full object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
