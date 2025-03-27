import { Logo } from "@/components/shared/Logo";

interface FooterProps {
  onOpenCallback: () => void;
}

export function Footer({ onOpenCallback }: FooterProps) {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo textColor="white" />
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} ООО "ЗаборСтрой". Все права защищены.</p>
          </div>
          
          <div className="flex items-center">
            <a href="tel:+78953720542" className="mr-4 hover:underline">
              <i className="ri-phone-line mr-1"></i>+7 (895) 372-05-42
            </a>
            <button 
              className="border border-white px-4 py-2 rounded hover:bg-white hover:text-primary transition-colors"
              onClick={onOpenCallback}
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
