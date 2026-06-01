import { ArrowDown, Sparkles } from 'lucide-react';
import { useSiteData } from '../store/SiteDataContext';

export default function Hero() {
  const { data } = useSiteData();
  const hero = data.hero;

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>{hero.badge}</span>
        </div>

        {/* Avatar */}
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-2xl shadow-indigo-500/10">
            <img
              src={hero.avatarUrl}
              alt={hero.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
          你好，我是{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed">
          {hero.subtitle}
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto mb-10">
          {hero.stats}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              浏览我的作品
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 hover:scale-105 transition-all duration-300"
          >
            联系我
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={hero.githubUrl}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href={hero.twitterUrl}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-medium tracking-wider uppercase">向下滚动</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
