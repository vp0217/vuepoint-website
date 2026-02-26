import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Cpu, Users, CheckCircle, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2348168013655";
const PHONE_DISPLAY = "0816 801 3655";
const ADDRESS = "Zenith & Castle Plaza, Navy Estate, Karshi";

const metrics = [
  { value: "50+", label: "Developers trained" },
  { value: "30+", label: "Projects delivered" },
  { value: "20+", label: "Hiring partners" },
  { value: "6+", label: "Years in tech talent" },
];

const services = [
  {
    icon: Users,
    title: "Hire Our Developers",
    description: "Get vetted, job-ready developers trained in modern stacks — React, Node.js, TypeScript, and more. We match you with full stack, front-end, or backend engineers for contract or full-time roles. Our graduates are taught industry best practices, version control, and agile workflows so they can contribute from day one.",
  },
  {
    icon: Globe,
    title: "Websites & Web Apps",
    description: "From sleek marketing sites to full web applications — we build responsive, fast, and scalable solutions. Whether you need a company website, an e-commerce platform, or a custom web app, we use modern frameworks and clean architecture to deliver on time and within scope.",
  },
  {
    icon: Cpu,
    title: "Software Systems",
    description: "Custom software, internal tools, APIs, and integrations. We design and build systems that solve your real operational and product needs — inventory management, dashboards, CRM modules, or API backends. You get maintainable code and documentation so your team can own it long-term.",
  },
];

const whyUs = [
  "Talent trained on industry-standard curriculum (full stack, front-end, backend)",
  "Flexible engagement: project-based, retainer, or full-time placement",
  "Transparent communication, timelines, and regular updates",
  "Quality code, testing, and best practices — no shortcuts",
  "Ongoing support and maintenance when you need it",
  "Based in Abuja (Navy Estate, Karshi) — easy to meet and collaborate",
];

const process = [
  { step: 1, title: "Tell us what you need", text: "Share your project scope, tech stack preferences, or hiring requirements." },
  { step: 2, title: "We propose a plan", text: "We outline deliverables, timeline, and pricing — no surprises." },
  { step: 3, title: "Kick off & deliver", text: "We assign the right talent or team and work with you until you're satisfied." },
];

const HireUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-20 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-background leading-tight mb-4 md:mb-6">
            Hire Us for <span className="text-primary">Developers</span> & <span className="text-primary">Software</span>
          </h1>
          <p className="text-base md:text-lg text-background/80 mb-4">
            Need developers or a website or software system built? We train top tech talent and deliver projects for startups, SMEs, and enterprises. Get in touch — we respond quickly and work with you from idea to launch.
          </p>
          <p className="text-background/70 text-sm mb-8 max-w-xl mx-auto">
            Based in Abuja. We serve clients across Nigeria and are open to remote collaboration.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Button variant="hero" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" /> Chat with us
            </Button>
          </a>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-10 md:py-16 border-b border-border bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {metrics.map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-1">{item.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-padding section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-14">
            Whether you need talent on your team or a complete solution built — we're here to help with transparent pricing and clear timelines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow overflow-hidden">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Simple, transparent, and focused on your success.
          </p>
          <div className="space-y-8">
            {process.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Vuepoint */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Why Work With Vuepoint?
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            We combine trained, industry-ready talent with a commitment to delivery and quality — so you get results you can rely on.
          </p>
          <ul className="space-y-4 max-w-xl mx-auto">
            {whyUs.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10 text-center overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm sm:text-base">
              Tell us about your project or hiring needs. We'll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Button variant="hero" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat with us
                </Button>
              </a>
            </div>
            <div className="pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> learning@vuepointdigitalhub.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> {ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HireUs;
