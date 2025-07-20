import { create } from 'zustand';

interface GlobalState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  currentLanguage: 'ko' | 'en';
  setCurrentLanguage: (language: 'ko' | 'en') => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  currentLanguage: 'ko',
  setCurrentLanguage: (language) => set({ currentLanguage: language }),
}));
