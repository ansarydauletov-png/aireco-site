import { useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import heroImage from "./assets/hero.webp";
import uvImage from "./assets/uv-sterilization.webp";
import familyImage from "./assets/family-allergy.webp";
import heatingImage from "./assets/heating-top.webp";
import appControlImage from "./assets/app-control.webp";
import filterSystemImage from "./assets/filter-system.webp";
import warrantyImage from "./assets/warranty.webp";

const BRAND_BLUE = "#0040F4";
const BRAND_YELLOW = "#FFD400";
const ease = [0.16, 1, 0.3, 1];

const CONTENT = {
  ru: {
    brand: "aireco",
    nav: {
      advantages: "преимущества",
      technology: "технология",
      filtration: "фильтрация",
      family: "для семьи",
      calculator: "калькулятор",
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
      title3: "",
      text:
        "5-ступенчатая система очистки, фильтр HEPA H14, датчик PM2.5 и удобное управление через мобильное приложение.",
      priceLabel: "цена",
      price: "129 000 ₸",
      note: "бесплатная доставка по Казахстану и России",
      primary: "написать в WhatsApp",
      secondary: "instagram",
      calc: "рассчитать для моей комнаты",
      scroll: "листай ниже",
    },
    trust: [
      "гарантия 12 месяцев",
      "поддержка и сервисное обслуживание",
      "бесплатная доставка по Казахстану и России",
      "управление в одно касание",
    ],
    stats: [
      ["500 м³/ч", "производительность"],
      ["HEPA H14", "основной фильтр"],
      ["PM2.5", "умный датчик"],
      ["Wi-Fi", "мобильное приложение"],
    ],
    premiumTitle: "Почему aireco — это премиальное решение",
    premiumCards: [
      ["реальный авто-режим", "PM2.5 датчик автоматически регулирует мощность", "◉"],
      ["тихая работа", "комфортно для дома, детской и отдыха", "◌"],
      ["удобное управление", "панель, пульт и мобильное приложение", "◎"],
      ["мощный поток", "до 500 м³/ч для быстрого обновления воздуха", "✦"],
      ["современный дизайн", "аккуратно смотрится в интерьере", "▣"],
      ["безопасность", "УФ-модуль работает внутри корпуса", "◈"],
    ],
    sections: {
      technologyTag: "главная технология",
      technologyTitle: "УФ-стерилизация воздуха внутри очистителя",
      technologyText:
        "Помогает уничтожать бактерии и вирусы в паре с фотокаталитическим фильтром и усиливает общий эффект очистки.",
      technologyLabels: [
        "УФ-стерилизация",
        "внутри очистителя",
      ],

      filtrationTag: "система очистки",
      filtrationTitle: "5 ступеней фильтрации",
      filtrationText:
        "Моющийся пре-фильтр задерживает шерсть, пыль и волосы. Основной HEPA H14 улавливает мелкие частицы, а фотокаталитический слой и УФ-модуль работают внутри системы.",
      filtrationChecks: [
        "моющийся пре-фильтр",
        "HEPA H14 для мелких частиц",
        "датчик PM2.5",
        "фотокаталитический фильтр",
        "УФ-модуль внутри системы",
        "повышенный ресурс фильтра",
      ],

      familyTag: "для семьи",
      familyTitle: "Подходит для детей, аллергиков и домашних питомцев",
      familyText:
        "aireco помогает поддерживать более чистый воздух в помещении и делает среду дома более комфортной для повседневной жизни.",
      familyCards: [
        ["HEPA H14", "задерживает пыль, аллергены и мелкие частицы"],
        ["PM2.5 датчик", "контролирует качество воздуха в комнате"],
      ],

      useTag: "подходит для",
      useTitle: "Где aireco особенно полезен",
      useItems: [
        "квартира и дом",
        "детская и спальня",
        "офис и кабинет",
        "аллергики и семьи с детьми",
        "дома с домашними питомцами",
        "пространства для постоянного использования",
      ],

      calcTag: "калькулятор очистки",
      calcTitle: "За сколько времени aireco обновит воздух в вашей комнате?",
      calcText:
        "Введите площадь комнаты, и калькулятор покажет, за сколько минут очиститель полностью прогонит воздух. Расчёт сделан при высоте потолка 3 м.",

      heatingTag: "особенность модели",
      heatingTitle: "Подогреваемая верхняя площадка",
      heatingText:
        "Можно использовать как удобную дополнительную функцию в повседневной жизни.",
      heatingItems: [
        "удобно в быту",
        "работает аккуратно и без лишнего шума",
      ],

      controlTag: "управление",
      controlTitle: "Полный контроль через приложение, пульт и сенсорную панель",
      controlText:
        "Управляйте скоростью, режимами и функциями с корпуса, пульта или через удобное мобильное приложение.",
      controlCards: [
        ["Wi-Fi", "управление через мобильное приложение"],
        ["таймер 1–24 ч", "автоматическое отключение по расписанию"],
      ],

      specsTag: "характеристики",
      specsTitle: "Технические данные aireco",

      warrantyTag: "гарантия и доверие",
      warrantyTitle: "Гарантия 12 месяцев",
      warrantyText:
        "Официальная гарантия, поддержка и сервисное обслуживание после покупки.",

      reviewsTag: "отзывы",
      reviewsTitle: "Что говорят клиенты",
      reviewsText:
        "Коротко собрали реальные впечатления о работе aireco в повседневной жизни.",

      faqTag: "частые вопросы",
      faqTitle: "Что важно знать перед покупкой",

      ctaTag: "заказать aireco",
      ctaTitle: "Готовы заказать очиститель воздуха?",
      ctaText:
        "Напишите в WhatsApp или Instagram, и мы быстро подскажем по наличию, доставке и ответим на вопросы.",
    },
    specs: [
      "CADR: до 500 м³/ч",
      "высокая скорость обновления воздуха",
      "датчик PM2.5",
      "HEPA H14",
      "моющийся пре-фильтр",
      "фотокаталитический фильтр",
      "УФ-стерилизация",
      "мобильное приложение",
      "Wi-Fi",
      "пульт дистанционного управления",
      "сенсорная панель",
      "таймер 1–24 часа",
      "тихий ночной режим",
      "ионизация",
      "повышенный ресурс фильтра",
    ],
    reviews: [
      {
        name: "Айгерим",
        city: "Алматы",
        text: "Поставили дома. Воздух реально стал ощущаться свежее, особенно вечером.",
      },
      {
        name: "Нурсултан",
        city: "Астана",
        text: "Удобно, что можно управлять через приложение. Работает тихо и аккуратно выглядит.",
      },
      {
        name: "Данияр",
        city: "Шымкент",
        text: "Брали для семьи. Хорошо справляется с пылью и воздух в комнате стал приятнее.",
      },
    ],
    faq: [
      [
        "Подходит ли для квартиры?",
        "Да. aireco подходит для квартиры, дома, детской, спальни и офиса.",
      ],
      [
        "Можно ли использовать каждый день?",
        "Да. Устройство рассчитано на регулярную работу и подходит для повседневного использования.",
      ],
      [
        "Безопасен ли УФ-модуль?",
        "Да. УФ-модуль находится внутри корпуса и работает внутри системы.",
      ],
      [
        "Как управлять устройством?",
        "Через сенсорную панель, пульт и удобное мобильное приложение.",
      ],
      [
        "Есть ли гарантия?",
        "Да. На устройство действует официальная гарантия 12 месяцев.",
      ],
    ],
    contact: {
      phoneLabel: "связь и заказ",
      cardTitle: "связаться сейчас",
      priceLabel: "цена",
      whatsapp: "перейти в WhatsApp",
      instagram: "открыть Instagram",
      mobile: "заказать в WhatsApp",
    },
  },

  kz: {
    brand: "aireco",
    nav: {
      advantages: "артықшылық",
      technology: "технология",
      filtration: "сүзгілеу",
      family: "отбасы",
      calculator: "калькулятор",
      control: "басқару",
      specs: "сипаттама",
      reviews: "пікірлер",
      faq: "сұрақтар",
      order: "тапсырыс",
    },
    hero: {
      badge: "жаңа буындағы ауа тазартқыш",
      title1: "таза ауа",
      title2: "үйде және кеңседе",
      title3: "",
      text:
        "5 сатылы тазарту жүйесі, HEPA H14 сүзгісі, PM2.5 датчигі және мобильді қолданба арқылы ыңғайлы басқару.",
      priceLabel: "бағасы",
      price: "129 000 ₸",
      note: "Қазақстан мен Ресей бойынша тегін жеткізу",
      primary: "WhatsApp-қа жазу",
      secondary: "instagram",
      calc: "бөлмем үшін есептеу",
      scroll: "төмен сырғыт",
    },
    trust: [
      "12 ай кепілдік",
      "қолдау және сервис",
      "Қазақстан мен Ресей бойынша тегін жеткізу",
      "бір түрту арқылы басқару",
    ],
    stats: [
      ["500 м³/сағ", "өнімділік"],
      ["HEPA H14", "негізгі сүзгі"],
      ["PM2.5", "ақылды датчик"],
      ["Wi-Fi", "мобильді қолданба"],
    ],
    premiumTitle: "Неге aireco премиум шешім болып сезіледі",
    premiumCards: [
      ["нақты авто-режим", "PM2.5 датчигі қуатты автоматты реттейді", "◉"],
      ["тыныш жұмыс", "үйге және демалысқа жайлы", "◌"],
      ["ыңғайлы басқару", "панель, пульт және қолданба", "◎"],
      ["күшті ауа ағыны", "500 м³/сағ дейін", "✦"],
      ["заманауи дизайн", "интерьерге ұқыпты үйлеседі", "▣"],
      ["қауіпсіздік", "УФ-модуль корпус ішінде", "◈"],
    ],
    sections: {
      technologyTag: "негізгі технология",
      technologyTitle: "Тазартқыш ішіндегі УФ-стерилизация",
      technologyText:
        "Фотокаталитикалық сүзгімен бірге бактериялар мен вирустарды азайтуға көмектеседі.",
      technologyLabels: ["УФ стерилизация", "құрылғы ішінде"],

      filtrationTag: "тазарту жүйесі",
      filtrationTitle: "5 сатылы сүзгілеу",
      filtrationText:
        "Жуылатын пре-сүзгі жүнді, шаңды және шашты ұстайды. Негізгі HEPA H14 ұсақ бөлшектерді сүзеді, ал фотокаталитикалық қабат пен УФ-модуль жүйе ішінде жұмыс істейді.",
      filtrationChecks: [
        "жуылатын пре-сүзгі",
        "HEPA H14",
        "PM2.5 датчигі",
        "фотокаталитикалық сүзгі",
        "УФ-модуль",
        "сүзгінің жоғары ресурсы",
      ],

      familyTag: "отбасы үшін",
      familyTitle: "Балаларға, аллергиясы бар адамдарға және үй жануарлары бар үйлерге қолайлы",
      familyText:
        "aireco ауаны таза ұстауға көмектеседі және үй ішіндегі жайлылықты арттырады.",
      familyCards: [
        ["HEPA H14", "шаң мен ұсақ бөлшектерді ұстайды"],
        ["PM2.5 датчигі", "бөлмедегі ауаны бақылайды"],
      ],

      useTag: "қолайлы орындар",
      useTitle: "aireco қай жерде әсіресе пайдалы",
      useItems: [
        "пәтер мен үй",
        "балалар бөлмесі мен жатын бөлме",
        "кеңсе мен кабинет",
        "аллергиясы бар адамдар мен балалар бар отбасылар",
        "үй жануарлары бар үйлер",
        "тұрақты пайдаланылатын кеңістіктер",
      ],

      calcTag: "тазарту калькуляторы",
      calcTitle: "aireco сіздің бөлмеңіздегі ауаны қанша уақытта жаңартады?",
      calcText:
        "Бөлме ауданын енгізіңіз, калькулятор құрылғы ауаны қанша минутта толық айналдыратынын көрсетеді. Есеп 3 м төбе биіктігімен жасалған.",

      heatingTag: "модель ерекшелігі",
      heatingTitle: "Жылытылатын жоғарғы алаң",
      heatingText:
        "Күнделікті қолдануға арналған ыңғайлы қосымша функция.",
      heatingItems: [
        "күнделікті өмірде ыңғайлы",
        "тыныш және ұқыпты жұмыс істейді",
      ],

      controlTag: "басқару",
      controlTitle: "Қолданба, пульт және сенсорлық панель арқылы толық басқару",
      controlText:
        "Жылдамдықты, режимдерді және функцияларды корпус, пульт немесе мобильді қолданба арқылы басқарыңыз.",
      controlCards: [
        ["Wi-Fi", "мобильді қолданба арқылы басқару"],
        ["таймер 1–24 сағ", "кесте бойынша сөндіру"],
      ],

      specsTag: "сипаттама",
      specsTitle: "aireco техникалық деректері",

      warrantyTag: "кепілдік және сенім",
      warrantyTitle: "12 ай кепілдік",
      warrantyText:
        "Ресми кепілдік, қолдау және сатып алғаннан кейінгі сервис.",

      reviewsTag: "пікірлер",
      reviewsTitle: "Клиенттер не дейді",
      reviewsText:
        "aireco туралы күнделікті қолданудағы қысқа пікірлер.",

      faqTag: "жиі қойылатын сұрақтар",
      faqTitle: "Сатып алар алдында білу маңызды",

      ctaTag: "aireco тапсырыс беру",
      ctaTitle: "Ауа тазартқышқа тапсырыс беруге дайынсыз ба?",
      ctaText:
        "WhatsApp немесе Instagram арқылы жазыңыз, біз бар-жоғын және жеткізуді айтып береміз.",
    },
    specs: [
      "CADR: 500 м³/сағ дейін",
      "ауаны жылдам жаңарту",
      "PM2.5 датчигі",
      "HEPA H14",
      "жуылатын пре-сүзгі",
      "фотокаталитикалық сүзгі",
      "УФ-стерилизация",
      "мобильді қолданба",
      "Wi-Fi",
      "қашықтан басқару пульті",
      "сенсорлық панель",
      "таймер 1–24 сағат",
      "тыныш түнгі режим",
      "иондау",
      "сүзгінің жоғары ресурсы",
    ],
    reviews: [
      {
        name: "Айгерім",
        city: "Алматы",
        text: "Үйге қойдық. Ауа шынымен таза сезіле бастады.",
      },
      {
        name: "Нұрсұлтан",
        city: "Астана",
        text: "Қолданба арқылы басқару өте ыңғайлы. Тыныш жұмыс істейді.",
      },
      {
        name: "Данияр",
        city: "Шымкент",
        text: "Отбасы үшін алдық. Шаң азайғаны байқалады.",
      },
    ],
    faq: [
      [
        "Пәтерге жарай ма?",
        "Иә. aireco пәтерге, үйге, балалар бөлмесіне, жатын бөлмеге және кеңсеге жарайды.",
      ],
      [
        "Күнде қолдануға бола ма?",
        "Иә. Құрылғы тұрақты және күнделікті пайдалануға арналған.",
      ],
      [
        "УФ-модуль қауіпсіз бе?",
        "Иә. УФ-модуль корпус ішінде орналасқан және жүйе ішінде жұмыс істейді.",
      ],
      [
        "Қалай басқарылады?",
        "Сенсорлық панель, пульт және мобильді қолданба арқылы.",
      ],
      [
        "Кепілдік бар ма?",
        "Иә. Құрылғыға 12 ай ресми кепілдік беріледі.",
      ],
    ],
    contact: {
      phoneLabel: "байланыс және тапсырыс",
      cardTitle: "қазір байланысу",
      priceLabel: "бағасы",
      whatsapp: "WhatsApp-қа өту",
      instagram: "Instagram ашу",
      mobile: "WhatsApp арқылы тапсырыс",
    },
  },

  en: {
    brand: "aireco",
    nav: {
      advantages: "advantages",
      technology: "technology",
      filtration: "filtration",
      family: "family",
      calculator: "calculator",
      control: "control",
      specs: "specs",
      reviews: "reviews",
      faq: "faq",
      order: "order",
    },
    hero: {
      badge: "next-generation air purifier",
      title1: "clean air",
      title2: "for home and office",
      title3: "",
      text:
        "5-stage purification system, HEPA H14 filter, PM2.5 sensor and convenient control through a mobile app.",
      priceLabel: "price",
      price: "129 000 ₸",
      note: "free delivery across Kazakhstan and Russia",
      primary: "message on WhatsApp",
      secondary: "instagram",
      calc: "calculate for my room",
      scroll: "scroll down",
    },
    trust: [
      "12-month warranty",
      "support and service",
      "free delivery across Kazakhstan and Russia",
      "one-touch control",
    ],
    stats: [
      ["500 m³/h", "performance"],
      ["HEPA H14", "main filter"],
      ["PM2.5", "smart sensor"],
      ["Wi-Fi", "mobile app"],
    ],
    premiumTitle: "Why aireco feels like a premium solution",
    premiumCards: [
      ["real auto mode", "PM2.5 sensor regulates power automatically", "◉"],
      ["quiet operation", "comfortable for home and rest", "◌"],
      ["easy control", "panel, remote and app", "◎"],
      ["powerful airflow", "up to 500 m³/h", "✦"],
      ["modern design", "fits well into the interior", "▣"],
      ["safety", "UV module works inside the body", "◈"],
    ],
    sections: {
      technologyTag: "core technology",
      technologyTitle: "UV sterilization inside the purifier",
      technologyText:
        "Helps reduce bacteria and viruses together with the photocatalytic filter.",
      technologyLabels: ["UV sterilization", "inside the purifier"],

      filtrationTag: "purification system",
      filtrationTitle: "5-stage filtration",
      filtrationText:
        "The washable pre-filter captures hair, dust and fur. The main HEPA H14 filter traps fine particles, while the photocatalytic layer and UV module work inside the system.",
      filtrationChecks: [
        "washable pre-filter",
        "HEPA H14",
        "PM2.5 sensor",
        "photocatalytic filter",
        "UV module",
        "extended filter life",
      ],

      familyTag: "for family",
      familyTitle: "Suitable for children, allergy-sensitive users and homes with pets",
      familyText:
        "aireco helps maintain cleaner air and makes the indoor environment more comfortable for everyday life.",
      familyCards: [
        ["HEPA H14", "captures dust and fine particles"],
        ["PM2.5 sensor", "tracks indoor air quality"],
      ],

      useTag: "best for",
      useTitle: "Where aireco fits best",
      useItems: [
        "apartment and house",
        "nursery and bedroom",
        "office and workspace",
        "allergy-sensitive users and families",
        "homes with pets",
        "spaces for everyday use",
      ],

      calcTag: "cleaning calculator",
      calcTitle: "How fast will aireco refresh the air in your room?",
      calcText:
        "Enter your room area and the calculator will show how many minutes it takes to fully cycle the air. Calculation is based on a 3 m ceiling height.",

      heatingTag: "model feature",
      heatingTitle: "Heated top platform",
      heatingText:
        "A convenient extra feature for everyday use.",
      heatingItems: [
        "useful in daily life",
        "works quietly and neatly",
      ],

      controlTag: "control",
      controlTitle: "Full control via app, remote and touch panel",
      controlText:
        "Manage speed, modes and functions from the body, remote control or mobile app.",
      controlCards: [
        ["Wi-Fi", "control through the mobile app"],
        ["1–24 h timer", "scheduled shutoff"],
      ],

      specsTag: "specifications",
      specsTitle: "aireco technical data",

      warrantyTag: "warranty & trust",
      warrantyTitle: "12-month warranty",
      warrantyText:
        "Official warranty, support and service after purchase.",

      reviewsTag: "reviews",
      reviewsTitle: "What customers say",
      reviewsText:
        "Short real-life impressions about using aireco every day.",

      faqTag: "frequently asked questions",
      faqTitle: "What matters before buying",

      ctaTag: "order aireco",
      ctaTitle: "Ready to order the air purifier?",
      ctaText:
        "Message us on WhatsApp or Instagram and we will quickly help with availability and delivery.",
    },
    specs: [
      "CADR: up to 500 m³/h",
      "fast air refresh",
      "PM2.5 sensor",
      "HEPA H14",
      "washable pre-filter",
      "photocatalytic filter",
      "UV sterilization",
      "mobile app",
      "Wi-Fi",
      "remote control",
      "touch panel",
      "1–24 hour timer",
      "quiet night mode",
      "ionization",
      "extended filter life",
    ],
    reviews: [
      {
        name: "Aigerim",
        city: "Almaty",
        text: "We placed it at home. The air really started to feel cleaner.",
      },
      {
        name: "Nursultan",
        city: "Astana",
        text: "App control is very convenient. It works quietly.",
      },
      {
        name: "Daniyar",
        city: "Shymkent",
        text: "We bought it for the family. There is noticeably less dust.",
      },
    ],
    faq: [
      [
        "Is it suitable for apartments?",
        "Yes. aireco is suitable for apartments, homes, bedrooms, nurseries and offices.",
      ],
      [
        "Can it be used every day?",
        "Yes. The device is made for regular everyday use.",
      ],
      [
        "Is the UV module safe?",
        "Yes. The UV module is inside the body and works inside the system.",
      ],
      [
        "How is it controlled?",
        "Through the touch panel, remote control and mobile app.",
      ],
      [
        "Is there a warranty?",
        "Yes. The device includes a 12-month official warranty.",
      ],
    ],
    contact: {
      phoneLabel: "contact and order",
      cardTitle: "contact now",
      priceLabel: "price",
      whatsapp: "go to WhatsApp",
      instagram: "open Instagram",
      mobile: "order via WhatsApp",
    },
  },
};

function RoomCalculator({ t }) {
  const [area, setArea] = useState(20);
  const cleanArea = Number.isFinite(Number(area)) ? Number(area) : 0;
  const height = 3;
  const volume = cleanArea * height;
  const minutes = volume > 0 ? (volume / 500) * 60 : 0;
  const cycles = volume > 0 ? 500 / volume : 0;

  const formatMinutes = (value) => {
    if (!value || value <= 0) return "—";
    if (value < 1) return "less than 1 min";
    return `${Math.ceil(value)} мин`;
  };

  return (
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
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-2xl font-black text-slate-950 outline-none transition focus:border-[color:var(--brand-blue)]"
          placeholder="Например, 20"
        />

        <p className="mt-3 text-sm leading-7 text-slate-500">
          Расчёт при высоте потолка 3 м
        </p>
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

      <SoftCard className="p-5">
        <div className="text-[17px] leading-7 text-slate-700">
          {cleanArea > 0
            ? `Комната ${cleanArea} м² будет полностью прогнана и освежена примерно за ${formatMinutes(minutes)}.`
            : "Введите площадь комнаты."}
        </div>
      </SoftCard>
    </div>
  );
}

function CalculatorModal({ open, onClose, t }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] bg-black/45 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease }}
              className="w-full max-w-2xl rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.18)] md:p-8"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.28em]"
                    style={{ color: BRAND_BLUE }}
                  >
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

              <RoomCalculator t={t} />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
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
  const instagramLink = "https://instagram.com/aireco.kz";

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.25,
  });

  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif", ["--brand-blue"]: BRAND_BLUE, ["--brand-yellow"]: BRAND_YELLOW }}
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fbfdff_0%,#f4f9ff_38%,#ffffff_100%)] text-slate-900"
    >
      <motion.div
        style={{ scaleX: progress, backgroundColor: BRAND_BLUE }}
        className="fixed left-0 right-0 top-0 z-[90] h-[3px] origin-left"
      />

      <header className="sticky top-0 z-[80] border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a href="#top" className="text-lg font-black tracking-tight text-slate-950">
            aireco
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#advantages" className="hover:text-slate-950">{t.nav.advantages}</a>
            <a href="#technology" className="hover:text-slate-950">{t.nav.technology}</a>
            <a href="#filtration" className="hover:text-slate-950">{t.nav.filtration}</a>
            <a href="#family" className="hover:text-slate-950">{t.nav.family}</a>
            <button onClick={() => setCalcOpen(true)} className="hover:text-slate-950">{t.nav.calculator}</button>
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
                    ? "text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-950"
                }`}
                style={lang === code ? { backgroundColor: BRAND_BLUE } : {}}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <FogLayers />
          <Particles />

          <div className="relative mx-auto grid max-w-7xl gap-7 px-6 py-9 md:px-10 lg:grid-cols-2 lg:items-center lg:py-12">
            <Reveal variant="left">
              <div className="min-w-0">
                <div
                  className="mb-4 inline-flex rounded-full border bg-white/92 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur"
                  style={{ color: BRAND_BLUE, borderColor: `${BRAND_BLUE}25` }}
                >
                  {t.hero.badge}
                </div>

                <h1 className="max-w-3xl break-words text-4xl font-black leading-[0.96] tracking-tight text-slate-950 md:text-6xl">
                  {t.brand} — {t.hero.title1}
                  <span className="block" style={{ color: BRAND_BLUE }}>
                    {t.hero.title2}
                  </span>
                  {t.hero.title3 ? <span className="block">{t.hero.title3}</span> : null}
                </h1>

                <p className="mt-4 max-w-2xl break-words text-[17px] font-medium leading-7 text-slate-600 md:text-[19px]">
                  {t.hero.text}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <div className="rounded-[1.4rem] bg-slate-950 px-5 py-4 text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {t.hero.priceLabel}
                    </div>
                    <div className="mt-1 text-3xl font-black">{t.hero.price}</div>
                  </div>

                  <div
                    className="rounded-[1.4rem] px-5 py-4 text-sm font-black"
                    style={{ backgroundColor: `${BRAND_YELLOW}25`, color: BRAND_BLUE }}
                  >
                    {t.hero.note}
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappMain}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white shadow-[0_14px_35px_rgba(0,64,244,0.28)] transition duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    <WhatsAppIcon />
                    {t.hero.primary}
                  </a>

                  <button
                    onClick={() => setCalcOpen(true)}
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border bg-white px-7 py-4 text-base font-bold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5"
                    style={{ borderColor: `${BRAND_BLUE}22` }}
                  >
                    {t.hero.calc}
                  </button>

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

                <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
                  {t.stats.map(([value, label], i) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.9, delay: i * 0.06, ease }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="min-w-0 rounded-[1.2rem] border border-white/80 bg-white/92 p-4 shadow-sm backdrop-blur"
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

                <div className="mt-4 text-sm font-semibold text-slate-400">
                  {t.hero.scroll}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="relative">
                <div className="mx-auto max-w-[410px] overflow-hidden rounded-[2rem] bg-white/72 p-2 shadow-[0_22px_54px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
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

                <div className="absolute -bottom-3 left-4 rounded-[1.2rem] bg-white px-4 py-3 shadow-xl ring-1 ring-slate-200">
                  <div className="text-sm text-slate-500">night mode</div>
                  <div className="text-base font-black text-slate-950">&lt; 45 дБ</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-3">
          <TrustStrip items={t.trust} />
        </section>

        <section id="advantages" className="mx-auto max-w-7xl px-6 py-9 md:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {t.premiumTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-6">
            <PremiumGrid items={t.premiumCards} />
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-6 py-9 md:px-10">
          <Reveal>
            <SectionTitle
              tag={t.sections.technologyTag}
              title={t.sections.technologyTitle}
              text={t.sections.technologyText}
            />
          </Reveal>

          <div className="mt-6">
            <Reveal>
              <ImageCard
                src={uvImage}
                alt="uv technology"
                className="mx-auto max-w-5xl"
                imageClassName="h-[270px] object-cover object-center md:h-[480px]"
              />
            </Reveal>
          </div>
        </section>

        <section id="filtration" className="bg-white/40 py-9 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal variant="left">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.filtrationTag}
                  title={t.sections.filtrationTitle}
                  text={t.sections.filtrationText}
                />
                <div className="mt-6">
                  <CheckList items={t.sections.filtrationChecks} />
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <ImageCard
                src={filterSystemImage}
                alt="filter system"
                className="mx-auto max-w-[380px]"
                imageClassName="h-[330px] object-cover object-center"
              />
            </Reveal>
          </div>
        </section>

        <section id="family" className="mx-auto max-w-7xl px-6 py-9 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal variant="left">
              <ImageCard
                src={familyImage}
                alt="family comfort"
                className="mx-auto max-w-[390px]"
                imageClassName="h-[340px] object-cover object-center"
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

        <section className="bg-white/35 py-9">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <SectionTitle
                tag={t.sections.useTag}
                title={t.sections.useTitle}
                text=""
              />
            </Reveal>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {t.sections.useItems.map((item, i) => (
                <Reveal key={item} delay={i * 0.04}>
                  <SoftCard className="px-5 py-4 text-lg font-black text-slate-800 transition hover:bg-sky-50/40" style={{ borderColor: `${BRAND_BLUE}18` }}>
                    {item}
                  </SoftCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="calculator" className="mx-auto max-w-7xl px-6 py-9 md:px-10">
          <Reveal>
            <SectionTitle
              tag={t.sections.calcTag}
              title={t.sections.calcTitle}
              text={t.sections.calcText}
            />
          </Reveal>

          <div className="mt-6">
            <button
              onClick={() => setCalcOpen(true)}
              className="inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-black text-white shadow-[0_14px_35px_rgba(0,64,244,0.28)] transition duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              {t.hero.calc}
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-9 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
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
                className="mx-auto max-w-[390px]"
                imageClassName="h-[340px] object-cover object-center"
              />
            </Reveal>
          </div>
        </section>

        <section id="control" className="bg-white/40 py-9 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal variant="left" className="lg:order-2">
              <ImageCard
                src={appControlImage}
                alt="app control"
                className="mx-auto max-w-[390px]"
                imageClassName="h-[340px] object-cover object-center"
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

        <section id="specs" className="bg-slate-950 py-10 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <SectionTitle
                tag={t.sections.specsTag}
                title={t.sections.specsTitle}
                text=""
              />
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {t.specs.map((item, i) => (
                <Reveal key={item} delay={i * 0.03}>
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/5 px-5 py-5 text-lg leading-8 text-white shadow-sm">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-9 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
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
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-4 font-black text-white transition hover:opacity-95"
                      style={{ backgroundColor: BRAND_BLUE }}
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
                className="mx-auto max-w-[340px]"
                imageClassName="h-[390px] object-cover object-center"
              />
            </Reveal>
          </div>
        </section>

        <ReviewsSection t={t} />

        <section id="faq" className="bg-white/45 py-10">
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

        <section id="contact" className="px-6 py-10 pb-24 md:px-10 md:pb-12">
          <Reveal>
            <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(2,6,23,0.28)] md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="min-w-0">
                  <div className="text-sm font-bold uppercase tracking-[0.22em]" style={{ color: BRAND_YELLOW }}>
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
                    {t.contact.priceLabel}: {t.hero.price}
                  </div>
                  <div className="mt-1 text-slate-200">WhatsApp: +7 706 606 0985</div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={whatsappOrder}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-black text-white transition hover:opacity-95"
                      style={{ backgroundColor: BRAND_BLUE }}
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

      <FloatingDesktop whatsapp={whatsappMain} instagram={instagramLink} />
      <StickyMobileCTA label={t.contact.mobile} href={whatsappMain} />
      <CalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} t={t} />
    </div>
  );
}