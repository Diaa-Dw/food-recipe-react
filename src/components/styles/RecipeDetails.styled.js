import { styled } from "styled-components";
import respond from "./response";

export const RecipeDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .title {
    text-align: center;
    color: ${(props) => props.theme.colorPrimary};
  }

  .food-image {
    background-image: ${(props) => props.theme.gradient2},
      url(${(props) => props.image});
    width: 100%;
    height: 30rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  h2 {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -70%) skewY(-6deg);
    color: #fff;
    font-weight: 700;
    font-size: 3rem;
    text-transform: uppercase;
    width: 50%;
    line-height: 1.95;
    text-align: center;

    ${respond("tab-port")`
    font-size:1.8rem;
    line-height: 2.2;

  `}
  }
  h2 span {
    background: ${(props) => props.theme.gradient};
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    padding: 1.3rem 2rem;
  }

  .nav-list {
    padding: 8rem 6rem 8rem 6rem;
    background-color: ${(props) => props.theme.resutBackground};

    ${respond("phone")`
    padding: 6rem 1rem 6rem 1rem;
    `}

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
    li {
      display: flex;
      gap: 1rem;
      align-items: center;
      svg {
        color: ${(props) => props.theme.colorPrimary};
        font-size: 2rem;
      }

      .plus-minus-container {
        display: flex;
        gap: 0.5rem;
      }

      button {
        width: 4rem;
        height: 4rem;
        display: flex;
        border: none;
        outline: none;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colorPrimary};
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
        svg {
          color: #fff;
        }
      }
    }
  }

  .how-to-cook {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.resutBackground};
    .paragraph {
      text-align: center;
      color: ${(props) => props.theme.colorGreyDark1};
      padding: 4rem;
    }

    .btn {
      background-image: ${(props) => props.theme.gradient};
      border: none;
      border-radius: 5rem;
      padding: 1.2rem 3rem;
      color: #fff;
      display: flex;
      text-decoration: none;
      align-self: center;
      align-items: center;
      gap: 1rem;
      font-weight: 500;
    }
  }
  .ing-btn {
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-0.2rem);
    }
  }
`;

export const RecipeIngredient = styled.div`
  padding: 6rem;

  .ingredients-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 4rem 0;
  }
  .ingredients-container > div {
    flex: 45%;
    ${respond("phone")`
    flex:100%;
    `}
  }
`;
