import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 4rem;
  transition: all 0.2s linear;
  cursor: pointer;
  .image-container {
    min-width: 5.5rem;
    max-width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    background-image: ${(props) => props.theme.gradient};
    display: flex;
    overflow: hidden;
    img {
      min-width: 100%;
      height: 100%;
    }
  }
  &:hover {
    background: ${(props) => props.theme.colorGreyLight1};
    transform: translateY(-0.2rem);
  }
  &.selected {
    background: ${(props) => props.theme.colorGreyLight1};
  }
`;

export const ContextBox = styled.div`
  display: flex;
  flex-direction: column;

  p:first-child {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colorPrimary};
  }
  p:last-child {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colorGreyDark2};
  }
`;
