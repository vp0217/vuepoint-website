"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 max-w-[100vw]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src={typeof logo === "string" ? logo : logo.src} alt="Vuepoint" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/why-vuepoint" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Why Vuepoint
          </Link>
          <Link href="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Courses
          </Link>
          <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/hire-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Hire Us
          </Link>
          <Link href="/events" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Events
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/apply"><Button variant="heroOutline" size="sm">Apply Now</Button></Link>
          <Link href="/login"><Button variant="nav" size="sm">Login</Button></Link>
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
          <Link href="/why-vuepoint" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Why Vuepoint</Link>
          <Link href="/courses" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link href="/faq" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="/hire-us" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Hire Us</Link>
          <Link href="/events" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Events</Link>
          <div className="flex gap-3 pt-2">
            <Link href="/apply" onClick={() => setIsOpen(false)}><Button variant="heroOutline" size="sm">Apply Now</Button></Link>
            <Link href="/login" onClick={() => setIsOpen(false)}><Button variant="nav" size="sm">Login</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
