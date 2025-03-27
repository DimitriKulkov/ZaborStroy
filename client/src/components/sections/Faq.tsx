import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";

interface FaqProps {
  onOpenContactForm: () => void;
}

export function Faq({ onOpenContactForm }: FaqProps) {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Часто задаваемые вопросы</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">Ответы на популярные вопросы наших клиентов</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-2">
            {faqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#D3D3D3] py-2"
              >
                <AccordionTrigger className="font-bold text-[#666666] hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#666666] pt-2 pb-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-8">
          <p>Не нашли ответ на свой вопрос?</p>
          <button 
            className="mt-4 bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all inline-flex items-center"
            onClick={onOpenContactForm}
          >
            <i className="ri-question-answer-line mr-2"></i>Задать вопрос
          </button>
        </div>
      </div>
    </section>
  );
}
