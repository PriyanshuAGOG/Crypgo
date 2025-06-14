"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const BusinessPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const popupShown = localStorage.getItem("businessPopupShown");
    
    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("businessPopupShown", "true");
  };

  const handleVisitWebsite = () => {
    window.open("https://aesthetx.tech", "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative mx-4 max-w-md overflow-hidden rounded-2xl bg-dark_grey bg-opacity-95 backdrop-blur-md border border-dark_border border-opacity-30 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-dark_border bg-opacity-20 text-white transition-all hover:bg-opacity-40 hover:text-primary"
              aria-label="Close popup"
            >
              <Icon icon="tabler:x" className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-20">
                <Icon icon="tabler:rocket" className="h-8 w-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-white">
                Need a Website for Your Business?
              </h3>

              {/* Description */}
              <p className="mb-6 text-muted text-opacity-80 leading-relaxed">
                Transform your business with a professional, modern website. 
                Get custom designs, responsive layouts, and powerful features 
                tailored to your needs.
              </p>

              {/* Features */}
              <div className="mb-6 space-y-2 text-left">
                <div className="flex items-center gap-3">
                  <Icon icon="tabler:check" className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted text-opacity-70">Custom Design & Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="tabler:check" className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted text-opacity-70">Mobile-First Responsive Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="tabler:check" className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted text-opacity-70">SEO Optimized & Fast Loading</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="tabler:check" className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted text-opacity-70">24/7 Support & Maintenance</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleVisitWebsite}
                  className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-darkmode transition-all hover:bg-primary/90 hover:shadow-lg transform hover:scale-105"
                >
                  Visit AesthetX.tech
                </button>
                <button
                  onClick={handleClose}
                  className="w-full rounded-lg border border-dark_border border-opacity-40 px-6 py-3 font-medium text-muted transition-all hover:bg-dark_border hover:bg-opacity-10"
                >
                  Maybe Later
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary bg-opacity-10 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-tealGreen bg-opacity-10 blur-xl"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessPopup;