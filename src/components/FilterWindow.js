import React from "react";
export default function FilterWindow({
  genre,
  open,
  year,
  setYear,
  rating,
  setRating,
  filtgenres,
  setFiltGenres,
  FilterFilms,
}) {
  const handleGenreChange = (genreValue, isChecked) => {
    if (isChecked) {
      setFiltGenres([...filtgenres, genreValue]);
    } else {
      setFiltGenres(filtgenres.filter((g) => g !== genreValue));
    }
  };
  return (
    <div className={`filt ${open ? "open" : ""}`}>
      <button
        className="reset"
        onClick={() => {
          setYear(1950);
          setRating(0);
          setFiltGenres([]);
        }}
      >
        Сброс
      </button>
      <div className="genres">
        <h3>Choose your genres</h3>
        {genre.map((val, key) => {
          return (
            <p key={val}>
              <input
                type="checkbox"
                checked={filtgenres.includes(val)}
                onChange={(e) => handleGenreChange(val, e.target.checked)}
              />
              {val}
            </p>
          );
        })}
      </div>
      <div className="radios">
        <div className="yearOfCreation">
          <h3>Choose year of creation({year} and earler)</h3>
          <input
            type="range"
            min={1950}
            max={2026}
            step={1}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          ></input>
        </div>
        <div className="rating">
          <h3>Choose rating({rating} and better)</h3>
          <input
            type="range"
            min={0}
            max={9}
            step={1}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
