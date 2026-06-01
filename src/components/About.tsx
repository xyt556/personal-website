import { Code2, Lightbulb, Rocket, Heart, type LucideIcon } from 'lucide-react';
import { useSiteData } from '../store/SiteDataContext';

const iconMap: LucideIcon[] = [Code2, Lightbulb, Rocket, Heart];

export default function About() {
  const { data } = useSiteData();
  const about = data.about;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
              ✨ 关于我
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {about.subtitle}
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {about.title}
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              {about.description1}
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              {about.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="text-2xl font-bold text-indigo-600">
                    {stat.value}
                    <span className="text-sm font-normal text-slate-400 ml-0.5">
                      {stat.unit}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.highlights.map((item, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    index === 0
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-transparent text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-white border-slate-200 hover:border-indigo-200'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      index === 0 ? 'bg-white/20' : 'bg-indigo-50'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${index === 0 ? 'text-white' : 'text-indigo-600'}`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      index === 0 ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      index === 0 ? 'text-indigo-100' : 'text-slate-500'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
