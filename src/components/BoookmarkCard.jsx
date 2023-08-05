import React from "react";
import { BookmarkCardContainer } from "./styles/bookmarkCard.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Bookmark from "./Bookmark";
export default function BoookmarkCard({ bookmark, dispatch, setIsOpened }) {
  const handleSelectBookmark = (id) => {
    dispatch({ type: "selectRecipe", payload: id });
    setIsOpened(false);
  };
  return (
    <BookmarkCardContainer>
      {bookmark.length === 0 && (
        <div className="empety-message">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <span> No bookmarks yet. Find a nice recipe and bookmark it.</span>
        </div>
      )}

      {bookmark.length > 0 &&
        bookmark.map((recipe) => (
          <Bookmark
            recipe={recipe}
            handleSelectBookmark={handleSelectBookmark}
            key={recipe.id}
          />
        ))}
    </BookmarkCardContainer>
  );
}
