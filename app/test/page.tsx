'use client';

import { useTheme } from '@/hooks/useTheme';

export default function TestPage() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">다크모드 테스트</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-4">현재 테마: {theme}</p>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            {theme === 'light' ? '다크모드로 변경' : '라이트모드로 변경'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">카드 1</h2>
            <p className="text-gray-600 dark:text-gray-300">
              이것은 다크모드 테스트용 카드입니다.
            </p>
          </div>
          
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">카드 2</h2>
            <p className="text-gray-600 dark:text-gray-300">
              색상이 제대로 변경되는지 확인해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}