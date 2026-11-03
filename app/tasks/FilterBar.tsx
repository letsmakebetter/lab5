type Filter = "all" | "done" | "open";

export default function FilterBar({ filter, onChange }: { filter: Filter; onChange: (filter: Filter) => void }) {
  return (
    <div className="filter-group" aria-label="Filter tasks">
      {(["all", "open", "done"] as const).map((value) => (
        <button key={value} className={filter === value ? "filter-button active" : "filter-button"} onClick={() => onChange(value)} aria-pressed={filter === value}>
          {value === "all" ? "All" : value === "open" ? "Open" : "Done"}
        </button>
      ))}
    </div>
  );
}
