import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A place for your story."
        description="Use this page to explain who you are, how you work, and what motivates you."
      />
      <section className="prose-block">
        <h2>Your background</h2>
        <p>
          Write a few paragraphs about your path, your perspective, and the skills you
          bring to your work. Keep the details personal and specific.
        </p>
        <h2>Outside of work</h2>
        <p>
          Share the interests, communities, or activities that help visitors understand
          the person behind the portfolio.
        </p>
        <p className="detail-line">Based in {siteConfig.location}</p>
      </section>
    </>
  );
}
