import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { z } from "zod";
import { getTask } from "@/lib/tasks";

type TaskRouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: TaskRouteProps): Promise<Metadata> {
  const { id } = await params;
  const parsed = z.coerce.number().int().positive().safeParse(id);
  if (!parsed.success) return { title: "Task not found | Task Board" };
  const task = await getTask(parsed.data);
  return { title: task ? `${task.title} | Task Board` : "Task not found | Task Board" };
}

export default async function TaskPage({ params }: TaskRouteProps) {
  const { id } = await params;
  console.log("id is a", typeof id, "and its value is", id);
  const parsed = z.coerce.number().int().positive().safeParse(id);
  if (!parsed.success) notFound();
  const task = await getTask(parsed.data);
  if (!task) notFound();

  return (
    <main className="task-detail">
      <h2>{task.title}</h2>
      <p className="status-pill">{task.done ? "Done" : "Not done yet"}</p>
      <Link className="text-link" href="/tasks">Back to all tasks</Link>
    </main>
  );
}
