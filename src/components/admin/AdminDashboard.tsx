import { useState } from 'react';
import {
  LogOut,
  Home,
  FolderOpen,
  User,
  Layers,
  Phone,
  RotateCcw,
  Save,
  Check,
  Code2,
} from 'lucide-react';
import { logoutAdmin } from '../../store/siteData';
import { useSiteData } from '../../store/SiteDataContext';
import type { SiteData } from '../../store/siteData';
import HeroEditor from './editors/HeroEditor';
import ProjectsEditor from './editors/ProjectsEditor';
import AboutEditor from './editors/AboutEditor';
import SkillsEditor from './editors/SkillsEditor';
import ContactEditor from './editors/ContactEditor';

const tabs = [
  { id: 'hero', label: '首页横幅', icon: Home },
  { id: 'projects', label: '软件作品', icon: FolderOpen },
  { id: 'about', label: '关于我', icon: User },
  { id: 'skills', label: '技术栈', icon: Layers },
  { id: 'contact', label: '联系方式', icon: Phone },
] as const;

type TabId = (typeof tabs)[number]['id'];

interface Props {
  onLogout: () => void;
  onPreview: () => void;
}

export default function AdminDashboard({ onLogout, onPreview }: Props) {
  const { data, updateData, resetData } = useSiteData();
  const [activeTab, setActiveTab] = useState<TabId>('hero');
  const [draft, setDraft] = useState<SiteData>(structuredClone(data));
  const [saved, setSaved] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    updateData(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    resetData();
    setDraft(structuredClone(data));
    setShowResetConfirm(false);
    // reload with default after reset
    window.location.reload();
  };

  const handleLogout = () => {
    logoutAdmin();
    onLogout();
  };

  const updateDraft = (partial: Partial<SiteData>) => {
    setDraft((prev) => ({ ...prev, ...partial }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 fixed inset-y-0 left-0 z-40">
        {/* Logo */}
        <div className="p-5 border-b border-slate-700/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight">管理后台</div>
              <div className="text-xs text-slate-400">超级管理员</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <tab.icon className="w-4.5 h-4.5" />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-slate-700/50 space-y-1">
          <button
            onClick={onPreview}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <Home className="w-4.5 h-4.5" />
            预览网站
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-4.5 h-4.5" />
            退出登录
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-900">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h1>
            <p className="text-sm text-slate-500">编辑网站内容，保存后即时生效</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              重置
            </button>
            <button
              onClick={handleSave}
              disabled={saved}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-sm hover:shadow-md disabled:opacity-70 transition-all"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  已保存
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  保存更改
                </>
              )}
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === 'hero' && (
            <HeroEditor hero={draft.hero} onChange={(hero) => updateDraft({ hero })} />
          )}
          {activeTab === 'projects' && (
            <ProjectsEditor
              projects={draft.projects}
              onChange={(projects) => updateDraft({ projects })}
            />
          )}
          {activeTab === 'about' && (
            <AboutEditor about={draft.about} onChange={(about) => updateDraft({ about })} />
          )}
          {activeTab === 'skills' && (
            <SkillsEditor skills={draft.skills} onChange={(skills) => updateDraft({ skills })} />
          )}
          {activeTab === 'contact' && (
            <ContactEditor
              contact={draft.contact}
              onChange={(contact) => updateDraft({ contact })}
            />
          )}
        </div>
      </main>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">确认重置？</h3>
            <p className="text-sm text-slate-500 mb-6">
              此操作将清除所有自定义修改，恢复到默认数据。此操作不可撤销。
            </p>
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                确认重置
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
