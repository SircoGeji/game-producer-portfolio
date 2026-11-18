interface ContactIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function ContactIcon({ href, icon, label }: ContactIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group
        transition-all
        duration-300
      "
    >
      <div
        className="
          text-violet-100
          opacity-60
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:text-violet-300
          group-hover:scale-110
        "
      >
        <div className="text-[96px]">{icon}</div>
      </div>
    </a>
  );
}
