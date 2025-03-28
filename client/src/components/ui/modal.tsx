import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from "@/lib/queryClient";

// Callback Form Schema
const callbackFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  phone: z.string().min(10, "Телефон должен содержать не менее 10 символов"),
});

// Measurement Form Schema
const measurementFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  phone: z.string().min(10, "Телефон должен содержать не менее 10 символов"),
  address: z.string().min(5, "Адрес должен содержать не менее 5 символов"),
  date: z.string().min(1, "Пожалуйста, выберите дату"),
});

// Calculation Form Schema
const calculationFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  phone: z.string().min(10, "Телефон должен содержать не менее 10 символов"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  service: z.string().min(1, "Выберите услугу"),
  comment: z.string().optional().or(z.literal("")),
});

// Question Form Schema
const questionFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  email: z.string().email("Введите корректный email"),
  question: z.string().min(10, "Вопрос должен содержать не менее 10 символов"),
});

// Review Form Schema
const reviewFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  rating: z.number().min(1, "Минимальная оценка 1").max(5, "Максимальная оценка 5"),
  text: z.string().min(10, "Текст отзыва должен содержать не менее 10 символов"),
  location: z.string().min(2, "Укажите населенный пункт"),
});

// Callback Modal
interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function CallbackModal({ isOpen, onClose, onSuccess }: CallbackModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  type CallbackFormValues = z.infer<typeof callbackFormSchema>;
  
  const form = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackFormSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  async function onSubmit(data: CallbackFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/callback", {
        ...data,
        targetEmail: "zaborstroy68@yandex.ru"
      });
      form.reset();
      onSuccess("Спасибо за заявку! Наш менеджер свяжется с вами в течение 30 минут.");
    } catch (error) {
      console.error("Error submitting callback form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">Заказать звонок</DialogTitle>
        </DialogHeader>
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
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
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
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
            >
              {isSubmitting ? "Отправка..." : "Заказать звонок"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Measurement Modal
interface MeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function MeasurementModal({ isOpen, onClose, onSuccess }: MeasurementModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  type MeasurementFormValues = z.infer<typeof measurementFormSchema>;
  
  const form = useForm<MeasurementFormValues>({
    resolver: zodResolver(measurementFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      date: "",
    },
  });

  async function onSubmit(data: MeasurementFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/measurement", {
        ...data,
        targetEmail: "zaborstroy68@yandex.ru"
      });
      form.reset();
      onSuccess("Спасибо за заявку! Наш замерщик свяжется с вами для уточнения деталей.");
    } catch (error) {
      console.error("Error submitting measurement form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">Заказать бесплатный замер</DialogTitle>
        </DialogHeader>
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
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
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
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Адрес объекта*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Предпочтительная дата*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="date"
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
            >
              {isSubmitting ? "Отправка..." : "Заказать замер"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Calculation Modal
interface CalculationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function CalculationModal({ isOpen, onClose, onSuccess }: CalculationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  type CalculationFormValues = z.infer<typeof calculationFormSchema>;
  
  const form = useForm<CalculationFormValues>({
    resolver: zodResolver(calculationFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      comment: "",
    },
  });

  async function onSubmit(data: CalculationFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", {
        ...data,
        targetEmail: "zaborstroy68@yandex.ru"
      });
      form.reset();
      onSuccess("Спасибо за заявку! Мы рассчитаем стоимость и свяжемся с вами в течение дня.");
    } catch (error) {
      console.error("Error submitting calculation form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">Рассчитать стоимость</DialogTitle>
          <DialogDescription className="text-[#666666] mt-2">
            Заполните форму и мы рассчитаем точную стоимость вашего проекта
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Ваше имя*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
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
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
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
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
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
                  <FormLabel className="font-bold">Услуга*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="забор_сетка">Забор из сетки-рабицы</SelectItem>
                      <SelectItem value="забор_профнастил">Забор из профнастила</SelectItem>
                      <SelectItem value="забор_евроштакетник">Забор из евроштакетника</SelectItem>
                      <SelectItem value="забор_3d">Забор из 3D сетки</SelectItem>
                      <SelectItem value="забор_секционный">Секционный забор</SelectItem>
                      <SelectItem value="навес">Навес</SelectItem>
                      <SelectItem value="ворота_откатные">Откатные ворота</SelectItem>
                      <SelectItem value="ворота_распашные">Распашные ворота</SelectItem>
                      <SelectItem value="калитка">Калитка</SelectItem>
                      <SelectItem value="автоматика">Автоматика для ворот</SelectItem>
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
                      placeholder="Укажите размеры, особенности объекта, пожелания"
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary min-h-[100px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
            >
              {isSubmitting ? "Отправка..." : "Рассчитать стоимость"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Question Modal
interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function QuestionModal({ isOpen, onClose, onSuccess }: QuestionModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  type QuestionFormValues = z.infer<typeof questionFormSchema>;
  
  const form = useForm<QuestionFormValues>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  async function onSubmit(data: QuestionFormValues) {
    setIsSubmitting(true);
    try {
      // Include the target email in the request
      await apiRequest("POST", "/api/question", {
        ...data,
        targetEmail: "zaborstroy68@yandex.ru"
      });
      form.reset();
      onSuccess("Спасибо за ваш вопрос! Мы ответим на него в ближайшее время.");
    } catch (error) {
      console.error("Error submitting question form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">Задать вопрос</DialogTitle>
          <DialogDescription className="text-[#666666] mt-2">
            Заполните форму, и мы ответим на ваш вопрос по электронной почте
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Ваше имя*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
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
                  <FormLabel className="font-bold">Email*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="email"
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Ваш вопрос*</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      placeholder="Напишите ваш вопрос здесь..."
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary min-h-[100px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
            >
              {isSubmitting ? "Отправка..." : "Отправить вопрос"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Review Modal
interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function ReviewModal({ isOpen, onClose, onSuccess }: ReviewModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState<number>(5);
  
  type ReviewFormValues = z.infer<typeof reviewFormSchema>;
  
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      name: "",
      rating: 5,
      text: "",
      location: "",
    },
  });

  async function onSubmit(data: ReviewFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/review", {
        ...data,
        rating: rating, // Use the rating from state
        targetEmail: "zaborstroy68@yandex.ru"
      });
      form.reset();
      onSuccess("Спасибо за ваш отзыв! Он будет опубликован после модерации.");
    } catch (error) {
      console.error("Error submitting review form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Handle rating change
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    form.setValue("rating", newRating);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">Оставить отзыв</DialogTitle>
          <DialogDescription className="text-[#666666] mt-2">
            Поделитесь своим мнением о нашей работе
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Ваше имя*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel className="font-bold">Оценка*</FormLabel>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="text-2xl focus:outline-none"
                  >
                    {star <= rating ? "★" : "☆"}
                  </button>
                ))}
              </div>
            </FormItem>
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Ваш отзыв*</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      placeholder="Напишите ваше мнение о нашей работе..."
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary min-h-[100px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Город/Населенный пункт*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full p-3 border border-[#D3D3D3] rounded-lg focus:outline-none focus:border-primary" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
            >
              {isSubmitting ? "Отправка..." : "Отправить отзыв"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Success Modal
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <div className="mb-4 text-green-500">
          <i className="ri-check-line text-5xl"></i>
        </div>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary mb-2">Спасибо за заявку!</DialogTitle>
          <DialogDescription className="text-[#666666] mb-6">
            {message || "Наш менеджер свяжется с вами в течение 30 минут."}
          </DialogDescription>
        </DialogHeader>
        <Button 
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
          onClick={onClose}
        >
          Закрыть
        </Button>
      </DialogContent>
    </Dialog>
  );
}
