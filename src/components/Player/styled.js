import styled from "styled-components";

export const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 88px;
  background-color: var(--dark-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .player {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .player__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }

  .player__container__content {
    display: flex;
    align-items: center;
    max-width: 300px; 
    width: 100%;
    height: 100%;

    h2 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.6rem;
      color: var(--gray);
    }
  }

  .player__container__content__info {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .player__container__image {
    height: 56px;
    width: 56px;
    left: 16px;
    top: calc(50% - 56px / 2);
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .player__container__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      color: var(--background-color);
      font-size: 1.5rem;
      margin: 0 10px;
      width: 2rem;
      height: 2rem;

      &:hover {
        color: var(--gray);
      }

      & > svg {
        width: 100%;
        height: 100%;
        color: var(--secondary-color);
      }
    }
  }
`;
