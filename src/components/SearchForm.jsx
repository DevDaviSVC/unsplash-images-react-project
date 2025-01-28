import { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
