
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 53, 102, 0.7), rgba(0, 53, 102, 0.7)), url('https://cdn.poehali.dev/files/592c3f8f-0df1-4fa3-b659-765244cc04f3.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl space-y-4 animate-on-scroll">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            КОМПЛЕКСНОЕ ОБСЛУЖИВАНИЕ ЗДАНИЙ
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Профессиональные услуги по эксплуатации и обслуживанию
            недвижимости любого типа
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary-600">
              Заказать услугу
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
