import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  SearchResultContainer
} from "./styles/SearchResult.styled";
import Loader from "./Loder";
import RecipeCard from "./RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SearchResult({
  status,
  receipes,
  dispatch,
  selectedItem
}) {
  const [recipePage, setRecipePage] = useState([0, 11]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setRecipePage([0, 11]);
    setCurrentPage(1);
  }, [receipes]);
  const handleRecipeChange = (val) => {
    setCurrentPage((s) => s + val);
    setRecipePage((s) => [val === 1 ? s[1] : s[0] - 11, s[1] + 11 * val]);
  };

  const handleSelectRecipe = (id) => {
    dispatch({ type: "selectRecipe", payload: id });
  };

  return (
    <SearchResultContainer>
      <div>
        {status === "loading" ? <Loader /> : null}
        {status === "ready" &&
          receipes
            ?.slice(recipePage[0], recipePage[1])
            .map((receipe) => (
              <RecipeCard
                publisher={receipe.publisher}
                title={receipe.title}
                key={receipe.id}
                img={receipe.image_url}
                onRecipeClick={() => handleSelectRecipe(receipe.id)}
                isSelected={selectedItem === receipe.id}
              />
            ))}
        <ButtonContainer>
          {currentPage > 1 ? (
            <button
              className="btn next-btn"
              onClick={() => handleRecipeChange(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>page {currentPage - 1}</span>
            </button>
          ) : (
            <div></div>
          )}
          {receipes?.length > recipePage[1] && (
            <button
              className="btn next-btn"
              onClick={() => handleRecipeChange(1)}
            >
              <psan>page {currentPage + 1}</psan>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </ButtonContainer>
      </div>
      <footer></footer>
    </SearchResultContainer>
  );
}
