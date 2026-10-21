import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import WorkingProcessSection from "@/components/home/WorkingProcessSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WhyChooseSection />
      <WhoWeServeSection />
      <WorkingProcessSection />
      <AboutPreviewSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
