import About from "@/src/components/about/About";
import Contact from "@/src/components/contact/Contact";
import Timeline from "@/src/components/experience/Timeline";
import Hero from "@/src/components/hero/Hero";
import Projects from "@/src/components/projects/Projects";
import Skills from "@/src/components/skills/Skills";

export default function PortfolioPage() {
  return (
    <main
      id="portfolio-scroll"
      className="min-h-screen overflow-y-auto scroll-smooth lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory lg:scroll-pt-24"
    >
      <section id="top" className="py-24 lg:min-h-screen lg:snap-start">
        <Hero />
      </section>

      <section id="about" className="py-24 lg:min-h-screen lg:snap-start">
        <About />
      </section>

      <section id="experience" className="py-24 lg:min-h-screen lg:snap-start">
        <Timeline />
      </section>

      <section id="skills" className="py-24 lg:min-h-screen lg:snap-start">
        <Skills />
      </section>

      <section id="projects" className="py-24 lg:min-h-screen lg:snap-start">
        <Projects />
      </section>

      <section id="contact" className="py-24 lg:min-h-screen lg:snap-start">
        <Contact />
      </section>
    </main>
  );
}
