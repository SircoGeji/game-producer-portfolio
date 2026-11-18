"use client";

import clsx from "clsx";
import { sections } from "@/src/data/sections";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-2 lg:top-4">
      <nav
        className="
          flex gap-1
          rounded-full
          border border-violet-200/10
          bg-violet-950/70
          px-2 py-2
          shadow-sm
          backdrop-blur-xl

          lg:gap-2
          lg:px-4
        "
      >
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={clsx(
              "cursor-pointer rounded-full transition-all duration-200",
              "px-2 py-1 text-[10px]",
              "sm:px-2.5 sm:text-xs",
              "md:px-3 md:text-sm",
              "text-violet-100/70 hover:bg-violet-400/15 hover:text-white",
              "hover:scale-[1.03] active:scale-[0.97]",
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
