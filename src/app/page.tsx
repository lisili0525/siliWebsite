import Link from "next/link";
import { projects, siteConfig } from "@/data/site";

export default function Home() {
  const featuredProject = projects[0];

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Hello, I am {siteConfig.name}</p>
        <h1>I create thoughtful digital experiences.</h1>
        <p className="lede">{siteConfig.description}</p>
        <div className="button-row">
          <Link className="button button-primary" href="/projects">
            View my work
          </Link>
          <Link className="button" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A project worth highlighting</h2>
          </div>
          <Link href="/projects">See all projects</Link>
        </div>
        <Link className="project-card" href={`/projects/${featuredProject.slug}`}>
          <div>
            <p className="eyebrow">Case study</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.summary}</p>
          </div>
          <span aria-hidden="true">View project &rarr;</span>
        </Link>
      </section>
    </>
  );
}
