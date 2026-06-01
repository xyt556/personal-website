import { useState } from 'react';
import {
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Monitor,
  Globe,
  Container,
} from 'lucide-react';
import type { Project } from '../data/projects';

const AppleIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
);

const platformIcons: Record<string, React.ReactNode> = {
  Windows: <Monitor className="w-3.5 h-3.5" />,
  macOS: <AppleIcon />,
  Linux: <Monitor className="w-3.5 h-3.5" />,
  Web: <Globe className="w-3.5 h-3.5" />,
  Docker: <Container className="w-3.5 h-3.5" />,
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300/80 transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Version Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-slate-700 shadow-sm">
          {project.version}
        </div>

        {/* Hover Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <a
            href={project.downloadUrl}
            className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-lg text-sm font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-700 transition-colors shadow-lg"
          >
            <Download className="w-4 h-4" />
            下载
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              演示
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-indigo-600 font-medium">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Platform */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
          <span className="text-xs text-slate-400 font-medium">支持平台:</span>
          <div className="flex items-center gap-2">
            {project.platform.map((p) => (
              <span
                key={p}
                className="flex items-center gap-1 text-xs text-slate-500"
              >
                {platformIcons[p]}
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Features */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors w-full"
        >
          {isExpanded ? (
            <>
              收起功能列表 <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              查看核心功能 <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        {isExpanded && (
          <ul className="mt-3 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            更新于 {project.updatedAt}
          </span>
          <a
            href={project.downloadUrl}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            立即下载
          </a>
        </div>
      </div>
    </div>
  );
}
