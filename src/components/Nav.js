import React from "react";

export default function Nav({
  open,
  setOpen,
  filters,
  updateFilter,
  del,
  setDel,
}) {
  return (
    <nav>
      <input
        placeholder="Enter some film"
        value={filters.text}
        onChange={(e) => updateFilter("text", e.target.value)}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/image.png`}
        alt="filter"
        onClick={() => {
          if (open) {
            setTimeout(() => setOpen(!open), 500);
            setDel(true);
            return;
          }
          setDel(false);
          setOpen(!open);
        }}
      />
    </nav>
  );
}
