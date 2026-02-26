import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, ArrowLeft, UserCheck, Briefcase, Calendar, Banknote, MapPin } from "lucide-react";
import { courses } from "./Courses";

const WHATSAPP_URL = "https://wa.me/2348168013655";
const DISCOUNT_RATE = 0.4; // 40% off

function formatNaira(n: number) {
  return new Intl.NumberFormat("en-NG", { style: "decimal", minimumFractionDigits: 0 }).format(n);
}

function discountedPrice(original: number) {
  return Math.round(original * (1 - DISCOUNT_RATE));
}

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/courses" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-36 pb-12 md:pb-16 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <Link to="/courses" className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <course.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1 text-sm text-background/70"><Clock className="w-4 h-4" /> {course.duration}</span>
                <span className="flex items-center gap-1 text-sm text-background/70"><Users className="w-4 h-4" /> {course.level}</span>
                {"startDate" in course && course.startDate && (
                  <span className="flex items-center gap-1 text-sm text-background/70"><Calendar className="w-4 h-4" /> Start: {course.startDate}</span>
                )}
                {"tuitionFull" in course && course.tuitionFull != null && (
                  <span className="flex items-center gap-2 text-sm text-background/70">
                    <Banknote className="w-4 h-4" />
                    <span className="flex items-center gap-2">
                      <span className="line-through opacity-80">₦{formatNaira(course.tuitionFull)}</span>
                      <span className="font-semibold text-primary/90">₦{formatNaira(discountedPrice(course.tuitionFull))}</span>
                      <span className="rounded bg-primary/20 px-1.5 py-0.5 text-xs font-bold text-background">40% OFF</span>
                    </span>
                  </span>
                )}
                {"classOptions" in course && course.classOptions && (
                  <span className="flex items-center gap-1 text-sm text-background/70"><MapPin className="w-4 h-4" /> {course.classOptions}</span>
                )}
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-background leading-tight mb-4 md:mb-6">
              {course.title}
            </h1>
            <p className="text-base md:text-lg text-background/80 mb-6 md:mb-8">{course.overview}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8">
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

      {/* Class and Payment Options */}
      {"paymentIntro" in course && course.paymentIntro && (
        <section className="section-padding section-light">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Class and Payment Options
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {course.paymentIntro}
            </p>
            <div className="mb-6 rounded-lg border-2 border-primary/30 bg-primary/5 px-3 sm:px-4 py-3 text-center">
              <p className="text-xs sm:text-sm font-bold text-foreground">
                We're running a <span className="text-primary">40% discount</span> — pay the discounted price below for full or installment.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm overflow-hidden">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                {"classAndPaymentTitle" in course && course.classAndPaymentTitle ? course.classAndPaymentTitle : course.title}
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-muted-foreground">Location: </span>
                  {"classOptions" in course && course.classOptions ? course.classOptions : "In-person (classroom) & online (virtual)"}
                </p>
                <p className="text-sm font-medium text-foreground">
                  <span className="text-muted-foreground">Duration: </span>
                  {course.duration.toLowerCase()}
                </p>
                <p className="text-sm font-medium text-foreground">
                  <span className="text-muted-foreground">Multiple Class option: </span>
                  (Choose your class option)
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link to="/apply">
                  <Button variant="hero" size="lg">Apply Now</Button>
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-2.5 text-sm font-medium hover:bg-muted"
                >
                  Chat with us
                </a>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Full Tuition Payment</p>
                  <p className="text-sm text-muted-foreground mb-1">Total Payable tuition fee</p>
                  {"tuitionFull" in course && course.tuitionFull != null ? (
                    <div className="space-y-0.5">
                      <p className="text-sm text-muted-foreground line-through">₦{formatNaira(course.tuitionFull)} (normal price)</p>
                      <p className="text-2xl font-bold text-primary">₦{formatNaira(discountedPrice(course.tuitionFull))}</p>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-foreground">—</p>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Installment Payments</p>
                  <p className="text-sm text-muted-foreground mb-1">Monthly payment plan</p>
                  {"tuitionMonthly" in course && course.tuitionMonthly != null ? (
                    <div className="space-y-0.5">
                      <p className="text-sm text-muted-foreground line-through">₦{formatNaira(course.tuitionMonthly)}/mo (normal price)</p>
                      <p className="text-2xl font-bold text-primary">₦{formatNaira(discountedPrice(course.tuitionMonthly))}/mo</p>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-foreground">—</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-10">What You'll Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {course.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      {"whoIsThisFor" in course && course.whoIsThisFor && course.whoIsThisFor.length > 0 && (
<section className="section-padding section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-10 flex items-center gap-2 sm:gap-3 flex-wrap">
              <UserCheck className="w-8 h-8 sm:w-9 sm:h-9 text-primary shrink-0" />
              Who Is This For?
            </h2>
            <ul className="space-y-4 max-w-3xl">
              {course.whoIsThisFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Career outcomes */}
      {"careerOutcomes" in course && course.careerOutcomes && course.careerOutcomes.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 flex items-center gap-3">
              <Briefcase className="w-9 h-9 text-primary" />
              Career Outcomes
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              After completing this program, you'll be equipped for roles such as:
            </p>
            <ul className="space-y-3 max-w-3xl">
              {course.careerOutcomes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Curriculum */}
      <section className="section-padding section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-10">Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {course.curriculum.map((module, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow overflow-hidden">
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
      <section className="py-16 md:py-20 bg-foreground">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-background/70 mb-6 md:mb-8 max-w-xl mx-auto text-sm sm:text-base">
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
