import Motion from "../motion/Motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* left */}
        <Motion variant="slideUp">
          <div>
            <h2 className="text-2xl font-semibold text-white">About me</h2>

            <p className="mt-6 text-sm leading-6 text-violet-100/75">
              Frontend / Full-Stack Engineer with 5+ years of experience
              building and scaling web products using React, TypeScript,
              Angular, Node.js, and AWS.
            </p>

            <p className="mt-4 text-sm leading-6 text-violet-100/75">
              Recently developed 8 AI agents on Claude Sonnet 4.6 to optimize
              code review, E2E test, unit tests and documentation writing. Saved
              ~320 working hours yearly for my team members via AI-enhanced
              workflow optimization. Mentored 2 Junior Developers to Middle in
              8-12 months.
            </p>

            <p className="mt-4 text-sm leading-6 text-violet-100/75">
              Thanks to my experience in legacy refactoring and end-to-end
              feature ownership I can easily translate business requirements in
              a technical task. I'm comfortable communicating directly with
              clients, stakeholders and other external teams.
            </p>
          </div>
        </Motion>

        {/* right */}
        <Motion variant="fadeIn" delay={0.2}>
          <div className="space-y-4">
            <div className="rounded-xl border border-violet-200/10 bg-violet-950/35 p-4 backdrop-blur-sm">
              <div className="text-xs text-violet-200/60">Location</div>
              <div className="text-sm text-violet-50">Serbia</div>
            </div>

            <div className="rounded-xl border border-violet-200/10 bg-violet-950/35 p-4 backdrop-blur-sm">
              <div className="text-xs text-violet-200/60">Focus</div>
              <div className="text-sm text-violet-50">
                Producer | Game Designer
              </div>
            </div>

            <div className="rounded-xl border border-violet-200/10 bg-violet-950/35 p-4 backdrop-blur-sm">
              <div className="text-xs text-violet-200/60">Stack</div>
              <div className="text-sm">
                AngularJS · ReactJS/Next.js · Node.js · MySQL
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
