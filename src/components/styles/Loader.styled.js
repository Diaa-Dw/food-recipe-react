import { styled } from "styled-components";

export const LoaderContainer = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

export const LoaderStyle = styled.span`
  width: 38px;
  height: 38px;
  border: 5px solid;
  border-color: #ff3d00 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
