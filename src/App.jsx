import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import heroImage from "./assets/hero.webp";
import uvImage from "./assets/uv-sterilization.webp";
import familyImage from "./assets/family-allergy.webp";
import heatingImage from "./assets/heating-top.webp";
import appControlImage from "./assets/app-control.webp";
import filterSystemImage from "./assets/filter-system.webp";
import warrantyImage from "./assets/warranty.webp";
import kaspiIcon from "./assets/kaspi.jpg";

const ease = [0.16, 1, 0.3, 1];

function trackPixel(eventName) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName);
  }
}

function trackCustomPixel(eventName) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName);
  }
}

function trackWhatsAppClick(e) {
  e.preventDefault();

  trackPixel("Contact");
  trackCustomPixel("WhatsAppClick");

  const href = e.currentTarget.href;

  setTimeout(() => {
    window.open(href, "_blank", "noopener,noreferrer");
  }, 150);
}


const CONTENT = {
  ru: {
    brand: "aireco",

    nav: {
      advantages: "преимущества",
      technology: "технология",
      filtration: "фильтрация",
      family: "для семьи",
      control: "управление",
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
        "Профессиональная 5-ступенчатая система очистки. Автоматический контроль качества воздуха и управление через смартфон.",
      primary: "Получить консультацию",
      secondary: "Instagram",
      calc: "Калькулятор",
    },

    trust: [
      "Бесплатная доставка по Казахстану",
      "Сервисное обслуживание и поддержка",
    ],

    stats: [
      ["500м³/ч", "Высокая Произв-ть"],
      ["HEPA H13", "Медицинская фильтрация"],
      ["PM2.5", "Умный датчик"],
      ["Wi-Fi", "Дистанционный контроль"],
    ],

    premiumTitle: "Технологичность в каждой детали",

    premiumCards: [
      [
        "Моющийся пре-фильтр",
        "Задерживает крупную пыль, волосы и шерсть питомцев. Легко обслуживается и служит годами.",
        "◉",
      ],
      [
        "Тихий ночной режим",
        "Работает почти бесшумно — уровень звука сравним с едва уловимым шёпотом.",
        "◌",
      ],
      [
        "Безопасность для семьи",
        "Автоотключение при опрокидывании и надёжная защита от замыканий — полная уверенность, когда рядом дети или домашние животные.",
        "✦",
      ],
      [
        "Мобильность",
        "Очиститель оснащён плавными колёсиками, поэтому его легко перемещать по дому без усилий — с заботой о каждой маме.",
        "▣",
      ],
      [
        "Гибкий таймер",
        "Настраивайте работу устройства от 1 до 24 часов через мобильное приложение, пульт ДУ или сенсорную панель.",
        "◷",
      ],
    ],

    sections: {
      technologyTag: "Технология защиты",
      technologyTitle: "Абсолютная безопасность",
      technologyText:
        "Эффективное уничтожение 99,9% вирусов, бактерий и грибков. Сочетание УФ-модуля и фотокатализа разрушает микроорганизмы на молекулярном уровне, обеспечивая полную безопасность и стерильность в вашем доме.",

      filtrationTag: "система очистки",
      filtrationTitle: "Как работает наш фильтр",

      familyTag: "Здоровье семьи",
      familyTitle: "Комфортный воздух дома для детей и аллергиков",
      familyText:
        "• Интеллектуальный контроль: Датчик PM2.5 непрерывно анализирует состояние воздуха и мгновенно регулирует мощность очистки в зависимости от уровня загрязнения.\n\n• Абсолютная защита: HEPA-фильтр H13 задерживает 99,9% аллергенов и имеет повышенный ресурс работы до 3000 часов.\n\n• Природная свежесть: Ионизация осаждает мельчайшие частицы пыли, выделяя отрицательно заряженные ионы и наполняя пространство чистотой и ощущением свежести.",

      heatingTag: "Инновация в деталях",
      heatingTitle: "Подогреваемая верхняя площадка",
      heatingText:
        "Верхняя панель устройства оснащена функцией подогрева, создающей идеальное место для отдыха ваших питомцев.",
      heatingItems: [
        "Функцию можно отключить, превратив площадку в стильную подставку для декора или аксессуаров.",
        "Антивандальный кабель: усиленная оплетка защищает провод от зубов, а безопасное напряжение 24V гарантирует полную защиту вашего питомца.",
      ],

      controlTag: "Комфорт и эргономика",
      controlTitle: "Мягкий свет создаст уют в спальне",
      controlText:
        "Подсветку можно легко отключить, если вы предпочитаете полную темноту для глубокого сна.",
      controlTitle2: "Очистка воздуха на 360°",
      controlText2:
        "Конструкция прибора обеспечивает круговой забор воздуха. Мощное всасывание со всех сторон эффективно очищает пространство всей комнаты за считанные минуты.",
      warrantyTag: "Качество и сервис",
      warrantyTitle: "aireco — гарантия вашего комфорта",
      warrantyText:
        "Мы уверены в каждой детали нашего устройства: оно создано для долгой и эффективной работы как дома, так и в офисе. Мы берем на себя все обязательства по качеству, чтобы вы могли быть спокойны за чистоту воздуха каждый день.",

      reviewsTag: "Доверие",
      reviewsTitle: "Отзывы покупателей",
      reviewsText: "",

      faqTag: "вопрос / ответ",
      faqTitle: "Всё, что важно знать перед покупкой",

      ctaTag: "aireco",
      ctaTitle: "Заказать",
      ctaText:
        "Напишите в WhatsApp, чтобы получить консультацию и оформить доставку.\n\nА в нашем Instagram мы делимся советами, как сделать дом местом, где дышится легко и свободно.",

      calcTag: "Калькулятор",
      calcTitle: "За сколько времени aireco обновит воздух в вашей комнате?",
      calcText: "Введите площадь, чтобы узнать время полного цикла очистки.",
      calcNote: "Учитывается стандартная высота потолка — 3 м.",
      calcInput: "Площадь комнаты, м²",
      calcPlaceholder: "Например, 20",
      calcVolume: "объём комнаты",
      calcTime: "время очистки",
      calcCycles: "циклов в час",
      calcPerf: "производительность",
      calcEmpty: "Введите площадь, чтобы узнать время полного цикла очистки.",
      calcResult: (area, minutes) =>
        `Полное обновление воздуха в комнате ${area} м² займет около ${minutes} минут`,
    },

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
          "Приобрела данный очиститель на днях, хочу сказать что уже заметен результат. На утро в квартире появилось ощущение свежести, также удобно что есть пульт и продуманы колесики, поэтому удобно его переносить. Спасибо большое!",
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
        q: "Помогает ли очиститель устранять запахи?",
        a:
          "Да. Фотокаталитический фильтр с УФ способствует разложению молекул запахов и органических загрязнений, включая бытовые запахи и запахи, связанные с домашними животными.",
      },
    ],

    filterPoints: [
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
    ],

    contact: {
      priceLabel: "цена",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      mobile: "WhatsApp",
      calc: "Калькулятор",
      installment: "Доступна беспроцентная рассрочка на 24 месяца",
    },
  },

  kz: {
    brand: "aireco",

    nav: {
      advantages: "артықшылықтар",
      technology: "технология",
      filtration: "сүзгілеу",
      family: "отбасы",
      control: "басқару",
      reviews: "пікірлер",
      faq: "сұрақтар",
      order: "тапсырыс",
    },

    hero: {
      badge: "жаңа буындағы ауа тазартқыш",
      title1: "таза ауа",
      title2: "аллергиясыз",
      title3: "және шаңсыз",
      text:
        "Кәсіби 5 сатылы тазарту жүйесі. Ауа сапасын автоматты бақылау және смартфон арқылы басқару.",
      primary: "Кеңес алу",
      secondary: "Instagram",
      calc: "Калькулятор",
    },

    trust: [
      "Қазақстан бойынша тегін жеткізу",
      "Сервистік қызмет және қолдау",
    ],

    stats: [
      ["500м³/сағ", "Жоғары өнімд."],
      ["HEPA H13", "Медициналық сүзгі"],
      ["PM2.5", "Ақылды датчик"],
      ["Wi-Fi", "Қашықтан басқару"],
    ],

    premiumTitle: "Әр бөлшектегі технология",

    premiumCards: [
      [
        "Жуылатын пре-сүзгі",
        "Ірі шаңды, шашты және үй жануарларының жүнін ұстайды. Күтуі оңай және ұзақ жылдар қызмет етеді.",
        "◉",
      ],
      [
        "Тыныш түнгі режим",
        "Өте баяу жұмыс істейді — дыбыс деңгейі сыбырға жақын.",
        "◌",
      ],
      [
        "Отбасы үшін қауіпсіз",
        "Құлаған кезде автоөшіру және қысқа тұйықталудан сенімді қорғаныс — балалар мен жануарлар қасында болса да сенімділік.",
        "✦",
      ],
      [
        "Қозғалғыштық",
        "Тазартқыш жұмсақ дөңгелектермен жабдықталған, сондықтан оны үй ішінде күш жұмсамай оңай жылжытуға болады.",
        "▣",
      ],
      [
        "Икемді таймер",
        "Құрылғы жұмысын 1-ден 24 сағатқа дейін мобильді қосымша, пульт немесе сенсорлық панель арқылы баптаңыз.",
        "◷",
      ],
    ],

    sections: {
      technologyTag: "Қорғаныс технологиясы",
      technologyTitle: "Абсолютті қауіпсіздік",
      technologyText:
        "Вирустар, бактериялар және саңырауқұлақтарды 99,9% тиімді жояды. УФ-модуль мен фотокатализдің үйлесімі микроорганизмдерді молекулалық деңгейде бұзады.",

      filtrationTag: "тазарту жүйесі",
      filtrationTitle: "Біздің сүзгі қалай жұмыс істейді",

      familyTag: "Отбасы денсаулығы",
      familyTitle: "Балалар мен аллергиясы барлар үшін үйдегі жайлы ауа",
      familyText:
        "• Интеллектуалды бақылау: PM2.5 датчигі ауаның жағдайын үздіксіз талдап, ластану деңгейіне қарай тазарту қуатын бірден реттейді.\n\n• Абсолютті қорғаныс: HEPA H13 сүзгісі аллергендердің 99,9%-ын ұстап, 3000 сағатқа дейін ұзартылған ресурсқа ие.\n\n• Табиғи сергектік: Ионизация шаңның ең ұсақ бөлшектерін шөгеріп, ауаны сергітеді.",

      heatingTag: "Детальдағы инновация",
      heatingTitle: "Жылытылатын жоғарғы алаң",
      heatingText:
        "Құрылғының жоғарғы панелі үй жануарларыңызға демалуға ыңғайлы жылы алаң жасайды.",
      heatingItems: [
        "Функцияны өшіріп, алаңды декорға немесе аксессуарларға арналған тұғырға айналдыруға болады.",
        "Антивандал кабель: күшейтілген орама сымды тістен қорғайды, ал 24V қауіпсіз кернеу толық қорғаныс береді.",
      ],

      controlTag: "Жайлылық пен эргономика",
      controlTitle: "Жұмсақ жарық жатын бөлмеде жайлылық жасайды",
      controlText:
        "Егер сіз толық қараңғылықты қаласаңыз, жарықты оңай өшіруге болады.",
      controlTitle2: "360° ауа тазарту",
      controlText2:
        "Құрылғының конструкциясы ауаны барлық жағынан тартып алады. Күшті сору бөлмені бірнеше минут ішінде тиімді тазартады.",

      warrantyTag: "Сапа және сервис",
      warrantyTitle: "aireco — жайлылығыңыздың кепілі",
      warrantyText:
        "Құрылғының әр бөлшегіне сенімдіміз: ол үйде де, кеңседе де ұзақ және тиімді жұмыс істеу үшін жасалған.",

      reviewsTag: "Сенім",
      reviewsTitle: "Сатып алушылар пікірі",
      reviewsText: "",

      faqTag: "сұрақ / жауап",
      faqTitle: "Сатып алу алдында білу маңызды",

      ctaTag: "aireco",
      ctaTitle: "Тапсырыс беру",
      ctaText:
        "Кеңес алып, жеткізуді рәсімдеу үшін WhatsApp-қа жазыңыз.\n\nАл Instagram-да үйдегі ауаны жеңіл әрі таза ету туралы кеңестермен бөлісеміз.",

      calcTag: "Калькулятор",
      calcTitle: "aireco бөлмедегі ауаны қанша уақытта жаңартады?",
      calcText: "Толық тазарту циклінің уақытын білу үшін аумақты енгізіңіз.",
      calcNote: "Стандартты төбе биіктігі — 3 м.",
      calcInput: "Бөлме ауданы, м²",
      calcPlaceholder: "Мысалы, 20",
      calcVolume: "бөлме көлемі",
      calcTime: "тазарту уақыты",
      calcCycles: "сағатына цикл",
      calcPerf: "өнімділік",
      calcEmpty: "Толық тазарту циклінің уақытын білу үшін аумақты енгізіңіз.",
      calcResult: (area, minutes) =>
        `${area} м² бөлмедегі ауаның толық жаңаруы шамамен ${minutes} минут алады`,
    },

    reviews: [
      {
        name: "Ангелина",
        city: "Алматы",
        date: "11.02.2026",
        text:
          "Құрбымның кеңесімен алдым. Құрылғының сапасы мен көлемі ұнады. Бір аптадан кейін үйде шаң азайып, тыныс алу жеңілдеді.",
      },
      {
        name: "Сергей",
        city: "Алматы",
        date: "17.02.2026",
        text:
          "Жылытылатын алаң мысығымыздың сүйікті орнына айналды. Шаң мен жүнді жақсы жинайды. Түнгі режим ұйқыға кедергі келтірмейді.",
      },
      {
        name: "Алуа",
        city: "Қарағанды",
        date: "20.02.2026",
        text:
          "Біздің отбасы үшін аллергияға байланысты тазартқыш қажет болды. Таңдауымызға өкінбедік — үйде шаң азайды.",
      },
      {
        name: "Карина",
        city: "Астана",
        date: "15.02.2026",
        text:
          "Жақында сатып алдым, нәтижесі бірден байқалады. Таңертең үйде сергектік сезілді, пульті және дөңгелектері өте ыңғайлы.",
      },
    ],

    faq: [
      {
        q: "Ионизация не үшін керек?",
        a:
          "Ионизация ұсақ бөлшектерді шөгеріп, ауаны сергек әрі жайлы етеді. Көп адам жаңбырдан кейінгі ауадай сергектік сезінеді.",
      },
      {
        q: "Аллергендермен күресе ме?",
        a:
          "Иә. HEPA H13 сүзгісі тозаң, тұрмыстық аллергендер және PM2.5 бөлшектерін тиімді ұстайды.",
      },
      {
        q: "Сүзгіні қаншалықты жиі ауыстыру керек?",
        a:
          "HEPA сүзгісінің ресурсы ұзартылған. Жуылатын пре-сүзгі ірі шаңды ұстап, негізгі сүзгінің қызмет мерзімін арттырады.",
      },
      
      {
        q: "Иісті жоюға көмектесе ме?",
        a:
          "Иә. Фотокаталитикалық сүзгі және УФ тұрмыстық және жануарларға қатысты иістердің молекулаларын ыдыратуға көмектеседі.",
      },
    ],

    filterPoints: [
      {
        id: "pre",
        title: "Жуылатын пре-сүзгі",
        text:
          "Негізгі сүзгінің қызмет мерзімін ұзартады. Ірі шаңды, түкті және жүнді ұстайды.",
        left: "18%",
        top: "60%",
        align: "left",
      },
      {
        id: "hepa",
        title: "HEPA H13 сүзгісі",
        text:
          "Медициналық тазарту стандарты. Аллергендер, тозаң және PM2.5 секілді ұсақ бөлшектердің 99,9%-ын ұстайды.",
        left: "50%",
        top: "60%",
        align: "center",
      },
      {
        id: "photo",
        title: "Фотокатализ + УФ",
        text:
          "Ластағыштар мен жағымсыз иістерді жинамайды, оларды толық бейтараптайды.",
        left: "82%",
        top: "60%",
        align: "right",
      },
    ],

    contact: {
      priceLabel: "бағасы",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      mobile: "WhatsApp",
      calc: "Калькулятор",
      installment: "24 айға пайызсыз бөліп төлеу қолжетімді",
    },
  },

  en: {
    brand: "aireco",

    nav: {
      advantages: "advantages",
      technology: "technology",
      filtration: "filtration",
      family: "family",
      control: "control",
      reviews: "reviews",
      faq: "faq",
      order: "order",
    },

    hero: {
      badge: "next-generation air purifier",
      title1: "clean air",
      title2: "without allergies",
      title3: "and dust",
      text:
        "Professional 5-stage purification system. Automatic air quality control and smartphone management.",
      primary: "Get consultation",
      secondary: "Instagram",
      calc: "Calculator",
    },

    trust: [
      "Free delivery across Kazakhstan",
      "Service and support",
    ],

    stats: [
      ["500m³/h", "High perform."],
      ["HEPA H13", "Medical filtration"],
      ["PM2.5", "Smart sensor"],
      ["Wi-Fi", "Remote control"],
    ],

    premiumTitle: "Technology in every detail",

    premiumCards: [
      [
        "Washable pre-filter",
        "Captures coarse dust, hair and pet fur. Easy to maintain and built to last for years.",
        "◉",
      ],
      [
        "Quiet night mode",
        "Operates almost silently — the sound level is comparable to a barely audible whisper.",
        "◌",
      ],
      [
        "Safety for family",
        "Auto shut-off on tipping and reliable short-circuit protection — complete peace of mind with children or pets nearby.",
        "✦",
      ],
      [
        "Mobility",
        "The purifier has smooth wheels, making it easy to move around the house with minimal effort.",
        "▣",
      ],
      [
        "Flexible timer",
        "Set operation from 1 to 24 hours via the mobile app, remote control or touch panel.",
        "◷",
      ],
    ],

    sections: {
      technologyTag: "Protection technology",
      technologyTitle: "Absolute safety",
      technologyText:
        "Effective elimination of 99.9% of viruses, bacteria and fungi. The combination of a UV module and photocatalysis destroys microorganisms at the molecular level.",

      filtrationTag: "purification system",
      filtrationTitle: "How our filter works",

      familyTag: "Family health",
      familyTitle: "Comfortable air at home for children and allergy-sensitive users",
      familyText:
        "• Intelligent control: The PM2.5 sensor continuously analyzes the air and instantly adjusts purification power based on pollution level.\n\n• Absolute protection: The HEPA H13 filter captures 99.9% of allergens and offers an extended service life of up to 3000 hours.\n\n• Natural freshness: Ionization helps settle fine dust particles and fills the space with a clean, fresh feel.",

      heatingTag: "Innovation in detail",
      heatingTitle: "Heated top platform",
      heatingText:
        "The top panel features a heating function, creating an ideal resting place for your pets.",
      heatingItems: [
        "The function can be turned off, turning the platform into a stylish stand for decor or accessories.",
        "Anti-vandal cable: reinforced braiding protects the wire from teeth, while safe 24V voltage guarantees complete protection for your pet.",
      ],

      controlTag: "Comfort and ergonomics",
      controlTitle: "Soft light creates a cozy atmosphere in the bedroom",
      controlText:
        "The backlight can be easily turned off if you prefer complete darkness for deep sleep.",
      controlTitle2: "360° air purification",
      controlText2:
        "The device design ensures circular air intake. Powerful suction from all sides effectively cleans the entire room within minutes.",

      warrantyTag: "Quality and service",
      warrantyTitle: "aireco — your comfort guaranteed",
      warrantyText:
        "We are confident in every detail of our device: it is designed for long and efficient operation at home and in the office.",

      reviewsTag: "Trust",
      reviewsTitle: "Customer reviews",
      reviewsText: "",

      faqTag: "q / a",
      faqTitle: "Everything important before purchase",

      ctaTag: "aireco",
      ctaTitle: "Order",
      ctaText:
        "Write to us on WhatsApp to get consultation and arrange delivery.\n\nOn Instagram, we share tips on how to make your home a place where breathing feels light and easy.",

      calcTag: "Calculator",
      calcTitle: "How quickly will aireco refresh the air in your room?",
      calcText: "Enter the room area to estimate the full air cycle time.",
      calcNote: "Standard ceiling height considered — 3 m.",
      calcInput: "Room area, m²",
      calcPlaceholder: "For example, 20",
      calcVolume: "room volume",
      calcTime: "cleaning time",
      calcCycles: "cycles per hour",
      calcPerf: "performance",
      calcEmpty: "Enter the room area to estimate the full air cycle time.",
      calcResult: (area, minutes) =>
        `Full air renewal in a ${area} m² room will take about ${minutes} minutes`,
    },

    reviews: [
      {
        name: "Angelina",
        city: "Almaty",
        date: "11.02.2026",
        text:
          "Bought it on a friend’s recommendation. The build quality and size impressed me. After a week, the air felt easier to breathe and there was less dust at home.",
      },
      {
        name: "Sergey",
        city: "Almaty",
        date: "17.02.2026",
        text:
          "The heated platform became our cat’s favorite spot. It collects a noticeable amount of fur and dust. Night mode does not disturb sleep.",
      },
      {
        name: "Alua",
        city: "Karaganda",
        date: "20.02.2026",
        text:
          "For our family with allergies, buying an air purifier was necessary. We did not make a wrong choice — there is visibly less dust now.",
      },
      {
        name: "Karina",
        city: "Astana",
        date: "15.02.2026",
        text:
          "I bought it recently and the result is already noticeable. The apartment feels fresher in the morning, and the remote and wheels are very convenient.",
      },
    ],

    faq: [
      {
        q: "Why is ionization needed?",
        a:
          "Ionization helps settle fine particles, making the air feel fresher and more comfortable. Many people compare it to the freshness after rain.",
      },
      {
        q: "Does it help with allergens?",
        a:
          "Yes. The HEPA H13 filter effectively traps pollen, household allergens and PM2.5 particles.",
      },
      {
        q: "How often should the filter be replaced?",
        a:
          "The HEPA filter has an extended service life. The washable pre-filter captures coarse dust and extends the life of the main filter.",
      },    
      {
        q: "Does it help eliminate odors?",
        a:
          "Yes. The photocatalytic filter with UV helps break down odor molecules, including household and pet-related smells.",
      },
    ],

    filterPoints: [
      {
        id: "pre",
        title: "Washable pre-filter",
        text:
          "Extends the life of the main filter. Captures coarse dust, lint and pet fur.",
        left: "18%",
        top: "60%",
        align: "left",
      },
      {
        id: "hepa",
        title: "HEPA H13 filter",
        text:
          "Medical-grade purification. Captures 99.9% of micro-particles such as allergens, pollen and PM2.5 dust.",
        left: "50%",
        top: "60%",
        align: "center",
      },
      {
        id: "photo",
        title: "Photocatalysis + UV",
        text:
          "Does not accumulate contaminants or unpleasant smells — it neutralizes them completely.",
        left: "82%",
        top: "60%",
        align: "right",
      },
    ],

    contact: {
      priceLabel: "price",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      mobile: "WhatsApp",
      calc: "Calculator",
      installment: "0% installment for 24 months available",
    },
  },
};

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

