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

const DICT = {
  ru: {
    brand: "aireco",
    nav: {
      technology: "технологии",
      filtration: "фильтрация",
      comfort: "комфорт",
      control: "управление",
      specs: "характеристики",
      faq: "вопросы",
      contact: "заказать",
    },
    topBadge: "очиститель воздуха нового поколения",
    heroTitle1: "чистый воздух",
    heroTitle2: "дома, в офисе",
    heroTitle3: "и в спальне",
    heroText:
      "5-ступенчатая система очистки, HEPA H13, датчик PM2.5, автоматический режим, тихая работа ночью и управление через приложение Tuya.",
    price: "129 000 ₸",
    priceLabel: "цена",
    permanent: "подходит для постоянной работы",
    whatsapp: "написать в WhatsApp",
    instagram: "instagram",
    facts: [
      ["500 м³/ч", "производительность"],
      ["HEPA H13", "фильтрация"],
      ["PM2.5", "умный датчик"],
      ["Wi-Fi", "управление"],
    ],
    sections: {
      technologyTag: "главная технология",
      technologyTitle: "УФ-стерилизация воздуха внутри очистителя",
      technologyText:
        "Помогает снижать количество бактерий и вирусов внутри системы очистки и усиливает общий эффект фильтрации.",
      filtrationTag: "система очистки",
      filtrationTitle: "5 ступеней фильтрации",
      filtrationText:
        "Моющийся пре-фильтр задерживает шерсть, крупную пыль и волосы. Основной HEPA H13 улавливает мелкие частицы, а фотокаталитический слой и УФ-модуль работают внутри системы.",
      comfortTag: "для семьи",
      comfortTitle: "Комфортный воздух для дома, детей и аллергиков",
      comfortText:
        "aireco помогает поддерживать более чистый воздух в помещении, снижать уровень мелких частиц и аллергенов и создавать более комфортную среду дома.",
      heatingTag: "особенность модели",
      heatingTitle: "Подогреваемая верхняя площадка",
      heatingText:
        "Верхнюю площадку можно использовать как дополнительную удобную функцию или отключить и оставить прибор как стильный элемент интерьера.",
      controlTag: "управление",
      controlTitle:
        "Полный контроль через приложение, пульт и сенсорную панель",
      controlText:
        "Подключение по Wi-Fi через Tuya, удобный пульт и сенсорное управление на корпусе. Можно включать и выключать нужные функции, выбирать режимы и использовать таймер.",
      specsTag: "характеристики",
      specsTitle: "Технические данные aireco",
      trustTag: "гарантия и доверие",
      trustTitle: "Гарантия 12 месяцев",
      trustText:
        "aireco рассчитан на постоянное использование дома и в офисе. Это полноценная система очистки с акцентом на безопасность, ресурс и удобство.",
      faqTag: "частые вопросы",
      faqTitle: "Всё, что важно знать перед покупкой",
      finalTag: "заказать aireco",
      finalTitle: "Готовы заказать очиститель воздуха?",
      finalText:
        "Напишите в WhatsApp или Instagram, и мы быстро подскажем по наличию, доставке и ответим на вопросы.",
    },
    bullets: [
      "5-ступенчатая система очистки",
      "HEPA H13 + фотокатализ + УФ внутри системы",
      "автоматическая регулировка мощности",
      "подходит для постоянной работы",
      "безопасен для домашнего использования",
      "управление через приложение и пульт",
    ],
    comfortCards: [
      ["HEPA H13", "улавливает PM2.5, пыльцу и аллергены"],
      ["< 45 дБ", "тихая работа ночью без лишнего шума"],
    ],
    heatingCards: [
      "функцию можно отключить",
      "подходит и для декора, и для повседневного использования",
    ],
    controlCards: [
      ["Wi-Fi / Tuya", "управление со смартфона"],
      ["таймер 1–24 ч", "автоматическое отключение по расписанию"],
    ],
    specs: [
      "CADR: до 500 м³/ч",
      "до 6 обновлений воздуха в час в комнате ~20 м²",
      "поддержание чистоты до 180 м²",
      "ночной режим: менее 45 дБ",
      "4 скорости очистки",
      "автоматический режим",
      "таймер 1–24 часа",
      "датчик PM2.5",
      "Wi-Fi / Tuya",
      "пульт дистанционного управления",
      "сенсорная панель на корпусе",
      "ионизация воздуха",
      "колёсики для перемещения",
      "подсветка с возможностью отключения",
      "напоминание о замене фильтра",
    ],
    featureGridTitle: "Почему aireco ощущается как премиальное решение",
    featureGrid: [
      ["реальный авто-режим", "PM2.5 датчик сам регулирует мощность"],
      ["тихая работа", "комфортно для спальни и детской"],
      ["удобное перемещение", "колёсики и продуманная конструкция"],
      ["полный контроль", "каждая функция управляется отдельно"],
      ["современное управление", "приложение, сенсорная панель и пульт"],
      ["безопасность", "УФ-модуль полностью внутри корпуса"],
    ],
    useCasesTitle: "Где aireco особенно полезен",
    useCases: [
      "квартира и дом",
      "детская и спальня",
      "офис и кабинет",
      "аллергики и семьи с детьми",
      "салоны и магазины",
      "пространства для постоянной работы",
    ],
    faq: [
      [
        "Подходит ли для квартиры?",
        "Да. aireco подходит для квартиры, дома, спальни, детской и офиса.",
      ],
      [
        "Можно ли использовать постоянно?",
        "Да. Устройство подходит для постоянной работы. Есть автоматический режим, ночной режим и защитные функции.",
      ],
      [
        "Безопасен ли УФ-модуль?",
        "Да. УФ-модуль находится внутри корпуса и полностью изолирован.",
      ],
      [
        "Как управлять устройством?",
        "Через сенсорную панель, пульт или приложение Tuya по Wi-Fi.",
      ],
      [
        "Есть ли напоминание о замене фильтра?",
        "Да, система напоминает о необходимости обслуживания.",
      ],
    ],
    trustPhoneLabel: "связь и заказ через WhatsApp",
    finalCardTitle: "связаться сейчас",
    finalCardPrice: "цена",
    finalCardWhatsApp: "WhatsApp",
    openInstagram: "открыть Instagram",
    goWhatsApp: "перейти в WhatsApp",
    scrollHint: "листай ниже",
  },
  kz: {
    brand: "aireco",
    nav: {
      technology: "технология",
      filtration: "сүзгілеу",
      comfort: "жайлылық",
      control: "басқару",
      specs: "сипаттама",
      faq: "сұрақтар",
      contact: "тапсырыс",
    },
    topBadge: "жаңа буындағы ауа тазартқыш",
    heroTitle1: "таза ауа",
    heroTitle2: "үйде, кеңседе",
    heroTitle3: "және жатын бөлмеде",
    heroText:
      "5 сатылы тазарту жүйесі, HEPA H13, PM2.5 датчигі, автоматты режим, түнгі тыныш жұмыс және Tuya қолданбасы арқылы басқару.",
    price: "129 000 ₸",
    priceLabel: "бағасы",
    permanent: "үздіксіз жұмысқа жарайды",
    whatsapp: "WhatsApp-қа жазу",
    instagram: "instagram",
    facts: [
      ["500 м³/сағ", "өнімділік"],
      ["HEPA H13", "сүзгілеу"],
      ["PM2.5", "ақылды датчик"],
      ["Wi-Fi", "басқару"],
    ],
    sections: {
      technologyTag: "негізгі технология",
      technologyTitle: "Тазартқыш ішіндегі УФ-стерилизация",
      technologyText:
        "Жүйе ішінде бактериялар мен вирустардың мөлшерін азайтуға көмектеседі және сүзгілеу әсерін күшейтеді.",
      filtrationTag: "тазарту жүйесі",
      filtrationTitle: "5 сатылы сүзгілеу",
      filtrationText:
        "Жуылатын пре-сүзгі жүнді, ірі шаңды және шашты ұстайды. Негізгі HEPA H13 ұсақ бөлшектерді сүзеді, ал фотокаталитикалық қабат пен УФ-модуль жүйе ішінде жұмыс істейді.",
      comfortTag: "отбасы үшін",
      comfortTitle: "Үйге, балаларға және аллергиясы барларға жайлы ауа",
      comfortText:
        "aireco бөлмедегі ауаны таза ұстауға, ұсақ бөлшектер мен аллергендерді азайтуға және үйде жайлы орта қалыптастыруға көмектеседі.",
      heatingTag: "модель ерекшелігі",
      heatingTitle: "Жылытылатын жоғарғы алаң",
      heatingText:
        "Жоғарғы алаңды қосымша ыңғайлы функция ретінде пайдалануға болады немесе өшіріп, құрылғыны интерьер элементі ретінде қалдыруға болады.",
      controlTag: "басқару",
      controlTitle: "Қолданба, пульт және сенсорлық панель арқылы толық басқару",
      controlText:
        "Tuya арқылы Wi-Fi қосылуы, ыңғайлы пульт және корпустағы сенсорлық басқару. Қажетті функцияларды қосып-өшіруге, режимдерді таңдауға және таймерді қолдануға болады.",
      specsTag: "сипаттама",
      specsTitle: "aireco техникалық деректері",
      trustTag: "кепілдік және сенім",
      trustTitle: "12 ай кепілдік",
      trustText:
        "aireco үйде және кеңседе тұрақты пайдалануға арналған. Бұл жай ғана әдемі құрылғы емес, қауіпсіздікке, ресурсқа және ыңғайлылыққа мән берілген толыққанды тазарту жүйесі.",
      faqTag: "жиі қойылатын сұрақтар",
      faqTitle: "Сатып алар алдында білу маңызды",
      finalTag: "aireco тапсырыс беру",
      finalTitle: "Ауа тазартқышқа тапсырыс беруге дайынсыз ба?",
      finalText:
        "WhatsApp немесе Instagram арқылы жазыңыз, біз бар-жоғын, жеткізуді айтып, сұрақтарға жылдам жауап береміз.",
    },
    bullets: [
      "5 сатылы тазарту жүйесі",
      "HEPA H13 + фотокатализ + жүйе ішіндегі УФ",
      "қуатты автоматты реттеу",
      "үздіксіз жұмысқа жарайды",
      "үйде қолдануға қауіпсіз",
      "қолданба және пульт арқылы басқару",
    ],
    comfortCards: [
      ["HEPA H13", "PM2.5, тозаң және аллергендерді ұстайды"],
      ["< 45 дБ", "түнде тыныш жұмыс істейді"],
    ],
    heatingCards: [
      "функцияны өшіруге болады",
      "декорға да, күнделікті қолдануға да ыңғайлы",
    ],
    controlCards: [
      ["Wi-Fi / Tuya", "смартфоннан басқару"],
      ["таймер 1–24 сағ", "кесте бойынша автоматты өшіру"],
    ],
    specs: [
      "CADR: 500 м³/сағ дейін",
      "шамамен 20 м² бөлмеде сағатына 6 ретке дейін ауаны жаңарту",
      "180 м² дейін тазалықты сақтау",
      "түнгі режим: 45 дБ-ден төмен",
      "4 тазарту жылдамдығы",
      "автоматты режим",
      "таймер 1–24 сағат",
      "PM2.5 датчигі",
      "Wi-Fi / Tuya",
      "қашықтан басқару пульті",
      "корпустағы сенсорлық панель",
      "иондау",
      "жылжытуға арналған дөңгелектер",
      "өшіруге болатын жарық",
      "сүзгіні ауыстыру еске салғышы",
    ],
    featureGridTitle: "Неге aireco премиум шешім болып сезіледі",
    featureGrid: [
      ["нақты авто-режим", "PM2.5 датчигі қуатты өзі реттейді"],
      ["тыныш жұмыс", "жатын бөлме мен балалар бөлмесіне ыңғайлы"],
      ["оңай жылжыту", "дөңгелектер мен ойластырылған құрылым"],
      ["толық бақылау", "әр функция бөлек қосылады"],
      ["заманауи басқару", "қолданба, сенсорлық панель және пульт"],
      ["қауіпсіздік", "УФ-модуль корпус ішінде орналасқан"],
    ],
    useCasesTitle: "aireco қай жерде әсіресе пайдалы",
    useCases: [
      "пәтер мен үй",
      "балалар бөлмесі мен жатын бөлме",
      "кеңсе мен кабинет",
      "аллергиясы бар адамдар мен балалар бар отбасылар",
      "салондар мен дүкендер",
      "тұрақты жұмыс істейтін кеңістіктер",
    ],
    faq: [
      [
        "Пәтерге жарай ма?",
        "Иә. aireco пәтерге, үйге, жатын бөлмеге, балалар бөлмесіне және кеңсеге жарайды.",
      ],
      [
        "Үнемі қосып қоюға бола ма?",
        "Иә. Құрылғы тұрақты жұмысқа жарайды. Автоматты режим, түнгі режим және қорғаныс функциялары бар.",
      ],
      [
        "УФ-модуль қауіпсіз бе?",
        "Иә. УФ-модуль корпус ішінде орналасқан және толық оқшауланған.",
      ],
      [
        "Қалай басқарылады?",
        "Сенсорлық панель, пульт немесе Tuya қолданбасы арқылы Wi-Fi көмегімен.",
      ],
      [
        "Сүзгіні ауыстыру туралы ескерту бар ма?",
        "Иә, қызмет көрсету қажет болғанда жүйе еске салады.",
      ],
    ],
    trustPhoneLabel: "WhatsApp арқылы байланыс және тапсырыс",
    finalCardTitle: "қазір байланысу",
    finalCardPrice: "бағасы",
    finalCardWhatsApp: "WhatsApp",
    openInstagram: "Instagram ашу",
    goWhatsApp: "WhatsApp-қа өту",
    scrollHint: "төмен сырғыт",
  },
  en: {
    brand: "aireco",
    nav: {
      technology: "technology",
      filtration: "filtration",
      comfort: "comfort",
      control: "control",
      specs: "specs",
      faq: "faq",
      contact: "order",
    },
    topBadge: "next-generation air purifier",
    heroTitle1: "clean air",
    heroTitle2: "for home, office",
    heroTitle3: "and bedroom",
    heroText:
      "5-stage purification system, HEPA H13, PM2.5 sensor, automatic mode, quiet night operation and control via the Tuya app.",
    price: "129 000 ₸",
    priceLabel: "price",
    permanent: "built for continuous use",
    whatsapp: "message on WhatsApp",
    instagram: "instagram",
    facts: [
      ["500 m³/h", "performance"],
      ["HEPA H13", "filtration"],
      ["PM2.5", "smart sensor"],
      ["Wi-Fi", "control"],
    ],
    sections: {
      technologyTag: "core technology",
      technologyTitle: "UV sterilization inside the purifier",
      technologyText:
        "Helps reduce bacteria and viruses inside the purification system and strengthens the overall filtration effect.",
      filtrationTag: "purification system",
      filtrationTitle: "5-stage filtration",
      filtrationText:
        "The washable pre-filter captures hair, fur and large dust. The main HEPA H13 filter traps fine particles, while the photocatalytic layer and UV module operate inside the system.",
      comfortTag: "for family",
      comfortTitle: "Comfortable air for home, kids and allergy-sensitive users",
      comfortText:
        "aireco helps maintain cleaner indoor air, reduce fine particles and allergens, and create a more comfortable environment at home.",
      heatingTag: "model feature",
      heatingTitle: "Heated top platform",
      heatingText:
        "The top platform can be used as an extra comfort feature or turned off while keeping the purifier as a stylish interior element.",
      controlTag: "control",
      controlTitle: "Full control via app, remote and touch panel",
      controlText:
        "Wi-Fi connection through Tuya, a convenient remote, and touch controls on the body. You can enable or disable functions, choose modes and use the timer.",
      specsTag: "specifications",
      specsTitle: "aireco technical data",
      trustTag: "warranty & trust",
      trustTitle: "12-month warranty",
      trustText:
        "aireco is designed for continuous use at home and in the office. It is not just a stylish device but a complete purification system focused on safety, durability and convenience.",
      faqTag: "frequently asked questions",
      faqTitle: "Everything important before you buy",
      finalTag: "order aireco",
      finalTitle: "Ready to order the air purifier?",
      finalText:
        "Message us on WhatsApp or Instagram and we will quickly help with availability, delivery and any questions.",
    },
    bullets: [
      "5-stage purification system",
      "HEPA H13 + photocatalysis + internal UV",
      "automatic power adjustment",
      "built for continuous use",
      "safe for home use",
      "app and remote control",
    ],
    comfortCards: [
      ["HEPA H13", "captures PM2.5, pollen and allergens"],
      ["< 45 dB", "quiet night operation"],
    ],
    heatingCards: [
      "the function can be turned off",
      "works both as a comfort feature and decor element",
    ],
    controlCards: [
      ["Wi-Fi / Tuya", "smartphone control"],
      ["1–24 h timer", "automatic scheduled shutdown"],
    ],
    specs: [
      "CADR: up to 500 m³/h",
      "up to 6 air refresh cycles per hour in a ~20 m² room",
      "maintains cleanliness up to 180 m²",
      "night mode: below 45 dB",
      "4 purification speeds",
      "automatic mode",
      "1–24 hour timer",
      "PM2.5 sensor",
      "Wi-Fi / Tuya",
      "remote control",
      "touch panel on the body",
      "ionization",
      "wheels for movement",
      "switchable lighting",
      "filter replacement reminder",
    ],
    featureGridTitle: "Why aireco feels like a premium solution",
    featureGrid: [
      ["real auto mode", "PM2.5 sensor adjusts power automatically"],
      ["quiet operation", "comfortable for bedroom and nursery"],
      ["easy movement", "wheels and well-thought-out design"],
      ["full control", "every function can be controlled separately"],
      ["modern interface", "app, touch panel and remote"],
      ["safety", "UV module is fully inside the body"],
    ],
    useCasesTitle: "Where aireco fits best",
    useCases: [
      "apartment and house",
      "nursery and bedroom",
      "office and workspace",
      "allergy-sensitive users and families",
      "salons and stores",
      "spaces for continuous operation",
    ],
    faq: [
      [
        "Is it suitable for apartments?",
        "Yes. aireco is suitable for apartments, homes, bedrooms, nurseries and offices.",
      ],
      [
        "Can it run continuously?",
        "Yes. The device is built for continuous use. It includes auto mode, night mode and safety functions.",
      ],
      [
        "Is the UV module safe?",
        "Yes. The UV module is placed inside the body and fully isolated.",
      ],
      [
        "How is it controlled?",
        "Through the touch panel, remote control or the Tuya app via Wi-Fi.",
      ],
      [
        "Is there a filter replacement reminder?",
        "Yes, the system reminds you when service is needed.",
      ],
    ],
    trustPhoneLabel: "contact and order via WhatsApp",
    finalCardTitle: "contact now",
    finalCardPrice: "price",
    finalCardWhatsApp: "WhatsApp",
    openInstagram: "open Instagram",
    goWhatsApp: "go to WhatsApp",
    scrollHint: "scroll down",
  },
};

