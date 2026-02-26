import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground">
      {/* Links */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={typeof logo === "string" ? logo : logo.src} alt="Vuepoint" className="h-7 w-auto" />
              </div>
              <p className="text-sm text-background/60 leading-relaxed">
                Developing highly skilled tech talents for the global market.
              </p>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Courses</h4>
              <div className="space-y-2">
                <Link href="/courses/full-stack-development" className="block text-sm text-background/60 hover:text-background transition-colors">Full Stack Engineering</Link>
                <Link href="/courses/backend-development" className="block text-sm text-background/60 hover:text-background transition-colors">Backend Engineering</Link>
                <Link href="/courses/frontend-development" className="block text-sm text-background/60 hover:text-background transition-colors">Frontend Engineering</Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Company</h4>
              <div className="space-y-2">
                <Link href="/why-vuepoint" className="block text-sm text-background/60 hover:text-background transition-colors">Why Vuepoint</Link>
                <Link href="/faq" className="block text-sm text-background/60 hover:text-background transition-colors">FAQ</Link>
                <Link href="/events" className="block text-sm text-background/60 hover:text-background transition-colors">Events</Link>
                <Link href="/hire-us" className="block text-sm text-background/60 hover:text-background transition-colors">Hire Us</Link>
                <Link href="/apply" className="block text-sm text-background/60 hover:text-background transition-colors">Apply Now</Link>
                <Link href="/login" className="block text-sm text-background/60 hover:text-background transition-colors">Student Login</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-background/60">
                <p>enquiry@vuepoint.co</p>
                <p>0816 801 3655</p>
                <p className="max-w-[200px] sm:max-w-none">Zenith & Castle Plaza, Navy Estate, Karshi</p>
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
