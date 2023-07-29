import { styled } from "styled-components";

export const BoomarkCard = styled.div`
  display: flex;
  padding: 1rem 2rem;
  gap: 2rem;
  transition: all 0.2s ease-in-out;
  .image-container {
    width: 5.5rem;
    height: 5.5rem;
    background-color: ${(props) => props.theme.gradient};
  }
  img {
    min-width: 5.5rem;
    min-height: 5.5rem;
    max-width: 5.5rem;
    max-height: 5.5rem;
    border-radius: 50%;
  }
  &:hover {
    background: ${(props) => props.theme.colorGreyLight2};
  }

  .context {
    p:first-child {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
`;
