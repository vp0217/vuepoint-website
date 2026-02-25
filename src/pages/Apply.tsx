import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Start Your <span className="text-secondary">Tech Career</span> Today
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fill out the application form and our admissions team will get back to you within 48 hours. No prior experience needed — just the drive to learn.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "No prior coding experience required",
                  "Flexible monthly payment plans",
                  "Project-based, hands-on curriculum",
                  "Career support & job placement assistance",
                  "Learn from industry professionals",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-background rounded-2xl border border-border shadow-xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground">Application Submitted!</h3>
                  <p className="text-muted-foreground">We'll review your application and get back to you within 48 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Apply Now</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                      <Input type="tel" placeholder="+234 800 000 0000" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Course of Interest</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                        <option value="">Select a course</option>
                        <option value="full-stack">Full Stack Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="frontend">Frontend Development</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Experience Level</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                        <option value="">Select your level</option>
                        <option value="none">No experience</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Why do you want to join? (Optional)</label>
                      <textarea
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Tell us about your goals..."
                      />
                    </div>
                    <Button variant="hero" size="lg" className="w-full" type="submit">
                      Submit Application
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
