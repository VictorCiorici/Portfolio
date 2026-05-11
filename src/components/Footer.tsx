export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="text-headline-sm text-on-surface opacity-80">
        SYSTEM_ARCHITECT // [VER_12.0.4] // {currentYear} ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-md">
        {["GITHUB", "LINKEDIN", "ARTSTATION", "DOCUMENTATION"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-on-tertiary-container text-label-caps hover:text-primary-fixed-dim transition-colors duration-200 opacity-80 hover:opacity-100"
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}
