import React, { useEffect, useReducer } from "react";
import { ContainerStyle, RecipeContainer } from "./styles/Container.styled";
import Header from "./Header";
import SearchResult from "./SearchResult";
import RecipeDescription from "./RecipeDescription";

const initialState = {
  query: "",
  status: "unactive",
  receipes: [],
  recipesCount: 0,
  selectedItem: null,
  recipeLoading: false,
  recipe: null,
  bookmark: []
};

function reducer(state, action) {
  switch (action.type) {
    case "search":
      return { ...state, query: action.payload, status: "loading" };
    case "setRecipes":
      return {
        ...state,
        status: "ready",
        receipes: action.payload.data.recipes,
        recipesCount: action.payload.results
      };
    case "selectRecipe":
      return {
        ...state,
        recipeLoading: state.selectedItem !== action.payload,
        selectedItem:
          state.selectedItem === action.payload ? null : action.payload,
        recipe: state.selectedItem === action.payload ? null : state.recipe
      };
    case "setRecipe":
      return { ...state, recipeLoading: false, recipe: action.payload };
    case "bookmark":
      return {
        ...state,
        bookmark: action.payload.isBookmarked
          ? state.bookmark.filter(
              (recipe) => recipe.id !== action.payload.newRecipe.id
            )
          : [...state.bookmark, action.payload.newRecipe]
      };
    default:
      return state;
  }
}

export default function Container({ setIsDark }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    query,
    receipes,
    status,
    selectedItem,
    recipeLoading,
    recipe,
    bookmark
  } = state;
  console.log(bookmark);

  console.log(recipe);
  useEffect(() => {
    const loadRecipe = async () => {
      if (query.length < 2) return;
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}`
      );
      const data = await res.json();
      dispatch({ type: "setRecipes", payload: data });
    };
    loadRecipe();
  }, [query]);

  useEffect(() => {
    if (selectedItem === null) return;
    const fetchRecipe = async () => {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${selectedItem}`
      );
      const { data } = await res.json();
      dispatch({ type: "setRecipe", payload: data.recipe });
    };
    fetchRecipe();
  }, [selectedItem]);
  return (
    <ContainerStyle>
      <Header dispatch={dispatch} setIsDark={setIsDark} bookmark={bookmark} />
      <RecipeContainer>
        <SearchResult
          status={status}
          receipes={receipes}
          dispatch={dispatch}
          selectedItem={selectedItem}
        />

        <RecipeDescription
          selectedItem={selectedItem}
          recipeLoading={recipeLoading}
          recipe={recipe}
          dispatch={dispatch}
          bookmark={bookmark}
        />
      </RecipeContainer>
    </ContainerStyle>
  );
}
