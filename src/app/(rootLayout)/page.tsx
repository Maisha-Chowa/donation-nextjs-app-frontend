import About from "@/components/ui/About";
import FeaturedDonation from "@/components/ui/FeaturedDonation";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <FeaturedDonation />
    </div>
  );
};

export default page;
