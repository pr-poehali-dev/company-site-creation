import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ServiceCard from "@/components/ServiceCard";
import GreenServiceCard from "@/components/GreenServiceCard";
import ClientCategory from "@/components/ClientCategory";
import StatCard from "@/components/StatCard";

const Home = () => {
  // Функция для анимации элементов при скролле
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="text-primary w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" />
                <path d="M9 4v16" />
                <path d="M9 8l6 -4" />
                <path d="M9 12l6 -4" />
                <path d="M9 16l6 -4" />
                <path d="M9 20l6 -4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">
                ГАРАНТ ПАРТНЕР
              </span>
              <span className="text-xs text-gray-500">
                FACILITY & SERVICES MANAGEMENT
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Главная
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              О компании
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Услуги
            </a>
            <a
              href="#clients"
              className="text-sm font-medium hover:text-primary"
            >
              Клиенты
            </a>
            <a
              href="#contacts"
              className="text-sm font-medium hover:text-primary"
            >
              Контакты
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Обратный звонок
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-600">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
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

        <section id="greening" className="py-16 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-2">
              ПРОФЕССИОНАЛЬНОЕ{" "}
              <span className="text-green-600">ОЗЕЛЕНЕНИЕ</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 animate-on-scroll">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1558441440-d4111d18d48f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

        {/* Остальной код без изменений ... */}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-white w-10 h-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="4" width="16" height="16" />
                    <path d="M9 4v16" />
                    <path d="M9 8l6 -4" />
                    <path d="M9 12l6 -4" />
                    <path d="M9 16l6 -4" />
                    <path d="M9 20l6 -4" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">
                    ГАРАНТ ПАРТНЕР
                  </span>
                  <span className="text-xs text-gray-400">
                    FACILITY & SERVICES MANAGEMENT
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Комплексное обслуживание зданий и сооружений. Профессиональный
                подход к управлению недвижимостью.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>

            {/* Навигация и контакты */}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Гарант Партнер. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
