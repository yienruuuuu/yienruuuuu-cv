import cv from "../../cv-text/cv.json";

export type LocalizedText = {
  zh: string;
  en: string;
};

export type NavItem = {
  id: string;
  label: LocalizedText;
};

export type ProjectItem = {
  name: LocalizedText;
  highlights: LocalizedText[];
};

export type ExperienceItem = {
  company: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
  projects?: ProjectItem[];
};

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export type EducationItem = {
  school: LocalizedText;
  program: LocalizedText;
  period: LocalizedText;
};

export type ContactLink = {
  label: string;
  href: string;
  note?: LocalizedText;
};

export type ResumeAsset = {
  label: LocalizedText;
  href?: string;
};

type CvData = typeof cv;

const translatePeriod = (start: string, end: string) => ({
  zh: `${start} - ${end === "Now" ? "至今" : end}`,
  en: `${start} - ${end === "Now" ? "Present" : end}`
});

const companyTranslations: Record<string, string> = {
  "德安資訊股份有限公司": "Tayih Information Co., Ltd.",
  "聯訊網路有限公司": "Linkwin Network Co., Ltd.",
  "國富浩華聯合會計師事務所": "Crowe (Taiwan)",
  "廣俊會計師事務所": "Guang Jun CPA Firm"
};

const titleTranslations: Record<string, string> = {
  "後端工程師": "Backend Engineer",
  "研發部後端工程師": "Backend Engineer, R&D Department",
  "審計員": "Auditor",
  "審計／記帳人員": "Audit and Bookkeeping Associate"
};

const projectNameTranslations: Record<string, string> = {
  "餐飲 SaaS 系統 訂位模組專案": "Restaurant SaaS Reservation Module",
  "Qrcode 點餐系統": "QR Code Ordering System",
  "Qrcode 點餐系統（品質與安全強化）": "QR Code Ordering System: Quality and Security Hardening",
  "KDS 廚房顯示系統": "Kitchen Display System"
};

const skillGroupTitles: Record<string, LocalizedText> = {
  backend: { zh: "後端開發", en: "Backend Development" },
  database: { zh: "資料庫", en: "Databases" },
  infrastructure: { zh: "基礎設施與交付", en: "Infrastructure and Delivery" },
  other: { zh: "工程協作", en: "Engineering Practice" }
};

const educationTranslations: Record<string, { school: string; program: string }> = {
  WieduTibaMe: {
    school: "Wiedu TibaMe",
    program: "Java Cloud Service Development Bootcamp"
  },
  "私立逢甲大學": {
    school: "Feng Chia University",
    program: "Department of Public Finance and Taxation"
  }
};

