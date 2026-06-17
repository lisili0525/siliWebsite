import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { experiences } from "@/data/site";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Where I have worked."
        description="A concise timeline of the roles, teams, and responsibilities that shaped your experience."
      />
      <ol className="timeline">
        {experiences.map((experience) => (
          <li key={`${experience.company}-${experience.role}`}>
            <p className="eyebrow">{experience.period}</p>
            <h2>{experience.role}</h2>
            <p className="company">{experience.company}</p>
            <p>{experience.summary}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
