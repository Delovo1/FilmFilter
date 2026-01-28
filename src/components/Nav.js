import React from "react";
export default function Nav({ open, setOpen, text, setText }) {
  return (
    <nav>
      <input
        placeholder="Enter some film"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/image.png`}
        alt="filter"
        onClick={() => setOpen(!open)}
      />
    </nav>
  );
}
