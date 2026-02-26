import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2348168013655";

const ReadyToStartSection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8 text-sm sm:text-base">
          Join Vuepoint Academy and take the first step toward a career in tech. Apply now or chat with us to learn more.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/apply">
            <Button variant="secondary" size="lg" className="gap-2 font-semibold bg-primary">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            Chat with us <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;
