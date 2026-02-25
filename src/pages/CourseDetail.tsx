import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, ArrowLeft } from "lucide-react";
import { courses } from "./Courses";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/courses" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-foreground">
        <div className="container mx-auto px-4">
          <Link to="/courses" className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <course.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex gap-3">
                <span className="flex items-center gap-1 text-sm text-background/70"><Clock className="w-4 h-4" /> {course.duration}</span>
                <span className="flex items-center gap-1 text-sm text-background/70"><Users className="w-4 h-4" /> {course.level}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-background leading-tight mb-6">
              {course.title}
            </h1>
            <p className="text-lg text-background/80 mb-8">{course.overview}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {course.technologies.map((tech) => (
                <span key={tech} className="text-sm font-medium bg-background/10 text-background px-4 py-1.5 rounded-full border border-background/20">
                  {tech}
                </span>
              ))}
            </div>
            <Link to="/apply">
              <Button variant="hero" size="lg">Apply Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {course.curriculum.map((module, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full">{module.month}</span>
                  <h3 className="font-heading font-bold text-lg text-foreground">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Join hundreds of graduates who have transformed their careers through our {course.title} program.
          </p>
          <Link to="/apply">
            <Button variant="hero" size="lg">Apply Now</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
