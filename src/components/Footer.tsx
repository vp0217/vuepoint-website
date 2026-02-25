import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* CTA Banner */}
      <div className="section-padding">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Want to find out more?
          </h2>
          <p className="text-muted-foreground text-lg">We are here for you</p>
          <Button variant="hero" size="lg">
            Apply Now
          </Button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">V</span>
            </div>
            <span className="font-heading font-bold text-sm text-foreground">VUEPOINT</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vuepoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
