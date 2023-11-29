import React from "react";
import { BoomarkCard } from "./styles/bookmark.styled";

export default function Bookmark({ recipe, handleSelectBookmark }) {
  if (recipe.title.length > 30)
    recipe.title = recipe.title.slice(0, 30) + "...";

  return (
    <BoomarkCard onClick={() => handleSelectBookmark(recipe.id)}>
      <div className="image-container">
        <img src={recipe.image_url} alt={recipe.title} />
      </div>
      <div className="context">
        <p>{recipe.title}</p>
        <p>{recipe.publisher}</p>
      </div>
    </BoomarkCard>
  );
}
