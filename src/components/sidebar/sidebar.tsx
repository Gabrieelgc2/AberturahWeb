import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

const socials = [
  {
    icon: IoLogoWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/SEUNUMERO",
  },
  {
    icon: IoLogoFacebook,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: IoLogoInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
];

export function Sidebars() {
  return (
    <>
      {/* Desktop */}
      <div
        className="
          hidden
          lg:flex
          fixed
          left-5
          top-1/2
          -translate-y-1/2
          z-50
          flex-col
          gap-5
          rounded-xl
          bg-white
          p-2
          shadow-lg
        "
      >
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center"
          >
            <div
              className="
                rounded-lg
                transition-all
                duration-300
                hover:bg-[#5DADEC]
                hover:text-white
              "
            >
              <Icon className="text-3xl" />
            </div>

            <span
              className="
                absolute
                left-16
                whitespace-nowrap
                rounded-lg
                bg-[#404142]
                px-3
                py-2
                text-sm
                text-white
                opacity-0
                -translate-x-2
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile + Tablet */}
      <div
        className="
          lg:hidden
          fixed
          bottom-4
          left-1/2
          -translate-x-1/2
          z-50
          flex
          items-center
          gap-4
          rounded-full
          bg-white/95
          backdrop-blur-md
          px-5
          py-3
          shadow-xl
        "
      >
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="
              rounded-full
              p-2
              transition-all
              duration-300
              hover:bg-[#5DADEC]
              hover:text-white
              active:scale-95
            "
          >
            <Icon className="text-2xl sm:text-[26px]" />
          </a>
        ))}
      </div>
    </>
  );
}