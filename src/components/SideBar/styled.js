import styled from "styled-components";

export const SideBarWrapper = styled.div`
position: absolute;
width: 240px;
left: 0px;
top: 0px;
bottom: 88px;
background: #000;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1.5rem;

.logo {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
  img {
    height: 100%;
  }
  }

  .menu {
    width: 100%;
    display: flex;
    margin-bottom: 1.5rem;
  }
  ul {
    width: 100%;
    list-style: none;
    li {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 10px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: var(--dark-background);
        border-radius: 4px;
      }

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: var(--secondary-color);
        font-size: 0.8rem;
        font-weight: 500;
        padding-left: 10px;
        svg {
          margin-right: 10px;
        }

        span {
          font-size: 0.8rem;
        }
    }
  }
}

  .playlist {
    width: 100%;
    display: flex;
  }

  .divisor {
    width: 100%;
    height: 0.5px;
    background: var(--gray);
    filter: brightness(0.3);
  }
`;
