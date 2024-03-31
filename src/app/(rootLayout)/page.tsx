import About from "@/components/ui/About";
import Achievement from "@/components/ui/Achievement";
import FeaturedDonation from "@/components/ui/FeaturedDonation";
import HeroSection from "@/components/ui/HeroSection";
import Partners from "@/components/ui/Partners";
import Testimonial from "@/components/ui/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Achievement />
      <FeaturedDonation />
      <About />
      <Testimonial />
      <Partners />
    </div>
  );
};

export default page;
