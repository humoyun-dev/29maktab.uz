import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 200); // Adjust the value based on when you want the button to appear
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={inter.className + "relative"}>
      <Navbar />
      <main className={`mx-auto `}>{children}</main>
      <Footer />
      <button
        className={`duration-300 ${
          isVisible
            ? "fixed p-1 rounded-lg text-white bg-orange-600 bottom-4 right-4 z-40 "
            : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Layout;

interface LayoutProps {
  children: React.ReactNode;
}