function TrustStrip({ items }) {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="grid gap-3 md:grid-cols-2">
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

function KaspiBadge({ text }) {
  return (
    <div className="flex items-center gap-3 text-slate-200">
      <img
        src={kaspiIcon}
        alt="Kaspi"
        className="h-12 w-20 rounded-2xl object-cover"
      />
      <span>{text}</span>
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
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FloatingDesktop({ whatsapp, onCalc, calcLabel, whatsappLabel }) {
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
        onClick={trackWhatsAppClick}
        className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-[0_20px_50px_rgba(34,197,94,0.30)] transition duration-300 hover:scale-[1.03] hover:bg-green-600"
      >
        <WhatsAppIcon />
        {whatsappLabel}
      </a>
    </div>
  );
}

function StickyMobileCTA({ label, href, calcLabel, onCalc }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onCalc}
          className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-3 py-4 text-sm font-black text-white"
        >
          <CalcIcon />
          {calcLabel}
        </button>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={trackWhatsAppClick}
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
  const minutes = volume > 0 ? Math.ceil((volume / 500) * 60) : 0;
  const cycles = volume > 0 ? 500 / volume : 0;

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

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
                {t.sections.calcInput}
              </label>

              <input
                type="number"
                min="1"
                step="1"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-2xl font-black text-slate-950 outline-none transition focus:border-sky-400"
                placeholder={t.sections.calcPlaceholder}
              />

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {t.sections.calcNote}
              </p>

              <div className="mt-5 rounded-[1.2rem] bg-sky-50 px-4 py-4 text-[16px] leading-7 text-slate-700 ring-1 ring-sky-100">
                {cleanArea > 0
                  ? t.sections.calcResult(cleanArea, minutes)
                  : t.sections.calcEmpty}
              </div>
            </SoftCard>

            <div className="grid gap-4 sm:grid-cols-2">
              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  {t.sections.calcVolume}
                </div>
                <div className="mt-3 text-4xl font-black text-slate-950">
                  {volume > 0 ? volume.toFixed(1) : "—"} м³
                </div>
              </SoftCard>

              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  {t.sections.calcTime}
                </div>
                <div className="mt-3 text-4xl font-black text-slate-950">
                  {minutes > 0 ? `${minutes} мин` : "—"}
                </div>
              </SoftCard>

              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  {t.sections.calcCycles}
                </div>
                <div className="mt-3 text-4xl font-black text-slate-950">
                  {cycles > 0 ? cycles.toFixed(1) : "—"}
                </div>
              </SoftCard>

              <SoftCard className="p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  {t.sections.calcPerf}
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

function FilterHotspots({ t }) {
  const [active, setActive] = useState("pre");

  return (
    <div className="mx-auto max-w-[860px]">
      <div className="text-center">
        <div className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
          {t.sections.filtrationTitle}
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

        {t.filterPoints.map((point) => (
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
  const [lang, setLang] = useState("ru");
  const t = useMemo(() => CONTENT[lang], [lang]);

  const whatsappMessageByLang = {
    ru: "Здравствуйте, интересует очиститель воздуха aireco",
    kz: "Сәлеметсіз бе, aireco ауа тазартқышы қызықтырады",
    en: "Hello, I am interested in the aireco air purifier",
  };

  const whatsappMessage = whatsappMessageByLang[lang];
  const whatsappMain = `https://api.whatsapp.com/send?phone=77066860985&text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const whatsappOrder = whatsappMain;
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
                    onClick={trackWhatsAppClick}
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-7 py-4 text-base font-bold text-white shadow-[0_14px_35px_rgba(34,197,94,0.30)] transition duration-300 hover:-translate-y-0.5 hover:bg-green-600"
                  >
                    <WhatsAppIcon />
                    {t.hero.primary}
                  </a>

                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-7 py-4 text-base font-bold text-white shadow-lg transition duration-300 hover:opacity-90"
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
              <FilterHotspots t={t} />
            </div>
          </div>
        </section>

        <section id="family" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal variant="right" className="order-1">
              <div className="min-w-0">
                <SectionTitle
                  tag={t.sections.familyTag}
                  title={t.sections.familyTitle}
                  text={t.sections.familyText}
                />
              </div>
            </Reveal>

            <Reveal variant="left" className="order-2">
              <div className="mx-auto max-w-[520px] overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                <motion.img
                  src={familyImage}
                  alt="family comfort"
                  initial={{ scale: 1.02, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease }}
                  className="block h-[500px] w-full rounded-[1.5rem] object-cover object-[center_76%] bg-white"
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
                  className="block h-[360px] w-full rounded-[1.5rem] object-cover object-[center_34%] bg-white"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="control" className="bg-white/40 py-10 backdrop-blur-[2px]">
          <div className="mx-auto grid max-w-7xl gap-7 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal variant="right" className="order-1">
              <div className="min-w-0 space-y-7">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-600">
                    {t.sections.controlTag}
                  </div>
                  <h2 className="mt-3 break-words text-3xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
                    {t.sections.controlTitle}
                  </h2>
                  <p className="mt-4 max-w-2xl break-words text-[16px] leading-8 text-slate-500">
                    {t.sections.controlText}
                  </p>
                </div>

                <div>
                  <h3 className="break-words text-2xl font-black leading-tight text-slate-950 md:text-4xl">
                    {t.sections.controlTitle2}
                  </h3>
                  <p className="mt-4 max-w-2xl break-words text-[16px] leading-8 text-slate-500">
                    {t.sections.controlText2}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" className="order-2 mt-2 md:mt-4">
              <div className="mx-auto max-w-[420px] overflow-hidden rounded-[2rem] bg-white/70 p-2 shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-1 ring-slate-100 backdrop-blur">
                <motion.img
                  src={appControlImage}
                  alt="app control"
                  initial={{ scale: 1.02, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease }}
                  className="block h-[360px] w-full rounded-[1.5rem] object-cover object-[center_44%] bg-white"
                />
              </div>
            </Reveal>
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
                  <p className="mt-5 max-w-2xl break-words whitespace-pre-line text-lg leading-8 text-slate-200">
                    {t.sections.ctaText}
                  </p>
                </div>

                <div className="rounded-[1.7rem] bg-white/10 p-6 backdrop-blur">
                  <div className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-300">
                    {t.contact.priceLabel}
                  </div>
                  <div className="mt-2 text-[40px] font-black leading-none text-white md:text-[52px]">
                    129 000 ₸
                  </div>

                  <div className="mt-4">
                    <KaspiBadge text={t.contact.installment} />
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={whatsappOrder}
                      target="_blank"
                      rel="noreferrer"
                      onClick={trackWhatsAppClick}
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-4 text-base font-black text-white transition hover:bg-green-600"
                    >
                      <WhatsAppIcon />
                      {t.contact.whatsapp}
                    </a>

                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-6 py-4 text-base font-black text-white transition hover:opacity-90"
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
        whatsappLabel={t.contact.whatsapp}
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
