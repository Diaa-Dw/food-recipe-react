import { styled } from "styled-components";
import respond from "./response";
export const ContainerStyle = styled.div`
  background-color: ${(props) => props.theme.colorGreyLight1};
  width: 100%;
  min-height: 100vh;
  border-radius: 0.7rem;
  overflow: hidden;
  box-shadow: 0 1rem 1.2rem #61555149;
  max-width: 160rem;

  ${respond("tab-land")`
  border-radius: 0.0rem;
  `}
`;

export const RecipeContainer = styled.div`
  display: flex;
  ${respond("tab-port")`
    position: relative;
  `}
`;