const projectHighlightTranslations: Record<string, string> = {
  "透過 Partition Table 與 Cache 分散資料庫查詢壓力，並採用 Optimistic Lock 控制庫存競爭。經使用 K6 壓力測試下，庫存查詢服務可穩定承載 2000+ QPS，且 P95 latency 維持在 50ms 以內。":
    "Reduced database pressure with partitioned tables and cache layers, then controlled inventory contention with optimistic locking. Under K6 load testing, the inventory query service sustained 2,000+ QPS while keeping P95 latency under 50 ms.",
  "設計並實作一套可擴充的 Job Engine，開發者可透過自訂 Cron 語法排程巡檢、多租戶資料源切換、佇列分派與 Thread Pool 非同步執行背景任務。":
    "Designed and implemented an extensible job engine that supports custom cron scheduling, multi-tenant data source switching, queue dispatching, and thread-pool-based asynchronous background execution.",
  "Engine 依 JobType 動態派發 Executor，並具備殭屍任務恢復、狀態追蹤與重試機制，並以介面抽象化落實開閉原則，降低新任務擴充成本。":
    "Built dynamic executor dispatch by job type with zombie-job recovery, status tracking, and retry handling. Interface-based abstractions kept the engine open for extension while reducing the cost of adding new jobs.",
  "為專案自 Spring Boot 2.7 升版至 Spring Boot 3.2，並解決衝突。":
    "Led the upgrade from Spring Boot 2.7 to 3.2 and resolved framework and dependency conflicts along the way.",
  "透過策略模式組合工廠模式，重構並實作多支付渠道類別，使支付渠道未來擴充不易相互干擾，且易於撰寫測試，避免把不同金流邏輯耦合進單一交易流程。":
    "Refactored multi-channel payment flows with a strategy-plus-factory design so new payment channels can be extended independently and tested without coupling all gateway logic into one transaction path.",
  "以 AOP + ConcurrentHashMap 實作菜單同步鎖與超時回收，解決多餐廳、多節點情境下的重複同步與資料競爭。":
    "Implemented menu synchronization locks and timeout recovery with AOP and ConcurrentHashMap, eliminating duplicate sync jobs and data races across multi-restaurant, multi-node deployments.",
  "導入 Quartz，依餐廳設定動態註冊每日同步排程，並在服務啟動時自動載入全租戶的餐廳任務。":
    "Introduced Quartz to register daily synchronization schedules per restaurant configuration and automatically bootstrap tenant jobs on service startup.",
  "導入 Flyway 作為 SQL 版控工具。":
    "Introduced Flyway to manage SQL version control and schema changes.",
  "配合客戶 ISO 資安治理要求，系統性處理 SonarQube code smell 與 vulnerability 警示，並完成多項 CVE 風險套件升版與相依性修補。":
    "Worked through SonarQube code smell and vulnerability findings to satisfy ISO security governance requirements, including dependency upgrades and remediation for multiple CVE risks.",
  "將測試覆蓋率自 2% 提高到 82.8%。":
    "Raised automated test coverage from 2% to 82.8%.",
  "依據第三方滲透測試報告修補高風險弱點，包含導入 XSS 攻擊防護、登入 API 導入圖形驗證碼以防止暴力破解。":
    "Resolved high-risk issues identified in third-party penetration testing, including XSS defenses and CAPTCHA protection on the login API to mitigate brute-force attacks.",
  "建置餐飲 KDS 後端系統，採用 Spring Boot、JPA、WebSocket、Oracle DB 與排程機制，支援廚房看板與菜口畫面的即時訂單同步，提升出餐資訊更新速度與營運可視性。":
    "Built the backend for a restaurant KDS using Spring Boot, JPA, WebSocket, Oracle DB, and scheduled tasks to support real-time order synchronization across kitchen and pass screens.",
  "面對多機台高頻更新場景與客戶地端機器效能不佳的瓶頸，將廚房訂單資料查詢與 WebSocket 推播非同步化，改善多機台同時更新時的吞吐能力與穩定性。":
    "Addressed throughput bottlenecks caused by high-frequency updates and weak on-premise hardware by making kitchen order queries and WebSocket pushes asynchronous.",
  "實作廚房作業狀態機，將備餐、叫餐、劃菜、清桌、取消清桌、取餐通知等流程收斂為具交易一致性的服務層邏輯。":
    "Implemented a kitchen workflow state machine that unified meal prep, callout, plate marking, table clearing, clearing rollback, and pickup notifications into transactionally consistent service logic.",
  "因應地端機器 Windows Server 2016 版本無法安裝 Docker，透過 NSSM 工具實現 Java 進程守護。":
    "Used NSSM to supervise Java processes on Windows Server 2016 environments where Docker could not be installed.",
  "維護及開發一個包含 CMS 在內的遊戲後台，使用技術包括但不限於 SpringMVC、JPA、MySql。":
    "Maintained and extended a gaming back-office platform with CMS capabilities using Spring MVC, JPA, and MySQL.",
  "對接第三方支付與代付任務，對接約 150 家，使用 Oracle DB、Spring、RESTful API 等。":
    "Integrated roughly 150 third-party payment and payout providers using Oracle DB, Spring, and RESTful APIs.",
  "配合團隊開發虛擬幣交易平台，專案使用 Spring Boot、Dubbo、MySql、RESTful API、MongoDb，並藉此累積 Docker 使用經驗。":
    "Contributed to a cryptocurrency trading platform built with Spring Boot, Dubbo, MySQL, RESTful APIs, and MongoDB while gaining hands-on Docker experience.",
  "主動優化負責維護的產品，將專案中冗長的 code 透過 Early Return、變數重命名、增加註解來提升可讀性。":
    "Improved maintainability in owned services by refactoring long methods with early returns, clearer variable naming, and targeted comments.",
  "透過撰寫測試來增加開發穩定性。":
    "Improved delivery stability by adding automated tests.",
  "將專案從直接導入 lib 改為使用 Maven 進行依賴管理。":
    "Migrated projects from manually imported libraries to Maven-based dependency management.",
  "撰寫 Linux shell script 取代繁瑣的部署方式，並為支付代付專案新增 Telegram bot 進行錯誤告警。":
    "Replaced cumbersome deployment steps with Linux shell scripts and added Telegram bot alerts for payout-service failures."
};

