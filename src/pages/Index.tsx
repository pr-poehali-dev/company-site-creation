
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import GreeningSection from "@/components/sections/GreeningSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";

/**
 * Главная страница сайта
 */
const Home = () => {
  // Инициализация анимации при скролле
  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <GreeningSection />
        {/* Здесь можно добавить другие секции по мере необходимости */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
