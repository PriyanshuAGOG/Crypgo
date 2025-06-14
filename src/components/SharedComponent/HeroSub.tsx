import React from "react";

interface HeroSubProps {
  title: string;
  subtitle?: string;
}

const HeroSub: React.FC<HeroSubProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-darkmode py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted text-opacity-70">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSub;