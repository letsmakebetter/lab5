"use client";

export default function TasksError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="notice notice-error" role="alert">
      <p>We could not load your tasks.</p>
      <button className="button-link" onClick={() => reset()}>Try again</button>
    </div>
  );
}
