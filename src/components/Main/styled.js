import styled from "styled-components";

export const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 240px;
  right: 0;
  bottom: 88px;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  overflow-y: auto;
  overflow-x: hidden;

  .main__content__ {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .main__content__cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
    }

    .main__content__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      gap: 16px;
      width: 187px;
      height: 252px;
      /* gray/50 */

      background: var(--dark-background);
      border-radius: 4px;


      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
      transition: all 0.2s ease-in-out;
    }
    .main__content__card:hover {
      filter: brightness(1.5);
    }

    .main__content__card__image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .main__content__card__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;

      h2 {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--secondary-color);
      }

      h3 {
        font-size: 0.8rem;
        color: var(--gray);
      }
    }
  }
`;
