import { styled } from "styled-components";

export const EmpetyMessageContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  svg {
    color: ${(props) => props.theme.colorPrimary};
    font-size: 3.6rem;
  }
  p {
    width: 50%;
    font-size: 1.6rem;
  }
`;
