import { Trash2, Plus } from 'lucide-react';
import type { SkillCategory } from '../../../store/siteData';

interface Props {
  skills: SkillCategory[];
  onChange: (skills: SkillCategory[]) => void;
}

export default function SkillsEditor({ skills, onChange }: Props) {
  const updateCategory = (catIndex: number, field: keyof SkillCategory, value: unknown) => {
    const updated = [...skills];
    updated[catIndex] = { ...updated[catIndex], [field]: value };
    onChange(updated);
  };

  const updateSkill = (catIndex: number, skillIndex: number, field: string, value: unknown) => {
    const updated = [...skills];
    const cat = { ...updated[catIndex] };
    const updatedSkills = [...cat.skills];
    updatedSkills[skillIndex] = { ...updatedSkills[skillIndex], [field]: value };
    cat.skills = updatedSkills;
    updated[catIndex] = cat;
    onChange(updated);
  };

  const addSkill = (catIndex: number) => {
    const updated = [...skills];
    const cat = { ...updated[catIndex] };
    cat.skills = [...cat.skills, { name: '', level: 50 }];
    updated[catIndex] = cat;
    onChange(updated);
  };

  const removeSkill = (catIndex: number, skillIndex: number) => {
    const updated = [...skills];
    const cat = { ...updated[catIndex] };
    cat.skills = cat.skills.filter((_, i) => i !== skillIndex);
    updated[catIndex] = cat;
    onChange(updated);
  };

  const addCategory = () => {
    onChange([
      ...skills,
      { title: '', emoji: '📌', skills: [{ name: '', level: 50 }] },
    ]);
  };

  const removeCategory = (catIndex: number) => {
    onChange(skills.filter((_, i) => i !== catIndex));
  };

  return (
    <div className="max-w-3xl space-y-6">
      {skills.map((category, catIndex) => (
        <div
          key={catIndex}
          className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3 flex-1">
              <input
                type="text"
                value={category.emoji}
                onChange={(e) => updateCategory(catIndex, 'emoji', e.target.value)}
                className="w-12 px-2 py-1.5 rounded-lg border border-slate-200 bg-slate-50/50 text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              <input
                type="text"
                value={category.title}
                onChange={(e) => updateCategory(catIndex, 'title', e.target.value)}
                placeholder="分类名称"
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <button
              onClick={() => removeCategory(catIndex)}
              className="p-2 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-all ml-2"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="flex items-center gap-3">
              <input
                type="text"
                value={skill.name}
                onChange={(e) =>
                  updateSkill(catIndex, skillIndex, 'name', e.target.value)
                }
                placeholder="技能名称"
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              <div className="flex items-center gap-2 w-40">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={skill.level}
                  onChange={(e) =>
                    updateSkill(catIndex, skillIndex, 'level', parseInt(e.target.value))
                  }
                  className="flex-1 accent-indigo-600"
                />
                <span className="text-xs text-slate-500 font-mono w-8 text-right">
                  {skill.level}%
                </span>
              </div>
              <button
                onClick={() => removeSkill(catIndex, skillIndex)}
                className="p-1.5 rounded-md text-red-400 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          <button
            onClick={() => addSkill(catIndex)}
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            添加技能
          </button>
        </div>
      ))}

      <button
        onClick={addCategory}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-slate-200 text-sm font-medium text-slate-500 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all"
      >
        <Plus className="w-4 h-4" />
        添加技能分类
      </button>
    </div>
  );
}
