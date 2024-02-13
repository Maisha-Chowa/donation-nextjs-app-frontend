"use client";

const Footer = () => {
  return (
    <div className="px-12 lg:pt-12 md:pt-16 pt-10 pb-12 bg-pink-900 text-white text-center">
      <p>
        Copyright &copy; {new Date().getFullYear()} Next Donation. All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
