import ClientEffects from "@/components/ClientEffects";
import FloatingTelegram from "@/components/FloatingTelegram";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
// import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <FloatingTelegram />
      <Navbar />
      <Hero />
      <WaveDivider fill="var(--navy)" />
      <Marquee />
      <WaveDivider fill="var(--navy)" flip />
      <Services />
      <WaveDivider fill="var(--navy)" variant={2} />
      <HowItWorks />
      <WaveDivider fill="var(--navy)" variant={2} flip />
      {/* <Stats /> */}
      <Reviews />
      {/* <ContactForm /> */}
      <CTA />
      <Footer />
    </>
  );
}
