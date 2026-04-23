import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import heroImage from "./assets/hero.webp";
import uvImage from "./assets/uv-sterilization.webp";
import familyImage from "./assets/family-allergy.webp";
import heatingImage from "./assets/heating-top.webp";
import appControlImage from "./assets/app-control.webp";
import filterSystemImage from "./assets/filter-system.webp";
import warrantyImage from "./assets/warranty.webp";

const ease = [0.16, 1, 0.3, 1];

const CONTENT = {
  brand: "aireco",

  nav: {
    advantages: "преимущества",
    technology: "технология",
    filtration: "фильтрация",
    family: "для семьи",
    control: "управление",
    specs: "характеристики",
    reviews: "отзывы",
    faq: "вопросы",
    order: "заказать",
  },

  hero: {
    badge: "очиститель воздуха нового поколения",
    title1: "чистый воздух",
    title2: "без аллергии",
    title3: "и пыли",
    text:
      "Профессиональная 5-ступенчатая система очистки. Автоматический контроль качества воздуха и управление через ваш смартфон.",
    primary: "Получить консультацию",
    secondary: "Instagram",
    calc: "Расчёт",
  },

  trust: [
    "Бесплатная доставка по Казахстану",
    "Официальная гарантия 1 год",
    "Сервисное обслуживание и поддержка",
  ],

  stats: [
    ["500 м³/ч", "Высокая производительность"],
    ["HEPA H13", "Медицинская фильтрация"],
    ["PM2.5", "Умный датчик"],
    ["Wi-Fi", "Дистанционный контроль"],
  ],

  premiumTitle: "aireco — Технологичность в каждой детали",

  premiumCards: [
    [
      "Моющийся пре-фильтр",
      "Задерживает крупную пыль, волосы и шерсть питомцев.",
      "◉",
    ],
    [
      "Тихий ночной режим",
      "Не мешает комфортному сну, сравним с тихим шепотом.",
      "◌",
    ],
    [
      "Ионизация воздуха",
      "Осаждает частицы пыли, создает ощущение свежести как после грозы.",
      "◎",
    ],
    [
      "Защита от детей и питомцев",
      "Автоотключение при случайном опрокидывании, защита от замыканий.",
      "✦",
    ],
    [
      "Колесики для перемещения",
      "Удобно перемещать по дому без усилий — с заботой о каждой маме.",
      "▣",
    ],
    [
      "HEPA H13 с повышенным ресурсом",
      "Автоматическое уведомление о необходимости замены фильтра.",
      "◈",
    ],
    [
      "Таймер 1–24 часа",
      "Гибкое планирование через панель, пульт ДУ или приложение.",
      "✳",
    ],
  ],

  sections: {
    technologyTag: "Технология защиты",
    technologyTitle:
      "Излучение полностью изолировано внутри корпуса и безопасно для окружающей среды.",
    technologyText:
      "Эффективность 99.9%: Совместная работа УФ-модуля и фотокатализа разрушает вирусы, бактерии и грибки на молекулярном уровне.",

    filtrationTag: "система очистки",
    filtrationTitle: "Как работает наш фильтр",
    filtrationSubtitle: "Интеллектуальная очистка в три этапа",
    filtrationText: "",

    familyTag: "для семьи",
    familyTitle: "aireco — Комфортный воздух дома для детей и аллергиков",
    familyText:
      "• Интеллектуальный контроль: Датчик PM2.5 непрерывно анализирует состояние воздуха и мгновенно регулирует мощность очистки в зависимости от уровня загрязнения.\n\n• Абсолютная защита: HEPA-фильтр H13 (медицинский стандарт) удерживает 99,9% аллергенов, не оставляя им ни единого шанса.\n\n• Природная свежесть: Ионизация осаждает мельчайшие частицы пыли, выделяя отрицательно заряженные ионы и наполняя пространство чистотой и ощущением свежести.",

      heatingTag: "Инновация в деталях",
      heatingTitle: "Подогреваемая верхняя площадка",
      heatingText:
        "Верхняя панель устройства оснащена функцией подогрева, создающей идеальное место для отдыха ваших питомцев.",
      heatingItems: [
        "Функцию можно отключить, превратив площадку в стильную подставку для декора или аксессуаров.",
        "Кабель питания находится в специальной защитной оплетке и работает на безопасной мощности 24V, исключая любые риски для вашего питомца.",
      ],

    controlTag: "управление",
    controlTitle: "Полный контроль через приложение, пульт и сенсорную панель",
    controlText:
      "Удобный пульт, сенсорное управление на корпусе и мобильное приложение. Можно включать и выключать нужные функции, выбирать режимы и использовать таймер.",
    controlCards: [
      ["Wi-Fi", "Управление со смартфона"],
      ["Таймер 1–24 ч", "Автоматическое отключение по расписанию"],
    ],

    specsTag: "характеристики",
    specsTitle: "Технические данные aireco",

    warrantyTag: "гарантия и доверие",
    warrantyTitle: "Гарантия 12 месяцев",
    warrantyText:
      "aireco рассчитан на постоянное использование дома и в офисе. Это полноценная система очистки с акцентом на безопасность, ресурс и удобство.",

    reviewsTag: "отзывы",
    reviewsTitle: "Отзывы покупателей",
    reviewsText:
      "Живые отзывы, которые уже оставили покупатели после использования aireco.",

    faqTag: "вопрос / ответ",
    faqTitle: "Всё, что важно знать перед покупкой",

    ctaTag: "aireco",
    ctaTitle: "Заказать",
    ctaText:
      "Напишите в WhatsApp или Instagram, и мы быстро подскажем по наличию, доставке и ответим на вопросы.",

    calcTag: "калькулятор очистки",
    calcTitle: "За сколько времени aireco обновит воздух в вашей комнате?",
    calcText:
      "Введите площадь комнаты, и калькулятор покажет, за сколько минут устройство полностью прогонит и обновит воздух. Расчёт сделан при высоте потолка 3 м.",
  },

  specs: [
    "CADR: до 500 м³/ч",
    "Датчик PM2.5",
    "HEPA H13",
    "Моющийся пре-фильтр",
    "Фотокаталитический фильтр",
    "УФ-стерилизация",
    "Ионизация воздуха",
    "Wi-Fi",
    "Пульт дистанционного управления",
    "Сенсорная панель на корпусе",
    "Таймер 1–24 часа",
    "Тихий ночной режим",
    "Подсветка с возможностью отключения",
    "Напоминание о замене фильтра",
  ],

  reviews: [
    {
      name: "Ангелина",
      city: "Алматы",
      date: "11.02.2026",
      text:
        "Брала по рекомендации подруги, приятно удивило качество сборки и размер очистителя. Почти за неделю использования стало реально легче дышать, меньше пыли в доме, покупкой очень довольна.",
    },
    {
      name: "Сергей",
      city: "Алматы",
      date: "17.02.2026",
      text:
        "Площадка с подогревом стала любимым местом нашего кота, каждый день собирает приличное количество шерсти и пыли. Ночной режим не мешает сну.",
    },
    {
      name: "Алуа",
      city: "Караганда",
      date: "20.02.2026",
      text:
        "Для нашей семьи аллергиков приобретение очистителя было необходимостью, с выбором не ошиблась, теперь в квартире заметно меньше пыли, у детей реже стали появляться сопли.",
    },
    {
      name: "Карина",
      city: "Астана",
      date: "15.02.2026",
      text:
        "Приобрела данный очиститель на днях, хочу сказать что уже заметен результат. На утро в квартире появилось ощущение свежести, также удобно что есть пульт и продуманы колесики поэтому удобно его переносить. Спасибо большое!",
    },
  ],

  faq: [
    {
      q: "Зачем нужна ионизация?",
      a:
        "Ионизация способствует осаждению мелких частиц, делая воздух более свежим и комфортным. Многие отмечают ощущение свежести, сравнимое с воздухом после грозы. Функцию можно включать и отключать при необходимости.",
    },
    {
      q: "Справляется ли очиститель с аллергенами?",
      a:
        "Да. Фильтр HEPA H13 эффективно задерживает мелкие частицы, включая пыльцу, бытовые аллергены и PM2.5, снижая их концентрацию в воздухе. Это делает дыхание более комфортным в период сезонных и бытовых аллергий.",
    },
    {
      q: "Как часто нужно менять фильтр?",
      a:
        "В нашем очистителе HEPA-фильтр имеет повышенный ресурс работы. Моющийся пре-фильтр задерживает крупную пыль и продлевает срок службы основного фильтра. Устройство автоматически уведомляет о необходимости замены.",
    },
    {
      q: "Подходит ли очиститель для семей с детьми и домашними животными?",
      a:
        "Да. Очиститель безопасен для использования в жилых помещениях. УФ-излучение полностью изолировано внутри корпуса и не контактирует с людьми и животными. Фильтрация эффективно снижает количество пыли, аллергенов и бытовых загрязнений в воздухе.",
    },
    {
      q: "Помогает ли очиститель устранять запахи?",
      a:
        "Да. Фотокаталитический фильтр с УФ способствует разложению молекул запахов и органических загрязнений, включая бытовые запахи и запахи, связанные с домашними животными.",
    },
  ],

  contact: {
    phoneLabel: "Связь и заказ через WhatsApp",
    cardTitle: "Связаться сейчас",
    priceLabel: "цена",
    whatsapp: "Перейти в WhatsApp",
    instagram: "Открыть Instagram",
    mobile: "Заказать",
    calc: "Расчёт",
  },
};

