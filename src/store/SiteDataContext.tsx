import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import {
  loadSiteData,
  saveSiteData,
  resetSiteData as resetStorage,
  defaultSiteData,
  type SiteData,
} from './siteData';

interface SiteDataContextType {
  data: SiteData;
  updateData: (data: SiteData) => void;
  resetData: () => void;
}

const SiteDataContext = createContext<SiteDataContextType | null>(null);

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(loadSiteData);

  const updateData = useCallback((newData: SiteData) => {
    setData(newData);
    saveSiteData(newData);
  }, []);

  const resetData = useCallback(() => {
    resetStorage();
    setData(defaultSiteData);
  }, []);

  return (
    <SiteDataContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error('useSiteData must be used within SiteDataProvider');
  return ctx;
}
