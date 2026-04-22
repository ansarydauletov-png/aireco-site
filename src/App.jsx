import { useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import heroImage from "./assets/hero.webp";
import uvImage from "./assets/uv-sterilization.webp";
import familyImage from "./assets/family-allergy.webp";
import heatingImage from "./assets/heating-top.webp";
import appControlImage from "./assets/app-control.webp";
import filterSystemImage from "./assets/filter-system.webp";
import warrantyImage from "./assets/warranty.webp";

const ease = [0.16, 1, 0.3, 1];

const BRAND = {
  blue: "#0040F4",
  yellow: "#FFD400",
  white: "#FFFFFF",
  black: "#000000",
};

const CONTENT = {
  ru: {
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
      title2: "дома и в офисе",
      text:
        "5-ступенчатая система очистки, фильтр HEPA H13, датчик PM2.5 и удобное управление через мобильное приложение.",
      primary: "написать в WhatsApp",
      secondary: "instagram",
      calc: "расчёт",
      scroll: "листай ниже",
    },
    trust: [
      "бесплатная доставка по Казахстану и России",
      "гарантия 12 месяцев",
      "поддержка и сервисное обслуживание",
      "управление в одно касание",
    ],
    stats: [
      ["500 м³/ч", "производительность"],
      ["HEPA H13", "фильтрация"],
      ["PM2.5", "умный датчик"],
      ["Wi-Fi", "управление"],
    ],
    premiumTitle: "Почему aireco ощущается как премиальное решение",
    premiumCards: [
      ["реальный авто-режим", "PM2.5 датчик сам регулирует мощность", "◉"],
      ["тихая работа", "комфортно для спальни и детской", "◌"],
      ["удобное перемещение", "колёсики и продуманная конструкция", "◎"],
      ["полный контроль", "каждая функция управляется отдельно", "✦"],
      ["современное управление", "приложение, сенсорная панель и пульт", "▣"],
      ["безопасность", "УФ-модуль полностью внутри корпуса", "◈"],
    ],
    sections: {
      technologyTag: "главная технология",
      technologyTitle: "УФ-стерилизация воздуха внутри очистителя",
      technologyText:
        "Помогает уничтожать бактерии и вирусы в паре с фотокаталитическим фильтром и усиливает общий эффект фильтрации.",

      filtrationTag: "система очистки",
      filtrationTitle: "5 ступеней фильтрации",
      filtrationText:
        "Моющийся пре-фильтр задерживает шерсть, крупную пыль и волосы. Основной HEPA H13 улавливает мелкие частицы, а фотокаталитический слой и УФ-модуль работают внутри системы.",

      familyTag: "для семьи",
      familyTitle: "Комфортный воздух для дома, детей и аллергиков",
      familyText:
        "aireco помогает поддерживать более чистый воздух в помещении и создавать более комфортную среду дома.",
      familyCards: [
        ["HEPA H13", "улавливает пыль, аллергены и мелкие частицы"],
        ["PM2.5 датчик", "контролирует качество воздуха в комнате"],
      ],

      calcTag: "калькулятор очистки",
      calcTitle: "За сколько времени aireco обновит воздух в вашей комнате?",
      calcText:
        "Введите площадь комнаты, и калькулятор покажет, за сколько минут устройство полностью прогонит и обновит воздух. Расчёт сделан при высоте потолка 3 м.",

      heatingTag: "особенность модели",
      heatingTitle: "Подогреваемая верхняя площадка",
      heatingText:
        "Верхнюю площадку можно использовать как дополнительную удобную функцию или отключить и оставить прибор как стильный элемент интерьера.",
      heatingItems: [
        "функцию можно отключить",
        "подходит и для повседневного использования, и для интерьера",
      ],

      controlTag: "управление",
      controlTitle: "Полный контроль через приложение, пульт и сенсорную панель",
      controlText:
        "Удобный пульт, сенсорное управление на корпусе и мобильное приложение. Можно включать и выключать нужные функции, выбирать режимы и использовать таймер.",
      controlCards: [
        ["Wi-Fi", "управление со смартфона"],
        ["таймер 1–24 ч", "автоматическое отключение по расписанию"],
      ],

      specsTag: "характеристики",
      specsTitle: "Технические данные aireco",

      warrantyTag: "гарантия и доверие",
      warrantyTitle: "Гарантия 12 месяцев",
      warrantyText:
        "aireco рассчитан на постоянное использование дома и в офисе. Это полноценная система очистки с акцентом на безопасность, ресурс и удобство.",

      reviewsTag: "отзывы",
      reviewsTitle: "Что говорят клиенты",
      reviewsText:
        "Коротко собрали впечатления о том, как aireco ощущается в реальном использовании.",

      faqTag: "частые вопросы",
      faqTitle: "Всё, что важно знать перед покупкой",

      ctaTag: "заказать aireco",
      ctaTitle: "Готовы заказать очиститель воздуха?",
      ctaText:
        "Напишите в WhatsApp или Instagram, и мы быстро подскажем по наличию, доставке и ответим на вопросы.",
    },
    specs: [
      "CADR: до 500 м³/ч",
      "датчик PM2.5",
      "HEPA H13",
      "моющийся пре-фильтр",
      "фотокаталитический фильтр",
      "УФ-стерилизация",
      "ионизация воздуха",
      "Wi-Fi",
      "пульт дистанционного управления",
      "сенсорная панель на корпусе",
      "таймер 1–24 часа",
      "тихий ночной режим",
      "подсветка с возможностью отключения",
      "напоминание о замене фильтра",
    ],
    reviews: [
      {
        name: "Айгерим",
        city: "Алматы",
        text: "Поставили дома в спальне. Воздух ощущается свежее, ночью работает тихо и детям не мешает.",
      },
      {
        name: "Нурсултан",
        city: "Астана",
        text: "Нравится, что можно управлять через приложение. Выглядит аккуратно и не портит интерьер.",
      },
      {
        name: "Данияр",
        city: "Шымкент",
        text: "Брали для офиса. Работает стабильно, удобно что есть авто-режим и понятное управление.",
      },
    ],
    faq: [
      [
        "Подходит ли для квартиры?",
        "Да. aireco подходит для квартиры, дома, спальни, детской и офиса.",
      ],
      [
        "Можно ли использовать постоянно?",
        "Да. Устройство подходит для постоянной работы.",
      ],
      [
        "Безопасен ли УФ-модуль?",
        "Да. УФ-модуль находится внутри корпуса и полностью изолирован.",
      ],
      [
        "Как управлять устройством?",
        "Через сенсорную панель, пульт или мобильное приложение.",
      ],
      [
        "Есть ли напоминание о замене фильтра?",
        "Да, система напоминает о необходимости обслуживания.",
      ],
    ],
    contact: {
      phoneLabel: "связь и заказ через WhatsApp",
      cardTitle: "связаться сейчас",
      priceLabel: "цена",
      whatsapp: "перейти в WhatsApp",
      instagram: "открыть Instagram",
      mobile: "заказать в WhatsApp",
      calc: "расчёт",
    },
  },
};

