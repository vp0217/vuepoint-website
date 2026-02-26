import { Code, Server, Layout, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Code,
    title: "Full Stack Engineering",
    slug: "full-stack-development",
    description: "Master front-end and back-end technologies to build complete web applications with Node.js.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    slug: "backend-development",
    description: "Learn to build robust server-side applications, APIs, and database systems with Node.js.",
  },
  {
    icon: Layout,
    title: "Frontend Engineering",
    slug: "frontend-development",
    description: "Create beautiful, responsive, and performant user interfaces with modern front-end tools.",
  },
];

const Programs = () => {
  return (
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-4 px-2">
          Get Trained with us and Become
        </h2>
        <p className="text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto px-2">
          Choose your career path and let us guide you to success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, i) => (
            <div key={i} className="bg-background rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border group h-full flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {program.description}
              </p>
              <Link to={`/courses/${program.slug}`} className="mt-6">
                <Button variant="outline" size="sm" className="gap-2">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
