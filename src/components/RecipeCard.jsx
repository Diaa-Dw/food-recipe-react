import React from "react";
import { Card, ContextBox } from "./styles/RecipeCard.styled";

export default function RecipeCard({
  publisher,
  title,
  img,
  isSelected,
  onRecipeClick
}) {
  return (
    <Card className={`${isSelected ? "selected" : ""}`} onClick={onRecipeClick}>
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
      <ContextBox>
        <p>{title}</p>
        <p>{publisher}</p>
      </ContextBox>
    </Card>
  );
}
