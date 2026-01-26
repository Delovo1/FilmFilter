import React from "react";
export default function Main({ films }) {
  return (
    <main>
      {films.map((film) => {
        return (
          <div className="film" id={film.id} key={film.id}>
            <img src={film.poster}></img>
            <h3>{film.title}</h3>
            <div className="categories">
              <p>{film.year}</p>
              <p>{film.genre.join(" ")}</p>
              <p>{film.rating}</p>
            </div>
            <p>{film.description}</p>
            <div className="but">
              <button>Подробнее</button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
// {
//   const [films, setFilms] = useState([]);
//   const film = {
//     id: 1,
//     title: "The Matrix",
//     year: 1999,
//     genre: ["action", "sci-fi"],
//     age: 16,
//     rating: 8.7,
//     poster: "https://...",
//   };
