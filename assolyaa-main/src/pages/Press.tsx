import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";

const reachStats = [
  { value: "113", label: "публичных упоминаний в прессе" },
  { value: "6+", label: "языков: RU · KZ · EN · FR · ES · AZ" },
  { value: "2013–2026", label: "годы медиахроники" },
];

const socialStats = [
  { platform: "TikTok", value: "465 000+", label: "подписчиков" },
  { platform: "Instagram", value: "280 000+", label: "подписчиков" },
  { platform: "Просмотры", value: "5–96 млн", label: "на одно видео" },
];

const trajectory = [
  {
    years: "2013",
    title: "Первые архивные упоминания",
    text: "Классическая манера, участие в конкурсах, ранние публикации о живописи в манере старых мастеров.",
  },
  {
    years: "2021–2022",
    title: "Вирусное искусство",
    text: "Гиперреализм, скоростные и многочасовые портреты, рисование одновременно несколькими конечностями, портреты исторических деятелей Казахстана.",
  },
  {
    years: "2023",
    title: "Появление Carpet Art",
    text: "Концептуализация направления живописи по традиционным коврам; масштабный проект и выставка Qazaq Content.",
  },
  {
    years: "2024",
    title: "Париж и институциональное признание",
    text: "Дебют на Salon d'Automne в Париже; победа в итогах года TikTok в категории «Национальная культура».",
  },
  {
    years: "2025",
    title: "Серия мировых звёзд",
    text: "Портреты Дженнифер Лопес и Джеки Чана; международный проект Modern Nomads на телеканале Euronews.",
  },
  {
    years: "2026",
    title: "Глобальное признание",
    text: "Публикация в The Independent, включение в глобальный список новаторов The Discover List 2026 от TikTok, широкий международный резонанс в прессе и соцсетях.",
  },
];

const topPublications = [
  {
    date: "07.05.2026",
    outlet: "The Independent (Великобритания)",
    url: "https://www.independent.co.uk/asia/central-asia/azerbaijan-baku-carpet-festival-silk-road-b2970762.html",
    text: "Джорди Грейг отмечает художницу среди ярких участников Международного фестиваля ковра в Баку, делая акцент на её уникальных портретах на коврах.",
  },
  {
    date: "26.02.2026",
    outlet: "TikTok Newsroom (Global / Kazakhstan)",
    url: "https://newsroom.tiktok.com/the-discover-list-2026-uk?lang=en-GB",
    text: "Включение в глобальный список The Discover List 2026 в категории Innovators — топ-50 мировых креаторов, единственный представитель Казахстана.",
  },
  {
    date: "02.11.2025",
    outlet: "The Astana Times",
    url: "https://astanatimes.com/2025/11/kazakh-artists-carpet-paintings-blend-tradition-and-modern-art/",
    text: "Развёрнутое интервью об истоках Carpet Art, серии «Женщины Великой степи» и портретах Дженнифер Лопес и Джеки Чана.",
  },
  {
    date: "02.02.2025",
    outlet: "Euronews",
    url: "https://ru.euronews.com/culture/2025/02/05/kak-kazahskie-hudozhniki-vozrozhdayut-tradicii-v-sovremennom-iskusstve",
    text: "Сюжет «Modern Nomads» («Как казахские художники возрождают традиции в современном искусстве») с участием Ассоль.",
  },
  {
    date: "12.08.2025",
    outlet: "Kazinform",
    url: "https://www.inform.kz/ru/kazahstanskaya-hudozhnitsa-podarila-dzhennifer-lopes-unikalnuyu-kartinu-kover-a0ae9e",
    text: "Эксклюзивное интервью о создании и передаче портрета на ковре для Дженнифер Лопес (J.Lo).",
  },
  {
    date: "19.01.2024",
    outlet: "24KZ",
    url: "https://24.kz/ru/news/culture/635404-kazakhstanskoe-iskusstvo-predstavleno-na-mirovoj-vystavke-v-parizhe",
    text: "Телерепортаж о дебюте художницы на престижном парижском осеннем салоне (Salon d'Automne) с серией из пяти ковров.",
  },
  {
    date: "03.11.2023",
    outlet: "The Village Казахстан",
    url: "https://village.com.kz/village/people/interview-people/32999-asel-sabyrzhankyzy-moya-missiya-vozrodit-istinnoe-znachenie-tyurkskih-zhenschin",
    text: "Интервью о миссии «возродить истинное значение тюркских женщин» и выставке Qazaq Content.",
  },
  {
    date: "19.12.2013",
    outlet: "Газета «Новое Поколение»",
    url: null,
    text: "Ранний очерк «Реинкарнация Рафаэля» об Асель Амангельдиновой и живописи в манере старых мастеров (ранний архив).",
  },
];

