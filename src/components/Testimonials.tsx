import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    text: "Vuepoint is the best coding bootcamp, without any doubt. The rigorous curriculum, in-depth projects, personal mentorship, and high quality instructors really prepare students to go from beginner to competitively employable in a few months.",
    name: "Amara Okafor",
    role: "Full Stack Developer",
    image: testimonial1,
  },
  {
    text: "The expertise, technologies and flexibility with which Vuepoint grooms beginners into industry standard software developers is next to none. I am a product of their excellent work. Because of them I have grown to be more passionate about web applications.",
    name: "David Mensah",
    role: "Full Stack Developer",
    image: testimonial2,
  },
  {
    text: "Getting to know about Vuepoint's software engineering bootcamp changed my life for the better. I enrolled without any idea what coding was about, but the team at Vuepoint offered support and guidance every step of the way.",
    name: "Carlos Rivera",
    role: "Full Stack Developer",
    image: testimonial3,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider text-center mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Hear from some of our graduates
        </h2>

        <div className="relative bg-muted rounded-2xl p-8 md:p-12">
          <Quote className="w-10 h-10 text-primary/20 mb-4" />
          <p className="text-foreground text-lg leading-relaxed mb-8">
            "{t.text}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2 absolute top-8 right-8 md:top-12 md:right-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
