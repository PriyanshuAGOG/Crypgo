"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AoscompoProps {
  children: React.ReactNode;
}

const Aoscompo: React.FC<AoscompoProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <>{children}</>;
};

export default Aoscompo;