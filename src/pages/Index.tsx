import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
                ОБСЛУЖИВАНИЕ ЗДАНИЙ
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

        {/* Блок с ключевыми преимуществами */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-blue-700 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
                <p className="text-gray-600">
                  Надежный партнер с многолетней историей успешных проектов
                </p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-blue-700 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  100+ специалистов
                </h3>
                <p className="text-gray-600">
                  Команда профессионалов для решения любых задач обслуживания
                </p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" className="text-blue-700 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">10000+ услуг</h3>
                <p className="text-gray-600">
                  Доверьте нам заботу о вашей недвижимости
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Раздел О нас с фоновым изображением и контентом по макету */}
        <section id="about" className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 gap-12">
              {/* Заголовок и большое изображение */}
              <div className="relative w-full">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/3a39ce4c-959f-47f4-b379-1b07ce645f28.jpg"
                    alt="Техническое обслуживание инженерных систем"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Основная информация */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Левая колонка */}
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold text-blue-700 mb-6">
                    О КОМПАНИИ
                  </h2>
                  <p className="text-gray-700 mb-6">
                    УК «Гарант-Партнер» - это команда профессионалов, мы
                    специализируемся на комплексном обслуживании зданий и
                    территорий:
                  </p>

                  <ul className="space-y-2 mb-8 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>плановое техническое обслуживание</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>текущий и плановый ремонт</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>комплексные клининговые услуги</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>содержание территории</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>содержание зеленых насаждений</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>благоустройство территории</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>монтаж систем кондиционирования и вентиляции</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>комплексное содержание ледовых арен</span>
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-6">
                    Среди наших Заказчиков - коммерческие и государственные
                    структуры, которые, выбрав нас в качестве партнера,
                    избавились от необходимости поиска подрядных организаций по
                    различным направлениям деятельности.
                  </p>
                </div>

                {/* Средняя и правая колонки */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Преимущество 1 */}
                    <div className="flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <img
                            src="https://cdn.poehali.dev/files/award-icon.svg"
                            alt="Высокое качество работ"
                            className="w-16 h-16 text-blue-600"
                            onError={(e) => {
                              // Если изображение не загрузилось, показываем запасной вариант
                              e.currentTarget.src =
                                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2'><circle cx='12' cy='8' r='7'/><polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'/></svg>";
                            }}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-blue-700">
                          ВЫСОКОЕ КАЧЕСТВО РАБОТ
                        </h3>
                      </div>
                      <p className="text-gray-700">
                        Наш персонал квалифицирован и имеет опыт практической
                        работы в офисных, торговых, складских и производственных
                        зданиях и сооружениях.
                      </p>
                    </div>

                    {/* Преимущество 2 */}
                    <div className="flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <img
                            src="https://cdn.poehali.dev/files/truck-icon.svg"
                            alt="Современное оборудование"
                            className="w-16 h-16 text-blue-600"
                            onError={(e) => {
                              // Если изображение не загрузилось, показываем запасной вариант
                              e.currentTarget.src =
                                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2'><path d='M3 3h14v10H3z'/><path d='M17 13h6v6h-6z'/><path d='M10 17h4'/><path d='M6 17h.01'/><path d='M3 13h14'/><circle cx='20' cy='17' r='1'/><circle cx='17' cy='17' r='1'/></svg>";
                            }}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-blue-700">
                          СОВРЕМЕННОЕ ОБОРУДОВАНИЕ
                        </h3>
                      </div>
                      <p className="text-gray-700">
                        Компания владеет хорошей производственной, технической
                        базой и складскими помещениями. При выполнении работ
                        используется оборудование от ведущих производителей.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Раздел Услуги с градиентом и включенной секцией озеленения */}
        <section
          id="services"
          className="py-20 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 inline-block">
                НАШИ <span className="text-blue-700">УСЛУГИ</span>
              </h2>
              <div className="h-1 w-20 bg-blue-700 mx-auto mt-2" />
              <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                Полный комплекс решений для эффективного управления и
                обслуживания объектов недвижимости
              </p>
            </div>

            {/* Основные услуги */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <ServiceCard
                icon="Building2"
                title="Техническое обслуживание зданий"
                description="Комплексное обслуживание инженерных систем, планово-предупредительные работы, оперативное устранение аварий."
                className="animate-on-scroll hover:-translate-y-2 transition-transform duration-300"
              />
              <ServiceCard
                icon="Sparkles"
                title="Профессиональный клининг"
                description="Ежедневная и генеральная уборка помещений, мойка окон и фасадов, уборка территории, вывоз мусора."
                className="animate-on-scroll hover:-translate-y-2 transition-transform duration-300"
              />
              <ServiceCard
                icon="ShieldCheck"
                title="Обеспечение безопасности"
                description="Организация контрольно-пропускного режима, круглосуточная охрана объектов, установка и обслуживание систем безопасности."
                className="animate-on-scroll hover:-translate-y-2 transition-transform duration-300"
              />
              <ServiceCard
                icon="Wrench"
                title="Ремонтные работы"
                description="Капитальный и текущий ремонт помещений, отделочные работы, ремонт коммуникаций и инженерных систем."
                className="animate-on-scroll hover:-translate-y-2 transition-transform duration-300"
              />
              <ServiceCard
                icon="Snow"
                title="Снегоуборка и реагенты"
                description="Механизированная и ручная уборка снега, обработка противогололедными материалами, вывоз снега."
                className="animate-on-scroll hover:-translate-y-2 transition-transform duration-300"
              />
              <ServiceCard
                icon="LineChart"
                title="Управление эксплуатацией"
                description="Разработка планов обслуживания и бюджетов, контроль качества работ, оптимизация эксплуатационных расходов."
                className="animate-on-scroll hover:-translate-y-2 transition-transform duration-300"
              />
            </div>

            {/* Секция Озеленение в составе услуг */}
            <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 animate-on-scroll">
                  <h3 className="text-2xl font-bold text-green-600 mb-6">
                    ПРОФЕССИОНАЛЬНОЕ ОЗЕЛЕНЕНИЕ
                  </h3>
                  <div className="rounded-xl overflow-hidden mb-6 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=800&q=80"
                      alt="Городское озеленение территории"
                      className="w-full h-[350px] object-cover transform transition-transform hover:scale-105 duration-700"
                    />
                  </div>
                  <p className="text-gray-700 mb-6">
                    Компания «Гарант-Партнер» предлагает комплексные услуги по
                    озеленению и благоустройству территорий вокруг
                    бизнес-центров, офисных зданий, торговых комплексов и других
                    объектов недвижимости. Наши специалисты разрабатывают
                    индивидуальные проекты озеленения с учетом особенностей
                    территории и пожеланий заказчика.
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
                  <div className="rounded-xl bg-green-50 shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
                        <Icon
                          name="Flower2"
                          className="text-green-600 h-8 w-8"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-700 text-lg mb-2">
                          ЛАНДШАФТНЫЙ ДИЗАЙН
                        </h3>
                        <p className="text-gray-700">
                          Разработка проекта озеленения территории с учетом
                          особенностей местности, климата и функциональных
                          требований.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-green-50 shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
                        <Icon name="Trees" className="text-green-600 h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-700 text-lg mb-2">
                          ПОСАДКА И УХОД ЗА РАСТЕНИЯМИ
                        </h3>
                        <p className="text-gray-700">
                          Подбор, посадка и обслуживание зеленых насаждений:
                          деревьев, кустарников, многолетних и однолетних
                          растений.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-green-50 shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
                        <Icon
                          name="Sprout"
                          className="text-green-600 h-8 w-8"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-700 text-lg mb-2">
                          УСТРОЙСТВО И УХОД ЗА ГАЗОНАМИ
                        </h3>
                        <p className="text-gray-700">
                          Создание и обслуживание газонов различных типов:
                          партерных, спортивных, мавританских и универсальных.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full py-3 mt-2">
                    Заказать услуги озеленения
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Раздел Клиенты с изображениями */}
        <section id="clients" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 inline-block">
                НАШИ <span className="text-blue-700">КЛИЕНТЫ</span>
              </h2>
              <div className="h-1 w-20 bg-blue-700 mx-auto mt-2" />
              <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                Мы работаем с клиентами из разных сфер бизнеса, предлагая
                индивидуальные решения для каждого объекта и задачи
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ClientCategory
                title="Бизнес-центры и офисные здания"
                imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll rounded-xl h-48"
              />
              <ClientCategory
                title="Торговые центры и магазины"
                imageUrl="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll rounded-xl h-48"
              />
              <ClientCategory
                title="Производственные предприятия"
                imageUrl="https://images.unsplash.com/photo-1590502593713-1e2d237e9608?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll rounded-xl h-48"
              />
              <ClientCategory
                title="Медицинские учреждения"
                imageUrl="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll rounded-xl h-48"
              />
              <ClientCategory
                title="Жилые комплексы"
                imageUrl="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll rounded-xl h-48"
              />
              <ClientCategory
                title="Государственные учреждения"
                imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="animate-on-scroll rounded-xl h-48"
              />
            </div>
          </div>
        </section>

        {/* Раздел Контакты с картой */}
        <section
          id="contacts"
          className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 inline-block">
                СВЯЖИТЕСЬ <span className="text-blue-400">С НАМИ</span>
              </h2>
              <div className="h-1 w-20 bg-blue-400 mx-auto mt-2" />
              <p className="text-gray-300 max-w-3xl mx-auto mt-4">
                Мы всегда готовы ответить на ваши вопросы и предложить
                оптимальное решение для вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 text-blue-300">
                    Контактная информация
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-900/50 p-3 rounded-lg">
                        <Icon name="MapPin" className="text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-200 mb-1">Адрес:</p>
                        <p>г. Москва, ул. Примерная, д. 123, офис 456</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-900/50 p-3 rounded-lg">
                        <Icon name="Phone" className="text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-200 mb-1">
                          Телефон:
                        </p>
                        <p>+7 (495) 123-45-67</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-900/50 p-3 rounded-lg">
                        <Icon name="Mail" className="text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-200 mb-1">Email:</p>
                        <p>info@garantpartner.ru</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-900/50 p-3 rounded-lg">
                        <Icon name="Clock" className="text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-200 mb-1">
                          Режим работы:
                        </p>
                        <p>Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="font-medium mb-3 text-blue-200">
                      Мы в социальных сетях:
                    </h4>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="bg-blue-900/50 p-3-rounded-lg text-blue-400 hover:bg-blue-900 transition-colors"
                      >
                        <Icon name="Facebook" size={20} />
                      </a>
                      <a
                        href="#"
                        className="bg-blue-900/50 p-3-rounded-lg text-blue-400 hover:bg-blue-900 transition-colors"
                      >
                        <Icon name="Instagram" size={20} />
                      </a>
                      <a
                        href="#"
                        className="bg-blue-900/50 p-3-rounded-lg text-blue-400 hover:bg-blue-900 transition-colors"
                      >
                        <Icon name="Twitter" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll space-y-6">
                <div className="bg-gray-800 p-8-rounded-xl shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 text-blue-300">
                    Отправить сообщение
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1 text-blue-200"
                        >
                          Ваше имя
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-3-rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-1 text-blue-200"
                        >
                          Телефон
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full p-3-rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1 text-blue-200"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3-rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1 text-blue-200"
                      >
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full p-3-rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                      Отправить сообщение
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Свяжитесь с нами сегодня, чтобы обсудить ваши потребности и
              получить индивидуальное предложение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8"
              >
                Заказать звонок
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
