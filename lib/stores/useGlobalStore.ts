import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlobalState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  currentLanguage: 'ko' | 'en';
  setCurrentLanguage: (language: 'ko' | 'en') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
      currentLanguage: 'en',
      setCurrentLanguage: (currentLanguage) => set({ currentLanguage }),
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'filmrun-storage',
      partialize: (state) => ({ theme: state.theme, currentLanguage: state.currentLanguage }),
      skipHydration: true,
    }
  )
);
