import { styled } from "styled-components";

export const ContainerStyle = styled.div`
  background-color: ${(props) => props.theme.colorGreyLight1};
  width: 100%;
  min-height: 100vh;
  border-radius: 0.7rem;
  box-shadow: 0 1rem 1.2rem #61555149;
  overflow: hidden;
`;

export const RecipeContainer = styled.div`
  display: flex;
`;
