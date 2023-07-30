import React, { useReducer } from "react";
import { Fraction } from "fractional";
import {
  RecipeDetailsContainer,
  RecipeIngredient
} from "./styles/RecipeDetails.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faCirclePlus,
  faCircleMinus,
  faBookmark,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBokmark1 } from "@fortawesome/free-regular-svg-icons";
import Ingredient from "./Ingredient";

function reducer(state, action) {
  switch (action.type) {
    case "servings":
      return {
        ...state,
        servings: state.servings + action.payload,
        ingredients: state.ingredients.map((ing) => ({
          ...ing,
          quantity:
            (ing.quantity * (state.servings + action.payload)) / state.servings
        }))
      };

    default:
      return state;
  }
}

export default function RecipeDetails({
  recipe,
  setBookmarks,
  isBookmarked,
  dispatch
}) {
  const intialState = {
    servings: recipe.servings,
    ingredients: recipe.ingredients
  };
  const [state, dispatch2] = useReducer(reducer, intialState);
  const { servings, ingredients } = state;
  console.log(ingredients);
  const handleAddToBookmark = (newRecipe) => {
    dispatch({
      type: "bookmark",
      payload: { newRecipe: newRecipe, isBookmarked: isBookmarked }
    });
  };

  const handleServingChange = (val) => {
    if (servings === 1 && val === -1) return;
    dispatch2({ type: "servings", payload: val });
  };

  return (
    <RecipeDetailsContainer image={recipe.image_url}>
      <div className="food-image"></div>
      <h2>
        <span>{recipe.title}</span>
      </h2>
      <nav className="nav-list">
        <ul>
          <li className="nav-item">
            <FontAwesomeIcon icon={faClock} />
            <span>
              <strong>{recipe.cooking_time}</strong> MINUTES
            </span>
          </li>

          <li className="nav-item">
            <FontAwesomeIcon icon={faUser} />
            <span>
              <strong>{servings}</strong> SERVINGS
            </span>
            <div className="plus-minus-container">
              <FontAwesomeIcon
                icon={faCircleMinus}
                className="ing-btn"
                onClick={() => handleServingChange(-1)}
              />

              <FontAwesomeIcon
                icon={faCirclePlus}
                className="ing-btn"
                onClick={() => handleServingChange(1)}
              />
            </div>
          </li>

          <li className="nav-item">
            <span></span>
          </li>

          <li className="nav-item">
            <button onClick={() => handleAddToBookmark(recipe)}>
              <FontAwesomeIcon icon={isBookmarked ? faBookmark : faBokmark1} />
            </button>
          </li>
        </ul>
      </nav>
      <RecipeIngredient>
        <div className="title">
          <h3>RECIPE INGREDIENTS</h3>
        </div>

        <div className="ingredients-container">
          {ingredients?.map((ingredient) => (
            <Ingredient
              description={ingredient.description}
              unit={ingredient.unit}
              quantity={
                ingredient.quantity === 0 || ingredient.quantity === null
                  ? ""
                  : new Fraction(ingredient.quantity).toString()
              }
            />
          ))}
        </div>
      </RecipeIngredient>
      <div className="how-to-cook">
        <div className="title">
          <h3>HOW TO COOK IT</h3>
        </div>
        <p className="paragraph">
          This recipe was carefully designed and tested{" "}
          <strong>{recipe.publisher}</strong>. Please check out directions at
          their website.
        </p>
        <a
          href="http://www.closetcooking.com/2011/03/pizza-dip.html"
          target="_blank"
          className="btn"
          rel="noreferrer"
        >
          <span>DIRECTIONS</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </RecipeDetailsContainer>
  );
}
