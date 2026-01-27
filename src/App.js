import "./style.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import FilterWindow from "./components/FilterWindow";
function App() {
  const genres = [
    "Action",
    "Adventure",
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
    "Documentary",
    "Family",
    "War",
  ];

  const [films, setFilms] = useState([]);
  useEffect(() => {
    const film = {
      id: 1,
      title: "The Matrix",
      year: 1999,
      genre: ["action", "sci-fi"],
      rating: 8.7,
      description:
        "A computer hacker eleasra about the true thoise of reality and his seld in war againist art controllers",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnl_xckGSMoRxJYwZlFl2ohF_zS30Z-GqoA&s",
    };

    if (films.length === 0) {
      setFilms((prev) => [...prev, film]);
    }
  }, []);

  return (
    <>
      <FilterWindow genres={genres} />
      <Nav />
      <Main films={films} />
    </>
  );
}

export default App;
