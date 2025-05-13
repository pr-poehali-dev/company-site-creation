
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;
