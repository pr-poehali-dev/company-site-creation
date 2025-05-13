import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import GreeningSection from "@/components/sections/GreeningSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ClientCategory from "@/components/ClientCategory";
import Icon from "@/components/ui/icon";

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

        {/* Раздел О нас */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-2">
              О <span className="text-primary">КОМПАНИИ</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  15 ЛЕТ НА РЫНКЕ FACILITY MANAGEMENT
                </h3>
                <p className="text-gray-700 mb-4">
                  Компания «Гарант Партнер» успешно работает на рынке
                  комплексного обслуживания недвижимости более 15 лет. Мы
                  предоставляем полный спектр услуг по управлению и эксплуатации
                  зданий и сооружений коммерческой и жилой недвижимости.
                </p>
                <p className="text-gray-700 mb-6">
                  Наша команда состоит из квалифицированных специалистов с
                  многолетним опытом работы. Мы используем современное
                  оборудование и технологии, что позволяет нам предоставлять
                  услуги высокого качества по оптимальным ценам.
                </p>
                <Button className="animate-on-scroll">Узнать больше</Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg animate-on-scroll">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Офис компании Гарант Партнер"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Раздел Услуги */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-2">
              НАШИ <span className="text-primary">УСЛУГИ</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                icon="Building2"
                title="Техническое обслуживание зданий"
                description="Комплексное обслуживание инженерных систем, планово-предупредительные работы, оперативное устранение аварий."
                className="animate-on-scroll"
              />
              <ServiceCard
                icon="Sparkles"
                title="Профессиональный клининг"
                description="Ежедневная и генеральная уборка помещений, мойка окон и фасадов, уборка территории, вывоз мусора."
                className="animate-on-scroll"
              />
              <ServiceCard
                icon="ShieldCheck"
                title="Обеспечение безопасности"
                description="Организация контрольно-пропускного режима, круглосуточная охрана объектов, установка и обслуживание систем безопасности."
                className="animate-on-scroll"
              />
              <ServiceCard
                icon="Wrench"
                title="Ремонтные работы"
                description="Капитальный и текущий ремонт помещений, отделочные работы, ремонт коммуникаций и инженерных систем."
                className="animate-on-scroll"
              />
              <ServiceCard
                icon="Snow"
                title="Снегоуборка и реагенты"
                description="Механизированная и ручная уборка снега, обработка противогололедными материалами, вывоз снега."
                className="animate-on-scroll"
              />
              <ServiceCard
                icon="LineChart"
                title="Управление эксплуатацией"
                description="Разработка планов обслуживания и бюджетов, контроль качества работ, оптимизация эксплуатационных расходов."
                className="animate-on-scroll"
              />
            </div>
          </div>
        </section>

        <GreeningSection />

        {/* Раздел Клиенты */}
        <section id="clients" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-2">
              НАШИ <span className="text-primary">КЛИЕНТЫ</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Мы работаем с клиентами из разных сфер бизнеса, предлагая
              индивидуальные решения для каждого объекта и задачи.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ClientCategory
                title="Бизнес-центры и офисные здания"
                imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll"
              />
              <ClientCategory
                title="Торговые центры и магазины"
                imageUrl="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll"
              />
              <ClientCategory
                title="Производственные предприятия"
                imageUrl="https://images.unsplash.com/photo-1590502593713-1e2d237e9608?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll"
              />
              <ClientCategory
                title="Медицинские учреждения"
                imageUrl="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll"
              />
              <ClientCategory
                title="Жилые комплексы"
                imageUrl="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll"
              />
              <ClientCategory
                title="Государственные учреждения"
                imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll"
              />
            </div>
          </div>
        </section>

        {/* Раздел Контакты */}
        <section id="contacts" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-2">
              СВЯЖИТЕСЬ <span className="text-blue-400">С НАМИ</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h3 className="text-xl font-semibold mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium">Адрес:</p>
                      <p>г. Москва, ул. Примерная, д. 123, офис 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium">Телефон:</p>
                      <p>+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>info@garantpartner.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium">Режим работы:</p>
                      <p>Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Мы в социальных сетях:</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <Icon name="Facebook" size={24} />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <Icon name="Instagram" size={24} />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <Icon name="Twitter" size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll space-y-6">
                <h3 className="text-xl font-semibold mb-6">
                  Отправить сообщение
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Отправить сообщение
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
