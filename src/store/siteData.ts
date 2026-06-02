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
    stats: '15年独立开发经验 ·20多款已发布产品 · 10,000+ 活跃用户',
    avatarUrl: '/images/avatar.jpg',
    githubUrl: 'https://github.com/xyt556?tab=repositories',
    twitterUrl: '#',
  },
  about: {
    title: '独立开发者',
    subtitle: '一个热爱创造的',
    description1: '我是 3S&ML，一名全栈独立开发者。多年独立开发之路，至今已经发布了 几十款 款软件产品，覆盖机器学习、地理信息和遥感等领域。',
    description2: '我相信好的软件应该是简洁而强大的，它应该让复杂的事情变得简单。这是我设计和开发每一款产品时始终坚持的理念。我享受从零到一构建产品的过程，从需求分析、架构设计到 UI 交互、性能优化，每个环节都力求做到最好。',
    stats: [
      {
        label: '开发经验',
        value: '25+',
        unit: '年',
      },
      {
        label: '已发布产品',
        value: '30',
        unit: '款',
      },
      {
        label: '活跃用户',
        value: '10K+',
        unit: '',
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
  ],
  projects: [
    {
      id: 'codebridge',
      name: 'MSPA 形态空间格局分析系统',
      tagline: '从二值栅格到生态安全格局，一站式完成形态分类、电路连通性分析与生态成果提取',
      description: '## 你是否遇到过这些困扰？\n\n做生态连通性研究时，你是否也曾被这些问题困扰——\n\n- 🔴 景观格局分类全靠手动阈值，缺乏客观、可重复的分类标准？\n- 🔴 廊道识别只靠目视判读，无法定量区分"桥梁""环路""分支"？\n- 🔴 连通性分析依赖商业软件 Circuitscape，安装配置繁琐到怀疑人生？\n- 🔴 生态夹点、障碍区的识别缺乏系统方法，只能"凭感觉"？\n- 🔴 多期景观变化的对比分析，转移矩阵和桑基图不知怎么做？\n\n如果你有以上任何一个困扰，那么今天介绍的这款工具，可能会成为你科\n',
      image: '/images/mspa.png',
      tags: [
        '开发工具',
        'Electron',
        'TypeScript',
        'Rust',
      ],
      features: [
        '## 核心功能一览',
        '### 🗺️ 功能一：MSPA 七类形态分类',
        '只需一张二值栅格（前景/背景），软件即可自动将景观分为 **7 种形态类型**：',
        '|         类型         |   颜色  | 一句话解释                  |',
        '| :----------------: | :---: | :--------------------- |',
        '|    **Core 核心区**    | 🟢 绿色 | 远离边缘的内部栖息地，景观的"心脏"     |',
        '|    **Islet 孤岛**    | 🟡 黄色 | 面积太小、没有核心区的小斑块         |',
        '| **Perforation 穿孔** | 🔵 蓝色 | 核心区内部被侵蚀出的边缘带          |',
        '|     **Edge 边缘**    |  ⚫ 黑色 | 核心区外侧的过渡带              |',
        '|    **Bridge 桥梁**   | 🔴 红色 | 连接不同核心区的廊道——**连通性的命脉** |',
        '|     **Loop 环路**    | 🩵 青色 | 连接同一核心区的环形廊道——**冗余通道** |',
        '|    **Branch 分支**   | 🟠 橙色 | 只连一个核心区的"死胡同"廊道        |',
        '只需设置两个参数——**边缘宽度**和**连通性（4/8邻域）**，一键即可完成分类，结果以标准 0–7 编码 GeoTIFF 输出，可直接在 ArcGIS/QGIS 中打开。',
        '> 💡 **边缘宽度**的物理意义：实际宽度 = 参数值 × 像元分辨率。比如 30m 分辨率下设为 3，就是 90m 的边缘带——正好对应许多森林景观的边缘效应深度。',
        '***',
        '### ⚡ 功能二：电路理论连通性分析',
        '这是本软件的**杀手级功能**——无需安装 Circuitscape，程序内置了同类算法，直接在界面中完成电路求解。',
        '**工作流程：**',
        '```',
        'MSPA 分类图 → 阻力面构建 → 核心节点提取 → 电路求解 → 电流密度/电压场/连通性矩阵',
        '```',
        '**阻力面怎么来？** 软件根据 MSPA 分类结果自动赋值——核心区阻力最低（最易通行），背景最高，廊道结构较低。内置 4 套预设方案，也支持完全自定义：',
        '| 预设方案       | 适用场景   |',
        '| :--------- | :----- |',
        '| 默认（MSPA推荐） | 通用分析   |',
        '| 森林景观       | 廊道阻力更低 |',
        '| 城市绿地       | 整体阻力偏高 |',
        '| 开阔草地       | 边缘阻力较低 |',
        '**电路求解支持：**',
        '- 🔄 **全节点对模式**：累加所有核心区之间的电流密度，构建完整连通性矩阵——推荐用于廊道/夹点识别',
        '- 🎯 **单节点对模式**：指定源→汇，查看特定核心区之间的电压场和电流路径',
        '- ⚡ **并行计算**：线程池加速，大栅格也能跑',
        '- 🧮 **智能粗化**：自动建议粗化倍数，在精度和速度间取得平衡',
        '- 🧠 **多种求解器**：直接法 / 共轭梯度 / AMG 预条件，适应不同规模',
        '***',
        '### 🌿 功能三：生态成果一键提取',
        '有了电流密度图和阻力面，软件可以进一步提取**五大生态成果**：',
        '#### 1️⃣ 生态廊道（Corridor）',
        '高电流密度区域 = 物种迁移的集中通道。只需设置一个分位数阈值（如 90%），即可自动提取。',
        '#### 2️⃣ Pinch Point（夹点/瓶颈）',
        '廊道中最窄、电流最集中的位置——一旦断裂，连通性就断了。软件通过局部极大值检测 + 廊道宽度约束来识别，还能**虚拟阻断验证**：模拟夹点被破坏后对整体连通性的影响百分比。',
        '> 🎯 这个功能对生态修复的优先级排序特别有用！',
        '#### 3️⃣ Barrier（生态障碍）',
        '高阻力 + 低电流 = 阻碍生态流动的"墙"。识别障碍区，就知道哪里需要优先恢复。',
        '#### 4️⃣ 关键连接路径（Key Linkages）',
        '按连通度排序的 Top-K 节点对，并可选追踪路径线。一眼看出哪些核心区之间的连接最重要。',
        '#### 5️⃣ 源节点重要性（Source Importance）',
        '每个核心区对整体连通性的贡献度排名——谁是生态网络的"枢纽"，一目了然。',
        '***',
        '### 📊 功能四：时序变化分析',
        '加载两个时期的 MSPA 分类结果，软件自动生成：',
        '- **8×8 转移矩阵**：每个像元从 T1 到 T2 的类别变化',
        '- **转移桑基图**：直观展示类别间的流量流向（支持鼠标悬停交互）',
        '- **类别净变化图**：哪个类别在扩张、哪个在萎缩，一目了然',
        '- **多期时序对比**：支持多期序列的连续分析',
        '> 📈 做土地利用变化、景观格局演变的同学，这个功能直接省掉你写转移矩阵代码的时间。',
      ],
      downloadUrl: '#',
      sourceUrl: '#',
      platform: [
        'Windows',
        'macOS',
        'Linux',
      ],
      version: 'v1.5',
      updatedAt: '2026-01-20',
    },
    {
      id: 'taskflow',
      name: '机器学习及SHAP解释工具',
      tagline: '一款集成化的机器学习模型训练、评估与 SHAP 可解释性分析工具。采用图形界面，无需编程即可完成从数据导入到模型解释的流程。',
      description: '核心功能：\n• 数据管理：支持 CSV、Excel 导入，自动识别数据类型与缺失值\n• 模型训练：集成 20+ 种算法（随机森林、XGBoost、LightGBM、CatBoost、SVM、神经网络等）\n• 特征工程：支持 8 种特征选择方法，自动处理分类变量编码与数据标准化\n• 模型评估：提供分类/回归评估指标，支持交叉验证、超参数优化与不平衡数据处理\n• 模型对比：多模型性能对比，包括 ROC/PR 曲线对比、混淆矩阵对比、误差分布对比与性能雷达图\n• SHAP 可视化：提供 10+ 种 SHAP 图表（摘要图、依赖图、交互图、瀑布图、力图等），支持样本级解释\n• 外部验证：独立数据集验证模型泛化能力，支持训练集与验证集结果对比\n• 预测功能：使用训练好的模型进行批量预测\n• 结果导出：支持图表多格式导出（PNG、JPG、SVG、PDF、EPS、TIF 等），矢量格式满足论文要求\n适用于数据科学、金融风控、医疗诊断、工业质量控制等领域，可显著提升机器学习模型的可解释性与科研效率。',
      image: '/images/ml-shap.jpg',
      tags: [
        '效率工具',
        'React',
        'Node.js',
        'PostgreSQL',
      ],
      features: [
        '拖拽式看板管理',
        '甘特图 & 时间线视图',
        '智能任务提醒与通知',
        '团队实时协作',
        '自动化工作流引擎',
        '多维度数据报表',
      ],
      downloadUrl: '/soft/ml-shap.html',
      demoUrl: '#',
      sourceUrl: '#',
      platform: [
        'Windows',
        'macOS',
        'Web',
      ],
      version: 'v5.7.6',
      updatedAt: '2026-06-01',
    },
  ],
  contact: {
    email: 'xyt556@163.com',
    location: '中国 · 江苏',
    workingHours: '周一至周五 9:00-18:00',
  },
};

// ============ Admin password (SHA-256 hash of "admin123") ============
const ADMIN_PASSWORD = 'admin1234554321';

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
