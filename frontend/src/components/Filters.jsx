function Filters({
  category,
  setCategory,
  country,
  setCountry,
  search,
  setSearch,
  onFetch,
}) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search news (AI, Tesla...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
        <option value="business">Business</option>
        <option value="science">Science</option>
      </select>

      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="gb">UK</option>
      </select>

      <button onClick={onFetch}>🔍 Get News</button>
    </div>
  );
}

export default Filters;