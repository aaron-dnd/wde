import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
       <Packages />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}