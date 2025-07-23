import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-primary text-white hover:bg-primary-700 active:bg-primary-800': variant === 'primary',
            'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300':
              variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-700':
              variant === 'outline',
            'hover:bg-gray-100 text-gray-700 hover:text-gray-900 active:bg-gray-200':
              variant === 'ghost',
          },
          {
            'h-10 px-3 text-sm min-w-[44px]': size === 'sm', // Ensure minimum touch target
            'h-11 px-4 py-2 min-w-[44px]': size === 'md', // Increased from h-10 to h-11
            'h-12 px-8 text-lg min-w-[44px]': size === 'lg', // Increased from h-11 to h-12
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