const FILTER_POINTS = [
  {
    id: "pre",
    title: "Моющийся пре-фильтр",
    text:
      "Увеличивает срок службы основного фильтра. Улавливает крупную пыль, ворс и шерсть питомцев.",
    left: "18%",
    top: "60%",
    align: "left",
  },
  {
    id: "hepa",
    title: "Фильтр HEPA H13",
    text:
      "Медицинский стандарт очистки. Задерживает 99,9% микрочастиц: аллергены, пыльцу, перхоть и мелкодисперсную пыль PM2.5.",
    left: "50%",
    top: "60%",
    align: "center",
  },
  {
    id: "photo",
    title: "Фотокатализ + УФ",
    text:
      "Не накапливает загрязнения и неприятные запахи, а полностью нейтрализует их. В том числе стойкие запахи от домашних питомцев.",
    left: "82%",
    top: "60%",
    align: "right",
  },
];

function Reveal({ children, delay = 0, className = "", variant = "up" }) {
  const initial =
    variant === "left"
      ? { opacity: 0, x: -56, scale: 0.99, filter: "blur(10px)" }
      : variant === "right"
      ? { opacity: 0, x: 56, scale: 0.99, filter: "blur(10px)" }
      : { opacity: 0, y: 42, scale: 0.99, filter: "blur(10px)" };

  const animate =
    variant === "left" || variant === "right"
      ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
      : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.18, margin: "-40px" }}
      transition={{ duration: 0.95, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ tag, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-600">
        {tag}
      </div>
      <h2 className="mt-3 break-words text-3xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-2xl break-words whitespace-pre-line text-[16px] leading-8 text-slate-500">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function SoftCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease }}
      className={`rounded-[1.5rem] border border-slate-200 bg-white/92 shadow-[0_12px_30px_rgba(15,23,42,0.05)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function PremiumGrid({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map(([title, text, icon], i) => (
        <Reveal key={title} delay={i * 0.04}>
          <SoftCard className="h-full p-6 transition hover:border-sky-200 hover:bg-sky-50/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
              {icon}
            </div>
            <div className="text-xl font-black text-slate-950">{title}</div>
            <div className="mt-3 leading-7 text-slate-600">{text}</div>
          </SoftCard>
        </Reveal>
      ))}
    </div>
  );
}

function TrustStrip({ items }) {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 0.04}>
            <SoftCard className="px-4 py-4 text-center text-sm font-black text-slate-700">
              {item}
            </SoftCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-xl font-black text-slate-950">{q}</span>
        <span className="text-3xl text-slate-400">{open ? "−" : "+"}</span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-[16px] leading-8 text-slate-600">
          {a}
        </div>
      </motion.div>
    </div>
  );
}

function ReviewsSection({ t }) {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <Reveal>
        <SectionTitle
          tag={t.sections.reviewsTag}
          title={t.sections.reviewsTitle}
          text={t.sections.reviewsText}
          center
        />
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {t.reviews.map((review, i) => (
          <Reveal key={review.name + review.date} delay={i * 0.05}>
            <SoftCard className="h-full p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <div className="font-black text-slate-950">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.city}</div>
                </div>
                <div className="text-right">
                  <div className="text-red-500">★★★★★</div>
                  <div className="text-xs text-slate-400">{review.date}</div>
                </div>
              </div>
              <p className="leading-7 text-slate-600">{review.text}</p>
            </SoftCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Particles() {
  const items = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/70 blur-[1px]"
          style={{
            left: `${8 + ((i * 89) % 82)}%`,
            top: `${8 + ((i * 53) % 75)}%`,
          }}
          animate={{ y: [-8, 10, -8], x: [0, 5, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

function FogLayers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 14, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 24, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-10 h-[22rem] w-[22rem] rounded-full bg-cyan-200/20 blur-3xl"
      />
    </div>
  );
}

function CalcIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h2" />
      <path d="M12 11h2" />
      <path d="M16 11h0.01" />
      <path d="M8 15h2" />
      <path d="M12 15h2" />
      <path d="M16 15h0.01" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19.11 17.39c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.62.13-.18.27-.71.87-.87 1.05-.16.18-.33.2-.6.07-.27-.13-1.16-.43-2.2-1.37-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.13-.13.27-.33.4-.49.13-.16.18-.27.27-.45.09-.18.04-.35-.02-.49-.07-.13-.62-1.5-.84-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.49.07-.74.35-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.84.13.18 1.92 2.94 4.65 4.12.65.28 1.16.45 1.55.58.65.2 1.25.17 1.72.1.53-.08 1.59-.65 1.82-1.28.22-.62.22-1.15.16-1.27-.07-.12-.25-.18-.53-.31Z" />
      <path d="M16.03 3.2C8.97 3.2 3.25 8.92 3.25 15.98c0 2.24.58 4.42 1.69 6.34L3.16 28.8l6.64-1.74a12.72 12.72 0 0 0 6.23 1.62h.01c7.05 0 12.78-5.73 12.78-12.79 0-3.42-1.33-6.63-3.75-9.04A12.69 12.69 0 0 0 16.03 3.2Zm0 23.32h-.01a10.53 10.53 0 0 1-5.37-1.47l-.39-.23-3.94 1.03 1.05-3.84-.25-.4a10.58 10.58 0 0 1 1.61-13.11 10.48 10.48 0 0 1 7.49-3.1c2.83 0 5.49 1.1 7.49 3.1a10.53 10.53 0 0 1-7.68 18.02Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FloatingDesktop({ whatsapp, onCalc, calcLabel }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
      <button
        onClick={onCalc}
        className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-5 py-4 text-sm font-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] transition duration-300 hover:scale-[1.03]"
      >
        <CalcIcon />
        {calcLabel}
      </button>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-[0_20px_50px_rgba(34,197,94,0.30)] transition duration-300 hover:scale-[1.03] hover:bg-green-600"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}

function StickyMobileCTA({ label, href, calcLabel, onCalc }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={onCalc}
          className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-3 py-4 text-sm font-black text-white"
        >
          <CalcIcon />
          {calcLabel}
        </button>

        <a
          href="https://www.instagram.com/aireco.kz?igsh=MWY1OHUycHIwYWJ3aQ=="
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-4 text-sm font-black text-pink-600"
        >
          <InstagramIcon />
          Insta
        </a>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-3 py-4 text-sm font-black text-white"
        >
          <WhatsAppIcon />
          {label}
        </a>
      </div>
    </div>
  );
}

function CalculatorModal({ open, onClose, t }) {
  const [area, setArea] = useState(20);
  const cleanArea = Number.isFinite(Number(area)) ? Number(area) : 0;
  const height = 3;
  const volume = cleanArea * height;
  const minutes = volume > 0 ? (volume / 500) * 60 : 0;
  const cycles = volume > 0 ? 500 / volume : 0;

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const formatMinutes = (value) => {
    if (!value || value <= 0) return "—";
    if (value < 1) return "меньше 1 мин";
    return `${Math.ceil(value)} мин`;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/45 backdrop-blur-sm">
      <div className="min-h-full px-3 py-6 md:flex md:items-center md:justify-center md:p-4">
        <div className="mx-auto w-full max-w-2xl rounded-[2rem] bg-white p-5 shadow-[0_30px_70px_rgba(0,0,0,0.2)] md:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[11px] font-black uppercase tracking-[0.28em] text-sky-600">
                {t.sections.calcTag}
              </div>
              <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                {t.sections.calcTitle}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-slate-500">
                {t.sections.calcText}
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-500 transition hover:bg-slate-50"
            >
              ×
            </button>
          </div>

          <div className="grid gap-5">
            <SoftCard className="p-5">
              <label className="mb-3 block text-sm font-black uppercase tracking-[0.14em] text-slate-500">
                Площадь комнаты, м²
              </label>

              <input
                type="number"
                min="1"
                step="1"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-2xl font-black text-slate-950 outline-none transition focus:border-sky-400"
                placeholder="Например, 20"
              />

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Расчёт при высоте потолка 3 м
              </p>

              <div className="mt-5 rounded-[1.2rem] bg-sky-50 px-4 py-4 text-[16px] leading-7 text-slate-700 ring-1 ring-sky-100">
                {cleanArea > 0
                  ? `Комната ${cleanArea} м² будет полностью прогнана и освежена примерно за ${formatMinutes(minutes)}.`
                  : "Введите площадь комнаты."}
              </div>
            </SoftCard>

            <div className="grid gap-4 sm:grid-cols-2">
              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  объём комнаты
                </div>
                <div className="mt-3 text-4xl font-black text-slate-950">
                  {volume > 0 ? volume.toFixed(1) : "—"} м³
                </div>
              </SoftCard>

              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  время очистки
                </div>
                <div className="mt-3 text-4xl font-black text-slate-950">
                  {formatMinutes(minutes)}
                </div>
              </SoftCard>

              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  циклов в час
                </div>
                <div className="mt-3 text-4xl font-black text-slate-950">
                  {cycles > 0 ? cycles.toFixed(1) : "—"}
                </div>
              </SoftCard>

              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  производительность
                </div>
                <div className="mt-3 text-4xl font-black text-slate-950">
                  500 м³/ч
                </div>
              </SoftCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterTooltip({ title, text, align = "center" }) {
  const alignClass =
    align === "left"
      ? "left-0"
      : align === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease }}
      className={`absolute top-[calc(100%+14px)] z-20 w-[240px] rounded-[1.3rem] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.14)] ${alignClass}`}
    >
      <div className="text-lg font-black text-slate-950">{title}</div>
      <div className="mt-2 text-[15px] leading-7 text-slate-600">{text}</div>
    </motion.div>
  );
}

function FilterHotspots() {
  const [active, setActive] = useState("pre");

  return (
    <div className="mx-auto max-w-[860px]">
      <div className="text-center">
        <div className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
          {CONTENT.sections.filtrationTitle}
        </div>
        <div className="mt-4 text-2xl font-medium text-slate-600 md:text-3xl">
          {CONTENT.sections.filtrationSubtitle}
        </div>
      </div>

      <div className="mt-8 relative mx-auto w-full max-w-[720px]">
        <div className="overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
          <img
            src={filterSystemImage}
            alt="filter system"
            className="block w-full rounded-[1.5rem] object-contain bg-white"
          />
        </div>

        {FILTER_POINTS.map((point) => (
          <div
            key={point.id}
            className="absolute"
            style={{
              left: point.left,
              top: point.top,
              transform: "translate(-50%, -50%)",
            }}
          >
            <button
              onClick={() => setActive((prev) => (prev === point.id ? "" : point.id))}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9842D] text-3xl font-medium text-white shadow-[0_12px_30px_rgba(217,132,45,0.35)] transition hover:scale-105"
            >
              {active === point.id ? "−" : "+"}
            </button>

            {active === point.id ? (
              <FilterTooltip title={point.title} text={point.text} align={point.align} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [calcOpen, setCalcOpen] = useState(false);
  const t = CONTENT;

  const whatsappMain =
    "https://wa.me/77066060985?text=Здравствуйте,%20интересует%20очиститель%20воздуха%20aireco";
  const whatsappOrder =
    "https://wa.me/77066060985?text=Здравствуйте,%20хочу%20заказать%20aireco";
  const instagramLink =
    "https://www.instagram.com/aireco.kz?igsh=MWY1OHUycHIwYWJ3aQ==";

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.25,
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.10),_transparent_30%),linear-gradient(180deg,#fbfdff_0%,#f4f9ff_45%,#ffffff_100%)] text-slate-900">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[90] h-[3px] origin-left bg-sky-500"
      />

      <header className="sticky top-0 z-[80] border-b border-slate-200/70 bg-white/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a href="#top" className="text-lg font-black tracking-tight text-slate-950">
            aireco
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#advantages" className="hover:text-slate-950">{t.nav.advantages}</a>
            <a href="#technology" className="hover:text-slate-950">{t.nav.technology}</a>
            <a href="#filtration" className="hover:text-slate-950">{t.nav.filtration}</a>
            <a href="#family" className="hover:text-slate-950">{t.nav.family}</a>
            <a href="#control" className="hover:text-slate-950">{t.nav.control}</a>
            <a href="#specs" className="hover:text-slate-950">{t.nav.specs}</a>
            <a href="#reviews" className="hover:text-slate-950">{t.nav.reviews}</a>
            <a href="#faq" className="hover:text-slate-950">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-slate-950">{t.nav.order}</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_28%),linear-gradient(180deg,#fbfdff_0%,#f7fbff_45%,#ffffff_100%)]">
          <FogLayers />
          <Particles />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-10 md:px-10 lg:grid-cols-2 lg:items-center lg:py-14">
            <Reveal variant="left">
              <div className="min-w-0">
                <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
                  {t.hero.badge}
                </div>

                <h1 className="max-w-3xl break-words text-4xl font-black leading-[0.96] tracking-tight text-slate-950 md:text-6xl">
                  {t.brand} — {t.hero.title1}
                  <span className="block text-sky-700">{t.hero.title2}</span>
                  <span className="block">{t.hero.title3}</span>
                </h1>

                <p className="mt-5 max-w-2xl break-words text-[17px] leading-7 text-slate-600 md:text-[19px]">
                  {t.hero.text}
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappMain}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-7 py-4 text-base font-bold text-white shadow-[0_14px_35px_rgba(34,197,94,0.30)] transition duration-300 hover:-translate-y-0.5 hover:bg-green-600"
                  >
                    <WhatsAppIcon />
                    {t.hero.primary}
                  </a>

                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-7 py-4 text-base font-bold text-white shadow-lg transition duration-300 hover:opacity-90"
                  >
                    <InstagramIcon />
                    {t.hero.secondary}
                  </a>
                </div>

                <div className="mt-7 grid gap-4 grid-cols-2 xl:grid-cols-4">
                  {t.stats.map(([value, label], i) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.9, delay: i * 0.06, ease }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="min-w-0 rounded-[1.4rem] border border-white/80 bg-white/90 px-6 py-6 shadow-sm backdrop-blur"
                    >
                      <div className="text-[28px] font-black leading-none text-slate-950">
                        {value}
                      </div>
                      <div className="mt-3 text-[16px] leading-7 text-slate-500">
                        {label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="relative">
                <div className="mx-auto max-w-[430px] overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                  <motion.img
                    src={heroImage}
                    alt="aireco"
                    initial={{ scale: 1.03, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease }}
                    className="block w-full rounded-[1.5rem] object-contain object-center"
                  />
                </div>

                <div className="absolute -bottom-3 left-4 rounded-[1.3rem] bg-white px-4 py-3 shadow-xl ring-1 ring-slate-200">
                  <div className="text-sm text-slate-500">night mode</div>
                  <div className="text-base font-black text-slate-950">&lt; 45 дБ</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-4">
          <TrustStrip items={t.trust} />
        </section>

        <section id="advantages" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {t.premiumTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-7">
            <PremiumGrid items={t.premiumCards} />
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <Reveal>
            <SectionTitle
              tag={t.sections.technologyTag}
              title={t.sections.technologyTitle}
              text={t.sections.technologyText}
            />
          </Reveal>

          <div className="mt-7">
            <Reveal>
              <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                <motion.img
                  src={uvImage}
                  alt="uv sterilization"
                  initial={{ scale: 1.02, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease }}
                  className="block w-full rounded-[1.5rem] object-contain object-center bg-white"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="filtration" className="bg-white/40 py-10 backdrop-blur-[2px]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <div className="max-w-3xl">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-600">
                  {t.sections.filtrationTag}
                </div>
              </div>
            </Reveal>

            <div className="mt-4">
              <FilterHotspots />
            </div>
          </div>
        </section>

        <section id="family" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal variant="left">
              <div className="mx-auto max-w-[520px] overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                <motion.img
                  src={familyImage}
                  alt="family comfort"
                  initial={{ scale: 1.02, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease }}
                  className="block h-[500px] w-full rounded-[1.5rem] object-cover object-[center_62%] bg-white"
                />
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.familyTag}
                  title={t.sections.familyTitle}
                  text={t.sections.familyText}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal variant="left">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.heatingTag}
                  title={t.sections.heatingTitle}
                  text={t.sections.heatingText}
                />
                <div className="mt-6 space-y-3">
                  {t.sections.heatingItems.map((item, i) => (
                    <Reveal key={item} delay={i * 0.04}>
                      <SoftCard className="px-5 py-4 text-[17px] leading-7 text-slate-700">
                        {item}
                      </SoftCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="mx-auto max-w-[420px] overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                <motion.img
                  src={heatingImage}
                  alt="heated top"
                  initial={{ scale: 1.02, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease }}
                  className="block h-[360px] w-full rounded-[1.5rem] object-cover object-[center_16%] bg-white"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="control" className="bg-white/40 py-10 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl gap-7 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal variant="left" className="lg:order-2">
              <div className="mx-auto max-w-[420px] overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                <motion.img
                  src={appControlImage}
                  alt="app control"
                  initial={{ scale: 1.02, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease }}
                  className="block h-[360px] w-full rounded-[1.5rem] object-cover object-center bg-white"
                />
              </div>
            </Reveal>

            <Reveal variant="right" className="lg:order-1">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.controlTag}
                  title={t.sections.controlTitle}
                  text={t.sections.controlText}
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {t.sections.controlCards.map(([title, text], i) => (
                    <Reveal key={title} delay={i * 0.05}>
                      <SoftCard className="p-5">
                        <div className="text-2xl font-black text-slate-950">{title}</div>
                        <div className="mt-3 leading-7 text-slate-600">{text}</div>
                      </SoftCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="specs" className="bg-slate-950 py-12 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <SectionTitle
                tag={t.sections.specsTag}
                title={t.sections.specsTitle}
                text=""
              />
            </Reveal>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {t.specs.map((item, i) => (
                <Reveal key={item} delay={i * 0.03}>
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/5 px-5 py-5 text-xl leading-8 text-white shadow-sm">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <Reveal variant="left">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.warrantyTag}
                  title={t.sections.warrantyTitle}
                  text={t.sections.warrantyText}
                />

                <SoftCard className="mt-6 p-6">
                  <div className="text-2xl font-black text-slate-950">+7 706 606 0985</div>
                  <div className="mt-2 text-[17px] leading-7 text-slate-600">
                    {t.contact.phoneLabel}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={whatsappMain}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-4 font-black text-white transition hover:bg-green-600"
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-pink-200 bg-white px-5 py-4 font-black text-pink-600 transition hover:bg-pink-50"
                    >
                      <InstagramIcon />
                      Instagram
                    </a>
                  </div>
                </SoftCard>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="mx-auto max-w-[360px] overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                <motion.img
                  src={warrantyImage}
                  alt="warranty"
                  initial={{ scale: 1.02, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease }}
                  className="block h-[420px] w-full rounded-[1.5rem] object-cover object-center bg-white"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <ReviewsSection t={t} />

        <section id="faq" className="bg-white/45 py-12">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <Reveal>
              <SectionTitle
                tag={t.sections.faqTag}
                title={t.sections.faqTitle}
                text=""
              />
            </Reveal>

            <div className="mt-7 grid gap-4">
              {t.faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 0.03}>
                  <FAQItem q={item.q} a={item.a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-12 pb-24 md:px-10 md:pb-12">
          <Reveal>
            <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-[linear-gradient(135deg,#0f172a_0%,#0f2d4d_55%,#075985_100%)] p-8 text-white shadow-[0_24px_70px_rgba(2,6,23,0.28)] md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="min-w-0">
                  <div className="text-sm font-medium tracking-[0.3em] text-sky-200">
                    {t.sections.ctaTag}
                  </div>
                  <h2 className="mt-3 break-words text-5xl font-black leading-none md:text-7xl">
                    {t.sections.ctaTitle}
                  </h2>
                  <p className="mt-5 max-w-2xl break-words text-lg leading-8 text-slate-200">
                    {t.sections.ctaText}
                  </p>
                </div>

                <div className="rounded-[1.7rem] bg-white/10 p-6 backdrop-blur">
                  <div className="text-2xl font-black">{t.contact.cardTitle}</div>

                  <div className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-300">
                    {t.contact.priceLabel}
                  </div>
                  <div className="mt-2 text-5xl font-black leading-none text-white md:text-6xl">
                    129 000 ₸
                  </div>

                  <div className="mt-4 text-slate-200">WhatsApp: +7 706 606 0985</div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={whatsappOrder}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-4 text-base font-black text-white transition hover:bg-green-600"
                    >
                      <WhatsAppIcon />
                      {t.contact.whatsapp}
                    </a>

                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-black text-white transition hover:bg-white/15"
                    >
                      <InstagramIcon />
                      {t.contact.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <FloatingDesktop
        whatsapp={whatsappMain}
        onCalc={() => setCalcOpen(true)}
        calcLabel={t.contact.calc}
      />

      <StickyMobileCTA
        label={t.contact.mobile}
        href={whatsappMain}
        calcLabel={t.contact.calc}
        onCalc={() => setCalcOpen(true)}
      />

      <CalculatorModal
        open={calcOpen}
        onClose={() => setCalcOpen(false)}
        t={t}
      />
    </div>
  );
}