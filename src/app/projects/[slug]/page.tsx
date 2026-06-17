import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return project
    ? { title: project.title, description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article>
      <header className="page-intro case-study-intro">
        <Link className="back-link" href="/projects">
          &larr; All projects
        </Link>
        <p className="eyebrow">Case study</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </header>

      <div className="case-study-content">
        <section>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </section>
        <section>
          <h2>The approach</h2>
          <p>{project.approach}</p>
        </section>
        <section>
          <h2>The outcome</h2>
          <p>{project.outcome}</p>
        </section>
        <div className="button-row">
          {project.liveUrl && (
            <Link className="button button-primary" href={project.liveUrl} target="_blank">
              View live project
            </Link>
          )}
          {project.repositoryUrl && (
            <Link className="button" href={project.repositoryUrl} target="_blank">
              View source
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
