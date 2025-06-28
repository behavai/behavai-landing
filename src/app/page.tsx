import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DemoCardsSection } from "@/components/DemoCardsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoCardsSection />
      <Footer />
    </main>

  );
}