function Reveal({ children, variant = "up", className = "", delay = 0 }) {
  const initial =
    variant === "left"
      ? { opacity: 0, x: -70, scale: 0.985, filter: "blur(14px)" }
      : variant === "right"
      ? { opacity: 0, x: 70, scale: 0.985, filter: "blur(14px)" }
      : { opacity: 0, y: 70, scale: 0.985, filter: "blur(14px)" };

  const animate =
    variant === "left" || variant === "right"
      ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
      : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.14, margin: "-80px" }}
      transition={{ duration: 1.45, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ tag, title, text }) {
  return (
    <div className="mb-8 max-w-3xl min-w-0">
      <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-600">
        {tag}
      </div>
      <h2 className="mt-3 break-words text-3xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-2xl break-words text-[17px] leading-8 text-slate-500">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function VisualCard({
  src,
  alt,
  maxWidth = "max-w-[460px]",
  imageClassName = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`mx-auto w-full ${maxWidth}`}
    >
      <div className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.09)] ring-1 ring-slate-200/80">
        <motion.img
          src={src}
          alt={alt}
          whileHover={{ scale: 1.035 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`block w-full h-auto ${imageClassName}`}
        />
      </div>
    </motion.div>
  );
}

function UvGallery({ src }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
        <img
          src={src}
          alt="uv main"
          className="block h-full max-h-[560px] w-full object-cover object-center"
        />
      </div>

      <div className="grid gap-4">
        <div className="overflow-hidden rounded-[1.6rem] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/80">
          <img
            src={src}
            alt="uv top"
            className="block h-[268px] w-full object-cover object-[center_18%]"
          />
        </div>

        <div className="overflow-hidden rounded-[1.6rem] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/80">
          <img
            src={src}
            alt="uv bottom"
            className="block h-[268px] w-full object-cover object-[center_82%]"
          />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="font-bold text-slate-950">{q}</span>
        <span className="text-xl text-slate-400">{open ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-slate-600 leading-7">{a}</div>
      </motion.div>
    </div>
  );
}