const summaryTranslations: Record<string, string> = {
  "具備4年後端開發經驗的後端工程師，經手過高併發系統設計、分散式架構、資料庫效能優化與系統整合。主要技術領域包含 Java / Spring Boot 後端開發，以及高流量 API 系統架構設計。曾負責開發訂位系統高流量庫存模組及主導開發 Qrcode 點餐服務、自助機服務。熟悉從系統設計、效能優化、資料庫架構、非同步處理到系統監控的完整後端工程流程。":
    "Backend engineer with 4 years of experience building high-concurrency systems, distributed architectures, database performance improvements, and system integrations. Core strengths include Java and Spring Boot backend development, plus architecture design for high-traffic APIs. Delivered reservation inventory services, QR code ordering services, and kiosk-related backend capabilities, covering the full backend lifecycle from system design and optimization to asynchronous processing and observability."
};

const experienceSummaries: Record<string, LocalizedText> = {
  "德安資訊股份有限公司": {
    zh: "聚焦餐飲 SaaS 與門市營運系統，負責高流量訂位、點餐、廚房顯示與品質安全強化等後端服務。",
    en: "Focused on restaurant SaaS and store-operation systems, delivering backend services for high-traffic reservations, ordering flows, kitchen display operations, and platform quality and security hardening."
  },
  "聯訊網路有限公司": {
    zh: "參與遊戲後台、支付整合與虛擬幣交易平台開發，累積支付串接、維運優化與部署自動化經驗。",
    en: "Contributed to gaming back-office systems, payment integrations, and a cryptocurrency exchange platform, with hands-on work in integrations, maintainability improvements, and deployment automation."
  },
  "國富浩華聯合會計師事務所": {
    zh: "在轉職工程前累積審計與財務流程經驗，建立對風險、流程控制與細節精準度的工作習慣。",
    en: "Built a strong foundation in audit and financial process control before moving into software engineering, shaping a detail-oriented and risk-aware working style."
  },
  "廣俊會計師事務所": {
    zh: "從事審計與記帳相關工作，熟悉報表、資料整理與制度化流程。",
    en: "Handled audit and bookkeeping work, building familiarity with reporting, data organization, and process discipline."
  }
};

const translateHighlight = (text: string) => ({
  zh: text,
  en: projectHighlightTranslations[text] ?? text
});

const cvData = cv as CvData;
const profile = cvData.profile;

export const languages = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" }
] as const;

export const navigation: NavItem[] = [
  { id: "about", label: { zh: "關於我", en: "About" } },
  { id: "experience", label: { zh: "經歷", en: "Experience" } },
  { id: "skills", label: { zh: "技能", en: "Skills" } },
  { id: "contact", label: { zh: "聯絡方式", en: "Contact" } }
];

const experience: ExperienceItem[] = cvData.workExperience.map((item) => {
  const period = translatePeriod(item.period.start, item.period.end);
  const projects = "projects" in item && item.projects
    ? item.projects.map((project) => ({
        name: {
          zh: project.name,
          en: projectNameTranslations[project.name] ?? project.name
        },
        highlights: project.highlights.map(translateHighlight)
      }))
    : undefined;

  const highlights = "highlights" in item && item.highlights
    ? item.highlights.map(translateHighlight)
    : [];

  return {
    company: {
      zh: item.company,
      en: companyTranslations[item.company] ?? item.company
    },
    role: {
      zh: item.title,
      en: titleTranslations[item.title] ?? item.title
    },
    period,
    summary: experienceSummaries[item.company],
    highlights,
    projects
  };
});

const education: EducationItem[] = cvData.education.map((item) => {
  const translation = educationTranslations[item.school] ?? {
    school: item.school,
    program: item.program
  };

  return {
    school: {
      zh: item.school,
      en: translation.school
    },
    program: {
      zh: item.program,
      en: translation.program
    },
    period: translatePeriod(item.period.start, item.period.end)
  };
});

const focusAreas = cvData.resumeMeta.focusAreas.map((item) => ({
  zh: item,
  en:
    ({
      "高併發系統設計": "High-Concurrency System Design",
      "分散式架構": "Distributed Architecture",
      "資料庫效能優化": "Database Performance Optimization",
      "系統整合": "System Integration",
      "非同步處理": "Asynchronous Processing",
      "系統監控": "Observability and Monitoring"
    } as Record<string, string>)[item] ?? item
}));

const currentRoleProjects =
  "projects" in cvData.workExperience[0] && cvData.workExperience[0].projects
    ? cvData.workExperience[0].projects.length
    : 0;

