import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need any prior coding experience?",
    a: "No! Our programs are designed to take you from absolute beginner to advanced level. All you need is a laptop, internet connection, and the drive to learn.",
  },
  {
    q: "How long are the programs?",
    a: "Our Full Stack Development program runs for 6 months, while Backend and Frontend Development programs are 4 months each. All programs are intensive and hands-on.",
  },
  {
    q: "What are the payment options?",
    a: "We offer flexible monthly payment plans so you can pay as you learn. Contact our admissions team for detailed pricing and available scholarships.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes! Upon successful completion of your program, you'll receive an accredited certificate recognized by industry partners.",
  },
  {
    q: "Do you help with job placement?",
    a: "Absolutely. We provide career support including resume building, interview preparation, and connections to our network of 50+ hiring partners.",
  },
  {
    q: "What is the class format?",
    a: "Classes combine live instructor-led sessions, hands-on projects, peer collaboration, and one-on-one mentorship. We use Empirical Process Control to personalize learning for each student.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider text-center mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
