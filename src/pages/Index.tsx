import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TwoWeeksFreePromo from "@/components/TwoWeeksFreePromo";
import TechMarquee from "@/components/TechMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import BannerV2 from "@/components/BannerV2";
import Testimonials from "@/components/Testimonials";
import Programs from "@/components/Programs";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import ReadyToStartSection from "@/components/ReadyToStartSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TwoWeeksFreePromo />
      <TechMarquee />
      <WhyChooseUs />
      <AboutSection />
      {/* <BannerV2 /> */}
      <Testimonials />
      <Programs />
      <Partners />
      <FAQ />
      <Stats />
      <ReadyToStartSection />
      <Footer />
    </div>
  );
};

export default Index;
