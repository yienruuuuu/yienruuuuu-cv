export type LocalizedText = {
  zh: string;
  en: string;
};

export type NavItem = {
  id: string;
  label: LocalizedText;
};

export type ExperienceItem = {
  company: string;
  role: LocalizedText;
  period: string;
  location: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
};

export type ProjectItem = {
  name: string;
  summary: LocalizedText;
  tags: string[];
  links: { label: string; href: string }[];
  featured: boolean;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export type ResumeAsset = {
  label: LocalizedText;
  href?: string;
};

export const languages = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" }
] as const;

export const navigation: NavItem[] = [
  { id: "about", label: { zh: "關於我", en: "About" } },
  { id: "experience", label: { zh: "經歷", en: "Experience" } },
  { id: "skills", label: { zh: "技能", en: "Skills" } },
  { id: "projects", label: { zh: "專案", en: "Projects" } },
  { id: "contact", label: { zh: "聯絡方式", en: "Contact" } }
];

export const siteContent: {
  seo: {
    title: string;
    description: LocalizedText;
  };
  profile: {
    name: string;
    role: LocalizedText;
    intro: LocalizedText;
    location: LocalizedText;
    availability: LocalizedText;
    stats: { value: string; label: LocalizedText }[];
  };
  about: {
    heading: LocalizedText;
    body: LocalizedText[];
  };
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
  contact: {
    heading: LocalizedText;
    body: LocalizedText;
    links: ContactLink[];
  };
  resume: ResumeAsset;
} = {
  seo: {
    title: "Yienru Resume",
    description: {
      zh: "Yienru 的個人履歷網站，展示背景、技能、經歷與專案。",
      en: "Yienru's personal resume site featuring background, skills, experience, and projects."
    }
  },
  profile: {
    name: "Yienru",
    role: {
      zh: "軟體工程師 / 前端導向開發者",
      en: "Software Engineer / Frontend-focused Developer"
    },
    intro: {
      zh: "專注於把複雜需求轉成清楚、穩定且可維護的產品體驗，重視資訊架構、效能與細節。",
      en: "I turn complex requirements into clear, stable, and maintainable product experiences with strong attention to information architecture, performance, and details."
    },
    location: {
      zh: "台灣",
      en: "Taiwan"
    },
    availability: {
      zh: "開放前端 / 全端 / 產品工程相關機會",
      en: "Open to frontend, full-stack, and product engineering opportunities"
    },
    stats: [
      { value: "5+", label: { zh: "年開發經驗", en: "years building products" } },
      { value: "10+", label: { zh: "參與專案", en: "projects delivered" } },
      { value: "Bilingual", label: { zh: "中英履歷", en: "resume in zh/en" } }
    ]
  },
  about: {
    heading: { zh: "關於我", en: "About" },
    body: [
      {
        zh: "我偏好用工程方法解決溝通與產品問題，不只追求畫面完成，也重視資料結構、元件邊界與後續維護成本。",
        en: "I use engineering discipline to solve communication and product problems, caring not only about polished UI but also about data structure, component boundaries, and long-term maintainability."
      },
      {
        zh: "在團隊合作上，我習慣先釐清需求與限制，再以可驗證的方式拆解實作，讓交付結果能穩定落地。",
        en: "In team settings, I clarify goals and constraints first, then break implementation into verifiable steps so delivery stays predictable and reliable."
      }
    ]
  },
  experience: [
    {
      company: "Example Tech Co.",
      role: {
        zh: "前端工程師",
        en: "Frontend Engineer"
      },
      period: "2023 - Present",
      location: {
        zh: "台北，台灣",
        en: "Taipei, Taiwan"
      },
      summary: {
        zh: "負責內部平台與對外產品介面開發，優化互動流程與前端架構。",
        en: "Built internal platforms and customer-facing interfaces, improving interaction flows and frontend architecture."
      },
      highlights: [
        {
          zh: "主導共用元件與頁面模板整理，降低重複開發成本。",
          en: "Led shared component and page template consolidation to reduce duplicated implementation work."
        },
        {
          zh: "與設計、PM、後端協作釐清需求，縮短功能交付迭代時間。",
          en: "Worked closely with design, PM, and backend teams to refine scope and shorten delivery cycles."
        }
      ]
    },
    {
      company: "Product Studio",
      role: {
        zh: "軟體工程師",
        en: "Software Engineer"
      },
      period: "2020 - 2023",
      location: {
        zh: "遠端 / 台灣",
        en: "Remote / Taiwan"
      },
      summary: {
        zh: "參與多個產品型專案，從需求分析、介面實作到上線維護皆有投入。",
        en: "Contributed across multiple product engagements from requirement analysis and interface implementation to production support."
      },
      highlights: [
        {
          zh: "建立可重用的前端模組，讓新專案能更快起步。",
          en: "Created reusable frontend modules that accelerated delivery for new product work."
        },
        {
          zh: "持續修正效能瓶頸與 UI 不一致問題，提升整體使用品質。",
          en: "Improved usability by addressing performance bottlenecks and UI inconsistency across releases."
        }
      ]
    }
  ] satisfies ExperienceItem[],
  skills: [
    {
      title: { zh: "前端", en: "Frontend" },
      items: ["TypeScript", "React", "Astro", "HTML", "CSS", "Responsive Design"]
    },
    {
      title: { zh: "工程實務", en: "Engineering" },
      items: ["Component Design", "Accessibility", "Performance", "Testing", "Code Review"]
    },
    {
      title: { zh: "協作", en: "Collaboration" },
      items: ["Product Thinking", "Cross-functional Communication", "Requirement Breakdown", "Documentation"]
    }
  ] satisfies SkillGroup[],
  projects: [
    {
      name: "Resume Website",
      summary: {
        zh: "以靜態網站方式整理個人背景、專案與聯絡資訊，強調載入速度與資訊清晰度。",
        en: "A static portfolio resume site that organizes background, projects, and contact information with fast load times and clear information hierarchy."
      },
      tags: ["Astro", "Cloudflare Pages", "Responsive UI"],
      links: [{ label: "GitHub", href: "https://github.com/" }],
      featured: true
    },
    {
      name: "Product Dashboard",
      summary: {
        zh: "協助整理多模組儀表板資訊架構，改善任務操作流程與關鍵數據可讀性。",
        en: "Improved information architecture for a multi-module dashboard and simplified task flows with clearer key metrics."
      },
      tags: ["React", "TypeScript", "Design System"],
      links: [{ label: "Case Study", href: "#" }],
      featured: true
    }
  ] satisfies ProjectItem[],
  contact: {
    heading: { zh: "聯絡方式", en: "Contact" },
    body: {
      zh: "如果你對合作、職缺或專案交流有興趣，歡迎透過以下方式聯繫。",
      en: "If you are interested in collaboration, opportunities, or project discussions, reach out through the channels below."
    },
    links: [
      { label: "Email", href: "mailto:hello@example.com" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" }
    ] satisfies ContactLink[]
  },
  resume: {
    label: {
      zh: "下載履歷 PDF",
      en: "Download Resume PDF"
    }
  }
};
