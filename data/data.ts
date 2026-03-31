// ─── 1. 类型定义 Types ────────────────────────────────────────────────────────
export type Lang = "en" | "zh";

export type ProjectVideo =
  | { type: "local"; src: string }
  | { type: "youtube"; videoId: string; pageUrl?: string }
  | { type: "bilibili"; bvid: string; pageUrl?: string }
  | null;

export interface Project {
  title: string;
  role?: string;
  venue?: string;
  description: string;
  tags: string[];
  video?: ProjectVideo;
  image?: string;
  reportPdf?: string;
  github?: string;
}

export type TimelineType = "experience" | "education" | "opensource";

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  location: string;
  type?: TimelineType;  // 控制图标渲染的关键字段
  typeLabel?: string;   // 控制页面显示的文字
  bullets?: string[];
  link?: string;
}

// ─── 2. 双语数据基座 i18n ───────────────────────────────────────────────────
export const i18n = {
  // ───────────────── ENGLISH ──────────────────────────────────────────────────
  en: {
    ui: {
      nav: { projects: "Projects", experience: "Experience", skills: "Skills" },
      hero: { availability: "Open to internship & full-time opportunities", github: "GitHub", resume: "Resume PDF", email: "Email", scroll: "scroll" },
      sections: { projects: "Featured Works & Experience", experience: "Education & Experience", skills: "Skills" },
      card: { watchDemo: "Watch Demo", readReport: "Read Report", demoSoon: "demo coming soon" },
      timeline: { industry: "Industry", education: "Education", opensource: "Open Source" },
      footer: { builtWith: "Built with Next.js & Framer Motion" },
    },
    profile: {
      name: "Li Jinyan",
      nameShort: "LJY",
      email: "a911681767@163.com",
      github: "https://github.com/",
      resume: "/resume_daniel.pdf",
      tagline: "Data Analyst & Strategy Operations",
      summary: "Passionate about turning data into business decisions. Experienced in e-commerce strategy operations and data analytics across ByteDance, Xiaohongshu, and cross-border e-commerce. Skilled in SQL, Python, and BI tooling — driving measurable GMV and user experience improvements.",
      keywords: ["E-commerce Strategy", "Data Analysis", "Business Intelligence"],
    },
    projects: [
      {
        title: "TikTok Global E-Commerce SEA — Strategy Operations",
        role: "Strategy Operations Intern",
        venue: "Internship @ ByteDance",
        description: "Built core data dashboards (GMV/DGMV/AOV) for the Philippines electronics sector to identify conversion bottlenecks. Led Tecno's Double 12 promotion strategy by monitoring competitor pricing on Shopee and designing differentiated coupon campaigns — boosting GMV by 171k MoM (+14.4%). Identified weak CE category pain points (low AOV, insufficient premium supply) and drove Q4 CE GMV up 44% QoQ.",
        tags: ["SQL", "Excel", "E-commerce Strategy", "GMV Analysis", "Competitive Analysis", "Data Dashboard"],
      },
      {
        title: "Xiaohongshu — Data Science & Analysis",
        role: "Project Management & Data Analysis Intern",
        venue: "Internship @ Xiaohongshu",
        description: "Monitored daily community KPIs (DAU, avg. session duration) and investigated anomalies. Led the 'Monthly Report Dashboard Automation' project: coordinated 17 teams and 80+ members, standardized 16 metric definitions, and achieved real-time daily data readouts — eliminating monthly manual reporting across departments.",
        tags: ["SQL", "Excel", "BI Dashboard", "Data Products", "Project Management", "KPI Monitoring"],
      },
      {
        title: "Amazon Operations — Cross-Border E-Commerce",
        role: "Amazon Operations Intern",
        venue: "Internship @ Guangzhou Yiteng",
        description: "Analyzed 2025 fall/winter trends and competitor products (Zara etc.) to identify unmet user needs, leading the selection and listing of 50+ new products. Designed A/B tests for listing pages, built sales forecasting models for FBA replenishment planning, and reduced slow-moving inventory by 15% through bulk clearance strategies. Improved repeat purchase rate by 20% through consumer review analysis.",
        tags: ["Excel", "A/B Testing", "FBA Operations", "Sales Forecasting", "Product Selection", "E-commerce"],
      },
      {
        title: "Weak Network User Experience Analysis",
        role: "Core Member",
        venue: "Project @ Xiaohongshu",
        description: "Built a 'network environment × time period × product page' 3D analysis model to address user churn caused by poor network conditions. Used SQL to segment users into 5 network types × 7 time periods, pinpointing high-churn L3–L5 user groups. Identified core pain scenarios (mobile-only, full Wi-Fi, evening peak, in-video feed) and validated that tier-1 city impact was insignificant while overseas user experience urgently needed improvement. Drove a 5% improvement in weak-network API success rate within 3 months.",
        tags: ["SQL", "User Segmentation", "Attribution Analysis", "Data Analysis", "Python"],
      },
      {
        title: "TikTok Shop SFP Commission Exemption Incentive",
        role: "Core Member",
        venue: "Project @ ByteDance TikTok",
        description: "Designed a 'commission exemption' incentive mechanism to maximize GMV and ad growth under a limited budget for the SFP free-shipping program. Set differentiated GMV and Ads targets by factoring in seasonal momentum, YoY growth, and overall goals. Collaborated with industry and account managers to filter high-potential merchants into the incentive pool — achieving 10% GMV lift and 1.5% improvement in Ads Take Rate among enrolled merchants.",
        tags: ["Strategy Design", "GMV", "Ads Optimization", "Incentive Mechanism", "E-commerce", "Data Analysis"],
      },
    ] as Project[],
    timeline: [
      // ── EDUCATION ──
      {
        period: "Sep 2025 - Jun 2027", role: "Master of International Business", org: "Fudan University", location: "Shanghai, China",
        type: "education", typeLabel: "Education", bullets: ["Focus: International trade, business strategy, and quantitative analysis."],
      },
      {
        period: "Sep 2021 - Jun 2025", role: "Bachelor of Accounting (CPA Track)", org: "Jinan University", location: "Guangzhou, China",
        type: "education", typeLabel: "Education", bullets: ["GPA: 4.35/5.0 · Rank: 1/50 · National Scholarship ×2 (top 1%) · First-class Outstanding Student Scholarship (top 6%)."],
      },
      // ── INTERNSHIPS ──
      {
        period: "Nov 2025 - Present", role: "Strategy Operations Intern", org: "ByteDance · TikTok Global E-Commerce SEA", location: "Shanghai, China",
        type: "experience", typeLabel: "Industry",
        bullets: [
          "Built core data dashboards for Philippines electronics sector (GMV/DGMV/AOV).",
          "Led Double 12 promotion strategy for Tecno; drove GMV +171k MoM (+14.4%).",
          "Identified CE category pain points; drove Q4 CE GMV +44% QoQ.",
        ],
      },
      {
        period: "Sep 2025 - Nov 2025", role: "Project Management & Data Analysis Intern", org: "Xiaohongshu · Data Science & Analysis", location: "Shanghai, China",
        type: "experience", typeLabel: "Industry",
        bullets: [
          "Daily monitoring of DAU, session duration, and anomaly investigation.",
          "Led 'Monthly Report Dashboard Automation' project across 17 teams and 80+ members.",
          "Deep-dive SQL analysis for weak network refinement project.",
        ],
      },
      {
        period: "Mar 2025 - Jun 2025", role: "Amazon Operations Intern", org: "Guangzhou Yiteng Technology", location: "Guangzhou, China",
        type: "experience", typeLabel: "Industry",
        bullets: [
          "Led selection and listing of 50+ new products based on trend and competitor analysis.",
          "Reduced slow-moving inventory by 15%; improved repeat purchase rate by 20%.",
        ],
      },
    ] as TimelineItem[],
    skillGroups: [
      { label: "Languages & Tools", skills: ["SQL", "Python", "Stata", "Excel", "MS Office"] },
      { label: "Analytics & BI", skills: ["Data Dashboard", "A/B Testing", "KPI Monitoring", "Sales Forecasting", "User Segmentation"] },
      { label: "Domain Expertise", skills: ["E-commerce Strategy", "GMV Analysis", "Cross-border E-commerce", "Data Products", "Business Intelligence"] },
      { label: "Soft Skills", skills: ["Project Management", "Cross-team Collaboration", "Competitive Analysis", "Strategy Design"] },
    ],
  },

  // ───────────────── CHINESE ──────────────────────────────────────────────────
  zh: {
    ui: {
      nav: { projects: "项目", experience: "经历", skills: "技能" },
      hero: { availability: "正在寻找实习与全职机会", github: "GitHub", resume: "简历 PDF", email: "邮件联系", scroll: "向下滚动" },
      sections: { projects: "精选项目与经历", experience: "教育与经历", skills: "技能" },
      card: { watchDemo: "观看演示", readReport: "阅读报告", demoSoon: "演示视频即将上线" },
      timeline: { industry: "工业界", education: "教育", opensource: "开源" },
      footer: { builtWith: "使用 Next.js & Framer Motion 构建" },
    },
    profile: {
      name: "李金岩",
      nameShort: "李",
      email: "a911681767@163.com",
      github: "https://github.com/",
      resume: "/resume_daniel.pdf",
      tagline: "数据分析师 & 策略运营",
      summary: "热衷于用数据驱动业务决策。在字节跳动、小红书及跨境电商领域积累了丰富的策略运营与数据分析经验。擅长 SQL、Python 及 BI 看板工具，推动 GMV 增长与用户体验优化。",
      keywords: ["电商策略运营", "数据分析", "商业智能"],
    },
    projects: [
      {
        title: "TikTok 全球电商东南亚——策略运营",
        role: "策略运营实习生",
        venue: "实习 @ 字节跳动",
        description: "搭建菲律宾电子行业核心数据看板（GMV/DGMV/AOV），定位转化瓶颈。主导 Tecno 商家双12大促策略，基于竞对平台（Shopee）制定差异化货补与优惠券方案，助力 GMV 同比双11增长 171k（MoM+14.4%）。发现 CE 类目 AOV 低、高净值产品供给不足的痛点，推动 Q4 CE 类目 GMV 环比增长 44%。",
        tags: ["SQL", "Excel", "电商策略", "GMV 分析", "竞品分析", "数据看板"],
      },
      {
        title: "小红书——数据科学与分析部",
        role: "项目管理 & 数据分析实习生",
        venue: "实习 @ 小红书",
        description: "负责社区方向每日 DAU、人均使用时长等关键指标监控与异动排查。主导"技术月报看板自动化"项目，协调 17 个团队 80+ 成员，梳理 16 个专项指标口径，实现每日实时读数，优化掉每月各部门文档填报环节。深度参与弱网精细化项目下重点场景分析。",
        tags: ["SQL", "Excel", "BI 看板", "数据产品化", "项目管理", "KPI 监控"],
      },
      {
        title: "亚马逊跨境运营",
        role: "亚马逊运营实习生",
        venue: "实习 @ 广州毅腾技术服务有限公司",
        description: "基于 2025 秋冬流行趋势及竞品（Zara等）分析，主导 50+ 款新品选品上架。编写并设计 Listing 页面 A/B 测试，通过销售预测模型制定 FBA 备货计划，降低滞销库存 15%，实现单品复购率增长 20%。",
        tags: ["Excel", "A/B 测试", "FBA 运营", "销售预测", "选品", "跨境电商"],
      },
      {
        title: "小红书弱网精细化——弱网用户重点场景分析",
        role: "核心成员",
        venue: "项目 @ 小红书",
        description: "针对弱网导致用户流失的痛点，构建"网络环境-体验时段-产品页面"三维分析模型。基于 SQL 将用户划分为 5 类网络环境×7 类时段，精准锁定 L3-L5 高潜流失用户群。定位"全Mobile、全Wi-Fi、晚间高峰、视频内流"等核心弱网场景，验证一线城市影响不显著而国外用户体验亟待优化。推动弱网接口成功率 3 个月内提升 5%。",
        tags: ["SQL", "用户分层", "归因分析", "数据分析", "Python"],
      },
      {
        title: "TikTok Shop SFP 佣金豁免激励项目",
        role: "核心成员",
        venue: "项目 @ 字节跳动 TikTok",
        description: "设计"佣金豁免"激励机制，在有限预算下最大化 GMV 和广告增长。综合考量店铺季节性增长动量、年同比增速及大盘目标，制定差异化 GMV 与 Ads 目标。与行业经理和客户经理协作筛选高潜力商家入池，入围商家 GMV 表现提升 10%，Ads Take Rate 提升 1.5%。",
        tags: ["策略设计", "GMV", "广告优化", "激励机制", "电商", "数据分析"],
      },
    ] as Project[],
    timeline: [
      // ── 教育经历 ──
      {
        period: "2025.09 - 2027.06", role: "国际商务 硕士", org: "复旦大学", location: "上海",
        type: "education", typeLabel: "教育", bullets: ["研究方向：国际贸易、商业战略与定量分析。"],
      },
      {
        period: "2021.09 - 2025.06", role: "注册会计师 学士", org: "暨南大学", location: "广州",
        type: "education", typeLabel: "教育", bullets: ["GPA：4.35/5.0 · 专业排名：1/50 · 国家奖学金×2（前1%）· 优秀学生一等奖学金（前6%）。"],
      },
      // ── 实习经历 ──
      {
        period: "2025.11 - 至今", role: "策略运营实习生", org: "字节跳动 · TikTok 全球电商东南亚", location: "上海",
        type: "experience", typeLabel: "工业界",
        bullets: [
          "搭建菲律宾电子行业核心数据看板（GMV/DGMV/AOV）。",
          "主导 Tecno 双12大促策略，GMV 同比增长 171k（MoM+14.4%）。",
          "发现 CE 类目痛点，推动 Q4 CE GMV 环比增长 44%。",
        ],
      },
      {
        period: "2025.09 - 2025.11", role: "项目管理 & 数据分析实习生", org: "小红书 · 数据科学与分析部", location: "上海",
        type: "experience", typeLabel: "工业界",
        bullets: [
          "每日监控社区核心指标（DAU、人均使用时长）并排查异动。",
          "主导"技术月报看板自动化"项目，协调 17 团队 80+ 成员。",
          "深度参与弱网精细化项目下重点场景 SQL 分析。",
        ],
      },
      {
        period: "2025.03 - 2025.06", role: "亚马逊运营实习生", org: "广州毅腾技术服务有限公司", location: "广州",
        type: "experience", typeLabel: "工业界",
        bullets: [
          "主导 50+ 款新品选品上架，基于趋势与竞品分析。",
          "降低滞销库存 15%，单品复购率增长 20%。",
        ],
      },
    ] as TimelineItem[],
    skillGroups: [
      { label: "编程与工具", skills: ["SQL", "Python", "Stata", "Excel", "MS Office"] },
      { label: "分析与 BI", skills: ["数据看板", "A/B 测试", "KPI 监控", "销售预测", "用户分层"] },
      { label: "专业领域", skills: ["电商策略运营", "GMV 分析", "跨境电商", "数据产品化", "商业智能"] },
      { label: "软技能", skills: ["项目管理", "跨团队协作", "竞品分析", "激励机制设计"] },
    ],
  },
};

// ─── 3. 直接导出接口 ───────────────────────────
export const profile = i18n.en.profile;
export const projects = i18n.en.projects;
export const timeline = i18n.en.timeline;
export const skillGroups = i18n.en.skillGroups;
export const ui = i18n.en.ui;
