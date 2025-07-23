'use client';

import { useEffect } from 'react';
import { useGlobalStore } from '@/lib/stores/useGlobalStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useGlobalStore();

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return <>{children}</>;
}