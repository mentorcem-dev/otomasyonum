import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProcessFlow from "./components/ProcessFlow"; // New Animation
import About from "./components/About"; // Process
import Services from "./components/Services"; // Features
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <ProcessFlow />
      <Services />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
