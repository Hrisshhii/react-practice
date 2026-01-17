export function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      placeholder="Search meals..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
