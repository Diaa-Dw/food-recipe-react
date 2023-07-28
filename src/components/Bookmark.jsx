import React from "react";

export default function Bookmark({ recipe }) {
  return (
    <div>
      <img src={recipe.image_url} alt={recipe.title} />
      <div className="context">
        <h3>{recipe.title}</h3>
        <p>{recipe.publisher}</p>
      </div>
    </div>
  );
}
