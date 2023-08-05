import { styled } from "styled-components";
import respond from "./response";

export const RecipeContainer = styled.div`
  width: 65%;
  ${respond("tab-port")`
  width: 100%;
  `}
`;
