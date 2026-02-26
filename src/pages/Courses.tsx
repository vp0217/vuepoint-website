import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Server, Layout, Clock, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    slug: "full-stack-development",
    icon: Code,
    title: "Full Stack Web Engineering (Node.js)",
    duration: "6 Months",
    level: "Beginner to Advanced",
    shortDescription: "Master both front-end and back-end technologies with Node.js to build complete, production-ready web applications from scratch.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Git", "Express"],
    highlights: [
      "Build 10+ real-world full stack projects",
      "Learn modern JavaScript, TypeScript & Node.js",
      "Master React, Express, and relational & NoSQL databases",
      "Deploy applications to the cloud (Vercel, Railway, AWS)",
      "Design and build REST APIs & integrate with front ends",
      "Version control, testing, and agile workflow",
      "End-to-end capstone project for your portfolio",
    ],
    overview: "Our Full Stack Web Engineering program takes you from zero to job-ready in 6 months. You’ll learn front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, Express, databases, APIs) in one intensive, project-based curriculum — similar to industry bootcamps like Rework Academy’s full-stack track. Every module includes hands-on projects that mirror real product and engineering challenges.",
    whoIsThisFor: [
      "Career switchers with no prior coding experience",
      "Beginners who want one program covering both front-end and back-end",
      "Anyone aiming for roles like Full Stack Developer, Software Engineer, or Web Developer",
    ],
    careerOutcomes: [
      "Full Stack Developer / Software Engineer",
      "Web Developer (front-end + back-end)",
      "Junior Developer at startups and product companies",
    ],
    curriculum: [
      { month: "Month 1", title: "Web Fundamentals", topics: ["HTML5 & Semantic Markup", "CSS3 & Responsive Design", "JavaScript Fundamentals", "DOM, Events & DevTools"] },
      { month: "Month 2", title: "Front-End with React", topics: ["ES6+ & Async JavaScript", "React Components, JSX & Hooks", "State Management & React Router", "Consuming APIs from the front end"] },
      { month: "Month 3", title: "Backend with Node.js", topics: ["Node.js & Express.js", "RESTful API Design", "Authentication & Authorization", "Error Handling & Middleware"] },
      { month: "Month 4", title: "Databases & Data Layer", topics: ["MongoDB & Mongoose", "PostgreSQL & SQL", "Database Design & Modeling", "Connecting APIs to Databases"] },
      { month: "Month 5", title: "Advanced Full Stack", topics: ["TypeScript on front & back", "Testing & TDD", "CI/CD & Deployment Basics", "Security & Performance"] },
      { month: "Month 6", title: "Capstone & Career Prep", topics: ["Full Stack Capstone Project", "Code Reviews & Best Practices", "Portfolio & LinkedIn", "Interview Preparation"] },
    ],
    startDate: "Rolling enrollment",
    classOptions: "In-person (classroom) & online (virtual)",
    tuitionFull: 682800,
    tuitionMonthly: 113800,
    classAndPaymentTitle: "Full Stack Web Development with Node",
    paymentIntro: "You can opt to pay 100% of your total fees, or, explore our monthly Installment payment plan without additional charges during the training period.",
  },
  {
    slug: "backend-development",
    icon: Server,
    title: "Backend Engineering (Node.js)",
    duration: "4 Months",
    level: "Beginner to Advanced",
    shortDescription: "Learn to build robust server-side applications, APIs, and database systems with Node.js that power modern web and mobile apps.",
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Docker", "REST", "Git"],
    highlights: [
      "Build scalable REST APIs with Node.js and Express",
      "Design and optimize SQL and NoSQL databases",
      "Authentication, authorization, and security best practices",
      "Containerization with Docker and deployment basics",
      "Testing, documentation, and API design",
      "Real backend projects for your portfolio",
    ],
    overview: "The Backend Engineering (Node.js) course focuses on server-side programming, database design, API development, and deployment. You’ll use Node.js and Express throughout — aligned with programs like Rework Academy’s backend Node.js track — and learn to build secure, scalable back ends that front-end and mobile apps can rely on.",
    whoIsThisFor: [
      "Anyone who wants to specialize in server-side and API development",
      "Front-end developers looking to add backend skills",
      "Aspiring Backend Engineers, API Developers, or Software Engineers",
    ],
    careerOutcomes: [
      "Backend Developer / Backend Engineer",
      "API Developer / Software Engineer",
      "Full Stack Developer (with additional front-end study)",
    ],
    curriculum: [
      { month: "Month 1", title: "Node.js & Server Fundamentals", topics: ["Node.js Core & npm", "Express.js Framework", "REST API Design", "Authentication & JWT"] },
      { month: "Month 2", title: "Databases & Data Layer", topics: ["PostgreSQL & SQL", "MongoDB & Document Models", "Database Design & Migrations", "Caching (e.g. Redis)"] },
      { month: "Month 3", title: "Advanced Backend", topics: ["Validation, Error Handling & Logging", "GraphQL (optional)", "Background Jobs & Queues", "Testing & Documentation"] },
      { month: "Month 4", title: "DevOps & Deployment", topics: ["Docker & Containerization", "Deploying to Cloud (e.g. Railway, AWS)", "CI/CD Basics", "Monitoring & Security"] },
    ],
    startDate: "Rolling enrollment",
    classOptions: "In-person (classroom) & online (virtual)",
    tuitionFull: 455200,
    tuitionMonthly: 113800,
    classAndPaymentTitle: "Backend Development with Node",
    paymentIntro: "You can opt to pay 100% of your total fees, or, explore our monthly Installment payment plan without additional charges during the training period.",
  },
  {
    slug: "frontend-development",
    icon: Layout,
    title: "Front-End Engineering",
    duration: "4 Months",
    level: "Beginner to Advanced",
    shortDescription: "Master modern front-end technologies to create beautiful, responsive, and performant user interfaces and single-page applications.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Figma", "Git"],
    highlights: [
      "Build responsive, accessible UIs with HTML, CSS, and JavaScript",
      "Master React, hooks, and modern front-end architecture",
      "TypeScript for maintainable, type-safe code",
      "Next.js for SSR, routing, and production-ready apps",
      "UI/UX fundamentals and working with design (e.g. Figma)",
      "Performance, testing, and portfolio-ready projects",
    ],
    overview: "The Front-End Engineering course covers everything you need to build modern web interfaces — from HTML and CSS fundamentals to React, TypeScript, and Next.js. Structured similarly to intensive front-end tracks (e.g. Rework Academy’s front-end development program), you’ll graduate with a strong portfolio and the skills expected of a junior front-end or full stack engineer.",
    whoIsThisFor: [
      "Beginners with no coding background who want to focus on the user interface",
      "Design-oriented learners who want to implement UIs in code",
      "Aspiring Front-End Developers, UI Developers, or Full Stack Engineers",
    ],
    careerOutcomes: [
      "Front-End Developer / Frontend Engineer",
      "UI Developer / Web Developer",
      "Full Stack Developer (after adding backend skills)",
    ],
    curriculum: [
      { month: "Month 1", title: "HTML, CSS & Design Basics", topics: ["Semantic HTML5", "CSS3, Flexbox & Grid", "Responsive Design", "UI/UX Fundamentals & Figma"] },
      { month: "Month 2", title: "JavaScript & TypeScript", topics: ["Modern JavaScript (ES6+)", "TypeScript Fundamentals", "DOM & Browser APIs", "Async & Fetch"] },
      { month: "Month 3", title: "React & Ecosystem", topics: ["React Components & Hooks", "State Management", "React Router & Forms", "Consuming APIs"] },
      { month: "Month 4", title: "Advanced Front-End", topics: ["Next.js & SSR/SSG", "Styling (e.g. Tailwind)", "Testing & Accessibility", "Performance & Portfolio"] },
    ],
    startDate: "Rolling enrollment",
    classOptions: "In-person (classroom) & online (virtual)",
    tuitionFull: 455200,
    tuitionMonthly: 113800,
    classAndPaymentTitle: "Front-End Development",
    paymentIntro: "You can opt to pay 100% of your total fees, or, explore our monthly Installment payment plan without additional charges during the training period.",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-36 pb-12 md:pb-16 text-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4 md:mb-6">
            Our <span className="text-secondary">Courses</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our courses are carefully designed and structured to deliver the best quality to take you from beginner to advanced skill level.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="section-padding section-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Card header */}
                <div className="p-6 md:p-8 pb-0">
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
                <div className="px-6 md:px-8 pb-4 flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto">
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
