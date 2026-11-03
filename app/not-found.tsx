import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <p className="eyebrow">404 - Page not found</p>
      <h1>We could not find that page.</h1>
      <p className="page-lead">The link may be out of date, or the page may have moved.</p>
      <Link className="button-link" href="/tasks">Back to all tasks</Link>
    </main>
  );
}
