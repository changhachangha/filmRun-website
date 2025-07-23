'use client';

import { useEffect, useState } from 'react';
import { useGlobalStore } from '@/lib/stores/useGlobalStore';

export function useTheme() {
  const { theme, setTheme, toggleTheme } = useGlobalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 수동으로 persist 상태 복원
    useGlobalStore.persist.rehydrate();
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, mounted]);

  return { theme, setTheme, toggleTheme, mounted };
}