export const siteContent = {
  seo: {
    title: "Eric Li | Backend Engineer",
    description: {
      zh: "李彥儒的後端工程師履歷，聚焦 Java、Spring Boot、高併發系統設計、分散式架構與資料庫效能優化。",
      en: "Eric Li's backend engineer resume focused on Java, Spring Boot, high-concurrency systems, distributed architecture, and database performance optimization."
    }
  },
  profile: {
    name: {
      zh: profile.name,
      en: "Eric Li"
    },
    englishName: {
      zh: profile.englishName,
      en: profile.englishName
    },
    avatar: {
      alt: {
        zh: "李彥儒的個人頭像",
        en: "Portrait of Eric Li"
      },
      href: "/profile.jpg",
      fallback: "EL"
    },
    role: {
      zh: profile.title,
      en: "Backend Engineer"
    },
    intro: {
      zh: profile.about,
      en: summaryTranslations[profile.about]
    },
    location: {
      zh: "台灣",
      en: "Taiwan"
    },
    availability: {
      zh: "開放後端工程、平台服務與高流量系統相關機會",
      en: "Open to backend, platform, and high-traffic system engineering opportunities"
    },
    specialties: [
      { zh: "Java", en: "Java" },
      { zh: "Spring Boot", en: "Spring Boot" },
      { zh: "高併發系統設計", en: "High-Concurrency System Design" },
      { zh: "分散式架構", en: "Distributed Architecture" }
    ],
    stats: [
      { value: `${cvData.resumeMeta.yearsOfExperience}`, label: { zh: "年後端經驗", en: "years in backend engineering" } },
      { value: `${currentRoleProjects}`, label: { zh: "近年核心專案", en: "core projects in current role" } },
      { value: cvData.resumeMeta.seniorityLevel, label: { zh: "職涯等級", en: "career level" } }
    ]
  },
  about: {
    heading: { zh: "個人摘要", en: "Profile Summary" },
    body: [
      {
        zh: "主力使用 Java 與 Spring Boot 建構後端服務，關注高流量 API、非同步任務、資料一致性與可維運性。",
        en: "I primarily build backend services with Java and Spring Boot, with strong focus on high-traffic APIs, asynchronous workloads, data consistency, and maintainability."
      },
      {
        zh: "經歷涵蓋餐飲 SaaS、支付整合、交易平台與內部後台系統，能在需求不完整與系統複雜度高的情境下穩定落地。",
        en: "My work spans restaurant SaaS, payment integrations, trading platforms, and internal back-office systems, with consistent delivery in environments that are both ambiguous and technically complex."
      }
    ],
    focusAreas
  },
  experience,
  skills: [
    {
      title: skillGroupTitles.backend,
      items: cvData.skills.backend
    },
    {
      title: skillGroupTitles.database,
      items: [...cvData.skills.database.rdbms, ...cvData.skills.database.nosql]
    },
    {
      title: skillGroupTitles.infrastructure,
      items: cvData.skills.devOpsAndInfrastructure
    },
    {
      title: skillGroupTitles.other,
      items: cvData.skills.other
    }
  ] satisfies SkillGroup[],
  education,
  contact: {
    heading: { zh: "聯絡方式", en: "Contact" },
    body: {
      zh: "歡迎透過以下方式與我聯繫。",
      en: "Feel free to reach out through any of the channels below."
    },
    links: [
      { label: "Email", href: `mailto:${profile.contact.email}` },
      {
        label: "GitHub",
        href: "https://github.com/yienruuuuu"
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/eric-lee-093883124/"
      },
      {
        label: "104",
        href: "https://www.104.com.tw/",
        note: { zh: "待補真實履歷頁連結", en: "Replace with the real 104 resume URL" }
      }
    ] satisfies ContactLink[]
  },
  resume: {
    label: {
      zh: "下載履歷 PDF",
      en: "Download Resume PDF"
    },
    href: "/CV.pdf"
  }
} satisfies {
  seo: {
    title: string;
    description: LocalizedText;
  };
  profile: {
    name: LocalizedText;
    englishName: LocalizedText;
    avatar: {
      alt: LocalizedText;
      href?: string;
      fallback: string;
    };
    role: LocalizedText;
    intro: LocalizedText;
    location: LocalizedText;
    availability: LocalizedText;
    specialties: LocalizedText[];
    stats: { value: string; label: LocalizedText }[];
  };
  about: {
    heading: LocalizedText;
    body: LocalizedText[];
    focusAreas: LocalizedText[];
  };
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  contact: {
    heading: LocalizedText;
    body: LocalizedText;
    links: ContactLink[];
  };
  resume: ResumeAsset;
};
