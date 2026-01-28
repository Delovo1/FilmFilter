import "./style.css";
import { addedFilms } from "./Genres";
import React, { useState, useEffect, use } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import FilterWindow from "./components/FilterWindow";
function App() {
  const genre = [
    "Action",
    "Adventure",
    "Biography",
    "Music",
    "Western",
    "Comedy",
    "Drama",
    "Thriller",
    "Horror",
    "Sci-Fi",
    "Fantasy",
    "Romance",
    "Mystery",
    "Crime",
    "Animation",
    "Family",
    "War",
  ];
  const [year, setYear] = useState(1950);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [films, setFilms] = useState([]);
  const [filtgenres, setFiltGenres] = useState([]);
  useEffect(() => {
    if (films.length === 0) {
      setFilms((prev) => [...prev, ...addedFilms]);
    }
  }, []);
  const FilterFilms = films
    .filter((movie) => {
      if (movie.year < year) return false;
      if (movie.rating < rating) return false;
      if (filtgenres.length > 0) {
        const hasAnyGenre = filtgenres.some((selectedGenre) =>
          movie.genre
            .map((v) => v.toLowerCase())
            .includes(selectedGenre.toLowerCase())
        );
        if (!hasAnyGenre) return false;
      }
      if (text.length !== 0) {
        if (!movie.title.toLowerCase().includes(text.trim().toLowerCase()))
          return false;
      }

      return true;
    })
    .sort((a, b) => b.rating - a.rating);
  return (
    <>
      <FilterWindow
        genre={genre}
        open={open}
        year={year}
        setYear={setYear}
        rating={rating}
        setRating={setRating}
        filtgenres={filtgenres}
        setFiltGenres={setFiltGenres}
        FilterFilms={FilterFilms}
      />
      <Nav
        open={open}
        setOpen={setOpen}
        FilterFilms={FilterFilms}
        text={text}
        setText={setText}
      />
      <Main films={FilterFilms} />
    </>
  );
}

export default App;
