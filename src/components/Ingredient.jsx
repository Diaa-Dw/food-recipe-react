import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IngredientContainer } from "./styles/ingredent.styled";
export default function Ingredient({ description, unit, quantity }) {
  return (
    <IngredientContainer>
      <FontAwesomeIcon icon={faCheck} />
      <p className="quanitiy">{quantity} </p>
      <p>{unit} </p>
      <p>{description}</p>
    </IngredientContainer>
  );
}
