import React from "react";
export default function Nav() {
  return (
    <nav>
      <input placeholder="Enter some film" />
      <img src={`${process.env.PUBLIC_URL}/images/image.png`} alt="filter" />
    </nav>
  );
}
