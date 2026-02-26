import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Faq = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-36">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
