import { styled } from "styled-components";

export const IngredientContainer = styled.div`
  display: flex;
  svg {
    color: ${(props) => props.theme.colorPrimary};
    margin-right: 1rem;
    margin-top: 0.3rem;
  }
  & > span {
    margin-right: 0.5rem;
  }
`;
