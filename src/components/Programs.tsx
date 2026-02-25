import { Code, BarChart3, Brain } from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "Full Stack Developer",
    description: "Master front-end and back-end technologies to build complete web applications.",
  },
  {
    icon: BarChart3,
    title: "Data Analyst",
    description: "Learn to analyze, visualize and interpret data to drive business decisions.",
  },
  {
    icon: Brain,
    title: "Data Scientist",
    description: "Dive into machine learning, AI, and advanced analytics to solve complex problems.",
  },
];

const Programs = () => {
  return (
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Get Trained with us and Become
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Choose your career path and let us guide you to success
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
