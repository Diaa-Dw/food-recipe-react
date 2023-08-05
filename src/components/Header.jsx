import React, { useState } from "react";
import {
  HeaderForm,
  HeaderStyled,
  Logo,
  ModeContainer,
  NavIcon,
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
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenmark = (val) => {
    setIsBookmarkOpen(val);
  };

  const handleToggleTheme = () => {
    setIsDark((s) => !s);
    setToggleTheme((s) => !s);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length <= 2) return;
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
      <NavList className={isOpened ? "" : "closed"}>
        <ul>
          <li
            className="bookmark"
            onTouchStart={() => handleOpenmark(true)}
            onTouchEnd={() => handleOpenmark(false)}
            onMouseEnter={() => handleOpenmark(true)}
            onMouseLeave={() => handleOpenmark(false)}
          >
            <button>
              <FontAwesomeIcon icon={faBookmark} />
              <span>BOOKMARKS</span>
            </button>
            {isbookmarkOpen && (
              <BoookmarkCard
                setIsOpened={setIsOpened}
                onTouchStart={() => handleOpenmark(true)}
                onTouchEnd={() => handleOpenmark(false)}
                dispatch={dispatch}
                bookmark={bookmark}
              />
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
              <div className={`sun ${toggleTheme && "moon"}`}></div>
            </ModeContainer>
          </li>
        </ul>
      </NavList>

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
    </HeaderStyled>
  );
}
