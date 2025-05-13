
import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import GreenServiceCard from "@/components/GreenServiceCard";

const GreeningSection = () => {
  return (
    <section id="greening" className="py-16 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-2">
          ПРОФЕССИОНАЛЬНОЕ <span className="text-green-600">ОЗЕЛЕНЕНИЕ</span>
        </h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 animate-on-scroll">
            <div className="rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1567564967039-a5a98305211c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Городское озеленение территории"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <p className="text-gray-700 mb-6">
              Компания «Гарант-Партнер» предлагает комплексные услуги по
              озеленению и благоустройству территорий вокруг бизнес-центров,
              офисных зданий, торговых комплексов и других объектов
              недвижимости. Наши специалисты разрабатывают индивидуальные
              проекты озеленения с учетом особенностей территории и
              пожеланий заказчика.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Icon
                  name="Check"
                  className="text-green-600 mt-1"
                  size={16}
                />
                <span>Проектирование ландшафта и озеленения</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  name="Check"
                  className="text-green-600 mt-1"
                  size={16}
                />
                <span>Подбор и посадка растений</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  name="Check"
                  className="text-green-600 mt-1"
                  size={16}
                />
                <span>Создание и обслуживание газонов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  name="Check"
                  className="text-green-600 mt-1"
                  size={16}
                />
                <span>Сезонное обслуживание растений</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col gap-6 animate-on-scroll">
            <GreenServiceCard
              icon="Flower2"
              title="ЛАНДШАФТНЫЙ ДИЗАЙН"
              description="Разработка проекта озеленения территории с учетом особенностей местности, климата и функциональных требований."
              className="animate-on-scroll"
            />

            <GreenServiceCard
              icon="Trees"
              title="ПОСАДКА И УХОД ЗА РАСТЕНИЯМИ"
              description="Подбор, посадка и обслуживание зеленых насаждений: деревьев, кустарников, многолетних и однолетних растений."
              className="animate-on-scroll"
            />

            <GreenServiceCard
              icon="Sprout"
              title="УСТРОЙСТВО И УХОД ЗА ГАЗОНАМИ"
              description="Создание и обслуживание газонов различных типов: партерных, спортивных, мавританских и универсальных."
              className="animate-on-scroll"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white animate-on-scroll">
            Заказать услуги озеленения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GreeningSection;
