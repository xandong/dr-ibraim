import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  theme: "light" | "dark";
}

export function Section({ title, children, theme }: SectionProps) {
  const useTheme =
    theme === "light"
      ? `bg-white text-primary-800`
      : `bg-gradient-to-br from-primary-400 to-primary-600 text-white`;

  return (
    <section
      className={`lg:p-32 md:px-10 px-2 sm:py-20 py-10 pb-16 flex flex-col text-primary items-center ${useTheme}`}
    >
      <h2 className="xl:px-40 lg:px-20 px-10 sm:pb-20 pb-6 sm:text-4xl text-3xl text-center font-extrabold">
        {title}
      </h2>
      {children}
    </section>
  );
}
