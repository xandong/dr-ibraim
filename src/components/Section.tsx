import { ReactNode } from "react";
import { ArrowDown } from "./ArrowDown";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  theme: "light" | "dark";
  href?: string;
}

export function Section({ id, title, children, theme, href }: SectionProps) {
  const useTheme =
    theme === "light"
      ? `bg-white text-primary-800`
      : `bg-gradient-to-br from-primary-400 to-primary-600 text-white`;

  return (
    <section
      id={id}
      className={`min-h-[100vh] relative lg:px-28 md:px-10 px-2 pt-6 pb-20 flex flex-col text-primary items-center ${useTheme}`}
    >
      <h2 className="xl:px-40 lg:px-20 px-10 sm:pb-10 pb-6 pt-4 sm:text-4xl text-3xl text-center font-extrabold">
        {title}
      </h2>
      {children}
      {href ? (
        <a
          href={href}
          className="absolute bottom-10 right-6 flex items-center justify-center w-8 h-8 p-2 text-5xl rounded bg-zinc-200 hover:bg-zinc-100 hover:scale-90 transition-colors animate-bounce hover:animate-none"
        >
          <ArrowDown />
        </a>
      ) : (
        ""
      )}
    </section>
  );
}
