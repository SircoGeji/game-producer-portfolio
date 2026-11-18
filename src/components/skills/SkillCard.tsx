import clsx from "clsx";

export default function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-violet-200/10 bg-violet-950/35 p-6 shadow-lg shadow-violet-950/20 transition hover:border-violet-300/20 hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={clsx(
              "rounded-md border border-violet-200/10 bg-violet-400/10",
              "px-2 py-1 text-xs text-violet-100/80",
              "hover:bg-violet-400/20 transition",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
