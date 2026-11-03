import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">A calmer way to get things done</p>
      <h1>Task Board</h1>
      <p className="page-lead">Plan your work, one task at a time.</p>
      <Link className="button-link" href="/tasks">View all tasks</Link>
    </main>
  );
}
