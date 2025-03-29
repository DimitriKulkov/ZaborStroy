import { useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { useMediaQuery } from "@/hooks/use-mobile";

interface NavbarProps {
  onOpenCallback: () => void;
}

export function Navbar({ onOpenCallback }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo textColor="primary" />
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <div className="relative group">
            <button className="hover:text-primary transition-colors flex items-center">
              Этапы работ <span className="ml-1">▼</span>
            </button>
            <div className="absolute z-50 left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 invisible group-hover:visible">
              <a href="#installation-steps" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">Установка заборов</a>
              <a href="#awning-installation-steps" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">Установка навесов</a>
              <a href="#gate-installation-steps" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">Установка ворот</a>
            </div>
          </div>
          <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Наши работы</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        
        <div className="hidden md:block">
          <div className="flex flex-col items-end">
            <a href="#contact" className="font-bold text-primary hover:underline">+7 (895) 372-05-42</a>
            <button 
              className="text-sm text-primary hover:underline"
              onClick={onOpenCallback}
            >
              Заказать звонок
            </button>
          </div>
        </div>
        
        <button 
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 border-t border-[#D3D3D3]">
          <div className="flex flex-col space-y-3">
            <a href="#services" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Услуги</a>
            <div className="py-2">
              <div className="font-medium">Этапы работ:</div>
              <div className="pl-4 mt-1 border-l-2 border-primary/20">
                <a 
                  href="#installation-steps" 
                  className="block py-1.5 hover:text-primary transition-colors" 
                  onClick={closeMobileMenu}
                >
                  Установка заборов
                </a>
                <a 
                  href="#awning-installation-steps" 
                  className="block py-1.5 hover:text-primary transition-colors" 
                  onClick={closeMobileMenu}
                >
                  Установка навесов
                </a>
                <a 
                  href="#gate-installation-steps" 
                  className="block py-1.5 hover:text-primary transition-colors" 
                  onClick={closeMobileMenu}
                >
                  Установка ворот
                </a>
              </div>
            </div>
            <a href="#prices" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Цены</a>
            <a href="#portfolio" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Наши работы</a>
            <a href="#reviews" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Отзывы</a>
            <a href="#faq" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>FAQ</a>
            <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Контакты</a>
            <a href="#contact" className="py-2 font-bold text-primary" onClick={closeMobileMenu}>+7 (895) 372-05-42</a>
            <button 
              className="text-sm text-primary hover:underline text-left py-2"
              onClick={() => {
                closeMobileMenu();
                onOpenCallback();
              }}
            >
              Заказать звонок
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
