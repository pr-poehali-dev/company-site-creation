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
      {/* Навигация */}
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
        {/* Hero секция */}
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

        {/* Статистика */}
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

        {/* Озеленение - НОВЫЙ РАЗДЕЛ */}
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
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Озеленение территории"
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

        {/* О компании */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 animate-on-scroll">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  О КОМПАНИИ
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-gray-700 mb-6">
                  УК «Гарант-Партнер» - это команда профессионалов, мы
                  специализируемся на комплексном обслуживании зданий и
                  территорий:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>плановое техническое обслуживание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>текущий и плановый ремонт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>комплексные клининговые услуги</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>содержание территории</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>содержание зеленых насаждений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>благоустройство территории</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>монтаж систем кондиционирования и вентиляции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="text-primary mt-1"
                      size={16}
                    />
                    <span>комплексное содержание ледовых арен</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Среди наших Заказчиков - коммерческие и государственные
                  структуры, которые, выбрав нас в качестве партнера, избавились
                  от необходимости поиска подрядных организаций по различным
                  направлениям деятельности.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-6 animate-on-scroll">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Icon name="Award" />
                      ВЫСОКОЕ КАЧЕСТВО РАБОТ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Наш персонал квалифицирован и имеет опыт практической
                      работы в офисных, торговых, складских и производственных
                      зданиях и сооружениях.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Icon name="Wrench" />
                      СОВРЕМЕННОЕ ОБОРУДОВАНИЕ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Компания владеет хорошей производственной, технической
                      базой и складскими помещениями. При выполнении работ
                      используется оборудование от ведущих производителей.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-2">
              ЧТО МЫ <span className="text-primary">ДЕЛАЕМ</span>?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon="Wrench"
                title="ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ"
                description="Всех инженерных систем здания, которое включает плановое техническое обслуживание, планово-предупредительный, текущий и аварийный ремонт"
                className="animate-on-scroll"
              />

              <ServiceCard
                icon="Trash2"
                title="УБОРКА ЗДАНИЙ И ПРИЛЕГАЮЩЕЙ ТЕРРИТОРИИ"
                description="Обеспечение заданного стандарта чистоты, проведение санитарно-гигиенических мероприятий."
                className="animate-on-scroll"
              />

              <ServiceCard
                icon="LineChart"
                title="МОНИТОРИНГ ТЕХНИЧЕСКОГО СОСТОЯНИЯ ОБЪЕКТА"
                description="Регулярное проведение плановых и регламентных осмотров инженерных систем и оборудования визуально и с использованием средств технической диагностики."
                className="animate-on-scroll"
              />

              <ServiceCard
                icon="Users"
                title="ТЕХНИЧЕСКИЙ КОНСАЛТИНГ"
                description="Консультирование по вопросам модернизации старых и интеграции новых инженерных систем. Представление интересов собственника, арендаторов зданий и помещений перед ресурсоснабжающими организациями."
                className="animate-on-scroll"
              />

              <ServiceCard
                icon="FileText"
                title="НОРМАТИВНЫЕ МЕРОПРИЯТИЯ"
                description="Выполнение требований нормативных актов по эксплуатации, ведение технической документации."
                className="animate-on-scroll"
              />
            </div>
          </div>
        </section>

        {/* CTA-секция */}
        <section
          className="py-16 bg-primary text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14, 88, 136, 0.95), rgba(14, 88, 136, 0.95)), url('https://cdn.poehali.dev/files/ba26b76b-3213-44a9-91b2-1957fbac3826.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 animate-on-scroll">
              ВАС ИНТЕРЕСУЕТ КОМПЛЕКСНОЕ ОБСЛУЖИВАНИЕ ЗДАНИЙ?
              <br />
              ТОГДА ВАМ К НАМ!
            </h2>
            <Button
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary animate-on-scroll"
              size="lg"
            >
              Заказать консультацию
            </Button>
          </div>
        </section>

        {/* Клиенты */}
        <section id="clients" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-2">
              С КЕМ <span className="text-primary">МЫ РАБОТАЕМ</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-12"></div>

            <div className="mb-10">
              <p className="text-gray-700 max-w-3xl">
                Комплексное обслуживание объектов недвижимости с использованием
                профессионального оборудования и материалов, позволяет нам
                качественно выполнять поставленные задачи
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ClientCategory
                title="БИЗНЕС ЦЕНТРЫ"
                imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />

              <ClientCategory
                title="ТОРГОВЫЕ ЦЕНТРЫ"
                imageUrl="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />

              <ClientCategory
                title="СЕТИ МАГАЗИНОВ"
                imageUrl="https://images.unsplash.com/photo-1567449303078-57ad995bd17a?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />

              <ClientCategory
                title="ОФИСЫ И СКЛАДЫ"
                imageUrl="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />

              <ClientCategory
                title="ГОСУДАРСТВЕННЫЕ СТРУКТУРЫ"
                imageUrl="https://images.unsplash.com/photo-1553855426-252586f72a34?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />

              <ClientCategory
                title="ПРОИЗВОДСТВО"
                imageUrl="https://images.unsplash.com/photo-1602620502036-e52519d58d92?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />

              <ClientCategory
                title="ЖИЛЫЕ КОМПЛЕКСЫ"
                imageUrl="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />

              <ClientCategory
                title="СПОРТИВНЫЕ КОМПЛЕКСЫ"
                imageUrl="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3"
                className="animate-on-scroll"
              />
            </div>
          </div>
        </section>

        {/* Контактная форма */}
        <section id="contacts" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  СВЯЗАТЬСЯ С НАМИ
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Оставьте свои контактные данные, и наш менеджер свяжется с
                  вами для обсуждения деталей сотрудничества.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <span>123456, г. Москва, ул. Примерная, д. 123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <span>info@garant-partner.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <span>Пн-Пт: 9:00 - 18:00</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href="#"
                    className="bg-primary text-white p-2 rounded-full"
                  >
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-primary text-white p-2 rounded-full"
                  >
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-primary text-white p-2 rounded-full"
                  >
                    <Icon name="Twitter" size={20} />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 animate-on-scroll">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя
                      </label>
                      <input
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Компания
                      </label>
                      <input
                        id="company"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="ООО 'Компания'"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Электронная почта
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="example@mail.ru"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон
                      </label>
                      <input
                        id="phone"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 border border-gray-300 rounded-md min-h-[100px]"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-600">
                    Отправить запрос
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
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

            <div>
              <h3 className="text-lg font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    О компании
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#clients" className="text-gray-400 hover:text-white">
                    Клиенты
                  </a>
                </li>
                <li>
                  <a
                    href="#contacts"
                    className="text-gray-400 hover:text-white"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-gray-400">
                    123456, г. Москва, ул. Примерная, д. 123
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-gray-400">+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-gray-400">info@garant-partner.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span className="text-gray-400">Пн-Пт: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Гарант Партнер. Все права защищены.</p>
          </div>
        </footer>
    </div>
  );
};

export default Home;