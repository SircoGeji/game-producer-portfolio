import clsx from "clsx";
import Image from "next/image";

export default function ProjectCard({
  title,
  publisher,
  developer,
  description,
  tags,
  banner,
  steam,
  textPosition = "right",
}: {
  title: string;
  publisher?: string;
  developer?: string;
  description: string;
  tags: string[];
  banner?: string;
  steam: string;
  textPosition?: "left" | "right";
}) {
  return (
    <article
      className={clsx(
        "group relative isolate w-full overflow-hidden",
        "grid min-h-[280px] grid-cols-1 items-stretch",
        "bg-violet-950/30",
        "md:min-h-[420px] md:block",
        "transition duration-500",
      )}
    >
      <div className="relative z-0 min-h-[220px] overflow-hidden md:absolute md:inset-0 md:min-h-full">
        {banner ? (
          <Image
            src={banner}
            alt={`${title} banner`}
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center border-b border-violet-200/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.16),rgba(24,12,48,0.8))] md:border-b-0 md:border-r">
            <div className="text-center">
              <span className="block text-xs uppercase tracking-[0.28em] text-violet-200/40">
                Steam banner
              </span>
              <span className="mt-2 block text-lg font-semibold text-violet-100/70">
                {title}
              </span>
            </div>
          </div>
        )}
      </div>

      <div
        className={clsx(
          "relative z-10 flex w-full min-w-0 flex-col justify-between bg-black/80 p-6 md:absolute md:inset-y-0 md:w-[42%] md:px-10 md:py-10",
          textPosition === "left" ? "md:left-0" : "md:right-0",
        )}
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {title}
              </h3>
              <p className="mt-1 text-xs text-violet-100/45">
                {publisher || " "} {developer ? "|" : " "} {developer || " "}
              </p>
            </div>
            {steam && (
              <a
                href={steam}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 border-b border-violet-300/40 pb-1 text-xs font-medium uppercase tracking-wider text-violet-200 transition hover:border-violet-200 hover:text-white"
              >
                View on Steam
              </a>
            )}
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-violet-100/75">
            {description}
          </p>
        </div>

        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Steam tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-l-2 border-violet-400/60 bg-violet-400/10 px-3 py-1.5 text-xs text-violet-100/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
