import React from "react";
export default function FilterWindow({ genres }) {
  return (
    <div className="filt">
      <div className="genres">
        <h3>Choose your genres</h3>
        {genres.map((val, key) => {
          return (
            <p key={val}>
              <input type="checkbox" />
              {val}
            </p>
          );
        })}
      </div>
      <div className="radios">
        <div className="yearOfCreation">
          <h3>Choose year of creation(value and earler)</h3>
          <input type="range" min={1950} max={2026} step={1}></input>
        </div>
        <div className="rating">
          <h3>Choose rating(value and better)</h3>
          <input type="range" min={0} max={10} step={1}></input>
        </div>
      </div>
    </div>
  );
}
