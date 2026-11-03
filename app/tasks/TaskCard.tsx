import Link from "next/link";
import type { Task } from "@/lib/schemas";

export default function TaskCard({ task, onToggle }: { task: Task; onToggle: (id: number) => void }) {
  return (
    <li className="task-card">
      <div className="task-check">
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} aria-label={`Mark ${task.title} ${task.done ? "not done" : "done"}`} />
        <Link className={task.done ? "task-title completed" : "task-title"} href={`/tasks/${task.id}`}>{task.title}</Link>
      </div>
      {task.description && <p className="task-description">{task.description}</p>}
      <span className={task.done ? "status-pill complete" : "status-pill"}>{task.done ? "Done" : "Open"}</span>
    </li>
  );
}
