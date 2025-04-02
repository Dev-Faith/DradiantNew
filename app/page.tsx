import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-4";
import Image from "next/image";

export default function Home() {
  return <div className="">
    <HeroSection/>
    <Features/>
    <ContentSection/>
    <StatsSection/>
    <CallToAction/>
  </div>;
}
