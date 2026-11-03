import type { Task } from "./schemas";

const mockTasks: Task[] = [
  { id: 1, title: "Review the lecture notes", description: "Summarize the key ideas from this week.", done: false },
  { id: 2, title: "Plan the next project milestone", description: "Break the next milestone into clear steps.", done: true },
  { id: 3, title: "Finish the Task Board migration", description: "Move the Lab 4 experience into Next.js.", done: false },
];

export async function simulateFetchTasks(options: { delayMs?: number; shouldFail?: boolean } = {}) {
  const { delayMs = 300, shouldFail = false } = options;
  await new Promise((resolve) => setTimeout(resolve, delayMs));
  if (shouldFail) throw new Error("The mock task service failed.");
  return mockTasks.map((task) => ({ ...task }));
}