const FILTER_POINTS = [
  {
    id: "pre",
    title: "Моющийся пре-фильтр",
    text: "Задерживает шерсть, крупную пыль и волосы. Его можно очищать и использовать дальше.",
    desktop: { left: "16%", top: "56%" },
  },
  {
    id: "hepa",
    title: "Основной HEPA H13",
    text: "Улавливает мелкие частицы, пыль и аллергены и делает воздух в помещении заметно чище.",
    desktop: { left: "49%", top: "56%" },
  },
  {
    id: "photo",
    title: "Фотокаталитический слой",
    text: "Работает в паре с УФ-модулем внутри системы и усиливает общий эффект очистки.",
    desktop: { left: "82%", top: "56%" },
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
        <p className="mt-4 max-w-2xl break-words text-[16px] leading-7 text-slate-500">
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

function ImageCard({ src, alt, className = "", imageClassName = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease }}
      className={`overflow-hidden rounded-[1.8rem] border border-white/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease }}
        className={`block w-full h-auto ${imageClassName}`}
      />
    </motion.div>
  );
}

function PremiumGrid({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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

function CheckList({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 0.04}>
          <SoftCard className="px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white">
                ✓
              </div>
              <div className="text-[17px] leading-7 text-slate-700">{item}</div>
            </div>
          </SoftCard>
        </Reveal>
      ))}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[1.4rem] border border-slate-200 bg-white shadow-sm">
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
        <div className="px-6 pb-5 text-[16px] leading-7 text-slate-600">{a}</div>
      </motion.div>
    </div>
  );
}

function TrustStrip({ items }) {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
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

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {t.reviews.map((review, i) => (
          <Reveal key={review.name + review.city} delay={i * 0.05}>
            <SoftCard className="h-full p-6">
              <div className="mb-3 flex gap-1 text-amber-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="leading-7 text-slate-600">{review.text}</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <div className="font-black text-slate-950">{review.name}</div>
                <div className="text-sm text-slate-500">{review.city}</div>
              </div>
            </SoftCard>
          </Reveal>
        ))}
      </div>
    </section>
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
          insta
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

function FloatingDesktop({ whatsapp, instagram, onCalc, calcLabel }) {
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
        href={instagram}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-sm font-black text-pink-600 shadow-[0_20px_50px_rgba(0,0,0,0.10)] ring-1 ring-slate-200 transition duration-300 hover:scale-[1.03]"
      >
        <InstagramIcon />
        Instagram
      </a>

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
          animate={{
            y: [-8, 10, -8],
            x: [0, 5, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
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
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
      aria-hidden="true"
    >
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
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CalculatorModal({ open, onClose, t }) {
  const [area, setArea] = useState(20);
  const cleanArea = Number.isFinite(Number(area)) ? Number(area) : 0;
  const height = 3;
  const volume = cleanArea * height;
  const minutes = volume > 0 ? (volume / 500) * 60 : 0;
  const cycles = volume > 0 ? 500 / volume : 0;

  const formatMinutes = (value) => {
    if (!value || value <= 0) return "—";
    if (value < 1) return "меньше 1 мин";
    return `${Math.ceil(value)} мин`;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-black/45 p-4 backdrop-blur-sm">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-2xl rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.2)] md:p-8">
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
                  ? `Комната ${cleanArea} м² будет полностью прогнана и освежена примерно за ${formatMinutes(
                      minutes
                    )}.`
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

function FilterHotspots() {
  const [active, setActive] = useState("hepa");
  const activeData = useMemo(
    () => FILTER_POINTS.find((item) => item.id === active) ?? FILTER_POINTS[1],
    [active]
  );

  return (
    <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <Reveal variant="left">
        <div className="relative mx-auto w-full max-w-[520px]">
          <img
            src={filterSystemImage}
            alt="filter system"
            className="block h-auto w-full object-contain"
          />

          <div className="hidden lg:block">
            {FILTER_POINTS.map((point) => (
              <button
                key={point.id}
                onClick={() => setActive(point.id)}
                className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#D9842D] text-3xl font-medium text-white shadow-[0_12px_30px_rgba(217,132,45,0.35)] transition hover:scale-105"
                style={point.desktop}
              >
                +
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal variant="right">
        <div className="grid gap-3">
          {FILTER_POINTS.map((point) => {
            const isActive = active === point.id;
            return (
              <SoftCard key={point.id} className="p-4">
                <button
                  onClick={() => setActive(isActive ? "" : point.id)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-lg font-black text-slate-950">{point.title}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9842D] text-2xl text-white">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {isActive ? (
                  <div className="pt-3 text-[16px] leading-7 text-slate-600">
                    {point.text}
                  </div>
                ) : null}
              </SoftCard>
            );
          })}

          <SoftCard className="p-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-600">
              как работает фильтрация
            </div>
            <h3 className="mt-3 text-2xl font-black text-slate-950">{activeData.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{activeData.text}</p>
          </SoftCard>
        </div>
      </Reveal>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("ru");
  const [calcOpen, setCalcOpen] = useState(false);
  const t = useMemo(() => CONTENT[lang], [lang]);

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
<div className="min-h-screen overflow-x-hidden text-slate-900">
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

          <div className="flex items-center gap-2">
            {["ru", "kz", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-xl px-3 py-2 text-sm font-bold transition ${
                  lang === code
                    ? "bg-slate-950 text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-950"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
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
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-700 shadow-sm transition duration-300 hover:border-pink-300 hover:text-pink-600"
                  >
                    <InstagramIcon />
                    {t.hero.secondary}
                  </a>
                </div>

                <div className="mt-7 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
                  {t.stats.map(([value, label], i) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.9, delay: i * 0.06, ease }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="min-w-0 rounded-[1.3rem] border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur"
                    >
                      <div className="break-words text-lg font-black text-slate-950 md:text-xl">
                        {value}
                      </div>
                      <div className="mt-1 break-words text-sm leading-5 text-slate-500">
                        {label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 text-sm font-semibold text-slate-400">
                  {t.hero.scroll}
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
              <ImageCard
                src={uvImage}
                alt="uv sterilization"
                className="mx-auto max-w-5xl"
                imageClassName="object-contain bg-white h-auto max-h-[700px]"
              />
            </Reveal>
          </div>
        </section>

        <section id="filtration" className="bg-white/40 py-10 backdrop-blur-[2px]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <SectionTitle
                tag={t.sections.filtrationTag}
                title={t.sections.filtrationTitle}
                text={t.sections.filtrationText}
              />
            </Reveal>

            <div className="mt-7">
              <FilterHotspots />
            </div>
          </div>
        </section>

        <section id="family" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal variant="left">
              <ImageCard
                src={familyImage}
                alt="family comfort"
                className="mx-auto max-w-[520px]"
                imageClassName="h-[470px] object-cover object-center"
              />
            </Reveal>

            <Reveal variant="right">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.familyTag}
                  title={t.sections.familyTitle}
                  text={t.sections.familyText}
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {t.sections.familyCards.map(([title, text], i) => (
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

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-center">
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
              <ImageCard
                src={heatingImage}
                alt="heated top"
                className="mx-auto max-w-[420px]"
                imageClassName="h-[360px] object-cover object-center"
              />
            </Reveal>
          </div>
        </section>

        <section id="control" className="bg-white/40 py-10 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl gap-7 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal variant="left" className="lg:order-2">
              <ImageCard
                src={appControlImage}
                alt="app control"
                className="mx-auto max-w-[420px]"
                imageClassName="h-[360px] object-cover object-center"
              />
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
              <ImageCard
                src={warrantyImage}
                alt="warranty"
                className="mx-auto max-w-[360px]"
                imageClassName="h-[420px] object-cover object-center"
              />
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
              {t.faq.map(([q, a], i) => (
                <Reveal key={q} delay={i * 0.03}>
                  <FAQItem q={q} a={a} />
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
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">
                    {t.sections.ctaTag}
                  </div>
                  <h2 className="mt-3 break-words text-4xl font-black leading-tight md:text-6xl">
                    {t.sections.ctaTitle}
                  </h2>
                  <p className="mt-5 max-w-2xl break-words text-lg leading-8 text-slate-200">
                    {t.sections.ctaText}
                  </p>
                </div>

                <div className="rounded-[1.7rem] bg-white/10 p-6 backdrop-blur">
                  <div className="text-2xl font-black">{t.contact.cardTitle}</div>
                  <div className="mt-4 text-slate-200">
                    {t.contact.priceLabel}: 129 000 ₸
                  </div>
                  <div className="mt-1 text-slate-200">WhatsApp: +7 706 606 0985</div>

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
        instagram={instagramLink}
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