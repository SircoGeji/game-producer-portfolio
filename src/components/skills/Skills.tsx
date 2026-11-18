import { stagger } from "@/src/helpers/stagger";
import Motion from "../motion/Motion";
import SkillCard from "./SkillCard";
import { skills } from "@/src/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <Motion variant="slideUp" key={group.title} delay={stagger(i)}>
            <SkillCard
              key={group.title}
              title={group.title}
              items={group.items}
            />
          </Motion>
        ))}
      </div>
    </section>
  );
}
