import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-400 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 4v16" />
                  <path d="M9 8l6 -4" />
                  <path d="M9 12l6 -4" />
                  <path d="M9 16l6 -4" />
                  <path d="M9 20l6 -4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  ГАРАНТ ПАРТНЕР
                </span>
                <span className="text-xs text-gray-400">
                  FACILITY & SERVICES MANAGEMENT
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Комплексное обслуживание зданий и сооружений. Профессиональный
              подход к управлению недвижимостью и техническому обслуживанию
              объектов любой сложности.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Профессиональный клининг
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Обеспечение безопасности
                </a>
              </li>
              <li>
                <a
                  href="#greening"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Озеленение
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Снегоуборка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="text-blue-400 mt-1" size={18} />
                <span className="text-gray-400">
                  г. Москва, ул. Примерная, д. 123, офис 456
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Phone" className="text-blue-400 mt-1" size={18} />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" className="text-blue-400 mt-1" size={18} />
                <span className="text-gray-400">info@garantpartner.ru</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" className="text-blue-400 mt-1" size={18} />
                <span className="text-gray-400">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Гарант Партнер. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Карта сайта
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
