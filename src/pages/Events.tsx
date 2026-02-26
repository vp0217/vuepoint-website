import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Code, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/2348168013655";

const outcomes = [
  "Understand HTML structure and semantic markup",
  "Style pages with CSS: layout, colors, typography",
  "Make a responsive page that works on mobile and desktop",
  "Build and publish your first website",
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
              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Free event
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-background leading-tight mb-4 md:mb-6">
              2 Weeks Free — HTML & CSS
            </h1>
            <p className="text-base md:text-lg text-background/80 mb-6 md:mb-8">
              Learn the basics of web development in two weeks. By the end you'll be able to build a real website from scratch. No prior experience required.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 text-xs sm:text-sm text-background/70">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> 2 weeks
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Flexible schedule
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Zenith & Castle Plaza, Navy Estate, Karshi
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" /> Register for free
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
            What You'll Get From This Event
          </h2>
          <p className="text-muted-foreground mb-8">
            In two weeks we'll take you from zero to building and publishing your own website.
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
            Event Details
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5 md:space-y-6 overflow-hidden">
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Duration</h3>
              <p className="text-muted-foreground">2 weeks of hands-on learning.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">What we cover</h3>
              <p className="text-muted-foreground">
                HTML: structure, tags, forms, and semantics. CSS: selectors, layout (Flexbox & Grid), responsive design, and styling. By the end you'll build and deploy a simple website.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">Who it's for</h3>
              <p className="text-muted-foreground">
                Anyone curious about web development — no coding experience needed. Perfect if you're considering our full courses and want a free taste of how we teach.
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
            Ready to Join? It's Free.
          </h2>
          <p className="text-muted-foreground mb-8">
            Limited spots. Chat with us on WhatsApp to register for the next cohort.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" /> Chat with us to register
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventFree;
