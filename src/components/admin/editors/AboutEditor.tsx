import { Trash2, Plus } from 'lucide-react';
import type { AboutData } from '../../../store/siteData';

interface Props {
  about: AboutData;
  onChange: (about: AboutData) => void;
}

export default function AboutEditor({ about, onChange }: Props) {
  const update = (field: keyof AboutData, value: unknown) => {
    onChange({ ...about, [field]: value });
  };

  const updateStat = (index: number, field: string, value: string) => {
    const stats = [...about.stats];
    stats[index] = { ...stats[index], [field]: value };
    update('stats', stats);
  };

  const addStat = () => {
    update('stats', [...about.stats, { label: '', value: '', unit: '' }]);
  };

  const removeStat = (index: number) => {
    update('stats', about.stats.filter((_, i) => i !== index));
  };

  const updateHighlight = (index: number, field: string, value: string) => {
    const highlights = [...about.highlights];
    highlights[index] = { ...highlights[index], [field]: value };
    update('highlights', highlights);
  };

  const addHighlight = () => {
    update('highlights', [...about.highlights, { title: '', description: '' }]);
  };

  const removeHighlight = (index: number) => {
    update('highlights', about.highlights.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-3xl space-y-6">
      {/* Basic Info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
          👤 基本信息
        </h3>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">副标题</label>
          <input
            type="text"
            value={about.subtitle}
            onChange={(e) => update('subtitle', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">标题</label>
          <input
            type="text"
            value={about.title}
            onChange={(e) => update('title', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">介绍段落一</label>
          <textarea
            rows={3}
            value={about.description1}
            onChange={(e) => update('description1', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">介绍段落二</label>
          <textarea
            rows={3}
            value={about.description2}
            onChange={(e) => update('description2', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
          📊 数据统计
        </h3>

        {about.stats.map((stat, index) => (
          <div key={index} className="flex items-end gap-3">
            <div className="flex-1">
              <label className="block text-xs text-slate-500 mb-1">标签</label>
              <input
                type="text"
                value={stat.label}
                onChange={(e) => updateStat(index, 'label', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="w-24">
              <label className="block text-xs text-slate-500 mb-1">数值</label>
              <input
                type="text"
                value={stat.value}
                onChange={(e) => updateStat(index, 'value', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="w-20">
              <label className="block text-xs text-slate-500 mb-1">单位</label>
              <input
                type="text"
                value={stat.unit}
                onChange={(e) => updateStat(index, 'unit', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <button
              onClick={() => removeStat(index)}
              className="p-2 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-all"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        <button
          onClick={addStat}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          添加统计项
        </button>
      </div>

      {/* Highlights */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
          ✨ 核心亮点
        </h3>

        {about.highlights.map((highlight, index) => (
          <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">亮点 {index + 1}</span>
              <button
                onClick={() => removeHighlight(index)}
                className="p-1 rounded text-red-400 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <input
              type="text"
              value={highlight.title}
              onChange={(e) => updateHighlight(index, 'title', e.target.value)}
              placeholder="标题"
              className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
            <textarea
              rows={2}
              value={highlight.description}
              onChange={(e) => updateHighlight(index, 'description', e.target.value)}
              placeholder="描述"
              className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
            />
          </div>
        ))}

        <button
          onClick={addHighlight}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          添加亮点
        </button>
      </div>
    </div>
  );
}
