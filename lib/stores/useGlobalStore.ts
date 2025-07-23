import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlobalState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  currentLanguage: 'ko' | 'en';
  setCurrentLanguage: (language: 'ko' | 'en') => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
      currentLanguage: 'en',
      setCurrentLanguage: (currentLanguage) => set({ currentLanguage }),
    }),
    {
      name: 'filmrun-storage',
      partialize: (state) => ({ currentLanguage: state.currentLanguage }),
      skipHydration: true,
    }
  )
);
