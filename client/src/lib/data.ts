import { z } from "zod";

import chainLinkFencePhoto from "../assets/chain-link-fence-photo.png";

// Services data
export const fences = [
  {
    id: "chain-link",
    title: "Сетка-рабица",
    description: "Экономичное решение с быстрой установкой, идеально для ограждения больших территорий.",
    price: "от 900 руб/пм",
    image: chainLinkFencePhoto
  },
  {
    id: "corrugated",
    title: "Профнастил",
    description: "Долговечное и надежное ограждение с защитой от ветра и посторонних глаз.",
    price: "от 2 000 руб/пм",
    image: "https://images.unsplash.com/photo-1627224137248-a0dc96e5e2dc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "euro-picket",
    title: "Евроштакетник",
    description: "Эстетичный вид и антикоррозийное покрытие для долгой службы ограждения.",
    price: "от 2 500 руб/пм",
    image: "https://images.unsplash.com/photo-1565953599930-cbd871dd40f5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "3d-mesh",
    title: "3D сетка",
    description: "Современный дизайн с высокой прочностью и отличной видимостью территории.",
    price: "от 1 900 руб/пм",
    image: "https://images.unsplash.com/photo-1528488937864-4d3bbf16a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "sectional",
    title: "Секционные заборы",
    description: "Модульная конструкция, позволяющая быстро установить качественное ограждение.",
    price: "от 3 500 руб/пм",
    image: "https://images.unsplash.com/photo-1560278687-2941e97df6dc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "polycarbonate-fence",
    title: "Поликарбонатные заборы",
    description: "Светопропускающий материал с УФ-защитой для современного ограждения.",
    price: "по запросу",
    image: "https://images.unsplash.com/photo-1507833885997-1ec8e9f58dae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  }
];

export const canopies = [
  {
    id: "canopy-metal",
    title: "Навесы из металлочерепицы",
    description: "Надежная защита и стильный внешний вид, сочетающийся с кровлей дома.",
    price: "от 6 500 руб/м²",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "canopy-soft",
    title: "Навесы с мягкой кровлей",
    description: "Гибкость в исполнении и отличное шумопоглощение во время дождя.",
    price: "от 6 500 руб/м²",
    image: "https://images.unsplash.com/photo-1597064610826-9df3672927e5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "canopy-poly",
    title: "Навесы из поликарбоната",
    description: "Легкость и устойчивость к погодным условиям с пропусканием света.",
    price: "от 6 500 руб/м²",
    image: "https://images.unsplash.com/photo-1576784254093-776cc7f82df3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  }
];

export const gates = [
  {
    id: "sliding-gate",
    title: "Откатные ворота",
    description: "Экономят пространство и совместимы с системами автоматизации для вашего удобства.",
    price: "от 70 000 руб",
    image: "https://images.unsplash.com/photo-1518742688957-99eeba23aa7e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "swing-gate",
    title: "Распашные ворота",
    description: "Классический дизайн и простота использования для частных домов и дач.",
    price: "от 20 000 руб",
    image: "https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "wicket",
    title: "Калитки",
    description: "Индивидуальный дизайн, соответствующий стилю вашего забора и дома.",
    price: "от 8 000 руб",
    image: "https://images.unsplash.com/photo-1555505019-040bdffa4268?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "automation",
    title: "Системы автоматизации",
    description: "Удаленное управление и повышенная безопасность для вашего участка.",
    price: "от 35 000 руб",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  }
];

// Price list
export const prices = [
  { service: "Сетка-рабица", price: "от 900 руб/пм", note: "Экономичное решение" },
  { service: "Профнастил", price: "от 2 000 руб/пм", note: "Популярный вариант" },
  { service: "Евроштакетник", price: "от 2 500 руб/пм", note: "Эстетичный вид" },
  { service: "3D сетка", price: "от 1 900 руб/пм", note: "Современный дизайн" },
  { service: "Навесы", price: "от 6 500 руб/м²", note: "Различные материалы" },
  { service: "Откатные ворота", price: "от 70 000 руб", note: "Возможна автоматизация" },
  { service: "Распашные ворота", price: "от 20 000 руб", note: "Классический вариант" },
  { service: "Калитки", price: "от 8 000 руб", note: "Индивидуальный дизайн" },
  { service: "Автоматизация", price: "от 35 000 руб", note: "Удаленное управление" },
  { service: "Секционные заборы", price: "от 3 500 руб", note: "Модульная конструкция" },
  { service: "Поликарбонатные заборы", price: "По запросу", note: "Индивидуальный расчет" }
];

// Portfolio items
export const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1566763481645-ecdf2ff9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    title: "Забор из профнастила",
    location: "г. Москва",
    description: "Забор из профнастила высотой 2 метра с откатными воротами. Материал: оцинкованный профнастил с полимерным покрытием."
  },
  {
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    title: "Навес из поликарбоната",
    location: "г. Москва",
    description: "Навес из поликарбоната для автомобиля размером 6x3 метра. Материал: прозрачный сотовый поликарбонат толщиной 8 мм."
  },
  {
    image: "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    title: "Откатные ворота с автоматикой",
    location: "г. Москва",
    description: "Откатные ворота шириной 4 метра с автоматическим приводом. Материал: сталь с порошковым покрытием."
  },
  {
    image: "https://images.unsplash.com/photo-1584827387040-53150b95a45c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    title: "Евроштакетник",
    location: "г. Москва",
    description: "Забор из евроштакетника высотой 1.8 метра. Материал: оцинкованная сталь с полимерным покрытием."
  },
  {
    image: "https://images.unsplash.com/photo-1553524780-2e5f577e655f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    title: "Калитка с 3D сеткой",
    location: "г. Москва",
    description: "Калитка с 3D сеткой шириной 1 метр. Материал: оцинкованная сталь с полимерным покрытием."
  },
  {
    image: "https://images.unsplash.com/photo-1516916759473-600c07bc12d4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    title: "Навес из металлочерепицы",
    location: "г. Москва",
    description: "Навес из металлочерепицы для автомобиля размером 5x3 метра. Материал: металлочерепица с полимерным покрытием."
  },
  {
    image: chainLinkFencePhoto,
    title: "Забор из сетки-рабицы",
    location: "г. Москва",
    description: "Забор из сетки-рабицы высотой 1.5 метра. Материал: оцинкованная сетка-рабица."
  },
  {
    image: "https://images.unsplash.com/photo-1580541631971-c83d5a664a0d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    title: "Секционный забор",
    location: "г. Москва",
    description: "Секционный забор высотой 2.2 метра. Материал: оцинкованная сталь с полимерным покрытием."
  }
];

