import { styled } from "styled-components";

export const BookmarkCardContainer = styled.div`
  position: absolute;
  left: 0;
  top: 8rem;
  width: 40rem;
  height: 15rem;
  max-height: 20rem;
  background-color: ${(props) => props.theme.resutBackground};
  z-index: 10;
  box-shadow: 0 0.3rem 0.5rem #0003;
  border-radius: 0.5rem;
  padding: 2rem;

  .empety-message {
    display: flex;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;