const pressIndex = [
  {
    year: "2026",
    entries: [
      {
        label: "19.08.2026 — Facebook, публичная группа",
        desc: "EN: репост о технике одновременного создания нескольких картин.",
        url: "https://www.facebook.com/groups/183914082485562/posts/925449658331997/",
      },
      {
        label: "11.08.2026 — Kazinform, календарь дат",
        desc: "KZ: упоминание портрета Абая, выполненного словами песни «Көзімнің қарасы».",
        url: "https://kaz.inform.kz/news/11-tamiz-kazinform-kuntzbes-zhilnama-fbf80170/",
      },
      {
        label: "10.08.2026 — Kazislam.kz (Facebook)",
        desc: "KZ: видеоматериал о ковровом портрете Абая.",
        url: "https://www.facebook.com/kazislamkz/videos/1347143384240872/",
      },
      {
        label: "15.07.2026 — The Astana Times (Nagima Abuova)",
        desc: "EN: материал о том, как Энрике Иглесиас поделился видео с её портретом на ковре.",
        url: "https://astanatimes.com/2026/07/see-you-soon-kazakhstan-enrique-iglesias-shares-kazakh-artists-portrait/",
      },
      {
        label: "14.07.2026 — Kursiv English (Aset Smagulov)",
        desc: "EN: новость о международном репосте Иглесиаса.",
        url: "https://kz.kursiv.media/en/2026-07-14/engk-nknk-enrique-iglesias-reposts-kazakh-artists-video-and-addresses-fans/",
      },
      {
        label: "14.07.2026 / 26.02.2026 — TikTok Newsroom, локализованная KZ-страница",
        desc: "KZ: официальная страница о включении в Discover List 2026.",
        url: "https://newsroom.tiktok.com/discover-list-2026-kz-kz?lang=ru-KZ",
      },
      {
        label: "13.07.2026 — 24KZ (Анджела Кубашева)",
        desc: "RU: сюжет о реакции Энрике Иглесиаса на портрет.",
        url: "https://24.kz/ru/news/culture/779685-enrike-iglesias-sdelal-repost-neobychnogo-podarka-kazakhstanskoj-khudozhnitsy",
      },
      {
        label: "13.07.2026 — Qazaqstan TV (Facebook)",
        desc: "KZ: новость о вручении Джеки Чану ковра с его портретом.",
        url: "https://www.facebook.com/qazaqstantv/videos/1379475414102407/",
      },
      {
        label: "10.07.2026 — официальный Facebook Enrique Iglesias",
        desc: "EN: официальный репост артиста: «see you soon Kazakhstan #Repost @assolyaa».",
        url: "https://www.facebook.com/Enrique/posts/1597544421739255/",
      },
      {
        label: "28.05.2026 — Turkistan TV (Instagram)",
        desc: "KZ: публикация о необычных авторских портретах мировым поп-звёздам.",
        url: "https://www.instagram.com/reel/DY6O1uKNauf/",
      },
      {
        label: "16.05.2026 — Instagram (Ержан Сан)",
        desc: "RU/KZ: упоминание портрета-подарка для американской певицы Кери Хилсон (Keri Hilson).",
        url: "https://www.instagram.com/reel/DYZNzOCMe-J/",
      },
      {
        label: "07.05.2026 — The Independent (Geordie Greig)",
        desc: "EN: обзор фестиваля и ковровых работ художницы.",
        url: "https://www.independent.co.uk/asia/central-asia/azerbaijan-baku-carpet-festival-silk-road-b2970762.html",
      },
      {
        label: "24.04.2026 — TuraNews (Instagram)",
        desc: "AZ: азербайджанское медиа о работе с аутентичными коврами.",
        url: "https://www.instagram.com/reel/DXhKOeOjFv9/",
      },
      {
        label: "23.04.2026 — Almau",
        desc: "KZ: выступление Асель в качестве спикера креативного форума и разбор кейсов в TikTok.",
        url: "https://almau.edu.kz/almau-media-zh-ne-kino-mektebi-merejtojyn-aptaly-kreativti-forummen-atap-tti/",
      },
      {
        label: "05.03.2026 — WE Project",
        desc: "RU: объёмное интервью о бизнес-модели в искусстве, образовании, аутентичности и выходе на мировые рынки.",
        url: "https://weproject.media/articles/detail/vdokhnoveniya-nedostatochno-nuzhna-sistema-asel-sabyrzhankyzy-o-rabote-khudozhnika/",
      },
      {
        label: "27.02.2026 — gov.kz / Акимат Алматы",
        desc: "KZ: официальный пресс-релиз о вручении авторского ковра олимпийскому чемпиону Михаилу Шайдорову.",
        url: "https://www.gov.kz/memleket/entities/almaty/press/news/details/1171932",
      },
      {
        label: "27.02.2026 — Aqsham News (Threads)",
        desc: "KZ: новость о подарке Михаилу Шайдорову.",
        url: "https://www.threads.com/@aqsham_news/post/DVRgBpJCupX",
      },
      {
        label: "27.02.2026 — Bozoknews (Instagram)",
        desc: "RU: пост о ковре для Михаила Шайдорова.",
        url: "https://www.instagram.com/p/DVSz3CeDAca/",
      },
      {
        label: "26.02.2026 — Ulysmedia (Ильяс Бахыт)",
        desc: "RU: обзор успеха в TikTok, Carpet Art и национальной специфики.",
        url: "https://ulysmedia.kz/news/68899-kazakhstan-v-trendakh-tiktok-khudozhnitsa-assolya-voshla-v-the-discover-list-2026/",
      },
      {
        label: "26.02.2026 — Stan.kz (Балнұр Рахматуллақызы)",
        desc: "KZ: материал о попадании в топ-50 мировых авторов.",
        url: "https://stan.kz/kazakstandik-suretshi-tiktok-nyskasi-boyinsha-alemnin-t-430872/",
      },
      {
        label: "26.02.2026 — BAQ.kz (Айым Серікбайқызы)",
        desc: "KZ: разбор техники Carpet Art, серии женщин Степи и мировых звёзд.",
        url: "https://baq.kz/mihail-shaydorovtyn-portretin-salgan-suretshi-the-discover-list-2026-tizimine-endi-320016139/",
      },
      {
        label: "26.02.2026 — Kursiv (Айдана Сейсембек)",
        desc: "RU: статус единственной представительницы Казахстана в подборке года.",
        url: "https://kz.kursiv.media/2026-02-26/aina-kazahstanskaya-hudozhnicza-popala-v-top-50-kreatorov-mira-po-versii-tiktok/",
      },
      {
        label: "25.02.2026 — TikTok Newsroom Global / UK",
        desc: "EN: глобальная версия релиза списка креаторов года.",
        url: "https://newsroom.tiktok.com/the-discover-list-2026-uk?lang=en-GB",
      },
      {
        label: "25.02.2026 — TikTok Newsroom Sub-Saharan Africa",
        desc: "EN: языковая версия релиза The Discover List 2026.",
        url: "https://newsroom.tiktok.com/the-discover-list-meet-the-2026-sub-saharan-africa-tiktok-creators-to-watch?lang=en-ZA",
      },
      {
        label: "25.02.2026 — TikTok Newsroom France",
        desc: "FR: языковая версия релиза The Discover List 2026.",
        url: "https://newsroom.tiktok.com/the-discovery-list-2026-fr?lang=fr",
      },
      {
        label: "25.02.2026 — TikTok Newsroom LATAM",
        desc: "ES: языковая версия релиза The Discover List 2026.",
        url: "https://newsroom.tiktok.com/tiktok-discover-list-2026-latam?lang=es-419",
      },
      {
        label: "25.02.2026 — Казахстанская правда",
        desc: "RU: публикация о ковровом портрете фигуриста Михаила Шайдорова.",
        url: "https://kazpravda.kz/n/shedevr-lezviyami-kazahstanskaya-hudozhnitsa-napisala-portret-mihaila-shaydorova-konkami-na-kovre/",
      },
      {
        label: "24.02.2026 — Instagram, публичный новостной пост",
        desc: "RU/KZ: вирусное распространение работы с Михаилом Шайдоровым.",
        url: "https://www.instagram.com/reel/DVJZbL7DZJQ/",
      },
      {
        label: "24.02.2026 — Turkistan TV (Facebook)",
        desc: "KZ: видео о создании портрета Михаила Шайдорова на ковре.",
        url: "https://www.facebook.com/Turkistantvkaz/videos/1595033671780313/",
      },
      {
        label: "24.02.2026 — Elorda.info (Instagram)",
        desc: "RU: вирусный репост работы с Михаилом Шайдоровым.",
        url: "https://www.instagram.com/reel/DVK19cXCMp3/",
      },
      {
        label: "26.02.2026 — TikTok Newsroom Kazakhstan",
        desc: "RU: официальный релиз о включении в The Discover List 2026 (Innovators).",
        url: "https://newsroom.tiktok.com/discover-list-2026-kz-kz?lang=ru-KZ",
      },
    ],
  },
  {
    year: "2025",
    entries: [
      {
        label: "02.11.2025 — The Astana Times (Aiman Nakispekova)",
        desc: "EN: программное интервью о коврах, выставке Qazaq Content, J.Lo и Джеки Чане.",
        url: "https://astanatimes.com/2025/11/kazakh-artists-carpet-paintings-blend-tradition-and-modern-art/",
      },
      {
        label: "17.10.2025 — Almaty.today (Facebook)",
        desc: "RU: медиа-профиль о портретах мировых звёзд.",
        url: "https://www.facebook.com/almaty.today/videos/9431973600260750/",
      },
      {
        label: "12.08.2025 — Kazinform",
        desc: "RU: эксклюзивное интервью о создании и вручении портрета Дженнифер Лопес.",
        url: "https://www.inform.kz/ru/kazahstanskaya-hudozhnitsa-podarila-dzhennifer-lopes-unikalnuyu-kartinu-kover-a0ae9e",
      },
      {
        label: "12.08.2025 — Kursiv KZ",
        desc: "KZ: новость о вручении Дженнифер Лопес коврового портрета.",
        url: "https://kz.kursiv.media/kk/2025-08-12/rnmtr-asel-sabyrzhankyzy-jlo-portret-syiga-tartty/",
      },
      {
        label: "12.08.2025 — Instagram, новостной пост",
        desc: "RU: репортаж с вручения портрета Дженнифер Лопес.",
        url: "https://www.instagram.com/p/DNP2hZit2bC/",
      },
      {
        label: "30.07.2025 — ELLE Kazakhstan (adminPMG)",
        desc: "RU: гид по топовым TikTok-авторам страны; фокус на национальной идентичности и серии казахских цариц.",
        url: "https://elle.com.kz/na-styke-proshlogo-i-budushhego-tvorchestvo-kazahstanskih-kreatorov-tiktok",
      },
      {
        label: "28.05.2025 — Qazaq Culture",
        desc: "RU: интервью о 14 женских образах, коммерческой стороне искусства и выставках в Астане, Баку, Берлине и Париже.",
        url: "https://qazaqculture.com/ru/news/dafbfda7-8513-42fa-9a6d-2c061a63a5e0",
      },
      {
        label: "06.03.2025 — Informburo.kz (Мария Пичененко)",
        desc: "RU: упоминание под именем Асель Бекжан в подборке ключевых авторов контента.",
        url: "https://informburo.kz/novosti/ot-ucitelia-do-stiuardessy-vosem-kazaxstanok-na-kotoryx-stoit-podpisatsia-v-tiktok",
      },
      {
        label: "02.02.2025 — Euronews (Paul Hackett)",
        desc: "EN: спецпроект Modern Nomads о возрождении казахских традиций.",
        url: "https://ru.euronews.com/culture/2025/02/05/kak-kazahskie-hudozhniki-vozrozhdayut-tradicii-v-sovremennom-iskusstve",
      },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        label: "10.12.2024 — TikTok Newsroom Kazakhstan",
        desc: "RU: объявление победителем года в номинации «Национальная культура».",
        url: "https://newsroom.tiktok.com/ru-kz/year-on-tiktok-2024-kz",
      },
      {
        label: "12.10.2024 — Новое Поколение",
        desc: "RU: участие художницы в новой концепции проекта «Мисс Казахстан».",
        url: "https://np.kz/news/obshhestvo/psihologiya/novaya-konczepcziya-naczionalnogo-konkursa-krasoty-miss-kazahstan",
      },
      {
        label: "16.09.2024 — Instagram (@assolyaa)",
        desc: "RU: совместный креативный арт-проект с компанией «Яндекс Поиск».",
        url: "https://www.instagram.com/reel/C_-Dy_BMxio/",
      },
      {
        label: "12.07.2024 — 24KZ (Наргиза Такежанова)",
        desc: "RU: телерепортаж из мастерской, процесс создания картины «Гаухар батыр».",
        url: "https://24.kz/ru/news/culture/660864-unikalnye-kartiny-na-kovre-sozdaet-almatinskaya-khudozhnitsa",
      },
      {
        label: "14.05.2024 — Respublika.kz.media (Оксана Макушина)",
        desc: "RU: резонансный ковровый портрет Салтанат Нукеновой и его общественный контекст.",
        url: "https://respublika.kz.media/archives/124018",
      },
      {
        label: "Май 2024 — Instagram, публичный пост",
        desc: "RU: вирусное видео с ковровым портретом Салтанат Нукеновой.",
        url: "https://www.instagram.com/reel/C7A3S-CLbuC/",
      },
      {
        label: "19.01.2024 — 24KZ",
        desc: "RU: участие в Salon d'Automne в Париже с пятью коврами.",
        url: "https://24.kz/ru/news/culture/635404-kazakhstanskoe-iskusstvo-predstavleno-na-mirovoj-vystavke-v-parizhe",
      },
      {
        label: "17.01.2024 — El.kz",
        desc: "RU: работа в Баку над художественным преображением азербайджанского ковра.",
        url: "https://el.kz/ru/kazahstanskaya-hudozhnitsa-poletela-v-baku-i-prevratila-azerbaydzhanskiy-kover-v-kartinu_104078/",
      },
    ],
  },
  {
    year: "2023",
    entries: [
      {
        label: "05.12.2023 — МИД РК / gov.kz, русская версия",
        desc: "RU: дни культуры Казахстана в Баку — 14 исторических женских образов и портрет Хуршидбану Натаван.",
        url: "https://www.gov.kz/memleket/entities/mfa/press/region-news/details/16780?lang=ru",
      },
      {
        label: "05.12.2023 — gov.kz, казахская версия (ҚР СІМ)",
        desc: "KZ: дни культуры Казахстана в Баку.",
        url: "https://www.gov.kz/memleket/entities/mfa/press/region-news/details/16780?lang=kk",
      },
      {
        label: "15.11.2023 — Edgü Bilig (Zhanar Adylbek)",
        desc: "EN: большой материал об исторической преемственности, коврах и медийности.",
        url: null,
      },
      {
        label: "03.11.2023 — The Village Казахстан (Карина Исабекова)",
        desc: "RU: миссия восстановления исторической роли тюркских женщин.",
        url: "https://village.com.kz/village/people/interview-people/32999-asel-sabyrzhankyzy-moya-missiya-vozrodit-istinnoe-znachenie-tyurkskih-zhenschin",
      },
      {
        label: "25.10.2023 — KazFace.kz (Тамирис Әбділдина)",
        desc: "RU: подробное интервью об академическом бэкграунде, проекте Boyau House, технике рисования и планах.",
        url: "https://kazface.kz/ru/new/xudoznica-assol-xocu-stat-dostoinym-primerom-dlia-budushhix-xudoznikov",
      },
      {
        label: "29.09.2023 — 24KZ",
        desc: "RU: телесюжет в рубрике «Новости культуры» — выставка Qazaq Content.",
        url: "https://24.kz/ru/tv-projects/novosti-kultury/619882-kontsert-kollektiva-galymzhan-narymbetov-septet-sostoyalsya-v-astana-opera-kultura",
      },
      {
        label: "27.09.2023 — Time.kz",
        desc: "RU: материал «Сделано в Казахстане» о переходе к коврам как базовому медиуму.",
        url: "https://time.kz/articles/reporter/2023/09/27/sdelano-v-kazahstane",
      },
      {
        label: "05.09.2023 — Time.kz",
        desc: "RU: материал «На ковёр» о выставке Qazaq Content в Астане.",
        url: "https://time.kz/articles/grim/2023/09/05/na-kovyor",
      },
      {
        label: "19.05.2023 — Tengrinews",
        desc: "RU: создание картины с тотемным образом Көкбөрі на ковре.",
        url: "https://tengrinews.kz/kazakhstan_news/hudojnitsa-sozdala-portret-devushki-kokbor-unikalnoy-tehnike-499050/",
      },
      {
        label: "21.04.2023 — Almaty.tv",
        desc: "RU: экспертный комментарий художницы о развитии искусственного интеллекта и роли живого творца.",
        url: "https://almaty.tv/ru/news/obschestvo/1903-dgasandy-intellekt-adam-enbegin-almastyra-ala-ma",
      },
      {
        label: "20.04.2023 — KazFace.kz",
        desc: "RU: материалы о вирусном видео с одновременным рисованием 6 портретов руками и ногами.",
        url: "https://kazface.kz/ru/new/xudoznica-iz-almaty-mozet-odnovremenno-narisovat-sest-portretov",
      },
      {
        label: "20.04.2023 — Liter.kz",
        desc: "RU: репортаж о перформансе с шестью портретами одновременно.",
        url: "https://liter.kz/shest-portretov-odnovremenno-risuet-almatinskaia-khudozhnitsa-video-1681969294/",
      },
      {
        label: "28.02.2023 — Time.kz",
        desc: "RU: материал о персональной выставке «Когда кумиры вдохновляют».",
        url: "https://time.kz/articles/grim/2023/02/28/eshhyo-kak-mozhno",
      },
      {
        label: "22.02.2023 — Almaty.tv",
        desc: "RU: «Портреты как живые» — репортаж с персональной выставки.",
        url: "https://almaty.tv/ru/news/kultura/2044-portrety-kak-dgivye-almatinskaya-khudodgnitsa-predstavila-personalnuyu-vystavku-kartin",
      },
      {
        label: "22.02.2023 — VA Press",
        desc: "RU: «В Алматы проходит выставка художницы Асель Сабыржанқызы».",
        url: "https://vapress.kz/ru/article/v-almaty-prohodit-vystavka-hudojnisy-asel-sabyrjankyzy.html",
      },
      {
        label: "21.02.2023 — VA Press",
        desc: "RU: анонс персональной выставки в Музее Алматы.",
        url: "https://vapress.kz/index.php/ru/article/v-almaty-proidet-vystavka-hudojnisy-asel-sabyrjanqyzy.html",
      },
    ],
  },
  {
    year: "2022",
    entries: [
      {
        label: "16.11.2022 — Вечерний Бишкек",
        desc: "RU: международный резонанс в СНГ вокруг навыка синхронного рисования шести личностей одновременно.",
        url: "https://www.vb.kg/doc/424506_almatinka_rykami_i_nogami_napisala_shest_portretov_odnovremenno.html",
      },
      {
        label: "13.11.2022 — Rambler / Мир24",
        desc: "RU: материал о перформансе «руками и ногами написала шесть портретов одновременно».",
        url: "https://weekend.rambler.ru/people/49683454-hudozhnitsa-iz-kazahstana-rukami-i-nogami-napisala-shest-portretov-odnovremenno/",
      },
      {
        label: "28.10.2022 — Tengrinews",
        desc: "RU: первичная новость о вирусном перформансе с шестью портретами.",
        url: null,
      },
      {
        label: "16.08.2022 — Qazaqstan Monitor",
        desc: "EN: каллиграфический портрет Абая из текста песни «Көзімнің қарасы».",
        url: "https://en.qazmonitor.com/culture/717/popular-portrait-artist-brings-abai-to-life-with-his-poem",
      },
      {
        label: "14.08.2022 — Kazinform",
        desc: "RU: «Хочу написать 50 портретов исторических личностей» — анонс масштабной серии.",
        url: "https://www.inform.kz/ru/hochu-napisat-50-portretov-istoricheskih-lichnostey-hudozhnica-assol_a3966557",
      },
      {
        label: "26.07.2022 — VA Press",
        desc: "RU: «Символы нашего времени» о необычных портретах художницы.",
        url: "https://vapress.kz/ru/article/simvoly-nashego-vremeni-almatinskaia-hudojnisa-asel-sabyrjanqyzy-sozdaet-neobychnye-portrety.html",
      },
      {
        label: "13.04.2022 — Kazinform",
        desc: "RU: картина хана Кенесары, составленная из тысяч мелких человеческих силуэтов.",
        url: "https://www.inform.kz/ru/neobychnyy-portret-kenesary-hana-sozdala-almatinskaya-hudozhnica_a3922168",
      },
      {
        label: "13.04.2022 — NewTimes.kz",
        desc: "RU: новость о портрете Кенесары хана из силуэтов людей.",
        url: "https://newtimes.kz/obshchestvo/148035-neobychnyj-portret-kenesary-hana-sozdala-almatinskaya-hudozhnica",
      },
      {
        label: "11.04.2022 — Qazaqstan Monitor",
        desc: "EN: «Portrait of Kenesary Khan made of tiny people».",
        url: "https://en.qazmonitor.com/culture/295/portrait-of-kenesary-khan-made-of-tiny-people-drawn-by-almaty-artist",
      },
      {
        label: "10.04.2022 — Instagram (@assolyaa)",
        desc: "RU/KZ: авторский пост о завершении картины Кенесары хана.",
        url: "https://www.instagram.com/reel/CcKmvANjPkj/",
      },
      {
        label: "30.03.2022 — Новое Поколение",
        desc: "RU: участие в выставке Central Asia Fashion с проектом «ДНК капитал Казахстана».",
        url: "https://np.kz/old/svetskaja-zhizn/na-chem-sjekonomit-2545",
      },
      {
        label: "22.03.2022 — RIAMODA",
        desc: "RU: материал о выставке Central Asia Fashion Spring 2022.",
        url: "https://riamoda.ru/news/49554.html",
      },
      {
        label: "19.03.2022 — AlmaLife",
        desc: "RU: обзор международной выставки моды Central Asia Fashion.",
        url: "https://almalife.kz/events/2545-v-almaty-proshla-mezhdunarodnaya-vystavka-mody-central-asia-fashion-spring-2022",
      },
      {
        label: "19.03.2022 — Inbusiness.kz",
        desc: "RU: «Каким будет новый сезон для казахстанского fashion-ритейла».",
        url: "https://inbusiness.kz/ru/stop_cadre/kakim-budet-novyj-sezon-dlya-kazahstanskogo-fashion-ritejla",
      },
      {
        label: "16.03.2022 — Kazakhstan Fashion Week / kfw.kz",
        desc: "RU: «Central Asia Fashion — больше, чем выставка».",
        url: "https://kfw.kz/post/central-asia-fashion-bolshe-chem-vystavka",
      },
      {
        label: "15.03.2022 — Time.kz",
        desc: "RU: материал «Технический приём» о проекте «ДНК капитал Казахстана».",
        url: "https://time.kz/articles/grim/2022/03/15/tehnicheskij-priyom",
      },
      {
        label: "14–16.03.2022 — Central Asia Fashion, официальная PDF-программа",
        desc: "RU: бизнес-программа выставки с участием проекта «ДНК капитал Казахстана».",
        url: "https://fashionexpo.kz/images/materals/post-materials/pdf/Programma_biznes-konferencii_Spring_2022_compressed.pdf",
      },
    ],
  },
  {
    year: "2021",
    entries: [
      {
        label: "26.12.2021 — Qazaq Ballet",
        desc: "RU: проведение авторского мастер-класса.",
        url: "https://qazaqballet.kz/main_articles/tanec-serdca-polet-dushi-vystavka-kak-proekt/",
      },
      {
        label: "17.12.2021 — Первый канал «Евразия»",
        desc: "RU: телесюжет о мастерстве гиперреализма.",
        url: "https://1tv.kz/ru/news/11723/",
      },
      {
        label: "09.12.2021 — Tengrinews KZ",
        desc: "KZ: материал об образовании художницы и синхронном рисовании портретов Алаш.",
        url: "https://kaz.tengrinews.kz/story/almatyilyik-kyiz-alash-kosemdernn-portretn-br-uakyitta-330637/",
      },
      {
        label: "09.08.2021 — Jibek Joly (программа «Next Generation»)",
        desc: "RU: телевизионный очерк о карьере художницы.",
        url: "https://jjtv.kz/public/index.php/ru/next-generation-06-rus",
      },
      {
        label: "13.07.2021 — Sports.kz",
        desc: "RU: портрет Геннадия Головкина («GGG»).",
        url: "https://www.sports.kz/news/kazahstanskaya-hudojnitsa-voshitilas-golovkinyim-i-ustroila-svoe-big-drama-show-s-potryasayuschim-rezultatom-video",
      },
      {
        label: "13.04.2021 — Almaty TV, «Таңғы Studio»",
        desc: "RU: телеэфир с фиксацией имени «Асель Бекжан (Ассоль)».",
        url: "https://almaty.tv/kz/programms/tangy-studio",
      },
      {
        label: "03.03.2021 — NUR.KZ",
        desc: "RU: «Жил-был художник один» — портреты звёзд шоу-бизнеса, включая Димаша Кудайбергена.",
        url: "https://www.nur.kz/showbiz/personal-life/1901800-zil-byl-xudoznik-odin-kak-vyglyadyat-portrety-zvezd-sou-biznesa/",
      },
      {
        label: "23.02.2021 — NUR.KZ",
        desc: "RU: 100-часовой детальный портрет Жанар Дугаловой.",
        url: "https://www.nur.kz/showbiz/career/1900352-kazaxstanskaya-xudoznica-napisala-portret-zanar-dugalovoi-za-sto-casov-foto-video/",
      },
      {
        label: "22.02.2021 — Instagram Reel (@assolyaa)",
        desc: "RU: авторский пост о портретах звёзд эстрады.",
        url: "https://www.instagram.com/reel/CLl7c1Upyyc/",
      },
    ],
  },
  {
    year: "2014 и 2013 — ранний архив",
    entries: [
      {
        label: "09.08.2014 — orgs.biz, зеркало VK-поста",
        desc: "Архивные страницы авторских постов раннего периода (публикации под именем Асель Амангельдинова — вероятная ранняя принадлежность художнице).",
        url: "https://assel-amangeldinova.orgs.biz/news/119",
      },
      {
        label: "14.06.2014 — orgs.biz, зеркало",
        desc: "Архивная публикация раннего периода.",
        url: "https://assel-amangeldinova.orgs.biz/news/111",
      },
      {
        label: "18.04.2014 — orgs.biz, зеркало VK",
        desc: "Автопортрет и работы раннего периода.",
        url: "https://assel-amangeldinova.orgs.biz/news/93",
      },
      {
        label: "19.12.2013 — Газета «Новое Поколение» (Ольга Шишанова)",
        desc: "Статья о конкурсе Ernst & Young, лондонских выставках и академической живописи в технике старых мастеров («Реинкарнация Рафаэля»).",
        url: null,
      },
    ],
  },
  {
    year: "Материалы без точной даты",
    entries: [
      {
        label: "FashionExpo, «Специальные проекты»",
        desc: "Проект с художниками Нурланом Абишевым и Асель Бекжан.",
        url: "https://fashionexpo.kz/vystavka/spetsialnye-proekty",
      },
      {
        label: "YouTube, видео-интервью",
        desc: "«Ассоль (Асель Бекжан) — художница, магистр».",
        url: "https://www.youtube.com/watch?v=aE2gEyYQgbw",
      },
      {
        label: "YouTube, видео-интервью",
        desc: "«Асель Сабыржанқызы: «Никто не придёт и не подарит мечту...»».",
        url: "https://www.youtube.com/watch?v=46YqGVtjeJ0",
      },
      {
        label: "Instagram",
        desc: "Показ после Forte Kulanshi и участие в европейских салонах.",
        url: "https://www.instagram.com/p/C2TiU8tK3uW/",
      },
      {
        label: "Instagram",
        desc: "«Женщины тюркской степи» на международных фестивалях ковра.",
        url: "https://www.instagram.com/p/DX2PmVEDFdE/",
      },
      {
        label: "Instagram",
        desc: "Анонс открытия собственной студии/галереи — Assolyaa Arts Center в Алматы.",
        url: "https://www.instagram.com/reel/DSCvChIAku5/",
      },
      {
        label: "Instagram",
        desc: "Личная встреча и вручение ковра американской певице Николь Шерзингер.",
        url: "https://www.instagram.com/reel/DYZXY9zqc6A/",
      },
      {
        label: "Facebook (Cornel Mihalache)",
        desc: "Зарубежный экспертный отклик о профессиональном пути художницы.",
        url: "https://www.facebook.com/cornelm1976/posts/10219467255991403/",
      },
      {
        label: "Facebook group",
        desc: "Фанатский отклик: портрет Димаша Кудайбергена.",
        url: "https://www.facebook.com/groups/1891362671077181/posts/3955225288024232/",
      },
    ],
  },
];

