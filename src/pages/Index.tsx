import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechMarquee />
      <WhyChooseUs />
      <AboutSection />
      <Testimonials />
      <Programs />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
