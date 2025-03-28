import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { contactFormSchema } from "@/lib/data";

type FormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      comment: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Спасибо за заявку!",
        description: "Наш менеджер свяжется с вами в течение 30 минут.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Контактная информация</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">Свяжитесь с нами любым удобным способом или оставьте заявку</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F5E6D3] p-8 rounded-lg shadow-md">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="ri-phone-line text-xl text-primary mr-4 mt-1"></i>
                    <div>
                      <p className="font-bold">Телефоны:</p>
                      <a href="tel:+78953720542" className="block hover:text-primary transition-colors">+7 (895) 372-05-42</a>
                      <a href="tel:+78902939666" className="block hover:text-primary transition-colors">+7 (890) 293-96-66</a>
                      <a href="tel:+78915869282" className="block hover:text-primary transition-colors">+7 (891) 586-92-82</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="ri-mail-line text-xl text-primary mr-4 mt-1"></i>
                    <div>
                      <p className="font-bold">Email:</p>
                      <a href="mailto:zaborstroy68@yandex.ru" className="hover:text-primary transition-colors">zaborstroy68@yandex.ru</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="ri-time-line text-xl text-primary mr-4 mt-1"></i>
                    <div>
                      <p className="font-bold">Режим работы:</p>
                      <p>Прием заявок: Пн-Вс: 9:00 - 18:00</p>
                      <p>Выезд на объекты: Пн-Вс (без выходных)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                        <i className="ri-telegram-fill"></i>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-3">
                      <h4 className="text-sm font-semibold mb-2">Выберите номер для Telegram:</h4>
                      <div className="space-y-2">
                        <a 
                          href="https://t.me/+78953720542" 
                          target="_blank"
                          className="block text-sm p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          +7 (895) 372-05-42
                        </a>
                        <a 
                          href="https://t.me/+78902939666" 
                          target="_blank"
                          className="block text-sm p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          +7 (890) 293-96-66
                        </a>
                        <a 
                          href="https://t.me/+78915869282" 
                          target="_blank"
                          className="block text-sm p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          +7 (891) 586-92-82
                        </a>
                      </div>
                    </PopoverContent>
                  </Popover>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                        <i className="ri-whatsapp-fill"></i>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-3">
                      <h4 className="text-sm font-semibold mb-2">Выберите номер для WhatsApp:</h4>
                      <div className="space-y-2">
                        <a 
                          href="https://wa.me/78953720542" 
                          target="_blank"
                          className="block text-sm p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          +7 (895) 372-05-42
                        </a>
                        <a 
                          href="https://wa.me/78902939666" 
                          target="_blank"
                          className="block text-sm p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          +7 (890) 293-96-66
                        </a>
                        <a 
                          href="https://wa.me/78915869282" 
                          target="_blank"
                          className="block text-sm p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          +7 (891) 586-92-82
                        </a>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F5E6D3] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-6">Рассчитать стоимость</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Ваше имя*</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary bg-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Телефон*</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel" 
                            className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary bg-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary bg-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Вид услуги*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary bg-white">
                              <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="chain-link">Забор из сетки-рабицы</SelectItem>
                            <SelectItem value="corrugated">Забор из профнастила</SelectItem>
                            <SelectItem value="euro-picket">Забор из евроштакетника</SelectItem>
                            <SelectItem value="3d-mesh">Забор из 3D сетки</SelectItem>
                            <SelectItem value="sectional">Секционный забор</SelectItem>
                            <SelectItem value="polycarbonate-fence">Забор из поликарбоната</SelectItem>
                            <SelectItem value="canopy-metal">Навес из металлочерепицы</SelectItem>
                            <SelectItem value="canopy-soft">Навес с мягкой кровлей</SelectItem>
                            <SelectItem value="canopy-poly">Навес из поликарбоната</SelectItem>
                            <SelectItem value="sliding-gate">Откатные ворота</SelectItem>
                            <SelectItem value="swing-gate">Распашные ворота</SelectItem>
                            <SelectItem value="wicket">Калитка</SelectItem>
                            <SelectItem value="automation">Система автоматизации</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Комментарий</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary bg-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center"
                    >
                      <i className="ri-send-plane-fill mr-2"></i>
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>
                  </div>
                </form>
              </Form>
              <p className="text-sm text-[#666666] text-center mt-4">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