const starCases = [
  {
    name: "Энрике Иглесиас",
    date: "июль 2026",
    text: "Официальный аккаунт мирового певца опубликовал репост видео с его портретом на ковре от Assolyaa: «see you soon Kazakhstan #Repost @assolyaa» — накануне концерта в РК.",
    url: "https://www.facebook.com/Enrique/posts/1597544421739255/",
  },
  {
    name: "Дженнифер Лопес",
    date: "август 2025",
    text: "Создание авторского портрета на ковре и его личная передача певице во время её визита в Казахстан.",
    url: "https://www.inform.kz/ru/kazahstanskaya-hudozhnitsa-podarila-dzhennifer-lopes-unikalnuyu-kartinu-kover-a0ae9e",
  },
  {
    name: "Джеки Чан",
    date: "сентябрь 2025",
    text: "Личное вручение коврового портрета легендарному актёру в Алматы.",
    url: "https://www.facebook.com/qazaqstantv/videos/1379475414102407/",
  },
  {
    name: "Николь Шерзингер и Keri Hilson",
    date: "май 2026",
    text: "Личная встреча с Николь Шерзингер в Алматы и вручение ей авторского портрета; создание работ для Кери Хилсон (Keri Hilson).",
    url: "https://www.instagram.com/reel/DYZXY9zqc6A/",
  },
  {
    name: "Михаил Шайдоров",
    date: "февраль 2026",
    text: "Инновационный арт-перформанс: ковровый портрет олимпийского чемпиона, созданный с использованием коньков, и официальное вручение спортсмену (пресс-релиз gov.kz).",
    url: "https://www.gov.kz/memleket/entities/almaty/press/news/details/1171932",
  },
  {
    name: "Салтанат Нукенова",
    date: "май 2024",
    text: "Ковровый портрет, вызвавший масштабный социальный резонанс в медиапространстве.",
    url: "https://respublika.kz.media/archives/124018",
  },
];

