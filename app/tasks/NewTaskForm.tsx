import { useState } from "react";

export default function NewTaskForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [title, setTitle] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = title.trim();
    if (!value) return;
    onAdd(value);
    setTitle("");
  }

  return (
    <form className="new-task-form" onSubmit={submit}>
      <label htmlFor="new-task">Add a task</label>
      <div className="form-row">
        <input id="new-task" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What needs to get done?" required />
        <button className="button-link" type="submit">Add task</button>
      </div>
    </form>
  );
}
