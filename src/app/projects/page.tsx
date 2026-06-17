import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Selected work and experiments."
        description="Replace these placeholders with projects that show how you think, build, and create impact."
      />
      <div className="card-grid">
        {projects.map((project) => (
          <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
            <div>
              <p className="eyebrow">Case study</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            <span aria-hidden="true">Read case study &rarr;</span>
          </Link>
        ))}
      </div>
    </>
  );
}
