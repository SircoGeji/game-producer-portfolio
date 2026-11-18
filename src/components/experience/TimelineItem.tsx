export default function TimelineItem({
  role,
  company,
  period,
  summary,
  achievements,
}: {
  role: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{role}</h3>

        <p className="text-sm text-zinc-500">
          {company} · {period}
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        <div
          className="
          min-w-[240px]
          flex-1
          rounded-2xl
          border
          border-violet-200/10
          bg-violet-950/35
          p-5
          backdrop-blur-sm
        "
        >
          <h4
            className="
            mb-4
            text-xs
            font-semibold
            tracking-wider
            text-violet-200/70
          "
          >
            {summary}
          </h4>

          <ul className="space-y-2">
            {achievements.map((achievement) => (
              <li
                key={achievement}
                className="
                text-sm
                leading-6
                text-violet-100/75
              "
              >
                • {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
