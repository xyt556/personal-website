import type { HeroData } from '../../../store/siteData';

interface Props {
  hero: HeroData;
  onChange: (hero: HeroData) => void;
}

export default function HeroEditor({ hero, onChange }: Props) {
  const update = (field: keyof HeroData, value: string) => {
    onChange({ ...hero, [field]: value });
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
        <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
          🏠 首页横幅设置
        </h3>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">标语徽章</label>
          <input
            type="text"
            value={hero.badge}
            onChange={(e) => update('badge', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
          <p className="text-xs text-slate-400 mt-1">显示在页面顶部的标语</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">你的名字</label>
          <input
            type="text"
            value={hero.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">副标题</label>
          <textarea
            rows={2}
            value={hero.subtitle}
            onChange={(e) => update('subtitle', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">统计数据</label>
          <input
            type="text"
            value={hero.stats}
            onChange={(e) => update('stats', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
          <p className="text-xs text-slate-400 mt-1">例如: 5 年经验 · 4 款产品 · 10K+ 用户</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">头像 URL</label>
          <input
            type="text"
            value={hero.avatarUrl}
            onChange={(e) => update('avatarUrl', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">GitHub 链接</label>
            <input
              type="text"
              value={hero.githubUrl}
              onChange={(e) => update('githubUrl', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Twitter/X 链接</label>
            <input
              type="text"
              value={hero.twitterUrl}
              onChange={(e) => update('twitterUrl', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
