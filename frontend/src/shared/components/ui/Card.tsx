import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <section
      className="
        rounded-xl
        border
        bg-white
        p-6
        shadow-sm
      "
    >
      {children}
    </section>
  );
}