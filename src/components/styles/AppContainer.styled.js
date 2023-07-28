import { styled } from "styled-components";

export const AppContainer = styled.div`
  background-image: ${(props) => props.theme.gradient};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  min-height: 100vh;
  padding: 10rem 20rem;
`;
