import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Cog, Users, Target, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const values = [
  {
    icon: BookOpen,
    title: "Industry Focused Curriculum",
    description: "Our curriculum is designed around the most in-demand technical skills in the industry today.",
  },
  {
    icon: Cog,
    title: "Practical & Project-based Learning",
    description: "Learn by building real-world projects that prepare you for actual industry challenges.",
  },
  {
    icon: Users,
    title: "Collaboration & Mentorship",
    description: "Work alongside peers and experienced mentors who guide you every step of the way.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Zero to Hero",
    description: "We take individuals with no tech skill and develop them into advanced employable talents.",
  },
  {
    icon: Award,
    title: "Empirical Process Control",
    description: "Our unique training approach allows students to learn at their own pace while we continuously observe and refine the process.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Payment",
    description: "With our flexible monthly payment plan, you pay as you learn — making quality education accessible to everyone.",
  },
];

const WhyVuepoint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 text-center bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Meet The Academy<br />
            <span className="text-secondary">Developing Tech Talents</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            We are turning individuals without skills into world class skilled tech talents.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            By providing industry focused programs for career transformation and growth,
            introducing Empirical Process Control in Training.
          </p>
          <Link to="/apply">
            <Button variant="hero" size="lg">Apply Now</Button>
          </Link>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={heroImage} alt="Training at Vuepoint" className="rounded-2xl shadow-xl w-full object-cover aspect-video" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vuepoint Academy is a skill development and placement company, with focus on filling the technical skill gap in the fast-growing tech industry. We are building skills with global standard, adopting curriculum that takes individuals with zero skill to employable skilled talent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We deliver the most demanded technical skills by working with professionals who work everyday with the same skills. We have adopted curriculum with the most sought after technical skills in the industry. Our curriculum is delivered by professionals with industry experience. The focus is to get you industry ready with skills that get you hired and transform your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding section-light">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Empowering the Next Generation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To empower the fast-growing youth population with world class talents to fill the skill gap and reduce unemployment in the tech industry.
          </p>
        </div>
      </section>

      {/* Why Vuepoint */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Why Vuepoint</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed">
            Vuepoint Academy is founded with the aim to give individuals with no tech skill a high-level tech skill to fill the very obvious technical skill shortage gap in the fast-rising technology industry. We are developing local talents from zero skill to advanced employable skill. By implementing Empirical Process Control in Training, we are developing the best hands for the technology industry.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Want to be a trainee at Vuepoint?
          </h2>
          <p className="text-background/70 mb-8">Start your tech career journey today</p>
          <Link to="/apply">
            <Button variant="hero" size="lg">Apply Now</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyVuepoint;
