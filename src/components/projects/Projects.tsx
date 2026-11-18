import { stagger } from "@/src/helpers/stagger";
import Motion from "../motion/Motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/src/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24">
      <h2 className="mx-auto max-w-5xl px-6 text-2xl font-semibold text-white">
        Projects
      </h2>

      <div className="mt-12 w-full space-y-4">
        {projects.map((project, i) => (
          <Motion variant="reveal" key={project.title} delay={stagger(i)}>
            <ProjectCard
              key={project.title}
              {...project}
              textPosition={i % 2 === 0 ? "left" : "right"}
            />
          </Motion>
        ))}
      </div>
    </section>
  );
}