const keyMoments = [
  {
    date: "февраль 2026",
    title: "The Discover List 2026",
    text: "TikTok Newsroom включил Assolyaa в топ-50 мировых новаторов и креаторов (категория Innovators) — единственный представитель Казахстана; релиз вышел на языковых версиях Global / UK / France / LATAM.",
    url: "https://newsroom.tiktok.com/the-discover-list-2026-uk?lang=en-GB",
  },
  {
    date: "май 2026",
    title: "The Independent о Баку",
    text: "Международный фестиваль ковра в Ичеришехер (Баку, Азербайджан) в обзоре The Independent: Assolyaa — одно из ключевых событий форума.",
    url: "https://www.independent.co.uk/asia/central-asia/azerbaijan-baku-carpet-festival-silk-road-b2970762.html",
  },
  {
    date: "июль 2026",
    title: "Репост Энрике Иглесиаса",
    text: "Мировая поп-сцена замечает KilemArt: официальный аккаунт певца делится портретом на ковре с обращением к казахстанцам.",
    url: "https://astanatimes.com/2026/07/see-you-soon-kazakhstan-enrique-iglesias-shares-kazakh-artists-portrait/",
  },
  {
    date: "2025",
    title: "Год мировых звёзд",
    text: "Дженнифер Лопес (август) и Джеки Чан (сентябрь) получают авторские ковровые портреты из рук художницы.",
    url: "https://www.inform.kz/ru/kazahstanskaya-hudozhnitsa-podarila-dzhennifer-lopes-unikalnuyu-kartinu-kover-a0ae9e",
  },
  {
    date: "февраль 2025",
    title: "Euronews «Modern Nomads»",
    text: "Документальный выпуск о возрождении традиций в современном искусстве Казахстана.",
    url: "https://ru.euronews.com/culture/2025/02/05/kak-kazahskie-hudozhniki-vozrozhdayut-tradicii-v-sovremennom-iskusstve",
  },
  {
    date: "май 2024",
    title: "Портрет Салтанат Нукеновой",
    text: "Ковровое произведение вызывает масштабный резонанс в медиапространстве страны.",
    url: "https://respublika.kz.media/archives/124018",
  },
  {
    date: "январь 2024",
    title: "Le Salon d'Automne, Париж",
    text: "Персональный стенд и перформанс с портретом Симоны Вейль в рамках одного из старейших салонов мира.",
    url: "https://24.kz/ru/news/culture/635404-kazakhstanskoe-iskusstvo-predstavleno-na-mirovoj-vystavke-v-parizhe",
  },
];

