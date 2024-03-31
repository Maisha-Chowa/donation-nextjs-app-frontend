import About from "@/components/ui/About";
import Achievement from "@/components/ui/Achievement";
import FeaturedDonation from "@/components/ui/FeaturedDonation";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Achievement />
      <FeaturedDonation />
      <About />
    </div>
  );
};

export default page;
