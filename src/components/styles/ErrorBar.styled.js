import { styled } from "styled-components";

export const Alert = styled.div`
  min-height: 67px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f2a600;
  padding: 0 1rem;
  position: relative;

  p {
    color: #fff;
    font-family: Verdana;
    margin-left: 10px;
  }

  p a,
  p a:visited,
  p a:active {
    color: #fff;
  }
  .open {
    margin-left: auto;
    margin-right: 5px;
  }
  .close,
  .open {
    color: #fff;
    transition: transform 0.5s;
    font-size: 18px;
    cursor: pointer;
  }
  .close:hover,
  .open:hover {
    transform: scale(1.3);
  }

  .icon__wrapper {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.253);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon__wrapper span {
    font-size: 21px;
    color: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 5px;
    left: -1rem;
    animation: alertAnimation 8s forwards linear;
    transform-origin: left;
    background-color: #fff;
    width: 100%;
  }
  @keyframes alertAnimation {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;