// Reviews
export const reviews = [
  {
    rating: 5.0,
    text: "Отличная работа! Забор из профнастила установлен быстро и качественно. Очень доволен результатом и рекомендую эту компанию!",
    author: "Александр Петров",
    location: "г. Москва",
    initials: "А"
  },
  {
    rating: 4.5,
    text: "Заказывала навес из поликарбоната для террасы. Всё сделали в срок, учли все пожелания. Мастера вежливые и аккуратные.",
    author: "Елена Смирнова",
    location: "г. Москва",
    initials: "Е"
  },
  {
    rating: 5.0,
    text: "Установили откатные ворота с автоматикой. Каждый день радуюсь, что не нужно выходить из машины, чтобы открыть их. Всё работает исправно!",
    author: "Михаил Иванов",
    location: "г. Москва",
    initials: "М"
  },
  {
    rating: 4.8,
    text: "Заказывали секционный забор для дачи. Очень довольны качеством материалов и работы. Забор стоит уже второй год, как новый!",
    author: "Наталья Козлова",
    location: "г. Москва",
    initials: "Н"
  },
  {
    rating: 5.0,
    text: "Работой бригады очень доволен! Установили евроштакетник на участке. Всё ровно, красиво, в срок и за разумные деньги.",
    author: "Дмитрий Соколов",
    location: "г. Москва",
    initials: "Д"
  }
];

// FAQ items
export const faqItems = [
  {
    question: "Сколько времени занимает установка забора?",
    answer: "Сроки установки забора зависят от его типа, длины и сложности работ. В среднем, установка забора длиной 100 метров занимает от 3 до 5 дней. Для точного определения сроков наш специалист выезжает на участок для оценки объема работ."
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы предоставляем гарантию 1 год на все выполненные работы и от 3 до 10 лет на используемые материалы (в зависимости от типа). В течение гарантийного срока мы бесплатно устраняем все недостатки, возникшие по нашей вине."
  },
  {
    question: "Как заказать забор или ворота?",
    answer: "Чтобы заказать забор или ворота, позвоните нам по указанным на сайте номерам или заполните форму заявки. Наш менеджер свяжется с вами в течение 30 минут для уточнения деталей и договорится о бесплатном выезде замерщика на ваш участок."
  },
  {
    question: "Требуется ли предоплата за работы?",
    answer: "Да, мы работаем по предоплате в размере 50% от стоимости материалов. Оставшуюся сумму вы оплачиваете после завершения всех работ и приемки объекта."
  },
  {
    question: "Работаете ли вы зимой?",
    answer: "Да, мы работаем круглый год. Зимой возможны некоторые ограничения при сильных морозах (ниже -15°C) или обильных снегопадах, но в целом установка заборов и ворот производится в любое время года."
  }
];

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  phone: z.string().min(10, "Телефон должен содержать не менее 10 символов"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  service: z.string().min(1, "Выберите услугу"),
  comment: z.string().optional()
});
