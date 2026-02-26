"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-background rounded-2xl border border-border shadow-xl p-8 md:p-10">
            {/* Logo */}
            <div className="text-center mb-8">
              <img src={typeof logo === "string" ? logo : logo.src} alt="Vuepoint" className="h-12 w-auto mx-auto mb-4" />
              <h1 className="font-heading font-bold text-2xl text-foreground">Welcome Back</h1>
              <p className="text-sm text-muted-foreground mt-1">Log in to your Vuepoint account</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                <Input type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="rounded border-input" />
                  Remember me
                </label>
                <a href="#" className="text-primary hover:underline font-medium">Forgot password?</a>
              </div>
              <Button variant="hero" size="lg" className="w-full" type="submit">
                Log In
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <Link href="/apply" className="text-primary font-semibold hover:underline">Apply Now</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
