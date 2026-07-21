import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className="
        rounded-lg
        bg-black
        px-4
        py-2
        text-white
        transition
        hover:bg-gray-800
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
      {...props}
    >
      {children}
    </button>
  );
}