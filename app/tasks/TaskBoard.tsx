"use client";

import { useMemo, useState } from "react";
import type { Task } from "@/lib/schemas";
import FilterBar from "./FilterBar";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

type Filter = "all" | "done" | "open";

export default function TaskBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");
  const filteredTasks = useMemo(
    () => tasks.filter((task) => filter === "all" || (filter === "done" ? task.done : !task.done)),
    [filter, tasks],
  );

  function addTask(title: string) {
    setTasks((current) => [
      { id: Math.max(0, ...current.map((task) => task.id)) + 1, title, description: "", done: false },
      ...current,
    ]);
    setFilter("all");
  }

  function toggleTask(id: number) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task));
  }

  return (
    <div className="board">
      <div className="board-toolbar">
        <FilterBar filter={filter} onChange={setFilter} />
      </div>
      {tasks.length === 0 ? <p className="notice">No tasks yet. Add your first one below.</p> : <TaskList tasks={filteredTasks} onToggle={toggleTask} />}
      <NewTaskForm onAdd={addTask} />
    </div>
  );
}