const tvMedia = [
  "24KZ",
  "Almaty TV",
  "Первый канал «Евразия»",
  "Jibek Joly / Next Generation",
  "Turkistan TV",
  "Qazaqstan TV",
];

const printMedia = [
  "ELLE Kazakhstan",
  "The Village Казахстан",
  "Kazinform",
  "Tengrinews",
  "Kursiv",
  "Informburo.kz",
  "Time.kz",
  "QazaqCulture",
  "BAQ.kz",
  "Stan.kz",
  "Казахстанская правда",
  "Газета «Новое Поколение»",
  "KazFace.kz",
  "Liter.kz",
  "МИД РК / gov.kz",
];

const foreignMedia = [
  "The Independent (UK)",
  "Euronews",
  "TikTok Newsroom Global",
  "The Astana Times",
  "Edgü Bilig",
  "TuraNews (AZ)",
  "Мир24 / Rambler",
  "Вечерний Бишкек",
];

export default function Press() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={assetUrl("images/card-press.jpg")}
            alt="СМИ и Достижения"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 pt-32 pb-16 lg:px-12">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/60">
              СМИ и Пресса
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light text-white md:text-6xl">
              Press &amp; Media <span className="italic">Dossier 2026</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-[1.9] text-white/80">
              Медиа-досье Асель Сабыржанқызы (Assolyaa) для журналистов, редакторов,
              кураторов выставок и партнёров: 113 публичных упоминаний за 2013–2026 годы
              на 6+ языках мира — от The Independent и Euronews до TikTok Newsroom.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-sans text-sm">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                Контакты
              </span>
              <a
                href="https://assolyaa.kz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
              >
                assolyaa.kz
              </a>
              <a
                href="https://www.instagram.com/assolyaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
              >
                @assolyaa
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reach Stats */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-3">
            {reachStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="bg-background p-10 text-center">
                  <p className="font-serif text-4xl font-light text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media trajectory */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Медийная траектория
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Этапы <span className="italic">признания</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {trajectory.map((t, i) => (
              <FadeIn key={t.years} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-24 shrink-0 font-sans text-sm text-muted-foreground">
                    {t.years}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-light text-foreground transition-opacity group-hover:opacity-70 md:text-xl">
                      {t.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Top publications */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Ключевые публикации
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Топ-выборка <span className="italic">мировой и национальной прессы</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {topPublications.map((m, i) => {
              const outletInner = (
                <>
                  {m.outlet}
                  {m.url && (
                    <span
                      aria-hidden
                      className="ml-2 inline-block text-muted-foreground/60 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  )}
                </>
              );
              return (
                <FadeIn key={m.date + m.outlet} delay={i * 0.05}>
                  <div className="group grid grid-cols-1 gap-4 border-t border-border/40 py-8 transition-colors hover:border-foreground/20 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-3">
                      <p className="font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {m.date}
                      </p>
                      {m.url ? (
                        <a
                          href={m.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block font-serif text-xl font-light text-foreground underline decoration-foreground/20 underline-offset-[6px] transition-colors hover:decoration-foreground/60"
                        >
                          {outletInner}
                        </a>
                      ) : (
                        <h3 className="mt-2 font-serif text-xl font-light text-foreground">
                          {outletInner}
                        </h3>
                      )}
                    </div>
                    <div className="md:col-span-9">
                      <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                        {m.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Star Cases */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              Резонанс в мировой поп-культуре
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-ivory">
              Кейсы <span className="italic">мировых звёзд</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
            {starCases.map((c, i) => (
              <FadeIn key={c.name + c.date} delay={i * 0.06}>
                <div className="h-full bg-charcoal p-10">
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-ivory/50">
                    {c.date}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-light text-ivory">
                    {c.name}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-[1.9] text-ivory/70">
                    {c.text}
                  </p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.15em] text-ivory/60 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-ivory hover:decoration-ivory/70"
                    >
                      Смотреть публикацию ↗
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* National Media */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Национальная пресса
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Ведущие <span className="italic">СМИ Казахстана</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <FadeIn delay={0.05}>
              <div>
                <h3 className="font-serif text-xl font-light text-foreground">
                  Телевидение
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Регулярные сюжеты и эксклюзивные интервью.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {tvMedia.map((t) => (
                    <span
                      key={t}
                      className="border border-border/60 px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-serif text-xl font-light text-foreground">
                  Издания и порталы
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Крупные публикации и официальные ресурсы.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {printMedia.map((p) => (
                    <span
                      key={p}
                      className="border border-border/60 px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-16">
              <h3 className="font-serif text-xl font-light text-foreground">
                Зарубежные и международные медиа
              </h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                Публикации и платформы за пределами Казахстана.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {foreignMedia.map((f) => (
                  <span
                    key={f}
                    className="border border-border/60 px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Social stats */}
          <div className="mt-24">
            <div className="grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-3">
              {socialStats.map((stat, i) => (
                <FadeIn key={stat.platform} delay={i * 0.08}>
                  <div className="bg-background p-10 text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {stat.platform}
                    </p>
                    <p className="mt-4 font-serif text-4xl font-light text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full chronological index */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Медиахроника 2013–2026
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Полный хронологический <span className="italic">индекс публикаций</span>
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {pressIndex.map((block) => (
              <div
                key={block.year}
                className="grid grid-cols-1 gap-8 border-t border-border/40 pt-10 lg:grid-cols-12"
              >
                <FadeIn className="lg:col-span-3">
                  <p className="font-sans text-sm text-muted-foreground">Период</p>
                  <h3 className="mt-2 font-serif text-xl font-light text-foreground">
                    {block.year}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.08} className="lg:col-span-9">
                  <ul className="space-y-4">
                    {block.entries.map((entry) => (
                      <li
                        key={entry.label}
                        className="border-l border-border/60 pl-6 font-sans text-sm leading-[1.9] text-muted-foreground"
                      >
                        {entry.url ? (
                          <a
                            href={entry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground/70"
                          >
                            {entry.label} ↗
                          </a>
                        ) : (
                          <span className="text-foreground">{entry.label}</span>
                        )}
                        {" — "}
                        {entry.desc}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Moments Timeline */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Хроника
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Ключевые <span className="italic">инфоповоды</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {keyMoments.map((k, i) => (
              <FadeIn key={k.title} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-32 shrink-0 font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    {k.date}
                  </span>
                  <div className="flex-1">
                    {k.url ? (
                      <a
                        href={k.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-lg font-light text-foreground underline decoration-foreground/20 underline-offset-[6px] transition-colors hover:decoration-foreground/60 md:text-xl"
                      >
                        {k.title} ↗
                      </a>
                    ) : (
                      <h3 className="font-serif text-lg font-light text-foreground md:text-xl">
                        {k.title}
                      </h3>
                    )}
                    <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                      {k.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-light italic leading-relaxed text-ivory md:text-5xl">
              «Все работы направлены на просвещение молодёжи и вызывают интерес
              к истории и искусству Казахстана.»
            </h2>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              — Асель Сабыржанқызы (Assolyaa)
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
