import React, { useState } from "react";
import {
  HeaderForm,
  HeaderStyled,
  Logo,
  ModeContainer,
  NavList,
  SearchButton
} from "./styles/Header.styled";
import logo from "../assets/logo.png";
import darkLogo from "../assets/dark-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import BoookmarkCard from "./BoookmarkCard";

export default function Header({ dispatch, setIsDark, bookmark, isDark }) {
  const [search, setSearch] = useState("");
  const [toggleTheme, setToggleTheme] = useState(false);
  const [isbookmarkOpen, setIsBookmarkOpen] = useState(false);

  const handleOpenmark = (val) => {
    setIsBookmarkOpen(val);
  };

  const handleToggleTheme = () => {
    setIsDark((s) => !s);
    setToggleTheme((s) => !s);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "search", payload: search });
    setSearch("");
  };
  return (
    <HeaderStyled>
      <Logo src={isDark ? darkLogo : logo} alt="logo" />
      <HeaderForm onSubmit={(e) => handleSearch(e)}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search over 1,000,000 recipes..."
        />
        <SearchButton type="sybmit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>SEARCH</span>
        </SearchButton>
      </HeaderForm>
      <NavList>
        <ul>
          <li
            className="bookmark"
            onMouseEnter={() => handleOpenmark(true)}
            onMouseLeave={() => handleOpenmark(false)}
          >
            <button>
              <FontAwesomeIcon icon={faBookmark} />
              <span>BOOKMARKS</span>
            </button>
            {isbookmarkOpen && (
              <BoookmarkCard dispatch={dispatch} bookmark={bookmark} />
            )}
          </li>

          <li>
            <button>
              <FontAwesomeIcon icon={faUser} />
              <span>LOGIN</span>
            </button>
          </li>

          <li>
            <ModeContainer
              className={`${!toggleTheme && "day"}`}
              onClick={handleToggleTheme}
            >
              <div class={`sun ${toggleTheme && "moon"}`}></div>
            </ModeContainer>
          </li>
        </ul>
      </NavList>
    </HeaderStyled>
  );
}
