import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { coursework, education, siteConfig, skillGroups } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Computer science, mathematics, and applied problem solving."
        description="I am a University of Wisconsin-Madison student interested in full-stack engineering, machine learning, parallel computing, and numerical simulation."
      />
      <section className="prose-block">
        <h2>Background</h2>
        <p>
          My work spans interactive web applications, biomedical machine learning, and
          large-scale scientific computing. I enjoy connecting mathematical methods with
          reliable software systems and evaluating them carefully.
        </p>
        <p className="detail-line">Based in {siteConfig.location}</p>
      </section>

      <section className="detail-section">
        <p className="eyebrow">Education</p>
        <div className="detail-grid">
          {education.map((item) => (
            <article className="detail-card" key={item.school}>
              <h2>{item.school}</h2>
              <p>{item.degree}</p>
              <p className="muted-copy">{item.period} · {item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <p className="eyebrow">Technical skills</p>
        <div className="detail-grid">
          {skillGroups.map((group) => (
            <article className="detail-card" key={group.category}>
              <h2>{group.category}</h2>
              <p className="muted-copy">{group.skills.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <p className="eyebrow">Selected coursework</p>
        <p className="coursework-list">{coursework.join(" · ")}</p>
      </section>
    </>
  );
}
