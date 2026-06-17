import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let us start a conversation."
        description="Replace the placeholder email and profile URLs before sharing your portfolio publicly."
      />
      <section className="contact-panel">
        <div>
          <p className="eyebrow">Email</p>
          <Link className="contact-link" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </Link>
        </div>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <div className="social-links contact-socials">
            {siteConfig.socials.map((social) => (
              <Link href={social.href} key={social.label} target="_blank">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
