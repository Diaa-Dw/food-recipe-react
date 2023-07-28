import { styled } from "styled-components";

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
  }
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
  svg {
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    transform: scale(1.07);
  }
`;

export const NavList = styled.nav`
  margin-right: 3rem;
  align-self: stretch;
  ul {
    list-style: none;
    display: flex;
    height: 100%;
    align-items: center;

    button {
      outline: none;
      display: flex;
      align-items: center;
      border: none;
      font-size: 1.4rem;
      background-color: transparent;
      gap: 1rem;
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
    svg {
      color: ${(props) => props.theme.colorPrimary};
      font-size: 1.7rem;
    }
    &:hover:not(:last-child) {
      background: ${(props) => props.theme.colorGreyLight2};
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
