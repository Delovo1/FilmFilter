import "./style.css";
import { addedFilms, genre } from "./Genres";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import FilterWindow from "./components/FilterWindow";

function App() {
  const [del, setDel] = useState(false);

  const [filters, setFilters] = useState({
    year: 1950,
    text: "",
    rating: 0,
    genres: [],
  });
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const [open, setOpen] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length === 0) {
      setFilms((prev) => [...prev, ...addedFilms]);
    }
    const filtLocal = JSON.parse(localStorage.getItem("filters"));
    if (filtLocal) {
      setFilters(filtLocal);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  const FilterFilms = films
    .filter((movie) => {
      if (movie.year < filters.year) return false;
      if (movie.rating < filters.rating) return false;

      if (filters.genres.length > 0) {
        const hasAnyGenre = filters.genres.some((selectedGenre) =>
          movie.genre
            .map((v) => v.toLowerCase())
            .includes(selectedGenre.toLowerCase())
        );
        if (!hasAnyGenre) return false;
      }

      if (filters.text.length !== 0) {
        if (
          !movie.title.toLowerCase().includes(filters.text.trim().toLowerCase())
        )
          return false;
      }

      return true;
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      <FilterWindow
        del={del}
        updateFilter={updateFilter}
        genre={genre}
        open={open}
        filters={filters}
        FilterFilms={FilterFilms}
      />
      <Nav
        del={del}
        setDel={setDel}
        updateFilter={updateFilter}
        open={open}
        setOpen={setOpen}
        filters={filters}
        setFilters={setFilters}
      />
      <Main films={FilterFilms} />
    </>
  );
}

export default App;
