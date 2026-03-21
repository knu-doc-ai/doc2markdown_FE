import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  if (variant === 'link') {
    return (
      <button
        className={`text-gray-500 hover:text-rose-600 font-medium transition-colors underline underline-offset-4 bg-transparent border-none p-0 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`px-12 py-3.5 rounded-full text-white font-bold text-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-95 block bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 disabled:opacity-80 disabled:hover:bg-rose-300 disabled:scale-100 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
