import React, { useEffect, useReducer } from "react";
import { ContainerStyle, RecipeContainer } from "./styles/Container.styled";
import Header from "./Header";
import SearchResult from "./SearchResult";
import RecipeDescription from "./RecipeDescription";
import ErrorBar from "./ErrorBar";
import { Toaster } from "react-hot-toast";

const initialState = {
  query: "",
  status: "unactive",
  receipes: [],
  recipesCount: 0,
  selectedItem: null,
  recipeLoading: false,
  recipe: null,
  bookmark: JSON.parse(localStorage.getItem("bookmarks")) || [],
  error: null,
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
        recipesCount: action.payload.results,
        error:
          action.payload.data.recipes.length === 0 && state.query !== ""
            ? "Sorry, no suitable recipe found. attempt new keywords."
            : null,
      };
    case "selectRecipe":
      return {
        ...state,
        recipeLoading: state.selectedItem !== action.payload,
        selectedItem:
          state.selectedItem === action.payload ? null : action.payload,
        recipe: state.selectedItem === action.payload ? null : state.recipe,
      };
    case "setRecipe":
      return { ...state, recipeLoading: false, recipe: action.payload };
    case "setError":
      return { ...state, isLoading: false, error: action.payload };
    case "bookmark":
      return {
        ...state,
        bookmark: action.payload.isBookmarked
          ? state.bookmark.filter(
              (recipe) => recipe.id !== action.payload.newRecipe.id
            )
          : [...state.bookmark, action.payload.newRecipe],
      };
    case "resetError":
      return { ...state, error: null };
    default:
      return state;
  }
}

export default function Container({ setIsDark, isDark }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    query,
    receipes,
    status,
    selectedItem,
    recipeLoading,
    recipe,
    bookmark,
    error,
  } = state;

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const fetchPromise = fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}`
        );

        const timeoutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Fetch took too long (more than 1 minute)."));
          }, 19000);
        });

        const res = await Promise.race([fetchPromise, timeoutPromise]);
        if (!res.ok) throw new Error("somthing went wrong while fetching data");

        const data = await res.json();
        dispatch({ type: "setRecipes", payload: data });
      } catch (err) {
        dispatch({ type: "setError", payload: err.message });
      }
    };
    loadRecipe();
  }, [query]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmark));
  }, [bookmark]);

  useEffect(() => {
    if (selectedItem === null) return;
    const fetchRecipe = async () => {
      try {
        const fetchPromise = fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${selectedItem}`
        );
        const timeoutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Fetch took too long (more than 1 minute)."));
          }, 10000);
        });
        const res = await Promise.race([fetchPromise, timeoutPromise]);

        if (!res.ok) throw new Error("somthing went wrong while fetching data");
        const { data } = await res.json();
        dispatch({ type: "setRecipe", payload: data.recipe });
      } catch (err) {
        dispatch({ type: "setError", payload: err.message });
      }
    };
    fetchRecipe();
  }, [selectedItem]);
  return (
    <ContainerStyle>
      {error !== null ? (
        <ErrorBar isDark={isDark} dispatch={dispatch} message={error} />
      ) : null}

      <Header
        dispatch={dispatch}
        setIsDark={setIsDark}
        bookmark={bookmark}
        isDark={isDark}
      />
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

      <Toaster position="top-right" reverseOrder={false} />
    </ContainerStyle>
  );
}
