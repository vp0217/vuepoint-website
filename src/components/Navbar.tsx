import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground tracking-tight">
            VUEPOINT
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Why Vuepoint
          </a>
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
            Schools <ChevronDown className="w-3 h-3" />
          </button>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Smarties
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Events
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="heroOutline" size="sm">Apply Now</Button>
          <Button variant="nav" size="sm">Login</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          <a href="#" className="block text-sm font-medium text-foreground">Why Vuepoint</a>
          <a href="#" className="block text-sm font-medium text-foreground">Schools</a>
          <a href="#" className="block text-sm font-medium text-foreground">Smarties</a>
          <a href="#" className="block text-sm font-medium text-foreground">Events</a>
          <a href="#" className="block text-sm font-medium text-foreground">Contact</a>
          <div className="flex gap-3 pt-2">
            <Button variant="heroOutline" size="sm">Apply Now</Button>
            <Button variant="nav" size="sm">Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
