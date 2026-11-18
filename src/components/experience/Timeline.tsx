import { stagger } from "@/src/helpers/stagger";
import Motion from "../motion/Motion";
import TimelineItem from "./TimelineItem";
import { experience } from "@/src/data/experience";

export default function Timeline() {
  return (
    <section id="experience" className="mx-auto max-w-12xl px-6">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>

      <div className="mt-10 relative border-l border-violet-200/15 pl-10 space-y-6">
        {experience.map((item, i) => (
          <Motion variant="slideUp" key={i} delay={stagger(i)}>
            <TimelineItem key={i} {...item} />
          </Motion>
        ))}
      </div>
    </section>
  );
}
