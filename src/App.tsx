import { useState, useCallback } from 'react';
import { SiteDataProvider } from './store/SiteDataContext';
import { isAdminLoggedIn } from './store/siteData';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import { Settings } from 'lucide-react';

type View = 'website' | 'admin-login' | 'admin-dashboard';

function AppContent() {
  const [view, setView] = useState<View>(() =>
    isAdminLoggedIn() ? 'website' : 'website'
  );

  const handleAdminClick = useCallback(() => {
    if (isAdminLoggedIn()) {
      setView('admin-dashboard');
    } else {
      setView('admin-login');
    }
  }, []);

  if (view === 'admin-login') {
    return (
      <AdminLogin
        onLogin={() => setView('admin-dashboard')}
      />
    );
  }

  if (view === 'admin-dashboard') {
    return (
      <AdminDashboard
        onLogout={() => setView('website')}
        onPreview={() => setView('website')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />

      {/* Floating Admin Button */}
      <button
        onClick={handleAdminClick}
        className="fixed bottom-6 right-6 z-50 group"
        title="管理后台"
      >
        <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl shadow-slate-900/30 hover:bg-indigo-600 hover:shadow-indigo-500/30 hover:scale-110 active:scale-95 transition-all duration-300">
          <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
          管理后台
        </span>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <SiteDataProvider>
      <AppContent />
    </SiteDataProvider>
  );
}
