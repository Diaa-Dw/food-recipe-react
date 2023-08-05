import { styled } from "styled-components";
import respond from "./response";

export const BookmarkCardContainer = styled.div`
  position: absolute;
  left: 0;
  top: 8rem;
  width: 38.2rem;
  overflow-y: scroll;
  max-height: 20rem;
  background-color: ${(props) => props.theme.resutBackground};
  z-index: 10;
  box-shadow: 0 0.3rem 0.5rem #0003;
  border-radius: 0.5rem;
  padding: 2rem 0;

  ${respond("phone")`
  left: -8rem;
  top: 8rem;
  width: 38.2rem;
  `}

  .empety-message {
    display: flex;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;
