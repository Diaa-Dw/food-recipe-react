import React, { useEffect } from "react";
import EmpetyMessage from "./EmpetyMessage";
import { RecipeContainer } from "./styles/RecipeDescription.styled";
import Loader from "./Loder";
import RecipeDetails from "./RecipeDetails";

export default function RecipeDescription({
  selectedItem,
  recipeLoading,
  recipe,
  dispatch,
  bookmark
}) {
  /*
  const [bookmarks, setBookmarks] = useState(
    () => JSON.parse(localStorage.getItem("bookmarks")) || []
  );*/

  const isBookmarked = bookmark
    .map((bookmark) => bookmark.id)
    .includes(recipe?.id);
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmark));
  }, [bookmark]);

  console.log(bookmark);
  return (
    <RecipeContainer>
      {selectedItem === null && <EmpetyMessage />}
      {recipeLoading && <Loader />}
      {recipe && recipeLoading === false && (
        <RecipeDetails
          recipe={recipe}
          isBookmarked={isBookmarked}
          dispatch={dispatch}
        />
      )}
    </RecipeContainer>
  );
}
