import { keyframes, styled } from "styled-components";
import respond, { response } from "./response";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colorgreyLight1};
  color: ${(props) => props.theme.textColor};
`;
export const Logo = styled.img`
  width: 4.8rem;
  margin: 2rem;

  height: 4.8rem;
`;

export const HeaderForm = styled.form`
  display: flex;
  margin: 2rem;

  width: 35%;
  input {
    width: 100%;
    background-color: #fff;
    padding: 1.4rem 2rem;
    border-radius: 5rem 0 0rem 5rem;
    border: none;
    outline: none;
    font-size: 1.4rem;
    color: #918581;

    ${respond("tab-port")`
    padding: 1rem 1rem;

  `}
  }
  ${respond("phone")`
    flex-grow:1;
  `}
`;

export const SearchButton = styled.button`
  display: flex;
  margin-left: -2rem;
  color: ${(props) => props.theme.colorGreyDark1};
  background-image: ${(props) => props.theme.gradient};
  align-items: center;
  padding: 0.7rem 3rem;
  border-radius: 5rem;
  font-weight: 600;
  gap: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${respond("tab-port")`
  gap: .5rem;

  `}
  svg {
    width: 2rem;
    height: 2rem;
    ${respond("tab-port")`
    width: 1.4rem;
    height: 1.4rem;
  `}
  }
  &:hover {
    transform: scale(1.07);
  }

  ${respond("tab-port")`
  margin-left: -2rem;
  padding: 0.2rem 1rem;
  font-size: 1.2rem;

  
  `}
`;

export const NavList = styled.nav`
  margin-right: 3rem;
  align-self: stretch;
  ${respond("tab-port")`
  margin-right: 1rem;  
  `}
  ${respond("phone")`
  position: absolute;
  overflow: hidden;
  width:100%;
  height:100%;
  z-index:25;
  transition:transform .3s linear;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
  right:-2rem;
  top:0;
  max-width:35rem;
  &.closed{
    display:none;
  transform:translateX(100%);
  

  }

  `}

  @media only screen and (max-width: 43.75em) {
    background: ${(props) => props.theme.resutBackground};
  }
  ul {
    list-style: none;
    display: flex;
    height: 100%;
    align-items: center;

    ${respond("phone")`
      flex-direction: column;
      justify-content: center;
      gap:6rem;
  `}

    button {
      outline: none;
      display: flex;
      align-items: center;
      border: none;
      font-size: 1.4rem;
      background-color: transparent;
      column-gap: 1rem;
      color: ${(props) => props.theme.colorGreyDark1};
    }
  }
  li {
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 0 2rem;
    ${respond("tab-port")`
    padding: 0 1rem;
  
  `}
    ${respond("phone")`
    height: auto;
    padding:6rem 4rem;
  `}
    svg {
      color: ${(props) => props.theme.colorPrimary};
      font-size: 1.7rem;

      ${respond("tab-port")`
      font-size: 1.4rem;
  
  `}
    }
    &:hover:not(:last-child) {
      background: ${(props) => props.theme.colorGreyLight2};
      ${respond("phone")`
      background: transparent;
  `}
    }
    &:last-child {
      display: flex;
      align-items: center;
    }
  }
  .bookmark {
    position: relative;
  }
`;

export const ModeContainer = styled.div`
  width: 5rem;
  height: 2.7rem;
  background-color: #423966;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;

  &.day {
    background-color: #ffbf71;
  }

  .sun {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    right: 0.35rem;
    transition: all 0.3s ease-in-out;
  }
  .moon {
    transition: all 0.3s ease-in-out;
    transform: translateX(-150%);
    &::before {
      content: "";
      width: 1.1rem;
      height: 1.1rem;
      background-color: #423966;
      position: absolute;
      right: -0.1rem;
      top: 0.1rem;
      border-radius: 50%;
    }
  }
`;

export const NavIcon = styled.div`
  display: none;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  z-index: 30;
  display: none;
  ${respond("phone")`
  display:flex;
  `}
  .menu {
    background-color: transparent;
    border: none;
    width: 4rem;

    height: 4rem;
    border-radius: 50%;
    cursor: pointer;

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
`;
