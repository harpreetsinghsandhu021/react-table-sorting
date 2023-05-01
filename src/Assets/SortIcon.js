import React from "react";

const SortIcon = ({ direction = "" }) => (
  <svg
    className={`sort-icon ${direction}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path
      className="sort-icon__triangle--top"
      d="M41,224h238c21.4,0,32.1-25.9,17-41L177,64c-9.4-9.4-24.6-9.4-33.9,0L24,183C8.9,198.1,19.6,224,41,224z"
    />
    <path
      className="sort-icon__triangle--bottom"
      d="M279,288H41c-21.4,0-32.1,25.9-17,41l119.1,119c9.3,9.4,24.5,9.4,33.9,0l119-119C311.1,313.9,300.4,288,279,288z"
    />
  </svg>
);

export default SortIcon;
