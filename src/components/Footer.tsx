import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { profile } = getFreshPortfolioData(portfolioData, processData);
  const { name, role } = profile;
  
  // Filter for specific social links and ensure email is mailto:
  const footerSocials = profile.socials.filter((s: any) => 
    ["GITHUB", "LINKEDIN", "EMAIL"].includes(s.name.toUpperCase())
  );

  return (
    <footer className="w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="text-headline-sm text-on-surface opacity-80 uppercase">
        {name} // {role} // © {currentYear}
      </div>
      <div className="flex gap-md">
        {footerSocials.map((social: any) => {
          const isEmail = social.name.toUpperCase() === "EMAIL";
          const linkProps = isEmail 
            ? { href: social.href } 
            : { href: social.href, target: "_blank", rel: "noopener noreferrer" };
            
          return (
            <a
              key={social.name}
              {...linkProps}
              className="text-on-tertiary-container text-label-caps hover:text-primary-fixed-dim transition-colors duration-200 opacity-80 hover:opacity-100 no-underline"
            >
              {isEmail ? "EMAIL" : social.name}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
