import { styled } from "styled-components";
import respond from "./response";

export const SearchResultContainer = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.resutBackground};
  min-height: 100vh;
  padding: 4rem 0;
  padding-bottom: 6rem;
  transition: transform 0.3s linear;
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
  ${respond("tab-port")`
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  width:100%;
  max-width:40rem;
  &.closed {
    transform: translateX(-100%);
  }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavIcon = styled.div`
  display: none;

  position: absolute;
  left: 1rem;
  top: 0rem;
  align-items: center;
  justify-content: center;
  z-index: 20;
  display: none;
  ${respond("tab-port")`
  display:flex;
  `}
  .menu {
    background-color: transparent;
    border: none;
    width: 4rem;

    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);

    display: flex;
    padding: 0;
  }
  svg {
    display: none;
    ${respond("tab-port")`
  display:block;
  `}
    height: 4rem;
  }

  .line {
    fill: none;
    stroke: ${(props) => props.theme.textColor};
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened {
    box-shadow: none;
  }
`;