function Particles() {
  const items = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/70 blur-[1px]"
          style={{
            left: `${6 + ((i * 91) % 88)}%`,
            top: `${8 + ((i * 57) % 78)}%`,
          }}
          animate={{
            y: [-10, 12, -10],
            x: [0, 6, 0],
            opacity: [0.15, 0.55, 0.15],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.18,
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
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-cyan-200/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -18, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-100/25 blur-3xl"
      />
    </div>
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

export default function App() {
  const [lang, setLang] = useState("ru");
  const t = useMemo(() => DICT[lang], [lang]);

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
    <div className="min-h-screen overflow-x-hidden text-slate-900 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.10),_transparent_30%),linear-gradient(180deg,#fbfdff_0%,#f4f9ff_45%,#ffffff_100%)]">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left bg-sky-500"
      />

      <header className="sticky top-0 z-[70] border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a href="#top" className="text-lg font-black tracking-tight text-slate-950">
            aireco
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#technology" className="hover:text-slate-950">{t.nav.technology}</a>
            <a href="#filtration" className="hover:text-slate-950">{t.nav.filtration}</a>
            <a href="#comfort" className="hover:text-slate-950">{t.nav.comfort}</a>
            <a href="#control" className="hover:text-slate-950">{t.nav.control}</a>
            <a href="#specs" className="hover:text-slate-950">{t.nav.specs}</a>
            <a href="#faq" className="hover:text-slate-950">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-slate-950">{t.nav.contact}</a>
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

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-14 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
            <Reveal variant="left">
              <div className="min-w-0">
                <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
                  {t.topBadge}
                </div>

                <h1 className="max-w-3xl break-words text-4xl font-black leading-[0.96] tracking-tight text-slate-950 md:text-6xl">
                  {t.brand} — {t.heroTitle1}
                  <span className="block text-sky-700">{t.heroTitle2}</span>
                  <span className="block">{t.heroTitle3}</span>
                </h1>

                <p className="mt-6 max-w-2xl break-words text-[18px] leading-8 text-slate-600 md:text-[20px]">
                  {t.heroText}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="rounded-[1.75rem] bg-slate-950 px-6 py-4 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {t.priceLabel}
                    </div>
                    <div className="mt-1 text-3xl font-black">{t.price}</div>
                  </div>

                  <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-bold text-emerald-700">
                    {t.permanent}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappMain}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-7 py-4 text-base font-bold text-white shadow-[0_14px_35px_rgba(34,197,94,0.30)] transition duration-300 hover:-translate-y-0.5 hover:bg-green-600"
                  >
                    <WhatsAppIcon />
                    {t.whatsapp}
                  </a>

                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-700 shadow-sm transition duration-300 hover:border-pink-300 hover:text-pink-600"
                  >
                    <InstagramIcon />
                    {t.instagram}
                  </a>
                </div>

                <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                  {t.facts.map(([value, label], i) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 1, delay: i * 0.08, ease }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="min-w-0 rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur"
                    >
                      <div className="break-words text-xl font-black text-slate-950">
                        {value}
                      </div>
                      <div className="mt-1 break-words text-sm leading-5 text-slate-500">
                        {label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-sm font-semibold text-slate-400">
                  {t.scrollHint}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="relative">
                <div className="mx-auto max-w-[520px] overflow-hidden rounded-[2.2rem] bg-white/70 p-2 shadow-[0_30px_80px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                  <motion.img
                    src={heroImage}
                    alt="aireco"
                    initial={{ scale: 1.03, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease }}
                    className="block w-full h-auto rounded-[1.6rem] object-contain object-center"
                  />
                </div>

                <div className="absolute -bottom-4 left-4 rounded-[1.5rem] bg-white px-5 py-4 shadow-xl ring-1 ring-slate-200">
                  <div className="text-sm text-slate-500">night mode</div>
                  <div className="text-lg font-black text-slate-950">&lt; 45 дБ</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <Reveal>
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {t.featureGridTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.featureGrid.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-sky-200 hover:bg-sky-50/40"
                >
                  <div className="text-lg font-black text-slate-950">{title}</div>
                  <div className="mt-3 leading-7 text-slate-600">{text}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <Reveal>
            <SectionTitle
              tag={t.sections.technologyTag}
              title={t.sections.technologyTitle}
              text={t.sections.technologyText}
            />
          </Reveal>

          <Reveal>
            <UvGallery src={uvImage} />
          </Reveal>
        </section>

        <section id="filtration" className="bg-white/40 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:px-10 lg:grid-cols-2 lg:items-start">
            <Reveal variant="left">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.filtrationTag}
                  title={t.sections.filtrationTitle}
                  text={t.sections.filtrationText}
                />

                <div className="mt-8 grid gap-3">
                  {t.bullets.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.06, ease }}
                      className="min-w-0 rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm ring-1 ring-slate-200"
                    >
                      <span className="break-words">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <VisualCard
                src={filterSystemImage}
                alt="система фильтрации aireco"
                maxWidth="max-w-[520px]"
                imageClassName="h-[430px] w-full object-cover object-[center_28%]"
              />
            </Reveal>
          </div>
        </section>

        <section id="comfort" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left">
              <VisualCard
                src={familyImage}
                alt="aireco помогает снижать уровень аллергенов"
                maxWidth="max-w-[470px]"
                imageClassName="h-[430px] w-full object-cover object-[center_62%]"
              />
            </Reveal>

            <Reveal variant="right">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.comfortTag}
                  title={t.sections.comfortTitle}
                  text={t.sections.comfortText}
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {t.comfortCards.map(([a, b]) => (
                    <div
                      key={a}
                      className="min-w-0 rounded-[1.5rem] bg-sky-50 p-5 ring-1 ring-sky-100"
                    >
                      <div className="break-words text-xl font-black">{a}</div>
                      <div className="mt-2 break-words text-slate-600">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <Reveal>
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {t.useCasesTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.useCases.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[1.8rem] border border-slate-200 bg-white px-5 py-5 text-lg font-bold text-slate-800 shadow-sm transition-colors duration-300 hover:border-sky-200 hover:bg-sky-50/40"
                >
                  {item}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-white/40 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:px-10 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.heatingTag}
                  title={t.sections.heatingTitle}
                  text={t.sections.heatingText}
                />

                <div className="mt-8 space-y-3">
                  {t.heatingCards.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <VisualCard
                src={heatingImage}
                alt="heating"
                maxWidth="max-w-[520px]"
                imageClassName="h-[430px] w-full object-cover object-[center_34%]"
              />
            </Reveal>
          </div>
        </section>

        <section id="control" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left" className="lg:order-2">
              <VisualCard
                src={appControlImage}
                alt="управление aireco через приложение и пульт"
                maxWidth="max-w-[480px]"
                imageClassName="h-[410px] w-full object-cover object-[center_38%]"
              />
            </Reveal>

            <Reveal variant="right" className="lg:order-1">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.controlTag}
                  title={t.sections.controlTitle}
                  text={t.sections.controlText}
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {t.controlCards.map(([a, b]) => (
                    <div
                      key={a}
                      className="min-w-0 rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200"
                    >
                      <div className="break-words text-xl font-black">{a}</div>
                      <div className="mt-2 break-words text-slate-600">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="specs" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
            <Reveal>
              <SectionTitle
                tag={t.sections.specsTag}
                title={t.sections.specsTitle}
              />
            </Reveal>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {t.specs.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: i * 0.04, ease }}
                  className="min-w-0 rounded-2xl bg-white/5 px-4 py-3 text-slate-100 ring-1 ring-white/10"
                >
                  <span className="break-words">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.trustTag}
                  title={t.sections.trustTitle}
                  text={t.sections.trustText}
                />

                <div className="mt-8 rounded-[1.8rem] bg-sky-50 p-6 ring-1 ring-sky-100">
                  <div className="text-2xl font-black text-slate-950">
                    +7 706 606 0985
                  </div>
                  <div className="mt-2 text-slate-600">{t.trustPhoneLabel}</div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={whatsappMain}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-bold text-white transition hover:bg-green-600"
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-pink-200 bg-white px-4 py-3 font-bold text-pink-600 transition hover:bg-pink-50"
                    >
                      <InstagramIcon />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <VisualCard
                src={warrantyImage}
                alt="гарантия на очиститель воздуха aireco"
                maxWidth="max-w-[390px]"
                imageClassName="object-contain object-center"
              />
            </Reveal>
          </div>
        </section>

        <section id="faq" className="bg-white/50 backdrop-blur-[2px]">
          <div className="mx-auto max-w-5xl px-6 py-14 md:px-10">
            <Reveal>
              <SectionTitle
                tag={t.sections.faqTag}
                title={t.sections.faqTitle}
              />
            </Reveal>

            <div className="grid gap-4">
              {t.faq.map(([q, a], i) => (
                <Reveal key={q} delay={i * 0.03}>
                  <FAQItem q={q} a={a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-14 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a_0%,#0f2d4d_55%,#075985_100%)] p-8 text-white shadow-[0_30px_80px_rgba(2,6,23,0.28)] md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="min-w-0">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">
                    {t.sections.finalTag}
                  </div>
                  <h2 className="mt-3 break-words text-3xl font-black md:text-5xl">
                    {t.sections.finalTitle}
                  </h2>
                  <p className="mt-5 max-w-2xl break-words text-lg leading-8 text-slate-200">
                    {t.sections.finalText}
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
                  <div className="text-lg font-black">{t.finalCardTitle}</div>
                  <div className="mt-3 text-slate-200">
                    {t.finalCardPrice}: {t.price}
                  </div>
                  <div className="mt-1 text-slate-200">
                    {t.finalCardWhatsApp}: +7 706 606 0985
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={whatsappOrder}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-4 text-base font-black text-white transition hover:bg-green-600"
                    >
                      <WhatsAppIcon />
                      {t.goWhatsApp}
                    </a>

                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-black text-white transition hover:bg-white/15"
                    >
                      <InstagramIcon />
                      {t.openInstagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
        <a
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-sm font-black text-pink-600 shadow-[0_20px_50px_rgba(0,0,0,0.10)] ring-1 ring-slate-200 transition duration-300 hover:scale-[1.03]"
        >
          <InstagramIcon />
          Instagram
        </a>

        <a
          href={whatsappMain}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-[0_20px_50px_rgba(34,197,94,0.30)] transition duration-300 hover:scale-[1.03] hover:bg-green-600"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
}