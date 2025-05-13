import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"} transition-all duration-300`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="text-blue-700 w-10 h-10">
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
            <span className="text-xl font-bold text-blue-700">
              ГАРАНТ ПАРТНЕР
            </span>
            <span className="text-xs text-gray-500">
              FACILITY & SERVICES MANAGEMENT
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            О компании
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#clients"
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Клиенты
          </a>
          <a
            href="#contacts"
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-blue-300 text-blue-700 hover:bg-blue-50"
          >
            <Icon name="Phone" className="mr-1" size={16} />
            Обратный звонок
          </Button>
          <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
            Связаться с нами
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <a
              href="#"
              className="text-sm font-medium py-2 text-gray-700 hover:text-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-sm font-medium py-2 text-gray-700 hover:text-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О компании
            </a>
            <a
              href="#services"
              className="text-sm font-medium py-2 text-gray-700 hover:text-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a
              href="#clients"
              className="text-sm font-medium py-2 text-gray-700 hover:text-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Клиенты
            </a>
            <a
              href="#contacts"
              className="text-sm font-medium py-2 text-gray-700 hover:text-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
