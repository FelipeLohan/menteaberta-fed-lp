import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ForPsychologists from "@/components/sections/ForPsychologists";
import Privacy from "@/components/sections/Privacy";
import BottomCTA from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <HowItWorks />
        <ForPsychologists />
        <Privacy />
        <BottomCTA />
      </main>

      <Footer />
    </>
  );
}
