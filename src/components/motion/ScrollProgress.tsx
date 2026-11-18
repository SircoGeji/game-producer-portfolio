"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector("main");

    const onScroll = () => {
      if (!container) return;

      const scrollTop = container.scrollTop;
      const height = container.scrollHeight - container.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    container?.addEventListener("scroll", onScroll);

    return () => container?.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-[4px] w-full bg-transparent z-50">
      <div
        className="h-full bg-black transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
