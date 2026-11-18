import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import ContactIcon from "./ContactIcon";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-semibold">Let's Connect</h2>

        <p className="mb-16 text-violet-100/70">
          Open to opportunities, collaborations and interesting projects.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          <ContactIcon
            href="https://www.linkedin.com/in/victoria-bovshovskaya/"
            icon={<FaLinkedin />}
            label="LinkedIn"
          />

          <ContactIcon
            href="https://t.me/vikkimikk"
            icon={<FaTelegram />}
            label="Telegram"
          />

          <ContactIcon
            href="mailto:vikki.mikk@gmail.com"
            icon={<MdEmail />}
            label="Email"
          />
        </div>
      </div>
    </section>
  );
}
