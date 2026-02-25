import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground">
      {/* CTA Banner */}
      <div className="section-padding">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-background">
            Want to find out more?
          </h2>
          <p className="text-background/70 text-lg">We are here for you</p>
          <Link to="/apply">
            <Button variant="hero" size="lg">Apply Now</Button>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-sm">V</span>
                </div>
                <span className="font-heading font-bold text-sm text-background">VUEPOINT</span>
              </div>
              <p className="text-sm text-background/60 leading-relaxed">
                Developing highly skilled tech talents for the global market.
              </p>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Courses</h4>
              <div className="space-y-2">
                <Link to="/courses/full-stack-development" className="block text-sm text-background/60 hover:text-background transition-colors">Full Stack Development</Link>
                <Link to="/courses/backend-development" className="block text-sm text-background/60 hover:text-background transition-colors">Backend Development</Link>
                <Link to="/courses/frontend-development" className="block text-sm text-background/60 hover:text-background transition-colors">Frontend Development</Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Company</h4>
              <div className="space-y-2">
                <Link to="/why-vuepoint" className="block text-sm text-background/60 hover:text-background transition-colors">Why Vuepoint</Link>
                <Link to="/apply" className="block text-sm text-background/60 hover:text-background transition-colors">Apply Now</Link>
                <Link to="/login" className="block text-sm text-background/60 hover:text-background transition-colors">Student Login</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-background/60">
                <p>enquiry@vuepoint.co</p>
                <p>+234 800 000 0000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Vuepoint. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
