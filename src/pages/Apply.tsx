"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { COURSE_OPTIONS } from "@/lib/courses";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      course: formData.get("course"),
      experienceLevel: formData.get("experienceLevel"),
      message: formData.get("message") || undefined,
    };
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Try again.");
    } finally {
      setLoading(false);
    }
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
            <div className="bg-background rounded-2xl border border-border shadow-xl p-6 sm:p-8 md:p-10">
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
                  {error && <p className="text-sm text-destructive mb-4">{error}</p>}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                        <Input name="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                        <Input name="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                      <Input name="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                      <Input name="phone" type="tel" placeholder="0816 801 3655" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Course of Interest</label>
                      <select name="course" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                        <option value="">Select a course</option>
                        {COURSE_OPTIONS.map((course) => (
                          <option key={course.value} value={course.value}>
                            {course.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Experience Level</label>
                      <select name="experienceLevel" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required>
                        <option value="">Select your level</option>
                        <option value="none">No experience</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Why do you want to join? (Optional)</label>
                      <textarea
                        name="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Tell us about your goals..."
                      />
                    </div>
                    <Button variant="hero" size="lg" className="w-full" type="submit" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Application"}
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
