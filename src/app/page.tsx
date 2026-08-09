import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { ProblemSection } from "@/components/ProblemSection";
import { SevenStepsMap } from "@/components/SevenStepsMap";
import { SevenStepsDetail } from "@/components/SevenStepsDetail";
import { FiveScreens } from "@/components/FiveScreens";
import { ControlRows } from "@/components/ControlRows";
import { WhyDifferent } from "@/components/WhyDifferent";
import { RoiCalculator } from "@/components/RoiCalculator";
import { FaqSection } from "@/components/FaqSection";
import { DemoCta } from "@/components/DemoCta";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />

      <main id="main">
        <Hero />
        <Overview />
        <ProblemSection />
        <SevenStepsMap />
        <SevenStepsDetail />
        <FiveScreens />
        <ControlRows />
        <WhyDifferent />
        <RoiCalculator />
        <DemoCta />
        <FaqSection />
      </main>

      <Footer />
    </>
  );
}
