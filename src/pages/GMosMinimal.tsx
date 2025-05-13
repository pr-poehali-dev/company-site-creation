
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GMosMinimal = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Шапка сайта */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 rounded-sm w-8 h-8 flex items-center justify-center">
              <Icon name="Leaf" className="text-white w-5 h-5" />
            </div>
            <span className="font-medium text-emerald-700 text-lg">ГАРАНТ-МОС</span>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-emerald-800">Главная</a>
            <a href="#services" className="text-sm text-gray-600">Услуги</a>
            <a href="#portfolio" className="text-sm text-gray-600">Портфолио</a>
            <a href="#about" className="text-sm text-gray-600">О компании</a>
            <a href="#contacts" className="text-sm text-gray-600">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <p className="hidden md:block text-sm text-emerald-700">+7 (495) 123-45-67</p>
            
            <Button variant="outline" size="sm" className="hidden md:flex border-emerald-200 text-emerald-700">
              Связаться
            </Button>
            
            {/* Мобильное меню */}
            <button className="md:hidden text-gray-700">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Главный баннер */}
        <section 
          className="relative py-20 bg-emerald-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-xl animate-on-scroll">
              <h1 className="text-3xl md:text-4xl font-medium mb-4 text-gray-800">
                Озеленение и благоустройство территорий
              </h1>
              <p className="text-base mb-6 text-gray-600">
                Профессиональные услуги по созданию и обслуживанию зеленых пространств
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </section>

        {/* Услуги компании */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8 text-gray-800">Наши услуги</h2>
            
            <Tabs defaultValue="landscaping" className="animate-on-scroll">
              <TabsList className="mb-6 bg-gray-50">
                <TabsTrigger value="landscaping">Ландшафтный дизайн</TabsTrigger>
                <TabsTrigger value="planting">Озеленение</TabsTrigger>
                <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
              </TabsList>
              
              <TabsContent value="landscaping">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Ландшафтный дизайн" 
                      className="rounded-md h-64 w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-emerald-800">Ландшафтный дизайн</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Создаем гармоничные ландшафтные композиции с учетом особенностей участка и пожеланий клиента.
                    </p>
                    <ul className="space-y-2 mb-4 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Разработка концепции ландшафтного дизайна</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">3D-визуализация проекта</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Подбор растений с учетом климатических условий</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="planting">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1589923188900-85devf40ad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Озеленение" 
                      className="rounded-md h-64 w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-emerald-800">Озеленение территорий</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Профессиональное озеленение территорий различного назначения для частных и коммерческих объектов.
                    </p>
                    <ul className="space-y-2 mb-4 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Посадка деревьев и кустарников</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Создание цветников и клумб</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Устройство и уход за газонами</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="maintenance">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1595828045640-9e6ab13b90dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Обслуживание" 
                      className="rounded-md h-64 w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-emerald-800">Обслуживание зеленых насаждений</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Регулярный уход за зелеными насаждениями для поддержания их здоровья и привлекательного вида.
                    </p>
                    <ul className="space-y-2 mb-4 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Стрижка газонов и живых изгородей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Обрезка деревьев и кустарников</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                        <span className="text-gray-600">Полив и внесение удобрений</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Наши работы */}
        <section id="portfolio" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8 text-gray-800">Наши работы</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-on-scroll">
              <div className="overflow-hidden rounded-md group">
                <img 
                  src="https://images.unsplash.com/photo-1533551068315-f4f105707db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Озеленение парка" 
                  className="w-full h-56 object-cover"
                />
                <div className="py-2">
                  <h3 className="text-sm font-medium text-gray-800">Озеленение городского парка</h3>
                  <p className="text-xs text-gray-500">г. Москва, 2022 г.</p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-md group">
                <img 
                  src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Благоустройство двора" 
                  className="w-full h-56 object-cover"
                />
                <div className="py-2">
                  <h3 className="text-sm font-medium text-gray-800">Благоустройство жилого комплекса</h3>
                  <p className="text-xs text-gray-500">г. Москва, 2021 г.</p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-md group">
                <img 
                  src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ландшафтный дизайн" 
                  className="w-full h-56 object-cover"
                />
                <div className="py-2">
                  <h3 className="text-sm font-medium text-gray-800">Ландшафтный дизайн частной территории</h3>
                  <p className="text-xs text-gray-500">Московская область, 2023 г.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* О компании */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-medium mb-4 text-gray-800">О компании</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Компания «ГАРАНТ-МОС» специализируется на комплексном озеленении и благоустройстве территорий в Москве и Московской области. Мы реализовали более 500 проектов различной сложности.
                </p>
                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                    <span className="text-gray-600">Более 15 лет опыта работы в сфере озеленения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                    <span className="text-gray-600">Команда квалифицированных специалистов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-emerald-600 mt-1 flex-shrink-0" size={14} />
                    <span className="text-gray-600">Собственный питомник растений</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Наша команда" 
                  className="rounded-md object-cover h-full w-full max-h-[300px]"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Контакты */}
        <section id="contacts" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8 text-gray-800">Контакты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-on-scroll">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-emerald-600 mt-1" size={16} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Адрес офиса:</p>
                      <p className="text-sm text-gray-600">г. Москва, ул. Зеленая, д. 123, офис 45</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-emerald-600 mt-1" size={16} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Телефон:</p>
                      <p className="text-sm text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-emerald-600 mt-1" size={16} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Email:</p>
                      <p className="text-sm text-gray-600">info@garant-mos.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-emerald-600 mt-1" size={16} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Режим работы:</p>
                      <p className="text-sm text-gray-600">Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Обратная связь</h3>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Ваше имя"
                          className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Телефон"
                          className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Сообщение"
                        className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Отправить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Футер сайта */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-emerald-600 rounded-sm w-6 h-6 flex items-center justify-center">
                  <Icon name="Leaf" className="text-white w-4 h-4" />
                </div>
                <span className="font-medium text-sm text-emerald-400">ГАРАНТ-МОС</span>
              </div>
              <p className="text-gray-400 text-xs mb-2">
                Озеленение и благоустройство территорий в Москве и Московской области.
              </p>
            </div>
            
            <div className="md:text-right">
              <p className="text-gray-400 text-xs">
                © 2024 ГАРАНТ-МОС. Все права защищены.
              </p>
              <p className="text-gray-400 text-xs">
                г. Москва, ул. Зеленая, д. 123, офис 45 | +7 (495) 123-45-67
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GMosMinimal;
