import { Code, Server, Layout } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Code,
    title: "Full Stack Development",
    slug: "full-stack-development",
    description: "Master front-end and back-end technologies to build complete web applications.",
  },
  {
    icon: Server,
    title: "Backend Development",
    slug: "backend-development",
    description: "Learn to build robust server-side applications, APIs, and database systems.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    slug: "frontend-development",
    description: "Create beautiful, responsive, and performant user interfaces with modern tools.",
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
            <Link to={`/courses/${program.slug}`} key={i}>
              <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border group h-full">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
