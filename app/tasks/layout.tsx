export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="page-shell">
      <p className="eyebrow">Your workspace</p>
      <h1>Your tasks</h1>
      {children}
    </section>
  );
}
