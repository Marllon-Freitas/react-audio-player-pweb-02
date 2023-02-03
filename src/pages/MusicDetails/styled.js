import styled from "styled-components";

export const MusicDetailsWrapper = styled.div`
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
  overflow-y: hidden;
  overflow-x: hidden;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .content img.blur-img {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    filter: blur(51.2px);
    opacity: 0.9;
  }
`;

export const MusicDetailsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  height: 40px;
  z-index: 100;

  & > a {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 0.8rem;
    background-color: #000;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--dark-background);
    }
  }
`;

export const MusicDetailsContent = styled.div`
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  position: relative;
  margin-bottom: 1.5rem;

  .music-details__image {
    min-width: 232px;
    min-height: 232px;
    max-width: 300px;
    max-height: 300px;
    border-radius: 4px;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .music-details__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h2 {
      font-size: clamp(1.5rem, 6vw, 5rem);
      line-height: 1;
    }

    p {
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }

  .music-details__info_artist {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1.5rem;
    position: absolute;
    bottom: 0;

    img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 0.5rem;
    }

    h3 {
      font-size: 0.75rem;
    }
  }
`;

export const MusicDetailsBody = styled.div`
  padding: 1.5rem;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: 1rem;
  height: fill-available;
  background-color: var(--primary-color);
  background: linear-gradient(360deg, black, transparent);
  background-image: linear-gradient(
    to top,
    #000,
    #000,
    #000,
    #000,
    transparent
  );

  .music-details__body__info {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    align-items: flex-start;
    justify-content: flex-start;

    p {
      font-size: 1.2rem;
      color: var(--secondary-color);
    }

    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
      font-weight: 600;
    }
  }
`;
