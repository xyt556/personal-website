import { useSiteData } from '../store/SiteDataContext';
import ProjectCard from './ProjectCard';
import { PackageOpen } from 'lucide-react';

export default function Projects() {
  const { data } = useSiteData();

  return (
    <section id="projects" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
            <PackageOpen className="w-4 h-4" />
            软件作品
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            我的软件作品集
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            每一款产品都倾注了我对用户体验和技术细节的执着追求
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
