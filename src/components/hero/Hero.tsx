import Motion from "../motion/Motion";
import { profile } from "@/src/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* background glow */}
      <Motion variant="reveal">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-200/30 blur-3xl" />
        </div>
      </Motion>

      {/* content */}
      <Motion variant="fadeIn" delay={0.2}>
        <div className="text-center">
          <p className="text-sm text-violet-200/70">{profile.title}</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-violet-100/75 mx-auto">
            I build scalable backend systems and modern web applications with
            focus on performance, architecture and clean UX.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-violet-500 px-4 py-2 text-sm text-white shadow-lg shadow-violet-950/40 hover:bg-violet-400 transition"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="rounded-md border border-violet-200/20 px-4 py-2 text-sm text-violet-100 hover:border-violet-300/50 hover:bg-violet-400/10 transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </Motion>
    </section>
  );
}
