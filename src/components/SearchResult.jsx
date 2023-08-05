import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  NavIcon,
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
  const [isOpened, setIsOpened] = useState(false);
  console.log(receipes);

  useEffect(() => {
    setRecipePage([0, 11]);
    setCurrentPage(1);
  }, [receipes]);
  const handleRecipeChange = (val) => {
    setCurrentPage((s) => s + val);
    setRecipePage((s) => [val === 1 ? s[1] : s[0] - 11, s[1] + 11 * val]);
  };

  useEffect(() => {
    setIsOpened(true);
  }, [receipes]);

  const handleSelectRecipe = (id) => {
    dispatch({ type: "selectRecipe", payload: id });
    setIsOpened(false);
  };

  return (
    <>
      <NavIcon>
        <button
          onClick={() => setIsOpened((s) => !s)}
          className={`menu  ${isOpened ? "opened" : ""}`}
          aria-label="Main Menu"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </NavIcon>
      <SearchResultContainer className={!isOpened ? "closed" : ""}>
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
                <span>page {currentPage + 1}</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )}
          </ButtonContainer>
        </div>
        <footer></footer>
      </SearchResultContainer>
    </>
  );
}
