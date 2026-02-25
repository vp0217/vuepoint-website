import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";

const BannerV2 = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/80" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-background/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-background/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-background/10" />
        
        {/* Floating accent dots */}
        <div className="absolute top-20 left-[15%] w-3 h-3 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
        <div className="absolute top-32 right-[20%] w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        <div className="absolute bottom-20 left-[30%] w-2.5 h-2.5 rounded-full bg-secondary/80 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "3.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-background">Now Enrolling — Limited Spots</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-background leading-[1.1]">
                Transform Your
                <span className="block mt-2">
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/60">
                      Future
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
                <span className="block mt-2">In Tech</span>
              </h2>

              <p className="text-lg md:text-xl text-background/70 max-w-lg leading-relaxed">
                Join Africa's fastest-growing tech academy. Go from zero coding experience to a job-ready developer in just 6 months.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/apply">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold shadow-lg shadow-secondary/25 h-12 px-8 text-base">
                    Enroll Now <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button className="bg-transparent hover:bg-background/10 text-background border-2 border-background/30 rounded-full font-semibold h-12 px-8 text-base">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, value: "500+", label: "Graduates Placed", color: "text-secondary" },
                { icon: Rocket, value: "90%", label: "Employment Rate", color: "text-primary" },
                { icon: Sparkles, value: "50+", label: "Hiring Partners", color: "text-secondary" },
                { icon: ArrowRight, value: "3", label: "Career Tracks", color: "text-primary" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-background/5 backdrop-blur-md border border-background/10 rounded-2xl p-6 hover:bg-background/10 transition-all duration-300 group"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <p className="text-3xl md:text-4xl font-heading font-extrabold text-background mb-1">{stat.value}</p>
                  <p className="text-sm text-background/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerV2;
