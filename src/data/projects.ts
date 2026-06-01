export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  downloadUrl: string;
  demoUrl?: string;
  sourceUrl?: string;
  platform: string[];
  version: string;
  updatedAt: string;
}

export const projects: Project[] = [
  {
    id: 'taskflow',
    name: 'TaskFlow',
    tagline: '高效的任务管理与团队协作工具',
    description:
      'TaskFlow 是一款直观的项目管理应用，支持看板视图、甘特图和时间线，帮助个人和团队轻松管理复杂项目。内置智能提醒、自动化工作流和数据分析功能。',
    image: '/images/project-taskflow.jpg',
    tags: ['效率工具', 'React', 'Node.js', 'PostgreSQL'],
    features: [
      '拖拽式看板管理',
      '甘特图 & 时间线视图',
      '智能任务提醒与通知',
      '团队实时协作',
      '自动化工作流引擎',
      '多维度数据报表',
    ],
    downloadUrl: '#',
    demoUrl: '#',
    sourceUrl: '#',
    platform: ['Windows', 'macOS', 'Web'],
    version: 'v2.4.1',
    updatedAt: '2025-12-15',
  },
  {
    id: 'codebridge',
    name: 'CodeBridge',
    tagline: '跨平台的智能代码编辑器',
    description:
      'CodeBridge 是一款轻量但功能强大的代码编辑器，内置 AI 辅助编码、智能补全和实时协作功能。支持 50+ 编程语言，拥有丰富的插件生态系统。',
    image: '/images/project-codebridge.jpg',
    tags: ['开发工具', 'Electron', 'TypeScript', 'Rust'],
    features: [
      'AI 智能代码补全',
      '内置终端与调试器',
      '实时多人协作编辑',
      'Git 深度集成',
      '50+ 语言语法支持',
      '可扩展插件系统',
    ],
    downloadUrl: '#',
    sourceUrl: '#',
    platform: ['Windows', 'macOS', 'Linux'],
    version: 'v1.8.0',
    updatedAt: '2026-01-20',
  },
  {
    id: 'pixelcraft',
    name: 'PixelCraft',
    tagline: '简洁强大的图像编辑与设计工具',
    description:
      'PixelCraft 让设计变得简单高效。无论是照片编辑、UI 设计还是插画创作，都能轻松驾驭。AI 抠图、智能滤镜和丰富模板，让创意触手可及。',
    image: '/images/project-pixelcraft.jpg',
    tags: ['设计工具', 'C++', 'OpenGL', 'Python'],
    features: [
      'AI 一键智能抠图',
      '专业级图层管理',
      '100+ 精选滤镜与特效',
      '矢量绘图工具',
      '海量设计模板',
      '批量图片处理',
    ],
    downloadUrl: '#',
    demoUrl: '#',
    platform: ['Windows', 'macOS'],
    version: 'v3.1.2',
    updatedAt: '2025-11-08',
  },
  {
    id: 'dataflow',
    name: 'DataFlow',
    tagline: '可视化数据分析与 BI 仪表盘',
    description:
      'DataFlow 帮助你将复杂数据转化为直观的可视化图表和洞察。支持多数据源连接、拖拽式仪表盘构建和自动化报告生成，让数据驱动决策更简单。',
    image: '/images/project-dataflow.jpg',
    tags: ['数据分析', 'Python', 'D3.js', 'Apache Arrow'],
    features: [
      '多数据源一键连接',
      '拖拽式仪表盘搭建',
      '30+ 图表类型',
      'SQL 查询编辑器',
      '自动化报告生成',
      '数据预警与推送',
    ],
    downloadUrl: '#',
    demoUrl: '#',
    platform: ['Web', 'Docker'],
    version: 'v1.5.3',
    updatedAt: '2026-02-01',
  },
];
