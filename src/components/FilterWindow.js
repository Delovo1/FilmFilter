import React from "react";

export default function FilterWindow({
  del,
  genre,
  open,
  filters,
  updateFilter,
  FilterFilms,
}) {
  const handleGenreChange = (genreValue, isChecked) => {
    if (isChecked) {
      updateFilter("genres", [...filters.genres, genreValue]);
    } else {
      updateFilter(
        "genres",
        filters.genres.filter((g) => g !== genreValue)
      );
    }
  };

  const resetFilters = () => {
    updateFilter("year", 1950);
    updateFilter("rating", 0);
    updateFilter("genres", []);
    // Если нужно также сбросить текст поиска, добавьте:
    // updateFilter('text', '');
  };

  return (
    <div className={`filt ${open ? "open" : ""} ${del ? "deleted" : ""}`}>
      <button className="reset" onClick={resetFilters}>
        Reset
      </button>

      <div className="genres">
        <h3>Choose your genres</h3>
        {genre.map((val) => (
          <p key={val}>
            <input
              type="checkbox"
              checked={filters.genres.includes(val)}
              onChange={(e) => handleGenreChange(val, e.target.checked)}
            />
            {val}
          </p>
        ))}
      </div>

      <div className="radios">
        <div className="yearOfCreation">
          <h3>Choose year of creation ({filters.year} and earlier)</h3>
          <input
            type="range"
            min={1950}
            max={2026}
            step={1}
            value={filters.year}
            onChange={(e) => updateFilter("year", parseInt(e.target.value))}
          />
        </div>

        <div className="rating">
          <h3>Choose rating ({filters.rating} and better)</h3>
          <input
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={filters.rating}
            onChange={(e) => updateFilter("rating", e.target.value)}
          />
        </div>
      </div>

      <div className="results-count">Found: {FilterFilms.length} films</div>
    </div>
  );
}
