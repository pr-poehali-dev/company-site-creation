
import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Гарант Партнер. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
