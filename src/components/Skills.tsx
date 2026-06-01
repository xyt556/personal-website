import { Layers } from 'lucide-react';
import { useSiteData } from '../store/SiteDataContext';

const skillColors = [
  'from-cyan-500 to-blue-500',
  'from-blue-500 to-indigo-500',
  'from-green-500 to-emerald-500',
  'from-teal-500 to-cyan-500',
  'from-yellow-500 to-orange-500',
  'from-orange-500 to-red-500',
  'from-pink-500 to-rose-500',
  'from-violet-500 to-purple-500',
  'from-red-500 to-rose-500',
  'from-amber-500 to-orange-500',
  'from-slate-500 to-slate-700',
  'from-purple-500 to-fuchsia-500',
];

export default function Skills() {
  const { data } = useSiteData();

  return (
    <section id="skills" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            技术栈
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            技术能力
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            全栈技术体系，覆盖产品开发的各个环节
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.skills.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-slate-300/80 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
                <span>{category.emoji}</span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const colorIndex = (catIndex * 4 + skillIndex) % skillColors.length;
                  return (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skillColors[colorIndex]} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
