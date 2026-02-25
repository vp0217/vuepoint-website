import { BookOpen, Cog, CreditCard } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Project-Based Training and Mentoring",
    description: "Learn by building real-world projects with guidance from industry mentors.",
  },
  {
    icon: Cog,
    title: "Get Job Ready Skills, No Experience Needed",
    description: "Our curriculum takes you from novice to advanced — no prior experience required.",
  },
  {
    icon: CreditCard,
    title: "Flexible Monthly Payment Plan",
    description: "Pay as you learn with our flexible monthly payment plans designed for everyone.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
