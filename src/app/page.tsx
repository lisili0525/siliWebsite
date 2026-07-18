import Link from "next/link";
import { projects, siteConfig } from "@/data/site";

const focusAreas = [
  {
    label: "Full-stack systems",
    detail: "React, Django, REST APIs, PostgreSQL, Redis",
  },
  {
    label: "Biomedical ML",
    detail: "PyTorch experiments, attention models, evaluation pipelines",
  },
  {
    label: "Numerical computing",
    detail: "GPU-parallel simulation, ODE solvers, scientific data flow",
  },
];

const quickSignals = ["UW-Madison", "CS + Math", "Madison, WI"];

export default function Home() {
  const featuredProject = projects[0];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I am {siteConfig.name}</p>
          <h1>Software shaped by math, research, and practical systems.</h1>
          <p className="lede">{siteConfig.description}</p>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">
              View my work
            </Link>
            <Link className="button" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
        <aside className="identity-panel" aria-label="Profile summary">
          <div className="monogram" aria-hidden="true">
            SL
          </div>
          <div>
            <p className="identity-name">{siteConfig.name}</p>
            <p className="identity-role">{siteConfig.title}</p>
          </div>
          <div className="signal-list">
            {quickSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
          <div className="console-note" aria-label="Current focus">
            <span>current_focus</span>
            <strong>reliable ML + high-performance scientific software</strong>
          </div>
        </aside>
      </section>

      <section className="section-block focus-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical shape</p>
            <h2>Three threads I keep connecting.</h2>
          </div>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <article className="focus-card" key={area.label}>
              <span className="focus-index">0{index + 1}</span>
              <h3>{area.label}</h3>
              <p>{area.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Recent technical work</h2>
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
