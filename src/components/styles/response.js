import { css } from "styled-components";

const respond = (breakpoint) => (styles) => {
  let mediaQuery = "";

  if (breakpoint === "phone") {
    mediaQuery = `@media only screen and (max-width: 43.75em)`;
  } else if (breakpoint === "tab-port") {
    mediaQuery = `@media only screen and (max-width: 56.25em)`;
  } else if (breakpoint === "tab-land") {
    mediaQuery = `@media only screen and (max-width: 75em)`;
  } else if (breakpoint === "normal-desktop") {
    mediaQuery = `@media only screen and (max-width: 90em)`;
  } else if (breakpoint === "big-desktop") {
    mediaQuery = `@media only screen and (min-width: 112.5em)`;
  }

  return css`
    ${mediaQuery} {
      ${styles};
    }
  `;
};
export default respond;
