import React, { useState } from "react";

export default function Main({ films }) {
  const [openFilmId, setOpenFilmId] = useState(null);
  const [openingFilmId, setOpeningFilmId] = useState(null); // Для анимации открытия
  const [closingFilmId, setClosingFilmId] = useState(null); // Для анимации закрытия

  const handleOpen = (id) => {
    if (openFilmId === id) {
      // Закрытие с анимацией
      setClosingFilmId(id);
      setTimeout(() => {
        setOpenFilmId(null);
        setClosingFilmId(null);
      }, 300);
    } else if (openFilmId) {
      // Если другой фильм уже открыт - сначала закрываем его
      setClosingFilmId(openFilmId);
      setOpeningFilmId(id); // Готовим новый к открытию

      setTimeout(() => {
        setOpenFilmId(null);
        setClosingFilmId(null);
        setOpenFilmId(id);
      }, 300);
    } else {
      // Открытие нового фильма с анимацией
      setOpeningFilmId(id);
      setTimeout(() => {
        setOpenFilmId(id);
        setOpeningFilmId(null);
      }, 300);
    }
  };

  return (
    <main>
      {films.map((film) => {
        const isOpen = openFilmId === film.id;
        const isOpening = openingFilmId === film.id;
        const isClosing = closingFilmId === film.id;

        return (
          <div className="film-wrapper" key={film.id}>
            <div className="film">
              <img src={film.poster} alt="filmPoster" />
              <h3>{film.title}</h3>
              <div className="categories">
                <p>{film.year}</p>
                <p className="genres">{film.genre.join(", ")}</p>
                <p>{film.rating}</p>
              </div>

              <div className="but">
                <button onClick={() => handleOpen(film.id)}>
                  {isOpen ? "Hide" : "Show more"}
                </button>
              </div>
            </div>

            <div
              className={`
              filminfo 
              ${isOpen ? "open" : ""} 
              ${isOpening ? "opening" : ""}
              ${isClosing ? "closing" : ""}
            `}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/Union.png`}
                alt="closedbutton"
                className="closed"
                onClick={() => handleOpen(film.id)}
              />
              <img src={film.poster} alt="filmPoster" className="poster" />
              <div className="params">
                <h3>{film.title}</h3>
                <p>year: {film.year}</p>
                <p className="categ">genres: {film.genre.join(", ")}</p>
                <p>rating: {film.rating}⭐</p>
                <p className="desc">{film.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
