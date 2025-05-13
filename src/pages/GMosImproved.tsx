
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GMosImproved = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Шапка сайта */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 rounded-md w-10 h-10 flex items-center justify-center">
              <Icon name="Leaf" className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-emerald-700 text-xl">ГАРАНТ-МОС</span>
              <span className="text-xs text-slate-500">Озеленение и благоустройство</span>
            </div>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium text-emerald-800 hover:text-emerald-600 transition">Главная</a>
            <a href="#services" className="font-medium text-slate-700 hover:text-emerald-600 transition">Услуги</a>
            <a href="#works" className="font-medium text-slate-700 hover:text-emerald-600 transition">Наши работы</a>
            <a href="#about" className="font-medium text-slate-700 hover:text-emerald-600 transition">О компании</a>
            <a href="#contacts" className="font-medium text-slate-700 hover:text-emerald-600 transition">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="text-right">
                <p className="font-medium text-emerald-700">+7 (495) 123-45-67</p>
                <p className="text-xs text-slate-500">Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
            
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Связаться
            </Button>
            
            {/* Мобильное меню */}
            <button className="md:hidden text-slate-700">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Главный баннер */}
        <section 
          className="relative py-24 bg-cover bg-center text-white"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(6, 95, 70, 0.85), rgba(6, 95, 70, 0.6)), url('https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl animate-on-scroll">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Профессиональное озеленение и благоустройство
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-emerald-100">
                Создаем зеленые пространства, которые радуют глаз и улучшают качество жизни
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
          
          {/* Зеленая волна внизу */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)"
          }}></div>
        </section>

        {/* Преимущества */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Мы предлагаем комплексное озеленение и благоустройство территорий с гарантией качества и долговечности
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-sm animate-on-scroll">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <Icon name="FileCheck" className="text-emerald-600 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-emerald-800">Сертифицированные специалисты</h3>
                    <p className="text-slate-600">
                      Наши ландшафтные дизайнеры и садовники имеют профильное образование и большой опыт работы
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm animate-on-scroll">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <Icon name="Leaf" className="text-emerald-600 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-emerald-800">Качественные материалы</h3>
                    <p className="text-slate-600">
                      Используем только здоровые растения и сертифицированные материалы для озеленения
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm animate-on-scroll">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <Icon name="ShieldCheck" className="text-emerald-600 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-emerald-800">Гарантия на работы</h3>
                    <p className="text-slate-600">
                      Предоставляем гарантию на все выполненные работы и обеспечиваем последующее обслуживание
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Услуги компании */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Предлагаем полный спектр услуг по озеленению и благоустройству для частных и коммерческих объектов
              </p>
            </div>
            
            <Tabs defaultValue="landscaping" className="animate-on-scroll">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="landscaping">Ландшафтный дизайн</TabsTrigger>
                <TabsTrigger value="planting">Озеленение</TabsTrigger>
                <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
                <TabsTrigger value="improvement">Благоустройство</TabsTrigger>
              </TabsList>
              
              <TabsContent value="landscaping" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1586280268958-9483002d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Ландшафтный дизайн" 
                      className="rounded-lg shadow-md object-cover h-80 w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Ландшафтный дизайн</h3>
                    <p className="text-slate-600 mb-6">
                      Создаем гармоничные ландшафтные композиции с учетом особенностей участка, климатических условий и пожеланий клиента. Проектирование включает разработку концепции, подбор растений и материалов.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Разработка концепции ландшафтного дизайна</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>3D-визуализация проекта</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Подбор растений с учетом климатических условий</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Разработка системы автоматического полива</span>
                      </li>
                    </ul>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 w-fit">
                      Подробнее об услуге
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="planting" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1589923188900-85devf40ad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Озеленение" 
                      className="rounded-lg shadow-md object-cover h-80 w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Озеленение территорий</h3>
                    <p className="text-slate-600 mb-6">
                      Профессиональное озеленение территорий различного назначения: городских парков, частных домов, коммерческих объектов. Выполняем работы по посадке деревьев, кустарников, создания газонов.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Посадка деревьев и кустарников</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Создание цветников и клумб</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Устройство и уход за газонами</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Вертикальное озеленение</span>
                      </li>
                    </ul>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 w-fit">
                      Подробнее об услуге
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="maintenance" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1595828045640-9e6ab13b90dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Обслуживание" 
                      className="rounded-lg shadow-md object-cover h-80 w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Обслуживание зеленых насаждений</h3>
                    <p className="text-slate-600 mb-6">
                      Регулярный уход за зелеными насаждениями гарантирует их здоровье и привлекательный вид. Мы предлагаем комплексное обслуживание садов, парков и других озелененных территорий.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Стрижка газонов и живых изгородей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Обрезка деревьев и кустарников</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Полив и внесение удобрений</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Защита растений от болезней и вредителей</span>
                      </li>
                    </ul>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 w-fit">
                      Подробнее об услуге
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="improvement" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1571210053118-21cfca8fd2ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Благоустройство" 
                      className="rounded-lg shadow-md object-cover h-80 w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Благоустройство территорий</h3>
                    <p className="text-slate-600 mb-6">
                      Комплексное благоустройство территорий включает в себя создание дорожек, площадок, установку малых архитектурных форм и организацию освещения.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Устройство дорожек и площадок</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Установка малых архитектурных форм</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Организация освещения территории</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={16} />
                        <span>Создание водных объектов</span>
                      </li>
                    </ul>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 w-fit">
                      Подробнее об услуге
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Наши работы */}
        <section id="works" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Наши работы</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                За годы работы мы реализовали множество проектов по озеленению и благоустройству различных объектов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              <div className="overflow-hidden rounded-lg shadow-md group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533551068315-f4f105707db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Озеленение парка" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold mb-1 text-emerald-800">Озеленение городского парка</h3>
                  <p className="text-slate-600 text-sm">г. Москва, 2022 г.</p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-md group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Благоустройство двора" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold mb-1 text-emerald-800">Благоустройство жилого комплекса</h3>
                  <p className="text-slate-600 text-sm">г. Москва, 2021 г.</p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-md group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Ландшафтный дизайн" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold mb-1 text-emerald-800">Ландшафтный дизайн частной территории</h3>
                  <p className="text-slate-600 text-sm">Московская область, 2023 г.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Посмотреть все работы
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* О компании */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-6 text-emerald-800">О КОМПАНИИ</h2>
                <p className="text-slate-600 mb-6">
                  Компания «ГАРАНТ-МОС» специализируется на комплексном озеленении и благоустройстве территорий в Москве и Московской области. Мы работаем с 2005 года и за это время реализовали более 500 проектов различной сложности.
                </p>
                <p className="text-slate-600 mb-6">
                  Наша команда состоит из квалифицированных специалистов с профильным образованием и большим опытом работы. Мы используем только качественные материалы и растения, что позволяет нам гарантировать долговечность и эстетичность созданных нами ландшафтов.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-slate-700">Более 15 лет опыта работы в сфере озеленения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-slate-700">Команда квалифицированных специалистов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-slate-700">Официальный договор с гарантией на все работы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-emerald-600" size={16} />
                    </div>
                    <span className="text-slate-700">Собственный питомник растений</span>
                  </li>
                </ul>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Подробнее о компании
                </Button>
              </div>
              
              <div className="relative animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Наша команда" 
                  className="rounded-lg shadow-lg object-cover h-full w-full max-h-[500px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Icon name="Trophy" className="text-emerald-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-emerald-800 text-lg">500+</p>
                      <p className="text-slate-600 text-sm">реализованных проектов</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Icon name="Users" className="text-emerald-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-emerald-800 text-lg">100+</p>
                      <p className="text-slate-600 text-sm">довольных клиентов</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Форма контактов */}
        <section id="contacts" className="py-20 bg-emerald-800 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
                <p className="text-emerald-100 mb-8">
                  Готовы обсудить ваш проект? Заполните форму, и наш специалист свяжется с вами в ближайшее время для консультации и расчета стоимости работ.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700 p-3 rounded-lg mt-1">
                      <Icon name="MapPin" className="text-emerald-200" />
                    </div>
                    <div>
                      <p className="font-medium text-emerald-200 mb-1">Адрес офиса:</p>
                      <p>г. Москва, ул. Зеленая, д. 123, офис 45</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700 p-3 rounded-lg mt-1">
                      <Icon name="Phone" className="text-emerald-200" />
                    </div>
                    <div>
                      <p className="font-medium text-emerald-200 mb-1">Телефон:</p>
                      <p>+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700 p-3 rounded-lg mt-1">
                      <Icon name="Mail" className="text-emerald-200" />
                    </div>
                    <div>
                      <p className="font-medium text-emerald-200 mb-1">Email:</p>
                      <p>info@garant-mos.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700 p-3 rounded-lg mt-1">
                      <Icon name="Clock" className="text-emerald-200" />
                    </div>
                    <div>
                      <p className="font-medium text-emerald-200 mb-1">Режим работы:</p>
                      <p>Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="bg-white p-8 rounded-lg shadow-lg text-slate-800">
                  <h3 className="text-xl font-semibold mb-6 text-emerald-800">Заявка на консультацию</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-600">Ваше имя</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Иван Иванов"
                          className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-slate-600">Телефон</label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+7 (___) ___-__-__"
                          className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-600">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="example@mail.ru"
                        className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1 text-slate-600">Интересующая услуга</label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="" disabled selected>Выберите услугу</option>
                        <option value="design">Ландшафтный дизайн</option>
                        <option value="planting">Озеленение</option>
                        <option value="maintenance">Обслуживание зеленых насаждений</option>
                        <option value="improvement">Благоустройство территории</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-600">Сообщение</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Опишите ваш проект или задайте вопрос"
                        className="w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                      />
                      <label htmlFor="consent" className="text-xs text-slate-500">
                        Я согласен на обработку персональных данных в соответствии с политикой конфиденциальности
                      </label>
                    </div>
                    
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Футер сайта */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-emerald-600 rounded-md w-10 h-10 flex items-center justify-center">
                  <Icon name="Leaf" className="text-white w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-emerald-400 text-xl">ГАРАНТ-МОС</span>
                  <span className="text-xs text-gray-400">Озеленение и благоустройство</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Профессиональное озеленение и благоустройство территорий в Москве и Московской области. Создаем комфортные и эстетичные пространства с заботой о природе.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                  <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                  <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                  <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">Услуги</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Ландшафтный дизайн</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Озеленение территорий</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Уход за растениями</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Благоустройство</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Автоматический полив</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">Информация</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Портфолио</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Цены на услуги</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Статьи и советы</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 ГАРАНТ-МОС. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 hover:text-white">Политика конфиденциальности</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white">Пользовательское соглашение</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white">Карта сайта</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GMosImproved;
