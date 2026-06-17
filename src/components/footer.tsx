import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="social-links">
          {siteConfig.socials.map((social) => (
            <Link href={social.href} key={social.label} target="_blank">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
