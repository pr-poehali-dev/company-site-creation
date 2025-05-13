
import React from "react";
import StatCard from "@/components/StatCard";

const StatsSection = () => {
  return (
    <section className="py-8 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <StatCard number="450 000" text="обслуживаемых территорий" />
          <StatCard number="10 000" text="оказанных услуг" />
          <StatCard
            number="6+"
            text="опыт в сфере технического обслуживания и профессионального клининга"
          />
          <StatCard number="670" text="клиентов" />
          <StatCard number="130" text="сотрудников" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
