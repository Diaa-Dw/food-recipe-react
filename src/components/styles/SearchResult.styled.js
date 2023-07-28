import { styled } from "styled-components";

export const SearchResultContainer = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.resutBackground};
  min-height: 100vh;
  padding: 4rem 0;
  padding-bottom: 6rem;
  .btn {
    padding: 1rem 2rem;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    margin-right: 4rem;
    border-radius: 5rem;
    outline: none;
    transition: background 0.3s ease-in-out;
    background-color: ${(props) => props.theme.colorGreyLight1};
    color: ${(props) => props.theme.colorPrimary};
    &:hover {
      background-color: ${(props) => props.theme.colorGreyLight2};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
