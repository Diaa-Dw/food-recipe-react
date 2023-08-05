import { styled } from "styled-components";
import respond from "./response";
export const AppContainer = styled.div`
  background-image: ${(props) => props.theme.gradient};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  min-height: 100vh;
  padding: 10rem 20rem;
  display: flex;
  justify-content: center;
  ${respond("normal-desktop")`
  padding:10rem;  
  `}

  ${respond("tab-land")`
  padding:0rem;  
  `}
`;
