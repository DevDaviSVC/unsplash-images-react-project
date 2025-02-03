import { useState } from "react";
import { useSearchImages } from "../react-query/reactQueryHooks";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const { searchImages } = useSearchImages();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      searchImages(query);
    }
  };

  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
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
