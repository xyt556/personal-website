import type { Project } from '../data/projects';
import { projects as defaultProjects } from '../data/projects';

// ============ Type Definitions ============

export interface HeroData {
  badge: string;
  name: string;
  subtitle: string;
  stats: string;
  avatarUrl: string;
  githubUrl: string;
  twitterUrl: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  stats: { label: string; value: string; unit: string }[];
  highlights: { title: string; description: string }[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  emoji: string;
  skills: SkillItem[];
}

export interface ContactInfo {
  email: string;
  location: string;
  workingHours: string;
}

export interface SiteData {
  hero: HeroData;
  about: AboutData;
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactInfo;
}

// ============ Default Values ============

export const defaultSiteData: SiteData = {
  hero: {
    badge: '独立开发者 · 用代码创造价值',
    name: '3S&ML',
    subtitle: '热爱构建优雅实用的软件产品，专注于提升用户体验与开发效率。',
    stats: '5 年独立开发经验 · 4 款已发布产品 · 10,000+ 活跃用户',
    avatarUrl: '/images/avatar.jpg',
    githubUrl: '#',
    twitterUrl: '#',
  },
  about: {
    title: '独立开发者',
    subtitle: '一个热爱创造的',
    description1: '我是 Alex Chen，一名全栈独立开发者。2020 年开始独立开发之路，至今已经发布了 4 款软件产品，覆盖效率工具、开发工具和创意设计等领域。',
    description2: '我相信好的软件应该是简洁而强大的，它应该让复杂的事情变得简单。这是我设计和开发每一款产品时始终坚持的理念。我享受从零到一构建产品的过程，从需求分析、架构设计到 UI 交互、性能优化，每个环节都力求做到最好。',
    stats: [
      {
        label: '开发经验',
        value: '5+',
        unit: '年',
      },
      {
        label: '已发布产品',
        value: '4',
        unit: '款',
      },
      {
        label: '活跃用户',
        value: '10K+',
        unit: '',
      },
      {
        label: '开源项目',
        value: '12',
        unit: '个',
      },
    ],
    highlights: [
      {
        title: '代码工匠',
        description: '热爱编写优雅、可维护的代码。坚持最佳实践，注重架构设计与代码质量。',
      },
      {
        title: '产品思维',
        description: '不仅关注技术实现，更注重用户需求和产品价值。让技术真正服务于人。',
      },
      {
        title: '持续创新',
        description: '紧跟前沿技术趋势，不断探索新的可能性。AI、跨平台、云原生都是我的兴趣所在。',
      },
      {
        title: '开源贡献',
        description: '积极参与开源社区，分享知识和经验。相信开源让世界更美好。',
      },
    ],
  },
  skills: [
    {
      title: '前端开发',
      emoji: '🎨',
      skills: [
        {
          name: 'React / Next.js',
          level: 95,
        },
        {
          name: 'TypeScript',
          level: 92,
        },
        {
          name: 'Vue.js',
          level: 85,
        },
        {
          name: 'Tailwind CSS',
          level: 90,
        },
      ],
    },
    {
      title: '后端开发',
      emoji: '⚙️',
      skills: [
        {
          name: 'Node.js',
          level: 90,
        },
        {
          name: 'Python',
          level: 88,
        },
        {
          name: 'Rust',
          level: 75,
        },
        {
          name: 'Go',
          level: 70,
        },
      ],
    },
    {
      title: '数据库 & 云服务',
      emoji: '☁️',
      skills: [
        {
          name: 'PostgreSQL',
          level: 88,
        },
        {
          name: 'Redis',
          level: 82,
        },
        {
          name: 'Docker / K8s',
          level: 80,
        },
        {
          name: 'AWS / GCP',
          level: 78,
        },
      ],
    },
    {
      title: '其他技能',
      emoji: '🛠️',
      skills: [
        {
          name: 'Electron',
          level: 88,
        },
        {
          name: 'UI/UX 设计',
          level: 82,
        },
        {
          name: 'CI/CD',
          level: 80,
        },
        {
          name: 'AI / ML',
          level: 72,
        },
      ],
    },
  ],
  projects: [
    {
      id: 'taskflow',
      name: '机器学习及SHAP解释工具',
      tagline: '一款集成化的机器学习模型训练、评估与 SHAP 可解释性分析工具。采用图形界面，无需编程即可完成从数据导入到模型解释的流程。',
      description: '核心功能：\n• 数据管理：支持 CSV、Excel 导入，自动识别数据类型与缺失值\n• 模型训练：集成 20+ 种算法（随机森林、XGBoost、LightGBM、CatBoost、SVM、神经网络等）\n• 特征工程：支持 8 种特征选择方法，自动处理分类变量编码与数据标准化\n• 模型评估：提供分类/回归评估指标，支持交叉验证、超参数优化与不平衡数据处理\n• 模型对比：多模型性能对比，包括 ROC/PR 曲线对比、混淆矩阵对比、误差分布对比与性能雷达图\n• SHAP 可视化：提供 10+ 种 SHAP 图表（摘要图、依赖图、交互图、瀑布图、力图等），支持样本级解释\n• 外部验证：独立数据集验证模型泛化能力，支持训练集与验证集结果对比\n• 预测功能：使用训练好的模型进行批量预测\n• 结果导出：支持图表多格式导出（PNG、JPG、SVG、PDF、EPS、TIF 等），矢量格式满足论文要求\n适用于数据科学、金融风控、医疗诊断、工业质量控制等领域，可显著提升机器学习模型的可解释性与科研效率。',
      image: '/images/ml-shap.jpg',
      tags: [
        {
          '0': '效',
          '1': '率',
          '2': '工',
          '3': '具',
        },
        {
          '0': 'R',
          '1': 'e',
          '2': 'a',
          '3': 'c',
          '4': 't',
        },
        {
          '0': 'N',
          '1': 'o',
          '2': 'd',
          '3': 'e',
          '4': '.',
          '5': 'j',
          '6': 's',
        },
        {
          '0': 'P',
          '1': 'o',
          '2': 's',
          '3': 't',
          '4': 'g',
          '5': 'r',
          '6': 'e',
          '7': 'S',
          '8': 'Q',
          '9': 'L',
        },
      ],
      features: [
        {
          '0': '拖',
          '1': '拽',
          '2': '式',
          '3': '看',
          '4': '板',
          '5': '管',
          '6': '理',
        },
        {
          '0': '甘',
          '1': '特',
          '2': '图',
          '3': ' ',
          '4': '&',
          '5': ' ',
          '6': '时',
          '7': '间',
          '8': '线',
          '9': '视',
          '10': '图',
        },
        {
          '0': '智',
          '1': '能',
          '2': '任',
          '3': '务',
          '4': '提',
          '5': '醒',
          '6': '与',
          '7': '通',
          '8': '知',
        },
        {
          '0': '团',
          '1': '队',
          '2': '实',
          '3': '时',
          '4': '协',
          '5': '作',
        },
        {
          '0': '自',
          '1': '动',
          '2': '化',
          '3': '工',
          '4': '作',
          '5': '流',
          '6': '引',
          '7': '擎',
        },
        {
          '0': '多',
          '1': '维',
          '2': '度',
          '3': '数',
          '4': '据',
          '5': '报',
          '6': '表',
        },
      ],
      downloadUrl: '#',
      demoUrl: '#',
      sourceUrl: '#',
      platform: [
        {
          '0': 'W',
          '1': 'i',
          '2': 'n',
          '3': 'd',
          '4': 'o',
          '5': 'w',
          '6': 's',
        },
        {
          '0': 'm',
          '1': 'a',
          '2': 'c',
          '3': 'O',
          '4': 'S',
        },
        {
          '0': 'W',
          '1': 'e',
          '2': 'b',
        },
      ],
      version: 'v5.7.6',
      updatedAt: '2026-06-01',
    },
    {
      id: 'codebridge',
      name: 'CodeBridge',
      tagline: '跨平台的智能代码编辑器',
      description: 'CodeBridge 是一款轻量但功能强大的代码编辑器，内置 AI 辅助编码、智能补全和实时协作功能。支持 50+ 编程语言，拥有丰富的插件生态系统。',
      image: '/images/project-codebridge.jpg',
      tags: [
        {
          '0': '开',
          '1': '发',
          '2': '工',
          '3': '具',
        },
        {
          '0': 'E',
          '1': 'l',
          '2': 'e',
          '3': 'c',
          '4': 't',
          '5': 'r',
          '6': 'o',
          '7': 'n',
        },
        {
          '0': 'T',
          '1': 'y',
          '2': 'p',
          '3': 'e',
          '4': 'S',
          '5': 'c',
          '6': 'r',
          '7': 'i',
          '8': 'p',
          '9': 't',
        },
        {
          '0': 'R',
          '1': 'u',
          '2': 's',
          '3': 't',
        },
      ],
      features: [
        {
          '0': 'A',
          '1': 'I',
          '2': ' ',
          '3': '智',
          '4': '能',
          '5': '代',
          '6': '码',
          '7': '补',
          '8': '全',
        },
        {
          '0': '内',
          '1': '置',
          '2': '终',
          '3': '端',
          '4': '与',
          '5': '调',
          '6': '试',
          '7': '器',
        },
        {
          '0': '实',
          '1': '时',
          '2': '多',
          '3': '人',
          '4': '协',
          '5': '作',
          '6': '编',
          '7': '辑',
        },
        {
          '0': 'G',
          '1': 'i',
          '2': 't',
          '3': ' ',
          '4': '深',
          '5': '度',
          '6': '集',
          '7': '成',
        },
        {
          '0': '5',
          '1': '0',
          '2': '+',
          '3': ' ',
          '4': '语',
          '5': '言',
          '6': '语',
          '7': '法',
          '8': '支',
          '9': '持',
        },
        {
          '0': '可',
          '1': '扩',
          '2': '展',
          '3': '插',
          '4': '件',
          '5': '系',
          '6': '统',
        },
      ],
      downloadUrl: '#',
      sourceUrl: '#',
      platform: [
        {
          '0': 'W',
          '1': 'i',
          '2': 'n',
          '3': 'd',
          '4': 'o',
          '5': 'w',
          '6': 's',
        },
        {
          '0': 'm',
          '1': 'a',
          '2': 'c',
          '3': 'O',
          '4': 'S',
        },
        {
          '0': 'L',
          '1': 'i',
          '2': 'n',
          '3': 'u',
          '4': 'x',
        },
      ],
      version: 'v1.8.0',
      updatedAt: '2026-01-20',
    },
    {
      id: 'pixelcraft',
      name: 'PixelCraft',
      tagline: '简洁强大的图像编辑与设计工具',
      description: 'PixelCraft 让设计变得简单高效。无论是照片编辑、UI 设计还是插画创作，都能轻松驾驭。AI 抠图、智能滤镜和丰富模板，让创意触手可及。',
      image: '/images/project-pixelcraft.jpg',
      tags: [
        {
          '0': '设',
          '1': '计',
          '2': '工',
          '3': '具',
        },
        {
          '0': 'C',
          '1': '+',
          '2': '+',
        },
        {
          '0': 'O',
          '1': 'p',
          '2': 'e',
          '3': 'n',
          '4': 'G',
          '5': 'L',
        },
        {
          '0': 'P',
          '1': 'y',
          '2': 't',
          '3': 'h',
          '4': 'o',
          '5': 'n',
        },
      ],
      features: [
        {
          '0': 'A',
          '1': 'I',
          '2': ' ',
          '3': '一',
          '4': '键',
          '5': '智',
          '6': '能',
          '7': '抠',
          '8': '图',
        },
        {
          '0': '专',
          '1': '业',
          '2': '级',
          '3': '图',
          '4': '层',
          '5': '管',
          '6': '理',
        },
        {
          '0': '1',
          '1': '0',
          '2': '0',
          '3': '+',
          '4': ' ',
          '5': '精',
          '6': '选',
          '7': '滤',
          '8': '镜',
          '9': '与',
          '10': '特',
          '11': '效',
        },
        {
          '0': '矢',
          '1': '量',
          '2': '绘',
          '3': '图',
          '4': '工',
          '5': '具',
        },
        {
          '0': '海',
          '1': '量',
          '2': '设',
          '3': '计',
          '4': '模',
          '5': '板',
        },
        {
          '0': '批',
          '1': '量',
          '2': '图',
          '3': '片',
          '4': '处',
          '5': '理',
        },
      ],
      downloadUrl: '#',
      demoUrl: '#',
      platform: [
        {
          '0': 'W',
          '1': 'i',
          '2': 'n',
          '3': 'd',
          '4': 'o',
          '5': 'w',
          '6': 's',
        },
        {
          '0': 'm',
          '1': 'a',
          '2': 'c',
          '3': 'O',
          '4': 'S',
        },
      ],
      version: 'v3.1.2',
      updatedAt: '2025-11-08',
    },
    {
      id: 'dataflow',
      name: 'DataFlow',
      tagline: '可视化数据分析与 BI 仪表盘',
      description: 'DataFlow 帮助你将复杂数据转化为直观的可视化图表和洞察。支持多数据源连接、拖拽式仪表盘构建和自动化报告生成，让数据驱动决策更简单。',
      image: '/images/project-dataflow.jpg',
      tags: [
        {
          '0': '数',
          '1': '据',
          '2': '分',
          '3': '析',
        },
        {
          '0': 'P',
          '1': 'y',
          '2': 't',
          '3': 'h',
          '4': 'o',
          '5': 'n',
        },
        {
          '0': 'D',
          '1': '3',
          '2': '.',
          '3': 'j',
          '4': 's',
        },
        {
          '0': 'A',
          '1': 'p',
          '2': 'a',
          '3': 'c',
          '4': 'h',
          '5': 'e',
          '6': ' ',
          '7': 'A',
          '8': 'r',
          '9': 'r',
          '10': 'o',
          '11': 'w',
        },
      ],
      features: [
        {
          '0': '多',
          '1': '数',
          '2': '据',
          '3': '源',
          '4': '一',
          '5': '键',
          '6': '连',
          '7': '接',
        },
        {
          '0': '拖',
          '1': '拽',
          '2': '式',
          '3': '仪',
          '4': '表',
          '5': '盘',
          '6': '搭',
          '7': '建',
        },
        {
          '0': '3',
          '1': '0',
          '2': '+',
          '3': ' ',
          '4': '图',
          '5': '表',
          '6': '类',
          '7': '型',
        },
        {
          '0': 'S',
          '1': 'Q',
          '2': 'L',
          '3': ' ',
          '4': '查',
          '5': '询',
          '6': '编',
          '7': '辑',
          '8': '器',
        },
        {
          '0': '自',
          '1': '动',
          '2': '化',
          '3': '报',
          '4': '告',
          '5': '生',
          '6': '成',
        },
        {
          '0': '数',
          '1': '据',
          '2': '预',
          '3': '警',
          '4': '与',
          '5': '推',
          '6': '送',
        },
      ],
      downloadUrl: '#',
      demoUrl: '#',
      platform: [
        {
          '0': 'W',
          '1': 'e',
          '2': 'b',
        },
        {
          '0': 'D',
          '1': 'o',
          '2': 'c',
          '3': 'k',
          '4': 'e',
          '5': 'r',
        },
      ],
      version: 'v1.5.3',
      updatedAt: '2026-02-01',
    },
  ],
  contact: {
    email: 'alex@example.dev',
    location: '中国 · 深圳',
    workingHours: '周一至周五 9:00-18:00',
  },
};

// ============ Admin password (SHA-256 hash of "admin123") ============
const ADMIN_PASSWORD = 'admin123';

// ============ localStorage helpers ============

const STORAGE_KEY = 'site_data';
const AUTH_KEY = 'admin_auth';

export function loadSiteData(): SiteData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as SiteData;
    }
  } catch {
    // ignore
  }
  return defaultSiteData;
}

export function saveSiteData(data: SiteData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetSiteData(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function isAdminLoggedIn(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === 'true';
}

export function loginAdmin(): void {
  sessionStorage.setItem(AUTH_KEY, 'true');
}

export function logoutAdmin(): void {
  sessionStorage.removeItem(AUTH_KEY);
}
