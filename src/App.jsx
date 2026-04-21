import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import heroImage from "./assets/hero.webp";
import uvImage from "./assets/uv-sterilization.webp";
import familyImage from "./assets/family-allergy.webp";
import heatingImage from "./assets/heating-top.webp";
import appControlImage from "./assets/app-control.webp";
import filterSystemImage from "./assets/filter-system.webp";
import warrantyImage from "./assets/warranty.webp";

const WHATSAPP_LINK = "https://wa.me/77066060985";
const INSTAGRAM_LINK = "https://www.instagram.com/aireco.kz/";

const translations = {
  ru: {
    nav: {
      technology: "технологии",
      filter: "фильтрация",
      comfort: "комфорт",
      control: "управление",
      specs: "характеристики",
      faq: "вопросы",
      order: "заказать",
    },
    hero: {
      badge: "очиститель воздуха нового поколения",
      titleTop: "aireco — чистый воздух",
      titleAccent: "дома, в офисе",
      titleBottom: "и в спальне",
      description:
        "5-ступенчатая система очистки, HEPA H13, датчик PM2.5, автоматический режим, тихая работа ночью и управление через приложение Tuya.",
      priceLabel: "цена",
      priceValue: "129 000 ₸",
      availability: "подходит для постоянной работы",
      whatsapp: "написать в WhatsApp",
      instagram: "Instagram",
      h1: "Очиститель воздуха aireco для дома и офиса",
    },
    stats: [
      { value: "500 м³/ч", label: "производительность CADR" },
      { value: "HEPA H13", label: "основной фильтр" },
      { value: "< 45 дБ", label: "тихий ночной режим" },
      { value: "Wi-Fi", label: "управление через Tuya" },
    ],
    sections: {
      technology: {
        eyebrow: "главная технология",
        title: "УФ-стерилизация воздуха внутри очистителя",
        text: "УФ-излучение работает внутри корпуса и не выходит наружу. Воздух проходит обработку в безопасной зоне внутри устройства.",
      },
      filtration: {
        eyebrow: "система фильтрации",
        title: "5 ступеней очистки для пыли, аллергенов и запахов",
        text: "Моющийся пре-фильтр задерживает шерсть, волосы и крупную пыль. Основной HEPA H13 улавливает мельчайшие частицы, а фотокаталитический слой и УФ-лампа дополняют глубокую очистку воздуха.",
      },
      family: {
        eyebrow: "для дома и семьи",
        title: "Комфортный воздух для дома, детей и аллергиков",
        text: "Подходит для ежедневной работы в спальне, гостиной и детской. Снижает количество частиц и аллергенов в воздухе, помогая создать более чистую среду дома.",
      },
      comfort: {
        eyebrow: "комфорт",
        title: "Подогреваемая верхняя площадка и продуманный дизайн",
        text: "Верхняя площадка может использоваться как тёплая зона для уюта или как декоративная поверхность. Устройство выглядит аккуратно и вписывается в интерьер.",
      },
      control: {
        eyebrow: "управление",
        title: "Полный контроль через приложение, пульт и сенсорную панель",
        text: "Изменяй скорость, включай подсветку, переключай режимы и следи за качеством воздуха. Управление доступно с панели, пульта и смартфона.",
      },
      warranty: {
        eyebrow: "гарантия и поддержка",
        title: "12 месяцев официальной гарантии",
        text: "При обнаружении заводского дефекта устройство бесплатно ремонтируется или заменяется. Также доступна поддержка после покупки.",
      },
    },
    specsTitle: "Технические характеристики",
    specs: [
      ["Модель", "aireco"],
      ["Производительность CADR", "до 500 м³/ч"],
      ["Фильтрация", "5 ступеней"],
      ["Основной фильтр", "HEPA H13"],
      ["УФ-стерилизация", "есть"],
      ["Датчик качества воздуха", "PM2.5"],
      ["Управление", "панель / пульт / приложение Tuya"],
      ["Ночной режим", "менее 45 дБ"],
      ["Подключение", "Wi-Fi"],
      ["Назначение", "дом / офис / спальня"],
    ],
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "УФ-излучение безопасно?",
        a: "Да. УФ-обработка происходит внутри корпуса, излучение не выходит наружу при нормальной эксплуатации.",
      },
      {
        q: "Подходит ли для спальни?",
        a: "Да. Есть тихий ночной режим, устройство рассчитано на постоянную работу дома.",
      },
      {
        q: "Можно ли управлять со смартфона?",
        a: "Да. Поддерживается управление через приложение Tuya по Wi-Fi.",
      },
      {
        q: "Есть ли гарантия?",
        a: "Да. На устройство действует официальная гарантия 12 месяцев.",
      },
    ],
    cta: {
      title: "Готовы заказать aireco?",
      text: "Напишите нам в WhatsApp или перейдите в Instagram, чтобы получить консультацию и оформить заказ.",
      primary: "написать в WhatsApp",
      secondary: "перейти в Instagram",
    },
    footer: {
      rights: "Все права защищены",
      made: "Очиститель воздуха для дома и офиса в Казахстане",
    },
  },

  kz: {
    nav: {
      technology: "технология",
      filter: "сүзгілеу",
      comfort: "жайлылық",
      control: "басқару",
      specs: "сипаттама",
      faq: "сұрақтар",
      order: "тапсырыс",
    },
    hero: {
      badge: "жаңа буын ауа тазартқышы",
      titleTop: "aireco — таза ауа",
      titleAccent: "үйде, кеңседе",
      titleBottom: "және жатын бөлмеде",
      description:
        "5 сатылы тазарту жүйесі, HEPA H13, PM2.5 датчигі, автоматты режим, түнгі тыныш жұмыс және Tuya қолданбасы арқылы басқару.",
      priceLabel: "бағасы",
      priceValue: "129 000 ₸",
      availability: "үздіксіз жұмысқа жарайды",
      whatsapp: "WhatsApp-қа жазу",
      instagram: "Instagram",
      h1: "Үй мен кеңсеге арналған aireco ауа тазартқышы",
    },
    stats: [
      { value: "500 м³/сағ", label: "CADR өнімділігі" },
      { value: "HEPA H13", label: "негізгі сүзгі" },
      { value: "< 45 дБ", label: "тыныш түнгі режим" },
      { value: "Wi-Fi", label: "Tuya арқылы басқару" },
    ],
    sections: {
      technology: {
        eyebrow: "негізгі технология",
        title: "Тазартқыш ішіндегі УК-стерилизация",
        text: "УК-сәуле құрылғының ішінде жұмыс істейді және сыртқа шықпайды. Ауа қауіпсіз аймақтың ішінде өңделеді.",
      },
      filtration: {
        eyebrow: "сүзгілеу жүйесі",
        title: "Шаң, аллергендер мен иістерге қарсы 5 саты",
        text: "Жуылатын пре-сүзгі жүн, шаш және ірі шаңды ұстайды. HEPA H13 ұсақ бөлшектерді сүзеді, ал фотокаталитикалық қабат пен УК-шам тазартуды толықтырады.",
      },
      family: {
        eyebrow: "үйге арналған",
        title: "Үйге, балаларға және аллергиясы бар адамдарға қолайлы ауа",
        text: "Жатын бөлмеде, қонақ бөлмеде және балалар бөлмесінде күнделікті пайдалануға жарайды. Ауадағы бөлшектер мен аллергендерді азайтуға көмектеседі.",
      },
      comfort: {
        eyebrow: "жайлылық",
        title: "Жылытылатын үстіңгі алаң және ойластырылған дизайн",
        text: "Үстіңгі алаңды жылы жайлылық аймағы немесе декоративті бет ретінде пайдалануға болады. Құрылғы интерьерге ұқыпты үйлеседі.",
      },
      control: {
        eyebrow: "басқару",
        title: "Қолданба, пульт және сенсорлы панель арқылы толық басқару",
        text: "Жылдамдықты өзгертіңіз, жарықты қосыңыз, режимдерді ауыстырыңыз және ауа сапасын бақылаңыз.",
      },
      warranty: {
        eyebrow: "кепілдік",
        title: "12 ай ресми кепілдік",
        text: "Зауыттық ақау анықталса, құрылғы тегін жөнделеді немесе жаңасына ауыстырылады.",
      },
    },
    specsTitle: "Техникалық сипаттамалар",
    specs: [
      ["Модель", "aireco"],
      ["CADR өнімділігі", "500 м³/сағ дейін"],
      ["Сүзгілеу", "5 саты"],
      ["Негізгі сүзгі", "HEPA H13"],
      ["УК-стерилизация", "бар"],
      ["Ауа сапасы датчигі", "PM2.5"],
      ["Басқару", "панель / пульт / Tuya қолданбасы"],
      ["Түнгі режим", "45 дБ төмен"],
      ["Қосылу", "Wi-Fi"],
      ["Қолдану", "үй / кеңсе / жатын бөлме"],
    ],
    faqTitle: "Жиі қойылатын сұрақтар",
    faq: [
      {
        q: "УК-сәуле қауіпсіз бе?",
        a: "Иә. УК өңдеу құрылғының ішінде жүреді және қалыпты пайдалану кезінде сыртқа шықпайды.",
      },
      {
        q: "Жатын бөлмеге жарай ма?",
        a: "Иә. Тыныш түнгі режимі бар және тұрақты жұмысқа арналған.",
      },
      {
        q: "Смартфонмен басқаруға бола ма?",
        a: "Иә. Tuya қолданбасы арқылы Wi-Fi басқару бар.",
      },
      {
        q: "Кепілдік бар ма?",
        a: "Иә. Құрылғыға 12 ай ресми кепілдік беріледі.",
      },
    ],
    cta: {
      title: "aireco-ға тапсырыс беруге дайынсыз ба?",
      text: "Кеңес алу және тапсырыс беру үшін WhatsApp-қа жазыңыз немесе Instagram-ға өтіңіз.",
      primary: "WhatsApp-қа жазу",
      secondary: "Instagram-ға өту",
    },
    footer: {
      rights: "Барлық құқықтар қорғалған",
      made: "Қазақстандағы үй мен кеңсеге арналған ауа тазартқыш",
    },
  },

  en: {
    nav: {
      technology: "technology",
      filter: "filtration",
      comfort: "comfort",
      control: "control",
      specs: "specs",
      faq: "faq",
      order: "order",
    },
    hero: {
      badge: "next-generation air purifier",
      titleTop: "aireco — clean air",
      titleAccent: "at home, in the office",
      titleBottom: "and in the bedroom",
      description:
        "5-stage purification system, HEPA H13, PM2.5 sensor, auto mode, quiet night operation and control via the Tuya app.",
      priceLabel: "price",
      priceValue: "129 000 ₸",
      availability: "suitable for continuous operation",
      whatsapp: "message on WhatsApp",
      instagram: "Instagram",
      h1: "Aireco air purifier for home and office",
    },
    stats: [
      { value: "500 m³/h", label: "CADR performance" },
      { value: "HEPA H13", label: "main filter" },
      { value: "< 45 dB", label: "quiet night mode" },
      { value: "Wi-Fi", label: "Tuya app control" },
    ],
    sections: {
      technology: {
        eyebrow: "core technology",
        title: "UV air sterilization inside the purifier",
        text: "UV treatment works inside the unit and does not escape outside. Air is processed in a protected internal zone.",
      },
      filtration: {
        eyebrow: "filtration system",
        title: "5 stages of purification for dust, allergens and odors",
        text: "The washable pre-filter captures hair, fur and large dust. HEPA H13 traps fine particles, while the photocatalytic layer and UV lamp enhance deep purification.",
      },
      family: {
        eyebrow: "for home and family",
        title: "Comfortable air for home, children and allergy-sensitive spaces",
        text: "Suitable for everyday use in bedrooms, living rooms and family spaces. Helps reduce airborne particles and allergens.",
      },
      comfort: {
        eyebrow: "comfort",
        title: "Heated top platform and refined design",
        text: "The top platform can be used as a warm comfort zone or a decorative surface. The device is designed to fit neatly into modern interiors.",
      },
      control: {
        eyebrow: "control",
        title: "Full control via app, remote and touch panel",
        text: "Adjust speed, switch modes, control lighting and monitor air quality from the panel, remote or smartphone.",
      },
      warranty: {
        eyebrow: "warranty",
        title: "12-month official warranty",
        text: "If a factory defect is found, the unit is repaired or replaced free of charge.",
      },
    },
    specsTitle: "Technical specifications",
    specs: [
      ["Model", "aireco"],
      ["CADR performance", "up to 500 m³/h"],
      ["Filtration", "5 stages"],
      ["Main filter", "HEPA H13"],
      ["UV sterilization", "yes"],
      ["Air quality sensor", "PM2.5"],
      ["Control", "panel / remote / Tuya app"],
      ["Night mode", "below 45 dB"],
      ["Connectivity", "Wi-Fi"],
      ["Use case", "home / office / bedroom"],
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Is UV treatment safe?",
        a: "Yes. UV treatment happens inside the unit and does not radiate outside during normal operation.",
      },
      {
        q: "Is it suitable for the bedroom?",
        a: "Yes. It has a quiet night mode and is designed for continuous home use.",
      },
      {
        q: "Can I control it with my phone?",
        a: "Yes. It supports Wi-Fi control through the Tuya app.",
      },
      {
        q: "Is there a warranty?",
        a: "Yes. The unit includes a 12-month official warranty.",
      },
    ],
    cta: {
      title: "Ready to order aireco?",
      text: "Message us on WhatsApp or visit Instagram to get consultation and place an order.",
      primary: "message on WhatsApp",
      secondary: "open Instagram",
    },
    footer: {
      rights: "All rights reserved",
      made: "Air purifier for home and office in Kazakhstan",
    },
  },
};

