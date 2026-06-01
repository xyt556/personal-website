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
    name: 'Alex Chen',
    subtitle: '热爱构建优雅实用的软件产品，专注于提升用户体验与开发效率。',
    stats: '5 年独立开发经验 · 4 款已发布产品 · 10,000+ 活跃用户',
    avatarUrl: '/images/avatar.jpg',
    githubUrl: '#',
    twitterUrl: '#',
  },
  about: {
    title: '独立开发者',
    subtitle: '一个热爱创造的',
    description1:
      '我是 Alex Chen，一名全栈独立开发者。2020 年开始独立开发之路，至今已经发布了 4 款软件产品，覆盖效率工具、开发工具和创意设计等领域。',
    description2:
      '我相信好的软件应该是简洁而强大的，它应该让复杂的事情变得简单。这是我设计和开发每一款产品时始终坚持的理念。我享受从零到一构建产品的过程，从需求分析、架构设计到 UI 交互、性能优化，每个环节都力求做到最好。',
    stats: [
      { label: '开发经验', value: '5+', unit: '年' },
      { label: '已发布产品', value: '4', unit: '款' },
      { label: '活跃用户', value: '10K+', unit: '' },
      { label: '开源项目', value: '12', unit: '个' },
    ],
    highlights: [
      { title: '代码工匠', description: '热爱编写优雅、可维护的代码。坚持最佳实践，注重架构设计与代码质量。' },
      { title: '产品思维', description: '不仅关注技术实现，更注重用户需求和产品价值。让技术真正服务于人。' },
      { title: '持续创新', description: '紧跟前沿技术趋势，不断探索新的可能性。AI、跨平台、云原生都是我的兴趣所在。' },
      { title: '开源贡献', description: '积极参与开源社区，分享知识和经验。相信开源让世界更美好。' },
    ],
  },
  skills: [
    {
      title: '前端开发',
      emoji: '🎨',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: '后端开发',
      emoji: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'Rust', level: 75 },
        { name: 'Go', level: 70 },
      ],
    },
    {
      title: '数据库 & 云服务',
      emoji: '☁️',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'Redis', level: 82 },
        { name: 'Docker / K8s', level: 80 },
        { name: 'AWS / GCP', level: 78 },
      ],
    },
    {
      title: '其他技能',
      emoji: '🛠️',
      skills: [
        { name: 'Electron', level: 88 },
        { name: 'UI/UX 设计', level: 82 },
        { name: 'CI/CD', level: 80 },
        { name: 'AI / ML', level: 72 },
      ],
    },
  ],
  projects: defaultProjects,
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
