import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> 

export default function Input(props: InputProps) {
  return (
    <input
      className="
        w-full
        rounded-lg
        border
        px-3
        py-2
        outline-none
        focus:border-black
      "
      {...props}
    />
  );
}