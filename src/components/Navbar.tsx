import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground tracking-tight">
            VUEPOINT
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/why-vuepoint" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Why Vuepoint
          </Link>
          <div className="relative" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
            <Link to="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
              Courses <ChevronDown className="w-3 h-3" />
            </Link>
            {coursesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-xl py-2 z-50">
                <Link to="/courses/full-stack-development" className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors">Full Stack Development</Link>
                <Link to="/courses/backend-development" className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors">Backend Development</Link>
                <Link to="/courses/frontend-development" className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors">Frontend Development</Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/apply"><Button variant="heroOutline" size="sm">Apply Now</Button></Link>
          <Link to="/login"><Button variant="nav" size="sm">Login</Button></Link>
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
          <Link to="/why-vuepoint" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Why Vuepoint</Link>
          <Link to="/courses" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/courses/full-stack-development" className="block text-sm font-medium text-muted-foreground pl-4" onClick={() => setIsOpen(false)}>Full Stack Development</Link>
          <Link to="/courses/backend-development" className="block text-sm font-medium text-muted-foreground pl-4" onClick={() => setIsOpen(false)}>Backend Development</Link>
          <Link to="/courses/frontend-development" className="block text-sm font-medium text-muted-foreground pl-4" onClick={() => setIsOpen(false)}>Frontend Development</Link>
          <div className="flex gap-3 pt-2">
            <Link to="/apply" onClick={() => setIsOpen(false)}><Button variant="heroOutline" size="sm">Apply Now</Button></Link>
            <Link to="/login" onClick={() => setIsOpen(false)}><Button variant="nav" size="sm">Login</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
