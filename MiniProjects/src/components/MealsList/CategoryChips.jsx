export function CategoryChips({ categories, active, onChange }) {
  return (
    <div className="chips">
      {categories.map(cat => (
        <button
          key={cat}
          className={`chip ${active === cat ? "active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
