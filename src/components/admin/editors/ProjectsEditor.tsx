import { useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp, GripVertical } from 'lucide-react';
import type { Project } from '../../../data/projects';

interface Props {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

function generateId() {
  return 'proj_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

const emptyProject: Project = {
  id: '',
  name: '',
  tagline: '',
  description: '',
  image: '',
  tags: [],
  features: [],
  downloadUrl: '#',
  demoUrl: '',
  sourceUrl: '',
  platform: [],
  version: 'v1.0.0',
  updatedAt: new Date().toISOString().split('T')[0],
};

export default function ProjectsEditor({ projects, onChange }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(
    projects[0]?.id || null
  );

  const updateProject = (index: number, field: keyof Project, value: unknown) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addProject = () => {
    const newProject: Project = { ...emptyProject, id: generateId() };
    onChange([...projects, newProject]);
    setExpandedId(newProject.id);
  };

  const removeProject = (index: number) => {
    const updated = projects.filter((_, i) => i !== index);
    onChange(updated);
  };

  const moveProject = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= projects.length) return;
    const updated = [...projects];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    onChange(updated);
  };

  return (
    <div className="max-w-3xl space-y-4">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors"
            onClick={() =>
              setExpandedId(expandedId === project.id ? null : project.id)
            }
          >
            <GripVertical className="w-4 h-4 text-slate-300" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-slate-900 truncate">
                {project.name || '未命名项目'}
              </h3>
              <p className="text-xs text-slate-400 truncate">{project.tagline}</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  moveProject(index, 'up');
                }}
                disabled={index === 0}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  moveProject(index, 'down');
                }}
                disabled={index === projects.length - 1}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-all"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeProject(index);
                }}
                className="p-1.5 rounded-md text-red-400 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            {expandedId === project.id ? (
              <ChevronUp className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </div>

          {/* Expanded Editor */}
          {expandedId === project.id && (
            <div className="px-6 pb-6 space-y-4 border-t border-slate-100 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    项目名称
                  </label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProject(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    版本号
                  </label>
                  <input
                    type="text"
                    value={project.version}
                    onChange={(e) => updateProject(index, 'version', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  简短标语
                </label>
                <input
                  type="text"
                  value={project.tagline}
                  onChange={(e) => updateProject(index, 'tagline', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  详细描述
                </label>
                <textarea
                  rows={3}
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  封面图 URL
                </label>
                <input
                  type="text"
                  value={project.image}
                  onChange={(e) => updateProject(index, 'image', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    下载链接
                  </label>
                  <input
                    type="text"
                    value={project.downloadUrl}
                    onChange={(e) => updateProject(index, 'downloadUrl', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    演示链接
                  </label>
                  <input
                    type="text"
                    value={project.demoUrl || ''}
                    onChange={(e) => updateProject(index, 'demoUrl', e.target.value || undefined)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    源码链接
                  </label>
                  <input
                    type="text"
                    value={project.sourceUrl || ''}
                    onChange={(e) => updateProject(index, 'sourceUrl', e.target.value || undefined)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  标签 <span className="text-slate-400 font-normal">(逗号分隔)</span>
                </label>
                <input
                  type="text"
                  value={project.tags.join(', ')}
                  onChange={(e) =>
                    updateProject(
                      index,
                      'tags',
                      e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                    )
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  支持平台{' '}
                  <span className="text-slate-400 font-normal">(逗号分隔: Windows, macOS, Linux, Web, Docker)</span>
                </label>
                <input
                  type="text"
                  value={project.platform.join(', ')}
                  onChange={(e) =>
                    updateProject(
                      index,
                      'platform',
                      e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                    )
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  核心功能 <span className="text-slate-400 font-normal">(每行一个)</span>
                </label>
                <textarea
                  rows={4}
                  value={project.features.join('\n')}
                  onChange={(e) =>
                    updateProject(
                      index,
                      'features',
                      e.target.value.split('\n').filter(Boolean)
                    )
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  更新日期
                </label>
                <input
                  type="date"
                  value={project.updatedAt}
                  onChange={(e) => updateProject(index, 'updatedAt', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add Button */}
      <button
        onClick={addProject}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-slate-200 text-sm font-medium text-slate-500 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all"
      >
        <Plus className="w-4 h-4" />
        添加新项目
      </button>
    </div>
  );
}
