import type { Task } from "@/lib/schemas";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle }: { tasks: Task[]; onToggle: (id: number) => void }) {
  if (tasks.length === 0) return <p className="notice">No tasks match this filter.</p>;
  return <ul className="task-list">{tasks.map((task) => <TaskCard key={task.id} task={task} onToggle={onToggle} />)}</ul>;
}
