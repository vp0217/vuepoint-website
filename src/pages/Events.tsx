import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootcampCountdown from "@/components/BootcampCountdown";
import { HOLIDAY_BOOTCAMP_START_LABEL } from "@/lib/holiday-bootcamp";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Code, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/2348168013655";

const outcomes = [
  "HTML5, CSS3 & JavaScript (ES6+)",
  "React.js fundamentals & component architecture",
  "UI development with modern layout techniques",
  "Real-world projects & portfolio building",
];

const EventFree = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-36 pb-12 md:pb-16 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold mb-4 md:mb-6">
              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Holiday bootcamp
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-background leading-tight mb-4 md:mb-6">
              Become a Certified Frontend Engineer in 1 Month with React.js
            </h1>
            <p className="text-base md:text-lg text-background/80 mb-6 md:mb-8">
              Master modern frontend development and build real-world projects. No prior experience required — we'll take you from zero to job-ready fundamentals in one intensive month.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 text-xs sm:text-sm text-background/70">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Starts {HOLIDAY_BOOTCAMP_START_LABEL}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 1 month · In-person & hands-on
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Zenith & Castle Plaza, Navy Estate, Karshi
              </span>
            </div>
            <BootcampCountdown className="mt-8 max-w-lg" />
            <div className="mt-8 rounded-2xl bg-primary/15 border border-primary/30 p-5 md:p-6 max-w-md">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Special holiday price</p>
              <p className="text-3xl md:text-4xl font-extrabold text-background">₦68,500</p>
              <p className="text-sm text-background/60 mt-1">
                Regular fee: <span className="line-through">₦120,000</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" /> Enroll now
                </Button>
              </a>
              <Link href="/courses">
                <Button variant="heroOutline" size="lg" className="border-background/30 text-background hover:bg-background/10">
                  See full courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn / outcome */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground mb-8">
            A focused, project-based curriculum designed to get you building modern web apps with React in just one month.
          </p>
          <ul className="space-y-4">
            {outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
            Bootcamp Details
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5 md:space-y-6 overflow-hidden">
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Start date</h3>
              <p className="text-muted-foreground">{HOLIDAY_BOOTCAMP_START_LABEL}</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Duration</h3>
              <p className="text-muted-foreground">1 month of intensive, hands-on learning.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">What we cover</h3>
              <p className="text-muted-foreground">
                HTML5 structure and semantic markup, CSS3 layout and responsive design, modern JavaScript (ES6+), React.js components and hooks, UI development, and portfolio-ready projects you can show employers.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Who it's for</h3>
              <p className="text-muted-foreground">
                Beginners and career switchers who want to break into frontend development fast. Perfect if you're ready to commit to a focused month and graduate with real skills and projects.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Zenith & Castle Plaza, Navy Estate, Karshi, Abuja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-light">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enroll Now — Limited Slots Available
          </h2>
          <p className="text-muted-foreground mb-8">
            Secure your spot at the special holiday price. Chat with us on WhatsApp to register for the next cohort.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" /> Chat with us to enroll
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventFree;
