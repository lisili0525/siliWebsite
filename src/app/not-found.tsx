import Link from "next/link";

export default function NotFound() {
  return (
    <section className="empty-state">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The page you are looking for does not exist or may have moved.</p>
      <Link className="button button-primary" href="/">
        Return home
      </Link>
    </section>
  );
}
