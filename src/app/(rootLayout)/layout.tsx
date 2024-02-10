import Footer from "@/components/shares/Footer";
import Navbar from "@/components/shares/Navbar";
import React from "react";

const WithRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithRootLayout;