const sectionMotion = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: 6 + ((i * 7) % 18),
        left: `${(i * 5.4 + 7) % 100}%`,
        duration: 12 + (i % 6) * 2,
        delay: i * 0.45,
        opacity: 0.08 + (i % 5) * 0.03,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-30px",
            opacity: p.opacity,
            filter: "blur(1px)",
          }}
          animate={{
            y: [-10, -520],
            x: [0, p.id % 2 === 0 ? 22 : -18, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 shadow-sm backdrop-blur">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}

function VisualCard({ src, alt, className = "", imageClassName = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`group overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_24px_80px_rgba(14,30,54,0.10)] backdrop-blur ${className}`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          className={`block h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${imageClassName}`}
        />
      </div>
    </motion.div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="transition-colors duration-300 hover:text-sky-700"
    >
      {children}
    </a>
  );
}

function App() {
  const [lang, setLang] = useState("ru");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#edf7ff_0%,#f7fbff_22%,#ffffff_52%,#f6fbff_78%,#eef7ff_100%)] text-slate-900">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <a href="#top" className="text-xl font-bold tracking-tight text-slate-950">
            aireco
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            <NavLink href="#technology">{t.nav.technology}</NavLink>
            <NavLink href="#filter">{t.nav.filter}</NavLink>
            <NavLink href="#comfort">{t.nav.comfort}</NavLink>
            <NavLink href="#control">{t.nav.control}</NavLink>
            <NavLink href="#specs">{t.nav.specs}</NavLink>
            <NavLink href="#faq">{t.nav.faq}</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            {["ru", "kz", "en"].map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-all ${
                  lang === item
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main id="top" className="relative overflow-hidden">
        <section className="relative pt-28 md:pt-32">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="absolute right-[-120px] top-32 h-[360px] w-[360px] rounded-full bg-cyan-200/30 blur-3xl" />
            <div className="absolute left-[-140px] bottom-0 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-3xl" />
            <FloatingParticles />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-12 md:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
            <FadeIn>
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.20em] text-sky-700 shadow-sm backdrop-blur">
                  {t.hero.badge}
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                  <span className="block">{t.hero.titleTop}</span>
                  <span className="block text-sky-700">{t.hero.titleAccent}</span>
                  <span className="block">{t.hero.titleBottom}</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  {t.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="rounded-[1.6rem] bg-slate-950 px-5 py-4 text-white shadow-[0_20px_50px_rgba(15,23,42,0.25)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      {t.hero.priceLabel}
                    </div>
                    <div className="mt-1 text-3xl font-bold">{t.hero.priceValue}</div>
                  </div>

                  <div className="rounded-full border border-emerald-200 bg-emerald-50/90 px-6 py-4 text-sm font-semibold text-emerald-700 shadow-sm">
                    {t.hero.availability}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600"
                  >
                    {t.hero.whatsapp}
                  </a>

                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50"
                  >
                    {t.hero.instagram}
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-white/40 blur-2xl" />
                <VisualCard
                  src={heroImage}
                  alt="aireco hero"
                  className="relative rounded-[2.4rem]"
                  imageClassName="h-[420px] w-full object-cover object-center md:h-[560px]"
                />

                <div className="pointer-events-none absolute bottom-5 left-5 right-5 hidden items-center justify-between gap-4 md:flex">
                  <div className="rounded-full bg-white/92 px-5 py-3 text-sm font-semibold text-slate-700 shadow-lg backdrop-blur">
                    {t.hero.priceValue}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={INSTAGRAM_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="pointer-events-auto rounded-full bg-white/92 px-5 py-3 text-sm font-semibold text-pink-600 shadow-lg backdrop-blur"
                    >
                      {t.hero.instagram}
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="pointer-events-auto rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mx-auto mt-2 grid max-w-7xl grid-cols-2 gap-4 px-4 pb-16 md:grid-cols-4 md:px-6 lg:px-8">
            {t.stats.map((item, idx) => (
              <FadeIn key={item.label} delay={idx * 0.04}>
                <div className="rounded-[1.7rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur">
                  <div className="text-2xl font-bold text-slate-950">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-500">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <FadeIn>
              <SectionHeading
                eyebrow={t.sections.technology.eyebrow}
                title={t.sections.technology.title}
                text={t.sections.technology.text}
              />
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="grid gap-5 md:grid-cols-2">
                <VisualCard
                  src={uvImage}
                  alt="uv sterilization"
                  className="md:col-span-2"
                  imageClassName="h-[300px] w-full object-cover object-center md:h-[380px]"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="filter" className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <FadeIn delay={0.04}>
              <VisualCard
                src={filterSystemImage}
                alt="filter system"
                imageClassName="h-[360px] w-full object-cover object-center md:h-[520px]"
              />
            </FadeIn>

            <FadeIn>
              <SectionHeading
                eyebrow={t.sections.filtration.eyebrow}
                title={t.sections.filtration.title}
                text={t.sections.filtration.text}
              />
            </FadeIn>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <FadeIn>
              <SectionHeading
                eyebrow={t.sections.family.eyebrow}
                title={t.sections.family.title}
                text={t.sections.family.text}
              />
            </FadeIn>

            <FadeIn delay={0.04}>
              <VisualCard
                src={familyImage}
                alt="family allergy"
                imageClassName="h-[360px] w-full object-cover object-center md:h-[500px]"
              />
            </FadeIn>
          </div>
        </section>

        <section id="comfort" className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <FadeIn delay={0.04}>
              <VisualCard
                src={heatingImage}
                alt="heated top"
                imageClassName="h-[360px] w-full object-cover object-center md:h-[500px]"
              />
            </FadeIn>

            <FadeIn>
              <SectionHeading
                eyebrow={t.sections.comfort.eyebrow}
                title={t.sections.comfort.title}
                text={t.sections.comfort.text}
              />
            </FadeIn>
          </div>
        </section>

        <section id="control" className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <FadeIn>
              <SectionHeading
                eyebrow={t.sections.control.eyebrow}
                title={t.sections.control.title}
                text={t.sections.control.text}
              />
            </FadeIn>

            <FadeIn delay={0.04}>
              <VisualCard
                src={appControlImage}
                alt="app control"
                imageClassName="h-[360px] w-full object-cover object-center md:h-[500px]"
              />
            </FadeIn>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <FadeIn delay={0.04}>
              <VisualCard
                src={warrantyImage}
                alt="warranty"
                imageClassName="h-[360px] w-full object-cover object-center md:h-[500px]"
              />
            </FadeIn>

            <FadeIn>
              <SectionHeading
                eyebrow={t.sections.warranty.eyebrow}
                title={t.sections.warranty.title}
                text={t.sections.warranty.text}
              />
            </FadeIn>
          </div>
        </section>

        <section id="specs" className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="specs"
              title={t.specsTitle}
              text={lang === "ru"
                ? "Ключевые параметры устройства для выбора и сравнения."
                : lang === "kz"
                ? "Құрылғыны таңдау мен салыстыруға арналған негізгі параметрлер."
                : "Key device parameters for selection and comparison."}
              align="center"
            />
          </FadeIn>

          <FadeIn delay={0.05} className="mt-10">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
              {t.specs.map(([label, value], idx) => (
                <div
                  key={label}
                  className={`grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[0.9fr_1.1fr] md:px-8 ${
                    idx !== t.specs.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </div>
                  <div className="text-base font-medium text-slate-800">{value}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="faq"
              title={t.faqTitle}
              text={
                lang === "ru"
                  ? "Коротко ответили на самые важные вопросы перед покупкой."
                  : lang === "kz"
                  ? "Сатып алмас бұрын ең маңызды сұрақтарға қысқаша жауап."
                  : "Short answers to the most important questions before purchase."
              }
              align="center"
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.faq.map((item, idx) => (
              <FadeIn key={item.q} delay={idx * 0.05}>
                <div className="rounded-[1.8rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur">
                  <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section
          id="order"
          className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-6 lg:px-8 lg:pb-24"
        >
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(135deg,#0f172a_0%,#15324f_40%,#1d4f70_100%)] px-6 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.28)] md:px-10 md:py-14">
              <div className="absolute inset-0 opacity-20">
                <FloatingParticles />
              </div>

              <div className="relative z-10 max-w-3xl">
                <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  aireco
                </div>

                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  {t.cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                  {t.cta.text}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600"
                  >
                    {t.cta.primary}
                  </a>

                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
                  >
                    {t.cta.secondary}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <div className="font-semibold text-slate-900">aireco</div>
          <div>{t.footer.made}</div>
          <div>© 2026 aireco. {t.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}

export default App;