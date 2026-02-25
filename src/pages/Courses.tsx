import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Server, Layout, Clock, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    slug: "full-stack-development",
    icon: Code,
    title: "Full Stack Development",
    duration: "6 Months",
    level: "Beginner to Advanced",
    shortDescription: "Master both front-end and back-end technologies to build complete, production-ready web applications from scratch.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Git"],
    highlights: [
      "Build 10+ real-world projects",
      "Learn modern JavaScript & TypeScript",
      "Master React, Node.js & databases",
      "Deploy applications to the cloud",
      "Work with REST APIs & GraphQL",
      "Agile development methodology",
    ],
    overview: "Our Full Stack Development program is designed to take you from absolute beginner to a job-ready full stack developer in 6 months. You'll learn everything from HTML, CSS, and JavaScript fundamentals to advanced React patterns, Node.js backend development, database management, and cloud deployment. Every module includes hands-on projects that mirror real industry challenges.",
    curriculum: [
      { month: "Month 1", title: "Web Fundamentals", topics: ["HTML5 & Semantic Markup", "CSS3 & Responsive Design", "JavaScript Fundamentals", "DOM Manipulation & Events"] },
      { month: "Month 2", title: "Advanced JavaScript & React", topics: ["ES6+ Features & Async JS", "React Components & JSX", "State Management & Hooks", "React Router & Forms"] },
      { month: "Month 3", title: "Backend Development", topics: ["Node.js & Express.js", "RESTful API Design", "Authentication & Authorization", "Error Handling & Middleware"] },
      { month: "Month 4", title: "Databases & Data Layer", topics: ["MongoDB & Mongoose", "PostgreSQL & SQL", "Database Design & Modeling", "ORM & Query Optimization"] },
      { month: "Month 5", title: "Advanced Topics", topics: ["TypeScript", "GraphQL", "Testing & TDD", "CI/CD & DevOps Basics"] },
      { month: "Month 6", title: "Capstone & Career Prep", topics: ["Full Stack Capstone Project", "Code Reviews & Best Practices", "Portfolio Building", "Interview Preparation"] },
    ],
  },
  {
    slug: "backend-development",
    icon: Server,
    title: "Backend Development",
    duration: "4 Months",
    level: "Beginner to Advanced",
    shortDescription: "Learn to build robust server-side applications, APIs, and database systems that power modern web applications.",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    highlights: [
      "Build scalable REST & GraphQL APIs",
      "Master Node.js & Python backends",
      "Database design & optimization",
      "Cloud deployment & DevOps",
      "Security best practices",
      "Microservices architecture",
    ],
    overview: "The Backend Development course focuses on server-side programming, database management, API design, and cloud infrastructure. You'll learn to build secure, scalable backend systems using Node.js and Python, work with both SQL and NoSQL databases, and deploy your applications using modern DevOps practices.",
    curriculum: [
      { month: "Month 1", title: "Server-Side Fundamentals", topics: ["Node.js Core Concepts", "Express.js Framework", "REST API Design Principles", "Authentication & JWT"] },
      { month: "Month 2", title: "Databases & Data Management", topics: ["PostgreSQL & Advanced SQL", "MongoDB & Document Stores", "Database Design Patterns", "Caching with Redis"] },
      { month: "Month 3", title: "Advanced Backend", topics: ["Python & Flask/FastAPI", "GraphQL APIs", "Message Queues & Workers", "Testing & Documentation"] },
      { month: "Month 4", title: "DevOps & Deployment", topics: ["Docker & Containerization", "AWS Cloud Services", "CI/CD Pipelines", "Monitoring & Logging"] },
    ],
  },
  {
    slug: "frontend-development",
    icon: Layout,
    title: "Frontend Development",
    duration: "4 Months",
    level: "Beginner to Advanced",
    shortDescription: "Master modern frontend technologies to create beautiful, responsive, and performant user interfaces.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Figma", "Git"],
    highlights: [
      "Build stunning responsive UIs",
      "Master React & Next.js",
      "TypeScript for type safety",
      "Modern CSS & animations",
      "Performance optimization",
      "UI/UX design principles",
    ],
    overview: "The Frontend Development course teaches you everything needed to build modern, responsive, and accessible web interfaces. From HTML & CSS fundamentals to advanced React patterns, state management, and performance optimization — you'll graduate with a portfolio of impressive projects.",
    curriculum: [
      { month: "Month 1", title: "HTML, CSS & Design", topics: ["Semantic HTML5", "CSS3 & Flexbox/Grid", "Responsive Design", "UI/UX Fundamentals & Figma"] },
      { month: "Month 2", title: "JavaScript & TypeScript", topics: ["Modern JavaScript (ES6+)", "TypeScript Fundamentals", "DOM & Browser APIs", "Async Programming"] },
      { month: "Month 3", title: "React Ecosystem", topics: ["React Components & Hooks", "State Management (Zustand/Redux)", "React Router & Forms", "API Integration"] },
      { month: "Month 4", title: "Advanced Frontend", topics: ["Next.js & SSR/SSG", "Animation & Motion", "Testing & Accessibility", "Performance & Portfolio"] },
    ],
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 text-center bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Our <span className="text-secondary">Courses</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our courses are carefully designed and structured to deliver the best quality to take you from beginner to advanced skill level.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Card header */}
                <div className="p-8 pb-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <course.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.shortDescription}</p>
                </div>

                {/* Meta */}
                <div className="px-8 py-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {course.level}</span>
                </div>

                {/* Techs */}
                <div className="px-8 pb-4 flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-8 pb-8 mt-auto">
                  <Link to={`/courses/${course.slug}`}>
                    <Button variant="hero" className="w-full group/btn">
                      View Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">Why Learn With Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: "Expert Instructors", desc: "Learn from professionals with years of industry experience." },
              { icon: Users, title: "Small Class Sizes", desc: "Get personalized attention and mentorship throughout the program." },
              { icon: CheckCircle, title: "Job-Ready Skills", desc: "Graduate with a portfolio of projects that impress employers." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { courses };
export default Courses;
